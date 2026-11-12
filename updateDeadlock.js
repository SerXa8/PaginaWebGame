/**
 * updateDeadlock.js
 * Genera los snapshots locales de Deadlock desde deadlock-api.com.
 *
 * Uso: node updateDeadlock.js
 *
 * Salidas:
 *  - data/deadlockHeroesData.js
 *  - data/deadlockItemsData.js
 *
 * La web nunca llama a la API en tiempo de ejecución: lee estos archivos.
 */

const fs = require('fs');
const path = require('path');

const API = 'https://api.deadlock-api.com';
const DATA_DIR = path.join(__dirname, 'data');

const SLOT_LABELS = {
  weapon: 'Arma',
  vitality: 'Vitalidad',
  spirit: 'Espíritu'
};

const TYPE_LABELS = {
  brawler: 'Tanque / Bruiser',
  mystic: 'Místico',
  marksman: 'Tirador',
  assassin: 'Asesino'
};

function plainText(html) {
  if (!html) return '';
  return String(html)
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<img[^>]*>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanDescription(desc) {
  if (!desc) return '';
  if (typeof desc === 'string') return plainText(desc);
  const parts = [];
  if (desc.desc) parts.push(desc.desc);
  if (desc.passive) parts.push(desc.passive);
  if (desc.active) parts.push(desc.active);
  return plainText(parts.join(' '));
}

function itemStatLines(item) {
  const keys = new Set();
  for (const section of item.tooltip_sections || []) {
    for (const attr of section.section_attributes || []) {
      for (const k of attr.properties || []) keys.add(k);
      for (const k of attr.important_properties || []) keys.add(k);
      for (const k of attr.elevated_properties || []) keys.add(k);
    }
  }

  const lines = [];
  const seen = new Set();
  for (const key of keys) {
    const prop = (item.properties || {})[key];
    if (!prop) continue;
    const label = prop.label || prop.postvalue_label;
    if (!label || seen.has(label)) continue;

    let value = prop.value;
    if (value === undefined || value === null || value === '') continue;
    if (value === 0 || value === '0' || value === -1 || value === '-1') continue;

    let text = String(value);
    const negative = text.startsWith('-');
    if (!negative && /^[0-9.]+$/.test(text) && !/cooldown|delay|duration|channel|cast|range|charges|recarga|enfriamiento|retraso|duración|alcance|cargas/i.test(label)) {
      text = '+' + text;
    }
    text = (text + ' ' + (prop.postfix || '')).replace(/\s+%/g, '%').trim();

    lines.push({ label, value: text });
    seen.add(label);
    if (lines.length >= 6) break;
  }
  return lines;
}

function abilitySummary(ability, itemsByClassEn, itemsByClassEs) {
  if (!ability) return [];
  return ['signature1', 'signature2', 'signature3', 'signature4']
    .map((key, index) => {
      const className = ability[key];
      const itemEn = className ? itemsByClassEn.get(className) : null;
      const itemEs = className ? itemsByClassEs.get(className) : null;
      if (!itemEn && !itemEs) return null;

      const localized = itemEs || itemEn;
      const cooldown = localized.properties && localized.properties.AbilityCooldown
        ? parseFloat(localized.properties.AbilityCooldown.value)
        : null;

      const upgrades = [1, 2, 3]
        .map((tier) => {
          const text = localized.description && localized.description[`t${tier}_desc`];
          return text ? { tier, text: plainText(text) } : null;
        })
        .filter(Boolean);

      return {
        slot: index + 1,
        name: (itemEn || localized).name,
        className: localized.class_name,
        description:
          cleanDescription(localized.description) ||
          plainText(localized.description && localized.description.quip) ||
          '',
        upgrades,
        image: localized.image_webp || localized.image || '',
        cooldown: Number.isFinite(cooldown) && cooldown > 0 ? cooldown : null
      };
    })
    .filter(Boolean);
}

function heroStats(hero) {
  const stats = hero.starting_stats || {};
  const rows = [
    ['max_health', 'Salud'],
    ['max_move_speed', 'Velocidad'],
    ['sprint_speed', 'Sprint'],
    ['stamina', 'Aguante'],
    ['light_melee_damage', 'Melee ligero'],
    ['heavy_melee_damage', 'Melee pesado'],
    ['base_health_regen', 'Regen. salud']
  ];

  return rows
    .map(([key, label]) => {
      const value = stats[key] && stats[key].value;
      if (value === undefined || value === null) return null;
      return { label, value: String(value) };
    })
    .filter(Boolean);
}

function popularItems(hero, itemsById) {
  const source = hero.popular_items || {};
  const mapPhase = (list) =>
    (list || [])
      .map((entry) => {
        const item = itemsById.get(entry.item_id);
        if (!item) return null;
        return {
          id: item.id,
          name: item.name,
          image: item.shop_image_webp || item.image_webp || item.image || '',
          slot: item.item_slot_type || '',
          tier: item.item_tier || 0,
          cost: item.cost || 0,
          pickPct: Math.round((entry.pick_pct || 0) * 10) / 10,
          winratePct: Math.round((entry.winrate_pct || 0) * 10) / 10
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.pickPct - a.pickPct)
      .slice(0, 6);

  return {
    early: mapPhase(source.early_game),
    mid: mapPhase(source.mid_game),
    late: mapPhase(source.late_game)
  };
}

async function getJSON(endpoint) {
  const response = await fetch(API + endpoint, {
    headers: { 'User-Agent': 'SoloQChallenge/1.0 (+https://github.com/)' }
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} en ${endpoint}`);
  }
  return response.json();
}

async function main() {
  console.log('Descargando datos de Deadlock API...');
  const [heroesEn, heroesEs, itemsEn, itemsEs, heroStatsRows] = await Promise.all([
    getJSON('/v1/assets/heroes?language=english'),
    getJSON('/v1/assets/heroes?language=spanish'),
    getJSON('/v1/assets/items?language=english'),
    getJSON('/v1/assets/items?language=spanish'),
    getJSON('/v1/analytics/hero-stats')
  ]);

  const heroesEsById = new Map(heroesEs.map((hero) => [hero.id, hero]));
  const itemsById = new Map(itemsEn.map((item) => [item.id, item]));
  const itemsByClassEn = new Map(itemsEn.map((item) => [item.class_name, item]));
  const itemsByClassEs = new Map(itemsEs.map((item) => [item.class_name, item]));
  const itemsEsById = new Map(itemsEs.map((item) => [item.id, item]));

  const statsByHero = new Map();
  const statsTotalPicks = heroStatsRows.reduce((sum, row) => sum + (row.matches || 0), 0);
  for (const row of heroStatsRows) {
    const decided = (row.wins || 0) + (row.losses || 0);
    statsByHero.set(row.hero_id, {
      winrate: decided > 0 ? Math.round(((row.wins / decided) * 100) * 10) / 10 : null,
      pickrate: statsTotalPicks > 0 ? Math.round(((row.matches / statsTotalPicks) * 100) * 10) / 10 : null,
      matches: row.matches || 0
    });
  }

  const playableHeroes = heroesEn
    .filter((hero) => hero.player_selectable && !hero.disabled && hero.development_state === 'release')
    .sort((a, b) => a.name.localeCompare(b.name));

  const heroOutput = playableHeroes.map((hero) => {
    const heroEs = heroesEsById.get(hero.id) || hero;
    const description = heroEs.description || hero.description || {};
    const stats = statsByHero.get(hero.id) || {};
    return {
      id: hero.id,
      name: hero.name,
      className: hero.class_name,
      type: hero.hero_type || 'unknown',
      typeLabel: TYPE_LABELS[hero.hero_type] || 'Versátil',
      complexity: hero.complexity || 1,
      image: (hero.images && (hero.images.icon_hero_card_webp || hero.images.icon_hero_card)) || '',
      smallImage: (hero.images && (hero.images.icon_image_small_webp || hero.images.icon_image_small)) || '',
      background: (hero.images && (hero.images.background_image_webp || hero.images.background_image)) || '',
      tags: hero.tags || [],
      gunTag: hero.gun_tag || '',
      role: description.role || '',
      playstyle: description.playstyle || '',
      lore: plainText(description.lore),
      stats: heroStats(hero),
      abilities: abilitySummary(hero.items, itemsByClassEn, itemsByClassEs),
      popularItems: popularItems(hero, itemsById),
      winrate: stats.winrate !== undefined ? stats.winrate : null,
      pickrate: stats.pickrate !== undefined ? stats.pickrate : null,
      matches: stats.matches || 0
    };
  });

  const shopItems = itemsEn
    .filter((item) => item.type === 'upgrade' && item.shopable && item.item_tier >= 1 && item.item_tier <= 4)
    .map((item) => {
      const localized = itemsEsById.get(item.id) || item;
      return {
        id: item.id,
        name: item.name,
        className: item.class_name,
        slot: item.item_slot_type,
        slotLabel: SLOT_LABELS[item.item_slot_type] || item.item_slot_type,
        tier: item.item_tier,
        cost: item.cost || 0,
        image: item.shop_image_webp || item.image_webp || item.image || '',
        description: cleanDescription(localized.description),
        stats: itemStatLines(localized),
        active: Boolean(item.is_active_item)
      };
    })
    .sort((a, b) => a.slot.localeCompare(b.slot) || a.tier - b.tier || a.cost - b.cost || a.name.localeCompare(b.name));

  const updatedAt = new Date().toISOString();
  const header = `// Generado automáticamente por updateDeadlock.js el ${updatedAt}\n// Fuente: https://deadlock-api.com (proyecto no oficial)\n`;

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(DATA_DIR, 'deadlockHeroesData.js'),
    `${header}const deadlockHeroesData = ${JSON.stringify({
      updatedAt,
      source: 'https://deadlock-api.com',
      heroCount: heroOutput.length,
      heroes: heroOutput
    }, null, 2)};\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.join(DATA_DIR, 'deadlockItemsData.js'),
    `${header}const deadlockItemsData = ${JSON.stringify({
      updatedAt,
      source: 'https://deadlock-api.com',
      itemCount: shopItems.length,
      items: shopItems
    }, null, 2)};\n`,
    'utf8'
  );

  console.log(`OK: ${heroOutput.length} héroes y ${shopItems.length} objetos guardados.`);
}

main().catch((error) => {
  console.error('Error generando los datos de Deadlock:', error);
  process.exit(1);
});
