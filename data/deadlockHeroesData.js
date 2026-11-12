// Generado automáticamente por updateDeadlock.js el 2026-11-12T15:13:41.261Z
// Fuente: https://deadlock-api.com (proyecto no oficial)
const deadlockHeroesData = {
  "updatedAt": "2026-11-12T15:13:41.261Z",
  "source": "https://deadlock-api.com",
  "heroCount": 44,
  "heroes": [
    {
      "id": 6,
      "name": "Abrams",
      "className": "hero_atlas",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bull_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/abrams_bg.webp",
      "tags": [
        "Tank",
        "Brawler",
        "Bull-Headed"
      ],
      "gunTag": "Shotgun",
      "role": "Se lanza al combate cuerpo a cuerpo",
      "playstyle": "Abrams tiene el peso y el sustento necesarios para liderar desde el frente, y a menudo embiste contra sus enemigos para dispersarlos. Si sus adversarios desperdician su munición contra él, sus compañeros de retaguardia pueden infligir daño con total impunidad.",
      "lore": "Duro de pelar, testarudo y bebedor empedernido; el detective Abrams ha sido un elemento clave en el panorama de investigación de Nueva York durante años. Desde obras de arte robadas hasta personas desaparecidas y asesinatos rituales, Abrams no se limitaba a aceptar cualquier caso que llegase a su escritorio, sino que lo resolvía. Pero sus días de perseguir a cónyuges infieles llegaron a su fin el día en que abrió la puerta de su oficina y encontró El Tomo en su escritorio. No le dejaron instrucciones, salvo una breve nota garabateada con sangre de ónice que decía: «No permitas que se hagan con él». Abrams no sabe de dónde salió el objeto, pero como han entrado en su casa, ha encontrado su oficina patas arriba en tres ocasiones diferentes y han hecho estallar su coche, tiene un gran interés en averiguar qué diablos está pasando.",
      "stats": [
        {
          "label": "Salud",
          "value": "800"
        },
        {
          "label": "Velocidad",
          "value": "6.4"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Siphon Life",
          "className": "citadel_ability_bull_heal",
          "description": "Drena vida a los enemigos cercanos para infligir daño espiritual a lo largo del tiempo y convertir parte del daño infligido en curación.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+2 m de radio y +22.0 de DPS con escalado espiritual mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_drain.webp",
          "cooldown": 42
        },
        {
          "slot": 2,
          "name": "Shoulder Charge",
          "className": "citadel_ability_bull_charge",
          "description": "Embiste hacia adelante, arrastrando a los enemigos a los que alcances. Empujar a un héroe contra un muro aplica aturdimiento. Si chocas contra un héroe, te mueves más rápido durante la embestida.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Aplica +32.0 % de ralentización durante 3 s"
            },
            {
              "tier": 2,
              "text": "Al empujar contra un muro: +0.8 s de aturdimiento"
            },
            {
              "tier": 3,
              "text": "-18 s de tiempo de recarga Al chocar contra un héroe: +1.5 de daño del arma durante 6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_charge.webp",
          "cooldown": 33
        },
        {
          "slot": 3,
          "name": "Infernal Resilience",
          "className": "citadel_ability_passive_beefy",
          "description": "Obtén atributos defensivos adicionales. Recibir daño otorga temporalmente regeneración a cambio de una parte del daño recibido.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+20 % de resistencia a desventajas y +9 % de daño regenerado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_beef.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Seismic Impact",
          "className": "citadel_ability_bull_leap",
          "description": "Pega un gran salto en el aire antes de chocar contra el suelo, lo que inflige daño espiritual y aplica aturdimiento.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Al lanzarla, te vuelves imparable durante 5 s y el radio de impacto aumenta 6 m"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bull_jump.webp",
          "cooldown": 215
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 68.4,
            "winratePct": 52.5
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.4,
            "winratePct": 52.1
          },
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 57.2,
            "winratePct": 53
          },
          {
            "id": 26002154,
            "name": "Melee Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.6,
            "winratePct": 56.7
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 26.9,
            "winratePct": 51.8
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 26.3,
            "winratePct": 53
          }
        ],
        "mid": [
          {
            "id": 26002154,
            "name": "Melee Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 55.8,
            "winratePct": 51.1
          },
          {
            "id": 2971868509,
            "name": "Bullet Resist Shredder",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.1,
            "winratePct": 53.5
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29,
            "winratePct": 51.7
          },
          {
            "id": 1252627263,
            "name": "Lifestrike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.3,
            "winratePct": 55.5
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.2,
            "winratePct": 57.1
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 25.4,
            "winratePct": 53.6
          }
        ],
        "late": [
          {
            "id": 800008313,
            "name": "Crushing Fists",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 52.5,
            "winratePct": 56.4
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48,
            "winratePct": 54.5
          },
          {
            "id": 1371725689,
            "name": "Phantom Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 32.6,
            "winratePct": 58.9
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.6,
            "winratePct": 52.2
          },
          {
            "id": 2095565695,
            "name": "Point Blank",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.4,
            "winratePct": 52.6
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.1,
            "winratePct": 51.8
          }
        ]
      },
      "winrate": 52,
      "pickrate": 2.6,
      "matches": 1900644
    },
    {
      "id": 77,
      "name": "Apollo",
      "className": "hero_fencer",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/fencer_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/fencer_bg.webp",
      "tags": [
        "Finesse",
        "Mobility",
        "A Cut Above"
      ],
      "gunTag": "Spreadshot",
      "role": "",
      "playstyle": "",
      "lore": "En el norte de Ixia, tierra de belleza, tradición y conflicto, los actos brutales de violencia política son habituales. Por eso, cuando Apolo se enteró de que se tenía que ir a estudiar a Nueva York por razones de seguridad, sabía que la situación era grave. No le fue fácil adaptarse a la vida de la Academia Blackmore. Se suponía que la escuela estaría llena de las mentes más prodigiosas de la Manzana Maldita, pero lo único que vio, con unas pocas excepciones, fue una mediocridad insultante. Decidió no perder el tiempo con frivolidades como fiestas y bailes y, en lugar de eso, dedicó su energía a la pista, donde entrena rigurosamente como capitán del equipo de esgrima de Blackmore. De todas formas, Apolo no se preocupa demasiado por la monotonía de la vida en Nueva York, y sabe que algún día llegará el momento en que su padre lo llamará para que vuelva a casa y podrá demostrar que es digno de empuñar la espada ancestral de su familia.",
      "stats": [
        {
          "label": "Salud",
          "value": "770"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "63"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Disengaging Sigil",
          "className": "ability_fencer_throwblade",
          "description": "Dibuja un emblema frente a ti y luego salta hacia atrás mientras explota, infligiendo daño y ralentizando a los enemigos que se vean atrapados en él.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Obtienes +25 % de cadencia de tiro y +25 % de velocidad de las balas durante 8 s"
            },
            {
              "tier": 2,
              "text": "Restaura +1 de aguante y restablece el límite de saltos e impulsos en el aire al impactar en un jugador"
            },
            {
              "tier": 3,
              "text": "Se puede volver a lanzar en 4 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_sigil.webp",
          "cooldown": 12
        },
        {
          "slot": 2,
          "name": "Riposte",
          "className": "ability_fencer_riposte",
          "description": "Prepare to deflect the next incoming attack. On a successful deflection, briefly become invulnerable and target an enemy hero to dash towards them, immobilizing and disarming them, preventing them from parrying, and reducing their Melee Resist. Press Habilidad 2 to select a target. Does not trigger against trooper or neutral damage.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-25 % de resistencia cuerpo a cuerpo y +0.7 s de inmovilización"
            },
            {
              "tier": 3,
              "text": "Obtienes un 75 % de robo de vida balístico, espiritual y cuerpo a cuerpo contra el objetivo de Contrataque durante 13 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_riposte.webp",
          "cooldown": 22
        },
        {
          "slot": 3,
          "name": "Flawless Advance",
          "className": "ability_fencer_lunge",
          "description": "Realiza una serie de embestidas en cualquier dirección, soltando puñaladas perforantes hacia delante. Mantén la tecla de habilidad pulsada para controlar el momento de los ataques, ya que infligirás más daño cuanto más tiempo la pulses. Al lanzar el ataque durante el intervalo perfecto, inflige el máximo de daño. Pulsa Habilidad 3 para volver a lanzar la habilidad.",
          "upgrades": [
            {
              "tier": 1,
              "text": "35 de curación por impactos perfectos en héroes"
            },
            {
              "tier": 2,
              "text": "-12 s de tiempo de recarga y +60 % de resistencia a las balas durante la embestida"
            },
            {
              "tier": 3,
              "text": "+65 de daño perfecto con escalado espiritual aumentado y velocidad y distancia de impulso aumentadas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_lungingstab.webp",
          "cooldown": 26
        },
        {
          "slot": 4,
          "name": "Itani Lo Sahn",
          "className": "ability_fencer_ultimate",
          "description": "Carga el ataque y realiza un corte de largo alcance. Los enemigos alcanzados no pueden realizar acciones o curarse y quedan atascados en cámara lenta. Cuando termina el efecto, sufren daño devastador, y los enemigos con la mitad de vida reciben daño adicional. Durante la cámara lenta, Apolo es invulnerable y los enemigos reciben menos daño. Mantén pulsado Habilidad 4 o para retrasar el lanzamiento.",
          "upgrades": [],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/fencer/fencer_ult.webp",
          "cooldown": 145
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 78.8,
            "winratePct": 50.9
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 60,
            "winratePct": 51.3
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 58.4,
            "winratePct": 49.9
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.1,
            "winratePct": 49.7
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 37.2,
            "winratePct": 51.3
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.5,
            "winratePct": 51.3
          }
        ],
        "mid": [
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 47.5,
            "winratePct": 51.7
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.5,
            "winratePct": 49.3
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.6,
            "winratePct": 49
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.6,
            "winratePct": 50.7
          },
          {
            "id": 2947183272,
            "name": "Radiant Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.5,
            "winratePct": 51
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.5,
            "winratePct": 51.5
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 54.8,
            "winratePct": 51.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.7,
            "winratePct": 51.8
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 49.1,
            "winratePct": 50.5
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.6,
            "winratePct": 51.7
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 35.1,
            "winratePct": 58
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.6,
            "winratePct": 50.3
          }
        ]
      },
      "winrate": 49.3,
      "pickrate": 2.3,
      "matches": 1727141
    },
    {
      "id": 88,
      "name": "Baba",
      "className": "hero_baba",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/baba_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/baba_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/baba_bg.webp",
      "tags": [
        "Cackling",
        "Beady",
        "Hexing"
      ],
      "gunTag": "Heavy Artillery",
      "role": "",
      "playstyle": "",
      "lore": "Hay algunas cosas que la mayoría de quienes habitan la Manzana Maldita esperan vivir en algún momento de su vida. Ver un espectáculo de Broadway. Patinar sobre hielo en el Rockefeller Center durante las Navidades. Recibir una bronca a gritos de la señora de las palomas de Central Park. Porque Yagá es más que una simple anciana que da de comer a palomas espirituales en el parque... es toda una institución. Una fuerza de la naturaleza entretejida en la mismísima leyenda de Nueva York. ¿Es verdad que lleva 50 años sentándose a diario en el mismo banco, llueva o truene? Puede ser. ¿Es DE VERDAD la líder del Pacto de SoHo? Quién sabe, pero una cosa es segura: es neoyorquina y no se va a quedar de brazos cruzados viendo cómo una panda de turistas destroza Manhattan en busca de poder.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "6.5"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Threadsap",
          "className": "ability_baba_bubbling_brew",
          "description": "Teje un hilo irregular que sigue tu mira antes de estallar a lo largo de su trayectoria, lo que inflige daño espiritual y roba Espíritu a los enemigos, con mayor eficacia para Yagá. Mientras retiene el Espíritu robado, Yagá inflige daño espiritual adicional con cada bala.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-12 s de tiempo de recarga y +8 s de duración de la desventaja"
            },
            {
              "tier": 3,
              "text": "+1 carga y atrae 7 m a los enemigos al impactar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/baba/threadsap.webp",
          "cooldown": 28
        },
        {
          "slot": 2,
          "name": "Granny Long Legs",
          "className": "ability_baba_bench_run",
          "description": "Las patas de tu banco se extienden, lo que otorga bonus move speed, saltos más altos, resistencia a desventajas y resistencia cuerpo a cuerpo. Cuerpo a cuerpo ligero: Da una patada que hace retroceder a los enemigos. Cuerpo a cuerpo pesado: Realiza un golpe contra el suelo que lanza por los aires, aplica ralentización e inflige daño espiritual. Mantén pulsado Agacharse/deslizarse para cargar un salto de gran altura y suéltalo para saltar.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+2.5 m⁠/⁠s de velocidad de movimiento"
            },
            {
              "tier": 2,
              "text": "-7.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+15 % de resistencia y +50 % de robo de vida cuerpo a cuerpo"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/baba/strafing_run.webp",
          "cooldown": 32
        },
        {
          "slot": 3,
          "name": "Baba's Brew",
          "className": "ability_baba_hexing_brew",
          "description": "Prepara una tetera que aplica un efecto mágico en un área al lanzarla, alternando a lo largo del tiempo y en orden aleatorio entre una reconfortante barrera, silencio o una quemadura abrasadora que inflige daño espiritual a lo largo del tiempo y reduce la resistencia espiritual. Pulsa para pausar o reanudar la preparación.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+33.33 % de efectividad del brebaje"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/baba/teapot_brew.webp",
          "cooldown": 28
        },
        {
          "slot": 4,
          "name": "Feed The Birds",
          "className": "ability_baba_ultimate_2",
          "description": "Cubre de pan a los objetivos que tienes delante, aplicándoles una ralentización acumulativa. Al finalizar la canalización, una bandada de palomas bombardea a los objetivos, infligiéndoles daño espiritual y convirtiéndolos en palomas. Tanto el daño como la duración aumentan según la cantidad de pan.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+4 m de alcance de lanzamiento y +32 % de ralentización máxima"
            },
            {
              "tier": 3,
              "text": "+125 de daño máximo, +125 de escalado espiritual y +0.5 s de duración máxima"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/baba/pigeon_launcher.webp",
          "cooldown": 150
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 83.3,
            "winratePct": 57.1
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 40.5,
            "winratePct": 52.9
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 33.3,
            "winratePct": 71.4
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.6,
            "winratePct": 41.7
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.6,
            "winratePct": 50
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 26.2,
            "winratePct": 81.8
          }
        ],
        "mid": [
          {
            "id": 3970837787,
            "name": "Enchanter's Emblem",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 42.9,
            "winratePct": 50
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 42.9,
            "winratePct": 66.7
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.5,
            "winratePct": 52.9
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31,
            "winratePct": 76.9
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.2,
            "winratePct": 63.6
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.2,
            "winratePct": 72.7
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 54.8,
            "winratePct": 65.2
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.5,
            "winratePct": 52.9
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.7,
            "winratePct": 53.3
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.3,
            "winratePct": 50
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31,
            "winratePct": 61.5
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 23.8,
            "winratePct": 70
          }
        ]
      },
      "winrate": 54.4,
      "pickrate": 1.3,
      "matches": 985151
    },
    {
      "id": 15,
      "name": "Bebop",
      "className": "hero_bebop",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bebop_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/bebop_bg.webp",
      "tags": [
        "Hook",
        "Bomb",
        "Punch"
      ],
      "gunTag": "Beam Weapon",
      "role": "Engancha a un enemigo para realizar un combo noqueador",
      "playstyle": "Bebop puede combinar sus habilidades de muchas maneras diferentes: alterando las posiciones del enemigo, salvando a un aliado o infligiendo ráfagas de daño. Cuando la situación no requiere sutileza, su láser gigante resuelve muchos problemas.",
      "lore": "Forjado por las manos de una trabajadora viuda de un desguace, Bebop era más que un simple gólem de chatarra... era el hijo que nunca pudo tener. Juntos trabajaban en la chatarrería durante el día y escuchaban jazz durante la noche. Era una rutina predecible, por no decir reconfortante. Pero, ahora, la creadora de Bebop se ha enfermado y, aunque la señorita Shelly no aprobaría las actividades que Bebop realiza por la noche para pagar sus medicinas, ojos que no ven...",
      "stats": [
        {
          "label": "Salud",
          "value": "880"
        },
        {
          "label": "Velocidad",
          "value": "6.45"
        },
        {
          "label": "Sprint",
          "value": "4"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "63"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Exploding Uppercut",
          "className": "citadel_ability_uppercut",
          "description": "Inflige daño cuerpo a cuerpo a los enemigos cercanos y los lanza hacia atrás. Cuando aterrizan, infligen daño espiritual y aplican cadencia de tiro reducida a otros enemigos cercanos. Gancho Explosivo se puede usar en aliados.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Al golpear a un héroe enemigo, obtienes menor tiempo de carga, el doble de alcance del arma y +30 % de daño del arma durante 9 s"
            },
            {
              "tier": 3,
              "text": "Al alcanzar a un héroe, el tiempo de recarga de Brazo Mecánico pasa a ser 0 y restaura +18 % de la vida que te falte"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_uppercut.webp",
          "cooldown": 22
        },
        {
          "slot": 2,
          "name": "Sticky Bomb",
          "className": "citadel_ability_sticky_bomb",
          "description": "Coloca una bomba que explota tras un tiempo de retraso e inflige daño espiritual a los enemigos cercanos. Si la bomba impacta en un héroe o lo mata, obtienes daño adicional permanente por Bomba Lapa. Las acumulaciones se reducen a la mitad tras 60 impactos y 7 víctimas.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Al lanzarla: +5 m de velocidad de movimiento y +25 % de resistencia a las desventajas durante 6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_sticky_bomb.webp",
          "cooldown": 18
        },
        {
          "slot": 3,
          "name": "Grapple Arm",
          "className": "citadel_ability_hook",
          "description": "Lanza una mano mecánica que se agarra al primer personaje al que alcanza y tira de él. Brazo Mecánico se puede usar en aliados.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+20 % de daño del arma contra las víctimas durante 6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hook.webp",
          "cooldown": 23
        },
        {
          "slot": 4,
          "name": "Hyper Beam",
          "className": "citadel_ability_bebop_laser_beam",
          "description": "Canaliza un poderoso torrente de energía que inflige daño espiritual y aplica ralentización.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Hiperrayo cura a Bebop un 65 % de su daño a héroes, y un 20 % de su daño a enemigos que no son héroes"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bebop/bebop_hyper_beam.webp",
          "cooldown": 120
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 68,
            "winratePct": 48.2
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.3,
            "winratePct": 48.4
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 47.4,
            "winratePct": 48.4
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 44.3,
            "winratePct": 49.7
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 41.2,
            "winratePct": 48
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 28,
            "winratePct": 48
          }
        ],
        "mid": [
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40.2,
            "winratePct": 48.6
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.2,
            "winratePct": 47.6
          },
          {
            "id": 865958998,
            "name": "Veil Walker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28,
            "winratePct": 49
          },
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.7,
            "winratePct": 51.1
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 19.5,
            "winratePct": 49.2
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 19.1,
            "winratePct": 48.7
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 40.9,
            "winratePct": 51.4
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 32,
            "winratePct": 47.4
          },
          {
            "id": 3577481646,
            "name": "Mystic Reverb",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31.5,
            "winratePct": 56.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.1,
            "winratePct": 49.2
          },
          {
            "id": 630839635,
            "name": "Echo Shard",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 24.8,
            "winratePct": 49.8
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 23.8,
            "winratePct": 52.5
          }
        ]
      },
      "winrate": 48.4,
      "pickrate": 3.1,
      "matches": 2306305
    },
    {
      "id": 72,
      "name": "Billy",
      "className": "hero_punkgoat",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/punkgoat_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/billy_bg.webp",
      "tags": [
        "Punk",
        "Chaotic",
        "G.O.A.T."
      ],
      "gunTag": "Close Range",
      "role": "",
      "playstyle": "",
      "lore": "Billy es pura rabia contenida a punto de estallar por... cualquier cosa. Quizá por culpa de la bofia. Quizá por las normas que regulan la magia. Quizá por el servicio del kebab del centro (el bueno no, el otro). Mejor ni le preguntes por qué tiene cabeza de cabra.",
      "stats": [
        {
          "label": "Salud",
          "value": "820"
        },
        {
          "label": "Velocidad",
          "value": "7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Bashdown",
          "className": "ability_punkgoat_ult",
          "description": "Golpea con el bate contra el suelo, derribando a los enemigos e infligiéndoles daño cuerpo a cuerpo. El golpe crea una onda sísmica que inflige daño espiritual y lanza por los aires a los enemigos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-10 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "+1 carga y +2 m de radio"
            },
            {
              "tier": 3,
              "text": "-3.0 s de tiempo de carga y ahora inflige un 50 % de daño cuerpo a cuerpo pesado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_sigilslam.webp",
          "cooldown": 35
        },
        {
          "slot": 2,
          "name": "Rising Ram",
          "className": "ability_punkgoat_goatflip",
          "description": "Embiste de cabeza a un enemigo y lánzalo por los aires junto con Billy. El tiempo de recarga se reduce a la mitad al impactar.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+25.0 % de daño del arma durante 5 s al impactar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_risingram.webp",
          "cooldown": 32
        },
        {
          "slot": 3,
          "name": "Blasted",
          "className": "ability_punkgoat_blasted",
          "description": "Pasiva: Los golpes cuerpo a cuerpo restauran munición y dejan perjudicadas a las víctimas durante 7.0 s. Activa: Las balas se amplifican contra los enemigos perjudicados. Los ataques cuerpo a cuerpo aumentan la vida máxima y la duración.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Mientras dure Botellazo: +2.25 m⁠/⁠s de bonus move speed"
            },
            {
              "tier": 2,
              "text": "+1 carga de Batazo al usarla y +7 % de amplificación del daño balístico contra enemigos que están perjudicados"
            },
            {
              "tier": 3,
              "text": "+50 de vida adicional por cuerpo a cuerpo y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_blasted.webp",
          "cooldown": 25
        },
        {
          "slot": 4,
          "name": "Chain Gang",
          "className": "ability_punkgoat_tether",
          "description": "Te encadenas a los enemigos cercanos. Los enemigos encadenados no pueden usar habilidades de movimiento y reciben una fuerte ralentización al tirar de la cadena. Tras un tiempo de retraso, atrae a todos hacia Billy e inflige daño espiritual. La cadena se rompe si pierdes la línea de visión durante un período breve.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+40 % de resistencia espiritual y resistencia a balas"
            },
            {
              "tier": 3,
              "text": "+5 m de alcance e imparable durante +1.3 s por héroe arrastrado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/punkgoat/goat_chaingang.webp",
          "cooldown": 175
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 77.8,
            "winratePct": 49.1
          },
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 77.6,
            "winratePct": 49
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 50.7,
            "winratePct": 48.9
          },
          {
            "id": 1672893796,
            "name": "Grit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.2,
            "winratePct": 49.2
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.3,
            "winratePct": 51.9
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 23,
            "winratePct": 47.4
          }
        ],
        "mid": [
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 53.1,
            "winratePct": 52.6
          },
          {
            "id": 1252627263,
            "name": "Lifestrike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.1,
            "winratePct": 50.1
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 42,
            "winratePct": 49.9
          },
          {
            "id": 2971868509,
            "name": "Bullet Resist Shredder",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 37.1,
            "winratePct": 50.6
          },
          {
            "id": 112198670,
            "name": "Spirit Shielding",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.7,
            "winratePct": 50.1
          },
          {
            "id": 709540378,
            "name": "Cultist Sacrifice",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.1,
            "winratePct": 48.7
          }
        ],
        "late": [
          {
            "id": 800008313,
            "name": "Crushing Fists",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 51.1,
            "winratePct": 54.7
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.4,
            "winratePct": 50.1
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.5,
            "winratePct": 49.5
          },
          {
            "id": 2095565695,
            "name": "Point Blank",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.2,
            "winratePct": 48.2
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.9,
            "winratePct": 52.6
          },
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.7,
            "winratePct": 45.6
          }
        ]
      },
      "winrate": 48.5,
      "pickrate": 2.8,
      "matches": 2054542
    },
    {
      "id": 16,
      "name": "Calico",
      "className": "hero_nano",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nano_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/calico_bg.webp",
      "tags": [
        "Tricksy",
        "Slippery",
        "Burst Damage"
      ],
      "gunTag": "Spreadshot",
      "role": "Causa estragos al margen del combate",
      "playstyle": "Calico aprovecha las sombras para aparecer y desaparecer del combate, acechando a sus enemigos uno a uno.",
      "lore": "Anteriormente integrante condecorada de «La Sociedad Baxter», Calico dejó la ilustre orden una vez que se dio cuenta de que matar monstruos gratuitamente era menos rentable que matar personas por dinero. Ahora, como solicitada asesina a sueldo, Calico vive su mejor vida acabando con la de otros.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.8"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "63"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Gloom Bombs",
          "className": "ability_nano_clustergrenade",
          "description": "Lanza un grupo de bombas que detonan tras un retraso y que infligen daño espiritual. Los enemigos alcanzados por varias bombas reciben un 65 % de daño.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-6 % de resistencia cuerpo a cuerpo durante 6 s al tocar una bomba"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_clustergrenade.webp",
          "cooldown": 14
        },
        {
          "slot": 2,
          "name": "Leaping Slash",
          "className": "ability_nano_dash",
          "description": "Impúlsate hacia adelante antes de cortar a todos los enemigos en círculo, infligiéndoles daño cuerpo a cuerpo. Si la habilidad alcanza al menos a un héroe, cura una pequeña cantidad de vida.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Los héroes eliminados en 3 s otorgan +200 almas"
            },
            {
              "tier": 3,
              "text": "+90 de daño y 50 % de restauración del tiempo de recarga al alcanzar a un héroe"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_dash.webp",
          "cooldown": 13
        },
        {
          "slot": 3,
          "name": "Ava",
          "className": "ability_nano_catform",
          "description": "Desvanécete en las sombras y posee a Ava. Obtienes bonus move speed que aumenta con el tiempo y te ocultas en el minimapa. Al recibir daño de un héroe enemigo, la velocidad de movimiento adicional se restablece y no puedes activar a Ava durante un breve período de tiempo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+15 de regeneración de vida y +40 % de velocidad máxima de movimiento"
            },
            {
              "tier": 3,
              "text": "Obtienes amplificación de daño a lo largo del tiempo hasta un 18 % y persiste durante 8 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_catform.webp",
          "cooldown": 30
        },
        {
          "slot": 4,
          "name": "Return to Shadows",
          "className": "ability_nano_shadow_pulse",
          "description": "Te desvaneces instantáneamente en las sombras y dejas de ser seleccionable como objetivo, además de obtener bonus move speed e infligir daño espiritual. Tras un tiempo de retraso, regresas de entre las sombras e infliges daño espiritual de nuevo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+75 de daño y +20 % de velocidad de movimiento"
            },
            {
              "tier": 3,
              "text": "Al completarse, cura 450 y restaura los tiempos de recarga de todas las habilidades"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nano/nano_shadow_pulse.webp",
          "cooldown": 115
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 92.7,
            "winratePct": 51.7
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 77.6,
            "winratePct": 52.4
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 75.6,
            "winratePct": 52
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 45.4,
            "winratePct": 52.8
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.3,
            "winratePct": 54.8
          },
          {
            "id": 1976391348,
            "name": "Cold Front",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 16.6,
            "winratePct": 56
          }
        ],
        "mid": [
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 78.8,
            "winratePct": 52.2
          },
          {
            "id": 1976391348,
            "name": "Cold Front",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 67.8,
            "winratePct": 51
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.7,
            "winratePct": 50.3
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.3,
            "winratePct": 55.5
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.1,
            "winratePct": 49.7
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.2,
            "winratePct": 52
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 55.8,
            "winratePct": 55.8
          },
          {
            "id": 3812615317,
            "name": "Arctic Blast",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 55.7,
            "winratePct": 50.9
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 41.1,
            "winratePct": 52.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 39.7,
            "winratePct": 56
          },
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 36.2,
            "winratePct": 53.2
          },
          {
            "id": 395944548,
            "name": "Torment Pulse",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.5,
            "winratePct": 53.1
          }
        ]
      },
      "winrate": 48.2,
      "pickrate": 1.3,
      "matches": 928979
    },
    {
      "id": 81,
      "name": "Celeste",
      "className": "hero_unicorn",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/unicorn_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/unicorn_bg.webp",
      "tags": [
        "Performer",
        "Disruptive",
        "Dazzling"
      ],
      "gunTag": "Burst Fire",
      "role": "",
      "playstyle": "",
      "lore": "Incluso en un mundo de magia, algunas cosas siguen siendo raras e inusuales. Así que ¿qué puede hacer un unicornio? ¿Anunciar su existencia al mundo y arriesgarse a que aparezcan furtivos dispuestos a serrarle el cuerno? ¿O esconderse a plena vista en un espectáculo circense de Coney Island, donde la mayoría asumiría que su aspecto forma parte del número? Con los años, «La Deslumbrante Celeste» se ha convertido en una de las atracciones más populares de Coney y, aunque agradece los aplausos de un público entregado, lo que realmente la hace levantarse cada mañana es la familia que ha formado en su trabajo. Keruba la Sirena. Lenny Cabezabloque. Alita de Pollo. Ted. Esa era su gente. Así que, cuando descubrió que uno de los suyos había vendido parte de su alma para saldar una deuda de juego, Celeste supo que había llegado el momento de salir de las sombras y hacer lo que fuera necesario para recuperarla. ¿Revelar su poder a los Patrones es un riesgo? Sí. Pero ese problema es para otro día… Hoy su familia necesita ayuda.",
      "stats": [
        {
          "label": "Salud",
          "value": "690"
        },
        {
          "label": "Velocidad",
          "value": "6.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "4"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Light Eater",
          "className": "ability_unicorn_radiantblast",
          "description": "Abrasa a los enemigos que tienes delante con un fogonazo de luz en forma de cono. Los enemigos abrasados reciben daño espiritual cuando Celeste los ataca y otorga robo de vida espiritual.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-10 s de tiempo de recarga y +3 m de alcance de lanzamiento"
            },
            {
              "tier": 3,
              "text": "+22 de daño y escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_flare.webp",
          "cooldown": 20
        },
        {
          "slot": 2,
          "name": "Dazzling Trick",
          "className": "ability_unicorn_prismaticguard",
          "description": "Te envuelve en un prisma protector. Si la barrera se destruye, silencia a los enemigos cercanos e inflige una parte de la barrera como daño.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+70 de barrera y mayor escalado espiritual de la barrera"
            },
            {
              "tier": 3,
              "text": "+0.75 s de duración del silencio, -20 s de tiempo de recarga y permite que Maravilla Resplandeciente rebote"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_shield.webp",
          "cooldown": 38
        },
        {
          "slot": 3,
          "name": "Radiant Daggers",
          "className": "ability_unicorn_luminousstrike",
          "description": "Invoca un rayo de luz desde el cielo. Tras un breve intervalo, el rayo se forma por completo y provoca una explosión que inflige daño espiritual a todos los objetivos en el área. Celeste recibirá una mejora acumulable que aumentará su daño espiritual cada vez que alcance a un héroe enemigo.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+5 % de amplificación espiritual y +9 % de cadencia de tiro por acumulación"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_luminousflux.webp",
          "cooldown": 33
        },
        {
          "slot": 4,
          "name": "Shining Wonder",
          "className": "ability_unicorn_dazzlingorb",
          "description": "Lanza un orbe de luz letal que inflige daño espiritual, aplica ralentización y reduce la distancia de impulso al impactar. Luego, el orbe rebota hacia los enemigos que se encuentren dentro del alcance. Si no encuentra ningún objetivo, el orbe permanece activo durante un breve instante mientras sigue buscando objetivos. Prioriza a los héroes enemigos al buscar objetivos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-14 % de velocidad de movimiento y -14 % de distancia de impulso"
            },
            {
              "tier": 2,
              "text": "+90 de daño y escalado espiritual aumentado"
            },
            {
              "tier": 3,
              "text": "+6 rebotes máximos y -30 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/unicorn/unicorn_orb.webp",
          "cooldown": 170
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 80.9,
            "winratePct": 49.7
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 66.3,
            "winratePct": 49.9
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 58.5,
            "winratePct": 50.6
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.7,
            "winratePct": 48.3
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.4,
            "winratePct": 51.2
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 13.4,
            "winratePct": 50.9
          }
        ],
        "mid": [
          {
            "id": 2947183272,
            "name": "Radiant Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 62.2,
            "winratePct": 49.5
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 50.6,
            "winratePct": 50.8
          },
          {
            "id": 395944548,
            "name": "Torment Pulse",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.9,
            "winratePct": 53.3
          },
          {
            "id": 2059712766,
            "name": "Restorative Locket",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38,
            "winratePct": 51.6
          },
          {
            "id": 1925087134,
            "name": "Suppressor",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.2,
            "winratePct": 50.6
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 26.3,
            "winratePct": 50
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.5,
            "winratePct": 49.6
          },
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 44.5,
            "winratePct": 53.9
          },
          {
            "id": 3028234315,
            "name": "Witchmail",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 32.9,
            "winratePct": 54.9
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 29.4,
            "winratePct": 53.6
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.3,
            "winratePct": 50.8
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.9,
            "winratePct": 50
          }
        ]
      },
      "winrate": 48.2,
      "pickrate": 2.7,
      "matches": 2023285
    },
    {
      "id": 78,
      "name": "Deadman Danny",
      "className": "hero_deadpack",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/deadpack_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/deadpack_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/deadpack_bg.webp",
      "tags": [
        "Reckless",
        "High-flying",
        "Explosive"
      ],
      "gunTag": "",
      "role": "",
      "playstyle": "",
      "lore": "«Damas y caballeros, os voy a confesar un secreto escandaloso: en Fairfax Industries no tenemos ni idea de seguridad. Y ahora dejad que os cuente algo todavía MÁS escandaloso... ¡Eso es bueno! Durante mi tiempo aquí me han disparado, apuñalado, empalado, defenestrado, volado por los aires, atomizado y decapitado... no una, no dos, no tres, sino cuatrecientas veces. Así es, me han cortado la cabeza tantas veces que he tenido que inventarme una palabra para cuantificarlo. Pero me hago pasar por un infierno figurado y, en ocasiones, literal, porque no basta con PENSAR en cómo pueden salir mal las cosas: necesitamos SABER cómo salen mal las cosas. La demostración que estáis a punto de presenciar es extremadamente peligrosa. Así que reclinaos en vuestros asientos, poneos las gafas de protección y sed testigos del milagro de volar por cortesía de Fairfax Industries y el Quimera Mark 1». - Transcripción de las palabras de apertura de Danny en la Exposición de Tecnología Militar facilitada por Fairfax Industries.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.4"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "3.25"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Strix Salvo",
          "className": "ability_deadpack_chargeblast",
          "description": "Lanza una andanada de misiles espirituales que se incrustan en el suelo en línea recta. Los misiles explotan tras un breve retraso o al detectar a un enemigo, lo que inflige daño espiritual y marca al objetivo. Disparar a un enemigo marcado con un disparo potenciado consume la marca para infligir daño espiritual adicional y aplicar una ralentización decreciente. Mantén pulsado y arrastra para elegir el ángulo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-12 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "+30 de daño y +45 de daño al objetivo marcado"
            },
            {
              "tier": 3,
              "text": "+2 misiles, mayor alcance y escalado espiritual mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/deadpack/deadpack_salvo.webp",
          "cooldown": 25
        },
        {
          "slot": 2,
          "name": "Chimera Mk1",
          "className": "ability_deadpack_rocketeer",
          "description": "Mantén pulsado Saltar/trepar para volar, lo que acumula calor. Al alcanzar el calor máximo, el jetpack comenzará a sobrecalentarse. Sobrecalentamiento: Tras un breve retraso, cae en picado hacia el suelo. Al impactar, crea una explosión que inflige daño y te lanza por los aires junto a los enemigos cercanos. Si no impacta contra ningún héroe, sufres un aturdimiento. Pulsa Habilidad 2 para caer en picado antes de tiempo. Enfriamiento: Tras sobrecalentarse, el jetpack no se puede usar hasta que se enfríe por completo. Las ralentizaciones te afectan mientras estás en el aire. Siempre explotas al morir.",
          "upgrades": [
            {
              "tier": 1,
              "text": "El calor se disipa más rápido mientras se está en el suelo"
            },
            {
              "tier": 2,
              "text": "Al alcanzar a un héroe, te curas y no recibes daño autoinfligido"
            },
            {
              "tier": 3,
              "text": "Al alcanzar a un héroe, -50 % de tiempo de recarga y +120 de daño espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/deadpack/deadpack_chimera.webp",
          "cooldown": 21
        },
        {
          "slot": 3,
          "name": "Jettison Fuel",
          "className": "ability_deadpack_flamethrower",
          "description": "Rocía combustible que inflige daño del arma a lo largo del tiempo, reduce la resistencia a balas y se acumula hasta liberar una enorme llamarada que inflige daño espiritual y te empuja hacia atrás. Disipa el calor del jetpack al infligir daño.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+60 de daño la ráfaga, y +18 % de cadencia de tiro durante 7 s al alcanzar a un objetivo con la llamarada"
            },
            {
              "tier": 3,
              "text": "-10 % de reducción de la resistencia a balas y aplica una marca al alcanzar a un objetivo con la llamarada"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/deadpack/deadpack_thermalmass.webp",
          "cooldown": 22
        },
        {
          "slot": 4,
          "name": "Close The Deal",
          "className": "ability_deadpack_ultimate",
          "description": "Agarra a un enemigo para ofrecerle una demostración práctica, volando alto por los aires antes de estrellaros contra el suelo. Tanto tú como el participante recibís daño espiritual a lo largo del tiempo mientras caéis y daño espiritual al impactar. El daño aumenta contra los enemigos que tengan menos del 50 % de vida.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+0.5 s de aturdimiento y +8.0 de daño por metro"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/deadpack/deadpack_flight.webp",
          "cooldown": 135
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 86.4,
            "winratePct": 34.2
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 54.5,
            "winratePct": 41.7
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 40.9,
            "winratePct": 38.9
          },
          {
            "id": 1976391348,
            "name": "Cold Front",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 34.1,
            "winratePct": 20
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.8,
            "winratePct": 35.7
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 20.5,
            "winratePct": 11.1
          }
        ],
        "mid": [
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 72.7,
            "winratePct": 37.5
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 59.1,
            "winratePct": 38.5
          },
          {
            "id": 2152872419,
            "name": "Sharpshooter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 59.1,
            "winratePct": 26.9
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 56.8,
            "winratePct": 44
          },
          {
            "id": 690458959,
            "name": "Express Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 47.7,
            "winratePct": 38.1
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 45.5,
            "winratePct": 40
          }
        ],
        "late": [
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50,
            "winratePct": 31.8
          },
          {
            "id": 690458959,
            "name": "Express Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.2,
            "winratePct": 36.8
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.2,
            "winratePct": 42.1
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 36.4,
            "winratePct": 56.3
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 34.1,
            "winratePct": 20
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.8,
            "winratePct": 35.7
          }
        ]
      },
      "winrate": 50.6,
      "pickrate": 3.5,
      "matches": 2612223
    },
    {
      "id": 64,
      "name": "Drifter",
      "className": "hero_drifter",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/drifter_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/drifter_bg.webp",
      "tags": [
        "Stalker",
        "Bloodthirsty",
        "Cruel"
      ],
      "gunTag": "Spreadshot",
      "role": "",
      "playstyle": "",
      "lore": "Como antiguo vampiro que deambula por Estados Unidos, la monstruosidad sin nombre conocida como el Vagabundo lleva generaciones alimentándose de los vivos. A diferencia de la mayoría de los vampiros, al Vagabundo no le interesan ni los lujos ni los títulos y siente un desprecio absoluto por las leyes y tradiciones vampíricas. Su negativa a acatar las normas lo ha convertido en un proscrito en todas las baronías de Norteamérica, pero mientras los vizcondes y ancianos claman por su ejecución, el Vagabundo sigue haciendo lo que le da la gana…",
      "stats": [
        {
          "label": "Salud",
          "value": "755"
        },
        {
          "label": "Velocidad",
          "value": "6.9"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "51.5"
        },
        {
          "label": "Melee pesado",
          "value": "120"
        },
        {
          "label": "Regen. salud",
          "value": "3.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Rend",
          "className": "drifter_blood_blast",
          "description": "Golpea a los enemigos que tienes delante, infligiéndoles daño espiritual. Si el enemigo se encuentra a corta distancia, le inflige daño cuerpo a cuerpo adicional.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-8.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "Inflige un 55 % de daño cuerpo a cuerpo pesado y silencia a los enemigos durante 2 s si están a corta distancia"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_claw.webp",
          "cooldown": 16
        },
        {
          "slot": 2,
          "name": "Stalker's Mark",
          "className": "drifter_shadow_mark",
          "description": "Envía una marca que hace sangrar al primer objetivo al que alcanza, infligiéndole daño espiritual a lo largo del tiempo. Mientras el enemigo sangre, puedes reactivar Marca del Acechador para aparecer inmediatamente detrás de él.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-8 % de resistencia a balas"
            },
            {
              "tier": 2,
              "text": "-10 s de tiempo de recarga y +3 s de duración"
            },
            {
              "tier": 3,
              "text": "+1.5 % de sangrado y -40.0 % de curación recibida"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_stalkersmark.webp",
          "cooldown": 26
        },
        {
          "slot": 3,
          "name": "Bloodscent",
          "className": "ability_drifter_hunger",
          "description": "Los héroes aislados dejan un rastro a medida que se mueven, oyéndose los latidos de su corazón desde lejos. Infliges daño amplificado contra los héroes aislados y obtienes daño del arma permanente cuando muere algún héroe aislado cerca. Activa: acentúa tus sentidos, revelando un sendero que lleva a los héroes cercanos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+3 m/s de velocidad de movimiento cuando estás cerca de un héroe enemigo aislado"
            },
            {
              "tier": 2,
              "text": "Cuando muere un héroe aislado, cura un 24 % de la vida que te falte y restaura 2 de aguante"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/drifter_thehunger.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Eternal Night",
          "className": "drifter_darkness",
          "description": "Envuelve en oscuridad a los héroes enemigos cercanos, limitando enormemente su visión de otras unidades. Te permite ver brevemente la posición de los enemigos afectados, que quedan aislados mientras dure el efecto. Obtienes bonus sprint speed.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+2.75 s de duración y +1 objetivo máximo"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/drifter/darkness.webp",
          "cooldown": 145
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.2,
            "winratePct": 50.8
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 59.7,
            "winratePct": 52.9
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.5,
            "winratePct": 51.1
          },
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.4,
            "winratePct": 52.8
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 35.2,
            "winratePct": 51.9
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 19.7,
            "winratePct": 52.9
          }
        ],
        "mid": [
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.3,
            "winratePct": 51.7
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.7,
            "winratePct": 51.5
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.6,
            "winratePct": 51.9
          },
          {
            "id": 3585132399,
            "name": "Fortitude",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.5,
            "winratePct": 55.3
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.2,
            "winratePct": 53.1
          },
          {
            "id": 3977876567,
            "name": "Kinetic Dash",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.8,
            "winratePct": 51.1
          }
        ],
        "late": [
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 34.5,
            "winratePct": 52.6
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 32.1,
            "winratePct": 51.7
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.7,
            "winratePct": 49.7
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 23,
            "winratePct": 54
          },
          {
            "id": 1113837674,
            "name": "Silencer",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 19.5,
            "winratePct": 60.5
          },
          {
            "id": 2095565695,
            "name": "Point Blank",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 18.2,
            "winratePct": 50.6
          }
        ]
      },
      "winrate": 50.6,
      "pickrate": 3.3,
      "matches": 2421183
    },
    {
      "id": 11,
      "name": "Dynamo",
      "className": "hero_dynamo",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/sumo_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/dynamo_bg.webp",
      "tags": [
        "Teamplay",
        "Initiator",
        "Clutch"
      ],
      "gunTag": "Pistol",
      "role": "Bloquea al equipo enemigo",
      "playstyle": "Dínamo protege su vida y la de sus aliados mientras espera su momento. Pocas cosas pueden alterar más una pelea en equipo que un uso bien coordinado de Singularidad.",
      "lore": "Como científico, el profesor Dínamo siempre tuvo una mente inquisitiva. Por eso, cuando se abrió una grieta en el espacio y tiempo en Central Park, él fue el primero en llegar al lugar de los hechos para investigar. Y aunque esperaba que una visión tan majestuosa cambiara su vida, pensó más en términos metafóricos que en ver su cuerpo atomizado y reducido a una pequeña estrella moribunda. Pero, a pesar de que su cuerpo ya no existe, su espíritu y ansia de conocimiento siguen vivos. Como profesor titular en la Universidad de Columbia, busca aprender más sobre su condición y, al mismo tiempo, mantener su carga lectiva. Al fin y al cabo, tiene mentes futuras a las que inspirar.",
      "stats": [
        {
          "label": "Salud",
          "value": "880"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1.75"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Kinetic Pulse",
          "className": "citadel_ability_stomp",
          "description": "Libera una pulsación de energía que recorre el suelo, inflige daño espiritual y lanza por los aires a los enemigos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1 carga"
            },
            {
              "tier": 2,
              "text": "Al impactar, -15 % de resistencia a las balas y -24 % de velocidad de movimiento durante 4 s"
            },
            {
              "tier": 3,
              "text": "+135.0 de daño y +20 m de alcance de lanzamiento"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_stomp.webp",
          "cooldown": 26
        },
        {
          "slot": 2,
          "name": "Quantum Entanglement",
          "className": "citadel_ability_void_sphere",
          "description": "Deja de ser seleccionable como objetivo brevemente mientras te teletransportas a la ubicación objetivo. Restaura aguante al usarla. : Llévate contigo a los aliados que estén cerca.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Reduce un 50 % las desventajas que no son definitivas y repone 1 carga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_quantum.webp",
          "cooldown": 20
        },
        {
          "slot": 3,
          "name": "Rejuvenating Aurora",
          "className": "citadel_ability_nikuman",
          "description": "Mientras canalizas, restaura tu vida y la de cualquier aliado cercano con el tiempo. Impulsarse y el combate cuerpo a cuerpo no interrumpen la canalización.",
          "upgrades": [
            {
              "tier": 1,
              "text": "El aura proporciona +4 m⁠/⁠s de velocidad de movimiento durante la canalización"
            },
            {
              "tier": 2,
              "text": "-20.0 s de tiempo de recarga y +1.0 s de duración"
            },
            {
              "tier": 3,
              "text": "Permite el movimiento completo y el uso de habilidades, y cura +2.5 % de vida máxima por segundo"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_pork_bun.webp",
          "cooldown": 48
        },
        {
          "slot": 4,
          "name": "Singularity",
          "className": "citadel_ability_self_vacuum",
          "description": "Crea una singularidad en tus manos que inflige daño espiritual a lo largo del tiempo, aplica aturdimiento y atrae a los enemigos cercanos.",
          "upgrades": [],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/sumo/sumo_vacuum.webp",
          "cooldown": 250
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 72.3,
            "winratePct": 52.3
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.4,
            "winratePct": 52
          },
          {
            "id": 2010028405,
            "name": "Headshot Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 43.3,
            "winratePct": 52
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.9,
            "winratePct": 52.2
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.1,
            "winratePct": 53.8
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 22.3,
            "winratePct": 52.6
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.6,
            "winratePct": 52.9
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 42.5,
            "winratePct": 52.3
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.3,
            "winratePct": 52.4
          },
          {
            "id": 1763073141,
            "name": "Recharging Rush",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 36.3,
            "winratePct": 52.6
          },
          {
            "id": 4053935515,
            "name": "Headhunter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.4,
            "winratePct": 52
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.3,
            "winratePct": 53.7
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 54.2,
            "winratePct": 52.2
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.5,
            "winratePct": 52.6
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 44.1,
            "winratePct": 53.8
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 41.6,
            "winratePct": 53.1
          },
          {
            "id": 677738769,
            "name": "Refresher",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 41.5,
            "winratePct": 55.3
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 24.1,
            "winratePct": 50.3
          }
        ]
      },
      "winrate": 51.7,
      "pickrate": 1.8,
      "matches": 1349445
    },
    {
      "id": 76,
      "name": "Graves",
      "className": "hero_necro",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/necro_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/necro_bg.webp",
      "tags": [
        "Morbid",
        "Area Denial",
        "Necromancer"
      ],
      "gunTag": "Pistol",
      "role": "",
      "playstyle": "",
      "lore": "Como hija de prestigiosos abogados defensores, Darcy Graves creció en un hogar donde cada conversación era un debate, una discusión o una negociación. Era agotador. Pero mientras sus padres solían estar demasiado ocupados reuniéndose con clientes o trabajando en casos como para pasar tiempo con ella, los muertos siempre estaban ahí para escucharla. A Graves le gustaba pasar tiempo en el cementerio. Era un lugar tranquilo donde podía calmar sus pensamientos y hablar de sus problemas… pero un día, esas conversaciones unilaterales empezaron a cambiar. Todo comenzó con un susurro apenas perceptible. La voz de una mujer que parecía responder a los lamentos de Graves. Intrigada, la adolescente escuchó… y siguió las instrucciones de aquella voz hasta que esta la condujo a una caja forrada de plomo, enterrada en Van Cortlandt Park. Pero mientras que la mayoría de estudiantes de instituto entrarían en pánico al desenterrar una mano de lich cercenada, Graves no era como los demás. Liberada de su prisión, la voz del lich se hizo más fuerte… llevaba años buscando a una alumna a la que transmitirle sus conocimientos, y Graves estaba ansiosa por aprender. Ahora, como una joven nigromante, Darcy no solo debe compaginar los deberes de la Academia Blackmore… sino también las exigencias de los habitantes del cementerio, cada uno con sus propios asuntos pendientes, para los que buscan su ayuda.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "2.2"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Jar of Dead",
          "className": "ability_necro_hauntingskull",
          "description": "Pasiva: Recolecta muerte cuando algo fallece cerca y la almacena en tu Tarro de los Muertos. Activa: Lanza un tarro para invocar calaveras que infligen repetidamente daño espiritual a los enemigos. Si no hay enemigos cerca, las calaveras te siguen y priorizan al objetivo de tu arma.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Recolectar muerte cura 5 de vida por recogida"
            },
            {
              "tier": 2,
              "text": "Al impactar, aplica un 24 % de ralentización durante 1 s"
            },
            {
              "tier": 3,
              "text": "+2 calaveras y +4 s de duración de las calaveras"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_skull.webp",
          "cooldown": null
        },
        {
          "slot": 2,
          "name": "Grasping Hands",
          "className": "ability_necro_zombiewall",
          "description": "Desentierra una línea de manos agarradoras, invocando un necrófago y dejando una grieta tras de sí. Los enemigos que la atraviesan reciben daño espiritual e inmovilización. El lanzamiento alternativo gira la orientación del muro.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+90 de daño y +10 m de longitud del muro"
            },
            {
              "tier": 3,
              "text": "+1 necrófagos revividos, -14 s de tiempo de recarga y +0.75 s de inmovilización"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_hands.webp",
          "cooldown": 34
        },
        {
          "slot": 3,
          "name": "Essence Theft",
          "className": "ability_necro_fear",
          "description": "Tu arma roba daño del arma y resistencia espiritual a lo largo del tiempo, hasta una cantidad máxima por objetivo.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+1 objetivos de robo máximos y todas las invocaciones aplican Robo de Esencia"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_siphon.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Borrowed Decree",
          "className": "ability_necro_gravestone",
          "description": "",
          "upgrades": [
            {
              "tier": 1,
              "text": "+25 % de velocidad de los necrófagos y -15 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "+10 s de duración"
            },
            {
              "tier": 3,
              "text": "Al morir, inflige +5 % de la vida actual como daño y el tiempo entre invocaciones pasa a ser de -0.3 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/necro/necro_gravestone.webp",
          "cooldown": 140
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 74.5,
            "winratePct": 57.9
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.9,
            "winratePct": 58.6
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 47.2,
            "winratePct": 58.4
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.4,
            "winratePct": 59.7
          },
          {
            "id": 395867183,
            "name": "Mystic Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.8,
            "winratePct": 60.3
          },
          {
            "id": 1150006784,
            "name": "Arcane Surge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 25.4,
            "winratePct": 60.3
          }
        ],
        "mid": [
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 37.3,
            "winratePct": 59.2
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.3,
            "winratePct": 58.3
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.5,
            "winratePct": 57.2
          },
          {
            "id": 2108215830,
            "name": "Heroic Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.4,
            "winratePct": 62
          },
          {
            "id": 3970837787,
            "name": "Enchanter's Emblem",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.1,
            "winratePct": 59.1
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.7,
            "winratePct": 59.2
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 44.7,
            "winratePct": 59.7
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.2,
            "winratePct": 57.5
          },
          {
            "id": 630839635,
            "name": "Echo Shard",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27.5,
            "winratePct": 60.3
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27.5,
            "winratePct": 58.7
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.2,
            "winratePct": 55.9
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 24.6,
            "winratePct": 58.2
          }
        ]
      },
      "winrate": 57.5,
      "pickrate": 3.7,
      "matches": 2720813
    },
    {
      "id": 17,
      "name": "Grey Talon",
      "className": "hero_orion",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/archer_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/grey_talon_bg.webp",
      "tags": [
        "Precision",
        "Hunter",
        "Area Denial"
      ],
      "gunTag": "Bow",
      "role": "Dispara flechas precisas a larga distancia",
      "playstyle": "Garra Gris, un astuto depredador, utiliza una combinación de precisión letal, trampas y un posicionamiento inteligente para derrotar a los oponentes más duros.",
      "lore": "Como miembro fundador de «La Sociedad Baxter», Wesley Garra Gris pasó cerca de 40 años cazando monstruos que acechaban a la humanidad antes de decidir finalmente encontrar un sustituto y dejar su arco. Debido a sus obligaciones, Garra Gris nunca pasó mucho tiempo con su esposa e hijo y, ahora que su vástago había formado una familia propia, se dio cuenta de que era su última oportunidad de volver a conectar con las personas que amaba. La jubilación le sentó bien a Wesley. Recuperó el tiempo perdido con su esposa. Adoraba a sus nietos. Preparaba la cena para toda la familia todos los miércoles. Era feliz. Entonces recibió la llamada. Las autoridades afirmaron que fue un extraño accidente... que el fuego consumió la casa de su hijo antes de que alguien tuviera la oportunidad de escapar. Pero Wesley sabía que no era cierto. La esposa de su hijo era de Ixia y podía apagar las llamas con solo pensarlo. Si sus cuerpos habían aparecido carbonizados, tenían que haber muerto mucho antes de que se produjera un incendio. Así pues, Garra Gris ha cogido su arco una vez más y, cuando descubra al responsable, habrá un sangriento ajuste de cuentas.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "6.3"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "4"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Charged Shot",
          "className": "ability_charged_shot",
          "description": "Carga un potente disparo que atraviesa a los enemigos. Mantén pulsado Habilidad 1 o para retener el disparo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+54.0 de daño y -2 s de retraso de la carga"
            },
            {
              "tier": 3,
              "text": "Mejora el aumento de daño y rebota una vez en las paredes, en el suelo y en los techos"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_charged_shot.webp",
          "cooldown": 17
        },
        {
          "slot": 2,
          "name": "Rain of Arrows",
          "className": "ability_power_jump",
          "description": "Te lanza por los aires, lo que te permite planear lentamente. Mientras estás en el aire, obtienes daño del arma y multidisparo para tu arma. Usa para reducir la altura del salto. Pulsa Saltar/trepar para cancelar el planeo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Mientras estás en el aire, obtienes +3 de daño del arma, que aplica un 24 % de ralentización durante 1.5 s"
            },
            {
              "tier": 3,
              "text": "+30 % de robo de vida balístico, +30 % de robo de vida espiritual y +30 % de evasión de balas mientras estás en el aire"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_power_jump.webp",
          "cooldown": 25
        },
        {
          "slot": 3,
          "name": "Spirit Snare",
          "className": "ability_immobilize_trap",
          "description": "Lanza una trampa que empieza a armarse por sí sola. Una vez armada, la trampa se activará cuando un enemigo entre en su radio, aplicando una maldición y ralentización que le interrumpirá, silenciará, desarmará e impedirá que use objetos. Golpea la trampa con un Disparo Potenciado para detonarla antes de tiempo con mayor radio.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Aplica un -15 % de resistencia a balas durante 10 s"
            },
            {
              "tier": 3,
              "text": "+1 s de duración de la maldición y +1.5 m de radio"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/imobolize_trap.webp",
          "cooldown": 34
        },
        {
          "slot": 4,
          "name": "Guided Owl",
          "className": "ability_guided_arrow",
          "description": "Tras un tiempo de lanzamiento de 1.5 s, lanza un búho espiritual que puedes controlar y que explota al impactar, dañando y aturdiendo a los enemigos. Mantén pulsado [W] para aumentar la velocidad del búho. Pulsa Saltar/trepar para soltarlo. Por cada héroe enemigo que elimines con Búho Guiado, obtienes poder espiritual permanente.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Tras impactar, mata a los enemigos que estén por debajo del 22 % de vida"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/archer/archer_guided_arrow.webp",
          "cooldown": 125
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 73.4,
            "winratePct": 48.6
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 66.8,
            "winratePct": 48.5
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 54.4,
            "winratePct": 48.8
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 41.7,
            "winratePct": 49.3
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 38.8,
            "winratePct": 48.8
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 19.7,
            "winratePct": 49.1
          }
        ],
        "mid": [
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 58.8,
            "winratePct": 48.1
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 54,
            "winratePct": 48.4
          },
          {
            "id": 3970837787,
            "name": "Enchanter's Emblem",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 48.5,
            "winratePct": 48.9
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.7,
            "winratePct": 50.5
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.5,
            "winratePct": 50.2
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 32.9,
            "winratePct": 49.2
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 64,
            "winratePct": 50.3
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 49.2,
            "winratePct": 54.8
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.2,
            "winratePct": 48.4
          },
          {
            "id": 3577481646,
            "name": "Mystic Reverb",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 45,
            "winratePct": 55.4
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 42.2,
            "winratePct": 47.2
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.5,
            "winratePct": 46
          }
        ]
      },
      "winrate": 47.6,
      "pickrate": 1.5,
      "matches": 1096249
    },
    {
      "id": 13,
      "name": "Haze",
      "className": "hero_haze",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/haze_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/haze_bg.webp",
      "tags": [
        "Assassin",
        "Stealthy",
        "Lethal"
      ],
      "gunTag": "Rapid Fire",
      "role": "Se cuela sigilosamente y dispara a todo lo que le rodea",
      "playstyle": "Cuando Bruma se fija en un objetivo, puede apañárselas en un tiroteo. Prefiere realizar intercambios unilaterales, evitar el daño y atacar de cerca a objetivos desprevenidos.",
      "lore": "La Comisión de Seguridad e Investigación Oculta es una organización gubernamental tan opaca que hace que la CIA parezca transparente. Los hombres, mujeres y entidades de la CSIO tienen la responsabilidad de mantener al país a salvo de fuerzas siniestras que están más allá de las capacidades de las autoridades locales. Como miembro de la famosa División Sandman, Bruma tiene la tarea habitual de infiltrarse en los sueños de personas de interés, evaluar su nivel de amenaza y, si es necesario... ponerlas a dormir.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "8.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Sleep Dagger",
          "className": "ability_sleep_dagger",
          "description": "Lanza una daga que inflige daño y duerme al objetivo. Los objetivos dormidos se despiertan poco después de haber recibido daño. Lanzar una daga no interrumpe tu invisibilidad. Daga Adormecedora no interrumpe la canalización de habilidades de los enemigos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-10.0 % de reducción de la resistencia a las balas durante 6.0 s al despertarse"
            },
            {
              "tier": 2,
              "text": "+1 s de duración del sueño y aplica 15.0 acumulaciones de Obsesión"
            },
            {
              "tier": 3,
              "text": "-17.0 s de tiempo de recarga y -40 % de velocidad de movimiento e impulso durante 3 s al despertarse"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_sleep_dagger.webp",
          "cooldown": 30
        },
        {
          "slot": 2,
          "name": "Smoke Bomb",
          "className": "ability_smoke_bomb",
          "description": "Desaparece de la vista volviéndote invisible y obteniendo velocidad de esprint. Atacar elimina la invisibilidad, pero utilizar objetos no. Los enemigos cercanos pueden ver a través de tu invisibilidad.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Activa 2 cargas de la habilidad"
            },
            {
              "tier": 3,
              "text": "Disipa todas las desventajas no definitivas y obtienes +50 % de robo de vida balístico durante 5 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_smoke_bomb.webp",
          "cooldown": 33
        },
        {
          "slot": 3,
          "name": "Fixation",
          "className": "ability_stacking_damage",
          "description": "Disparar a un objetivo aumenta el daño que le inflijas con tus balas. Obtienes una acumulación por cada impacto de bala y tres si es un disparo a la cabeza.",
          "upgrades": [
            {
              "tier": 1,
              "text": "40.0 de daño espiritual y un 12 % de ralentización durante 2 s al objetivo cada 20 acumulaciones"
            },
            {
              "tier": 2,
              "text": "+40 acumulaciones máximas y +5 s de duración"
            },
            {
              "tier": 3,
              "text": "+0.11 por acumulación y aumenta con el daño del arma"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_fixation.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Bullet Dance",
          "className": "ability_bullet_flurry",
          "description": "Dispara en ráfaga a los enemigos cercanos con una precisión perfecta y daño balístico adicional.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+10.0 % de cadencia de tiro y +3 m⁠/⁠s de velocidad de movimiento"
            },
            {
              "tier": 3,
              "text": "+40.0 % de evasión y -65 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/haze/haze_bullet_flurry.webp",
          "cooldown": 165
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 71.9,
            "winratePct": 54.1
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 62.2,
            "winratePct": 54.5
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 61.6,
            "winratePct": 55.2
          },
          {
            "id": 381961617,
            "name": "Active Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 36.6,
            "winratePct": 56.5
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.7,
            "winratePct": 53.8
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.7,
            "winratePct": 52.6
          }
        ],
        "mid": [
          {
            "id": 499683006,
            "name": "Bullet Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 48.2,
            "winratePct": 54.5
          },
          {
            "id": 1292979587,
            "name": "Surge of Power",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.4,
            "winratePct": 56.1
          },
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.1,
            "winratePct": 58.9
          },
          {
            "id": 2971868509,
            "name": "Bullet Resist Shredder",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31,
            "winratePct": 56.9
          },
          {
            "id": 381961617,
            "name": "Active Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.1,
            "winratePct": 51
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.1,
            "winratePct": 54.4
          }
        ],
        "late": [
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46.4,
            "winratePct": 57
          },
          {
            "id": 1113837674,
            "name": "Silencer",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 40.3,
            "winratePct": 62.8
          },
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40,
            "winratePct": 52.1
          },
          {
            "id": 1055679805,
            "name": "Vampiric Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27.1,
            "winratePct": 57.7
          },
          {
            "id": 1282141666,
            "name": "Siphon Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 24.6,
            "winratePct": 62
          },
          {
            "id": 710436191,
            "name": "Capacitor",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 22.2,
            "winratePct": 56.4
          }
        ]
      },
      "winrate": 53.4,
      "pickrate": 3.7,
      "matches": 2724425
    },
    {
      "id": 14,
      "name": "Holliday",
      "className": "hero_astro",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/astro_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/astro_bg.webp",
      "tags": [
        "Crackshot",
        "Explosive",
        "Apprehender"
      ],
      "gunTag": "Pistol",
      "role": "Rebota repartiendo disparos habilidosos",
      "playstyle": "Holliday depende de sus habilidades como buena tiradora, disparando a cosas que lanza por los aires. Con su gran puntería, puede infligir grandes cantidades de daño. Sus habilidades de movimiento le permiten aislar a sus enemigos o emprender una retirada precipitada.",
      "lore": "Hay personas que han pasado toda su vida soñando con mudarse a Nueva York. Holliday no es una de ellas. Feliz de ser la sheriff de un pequeño pueblo, Holliday disfrutaba de una carrera en la que solo tenía que usar su arma cuando hacía prácticas de tiro en la feria del condado... y luego empezaron los asesinatos. Como algo totalmente espeluznante e inhumano, los cuerpos fueron encontrados con las cajas torácicas abiertas... y las entrañas despedazadas como si los hubieran descuartizado los pájaros. Holliday localizó al asesino, un músico folclórico ambulante al que los medios de comunicación llamaron «El Trovador», pero cuando se enfrentó a él, este explotó en una bandada de cuervos y se fue volando. Eso fue hace 6 meses y, aunque los asesinatos en el centro de Illinois han cesado, la investigación de Holliday no lo ha hecho. Cree que El Trovador se dirige a Nueva York y, cuando lo encuentre, matará a ese malvado hijo de perra.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "8.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Powder Keg",
          "className": "ability_explosive_barrel",
          "description": "Lanza un barril que explota tras un tiempo de retraso, inflige daño espiritual, prende fuego y lanza por los aires a los enemigos. El barril se puede hacer detonar antes de tiempo disparándole, golpeándolo o detonándolo con otro barril. El efecto de quemadura se acumula, por lo que los barriles superpuestos infligen su daño combinado. Se puede usar de manera alternativa para colocar el barril frente a Holliday.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+40 de daño por impacto, +13.3333 de daño por quemadura por segundo, -5 s de tiempo de carga y escalado espiritual mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_powder_keg.webp",
          "cooldown": 28
        },
        {
          "slot": 2,
          "name": "Bounce Pad",
          "className": "ability_bounce_pad",
          "description": "Coloca una plataforma de rebote en el escenario que lanza a cualquier héroe que la pise. Explotas al aterrizar, infligiendo daño a cualquier enemigo cercano. La explosión solo puede producirse una vez por persona y por plataforma de rebote.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-10 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "Tú y tus aliados obtenéis +4 m/s de bonificación de velocidad de movimiento durante 4 s al aterrizar"
            },
            {
              "tier": 3,
              "text": "+0.7 s de aturdimiento al pisotear"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_bounce_pad.webp",
          "cooldown": 41
        },
        {
          "slot": 3,
          "name": "Crackshot",
          "className": "ability_crackshot",
          "description": "Los disparos a la cabeza infligen daño adicional y aplican una penalización de velocidad de movimiento decreciente. Este efecto solo se produce fuera del tiempo de recarga. Los impactos a los PNJ reducen un 50 % el tiempo de recarga. Disparo Preciso ignora la reducción del daño según la distancia y no se aplica a los objetivos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-20 % de vel. de movimiento decreciente"
            },
            {
              "tier": 2,
              "text": "+49.5 de daño y un -6 % de resistencia a balas durante 5 s"
            },
            {
              "tier": 3,
              "text": "-6 s de tiempo de recarga por disparo a la cabeza a héroes y -3 s por disparo a la cabeza a PNJ"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_crackshot.webp",
          "cooldown": 20
        },
        {
          "slot": 4,
          "name": "Spirit Lasso",
          "className": "ability_gravity_lasso",
          "description": "Lanza tu lazo, infligiendo daño espiritual, arrastrando a los enemigos y aplicándoles aturdimiento. Usar una Plataforma de Rebote aumenta la duración de Lazo Espiritual.",
          "upgrades": [],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/astro/holliday_spirit_lasso.webp",
          "cooldown": 130
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 84.5,
            "winratePct": 47
          },
          {
            "id": 2010028405,
            "name": "Headshot Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 59.4,
            "winratePct": 47
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 45.4,
            "winratePct": 46.4
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.7,
            "winratePct": 48
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 25.3,
            "winratePct": 46.8
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 13.8,
            "winratePct": 45.9
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 53.3,
            "winratePct": 46.6
          },
          {
            "id": 1763073141,
            "name": "Recharging Rush",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40.2,
            "winratePct": 47.1
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.1,
            "winratePct": 47.8
          },
          {
            "id": 4053935515,
            "name": "Headhunter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.7,
            "winratePct": 46.8
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.1,
            "winratePct": 50.4
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27,
            "winratePct": 47.5
          }
        ],
        "late": [
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.7,
            "winratePct": 46.6
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 37.1,
            "winratePct": 49.6
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.1,
            "winratePct": 46.7
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.5,
            "winratePct": 48.6
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 30.4,
            "winratePct": 48.4
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.5,
            "winratePct": 47.7
          }
        ]
      },
      "winrate": 47.3,
      "pickrate": 1.7,
      "matches": 1237304
    },
    {
      "id": 1,
      "name": "Infernus",
      "className": "hero_inferno",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/inferno_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/infernus_bg.webp",
      "tags": [
        "Arsonist",
        "Explosive",
        "Burn Rubber"
      ],
      "gunTag": "Rapid Fire",
      "role": "Prende fuego a los enemigos y los ve arder",
      "playstyle": "Infernus tiene muchas formas de infligir daño a lo largo del tiempo, quemando a los enemigos antes de lanzarse a matar. Debido a la velocidad vertiginosa de Infernus, sus enemigos no serán capaces de escapar de las llamas.",
      "lore": "Como la mayoría de los adolescentes, Infernus era salvaje, rebelde e impetuoso. A diferencia de la mayoría de los adolescentes, Infernus era una criatura de otro plano y tenía un dominio sobrenatural del fuego. Evidentemente, su juventud estuvo llena de incendios provocados, asesinatos y eliminación de pruebas, pero eso es cosa del pasado. Ahora que es adulto, Infernus se ha calmado considerablemente. Es feliz trabajando en un bar con buena música en directo y hablando con gente interesante. Dicho esto, cuando alguien en el bar se pone beligerante o violento, no teme desempolvar las habilidades que perfeccionó en su día.",
      "stats": [
        {
          "label": "Salud",
          "value": "830"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Napalm",
          "className": "ability_incendiary_projectile",
          "description": "Lanza una mezcla incendiaria que inflige daño espiritual, aplica ralentización y cubre a los objetivos de napalm.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Efecto del napalm: +20 % de robo de vida"
            },
            {
              "tier": 3,
              "text": "Efecto del napalm: +17 % de daño recibido y -33 % de curación"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_molotov.webp",
          "cooldown": 25
        },
        {
          "slot": 2,
          "name": "Flame Dash",
          "className": "ability_flame_dash",
          "description": "Te impulsa hacia adelante, obteniendo slow resistance mientras dejas un rastro de llamas que inflige daño espiritual a lo largo del tiempo. Mantén pulsado [W] mientras la habilidad esté activa para impulsarte más lejos.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+1.0 s de duración del rastro y +20.0 de DPS"
            },
            {
              "tier": 3,
              "text": "Activa 2 cargas para la habilidad con 14 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_dash.webp",
          "cooldown": 38
        },
        {
          "slot": 3,
          "name": "Afterburn",
          "className": "ability_afterburn",
          "description": "Los impactos de las armas acumulan un efecto de quemadura que inflige daño espiritual a lo largo del tiempo. Las habilidades restablecen la duración base de la quemadura y los impactos de las balas la prolongan.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Efecto de la quemadura: -35 % de daño espiritual"
            },
            {
              "tier": 3,
              "text": "+3.0 s de duración máxima de la quemadura"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_deflect.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Concussive Combustion",
          "className": "ability_fire_bomb",
          "description": "Conviértete en una bomba viviente que inflige daño espiritual y aplica aturdimiento a todos los enemigos cercanos tras un tiempo de retraso. Una vez que se lanza, Combustión Conmocionadora no se puede interrumpir.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-65.0 s de tiempo de recarga y +100.0 % de robo de vida de la explosión"
            },
            {
              "tier": 3,
              "text": "+0.9 s de duración del aturdimiento, +10 m de radio y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/inferno_bomb.webp",
          "cooldown": 190
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 68.3,
            "winratePct": 50.5
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 66.8,
            "winratePct": 49.9
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 62.3,
            "winratePct": 50.8
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.3,
            "winratePct": 50.5
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.7,
            "winratePct": 51
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 22.9,
            "winratePct": 51.4
          }
        ],
        "mid": [
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 63.7,
            "winratePct": 50.8
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 53.3,
            "winratePct": 50.5
          },
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.3,
            "winratePct": 51.5
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 47.4,
            "winratePct": 49.7
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.9,
            "winratePct": 50.8
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.9,
            "winratePct": 53.2
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 61,
            "winratePct": 53.7
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 49.3,
            "winratePct": 50.4
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 47,
            "winratePct": 53.4
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46.9,
            "winratePct": 54.3
          },
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 42.2,
            "winratePct": 54.2
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.3,
            "winratePct": 48.1
          }
        ]
      },
      "winrate": 49.1,
      "pickrate": 3.1,
      "matches": 2270675
    },
    {
      "id": 20,
      "name": "Ivy",
      "className": "hero_tengu",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/tengu_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/ivy_bg.webp",
      "tags": [
        "Team-up",
        "Disruptor",
        "Rock Solid"
      ],
      "gunTag": "Rapid Fire",
      "role": "Crea un dúo poderoso con un aliado afortunado",
      "playstyle": "Hiedra tiene trucos de combate disruptivos que ralentizan y aturden a los enemigos. Es más eficaz cuando se une a un aliado, ya que potencia su arma y la de su compañero, además de compartir curación.",
      "lore": "La gárgola no sabía lo que estaba pasando cuando cobró vida... solo que un humano grande y una humana pequeña estaban siendo atacados. Así que entró en acción y los agresores huyeron horrorizados. La pequeña humana le dio las gracias a la gárgola y le preguntó cómo se llamaba. La gárgola no tenía nombre, así que la humana dijo: «Te voy a llamar Hiedra». A la gárgola, que por aquel entonces estaba cubierta de enredaderas, le pareció un poco obvio, pero decidió aceptarlo por el bien de la humana. Los humanos le pidieron a Hiedra que los acompañase a su casa para poder darle las gracias, así que fue con ellos. Esa noche aprendió mucho. Eran la familia Arroyo, y la pequeña se llamaba Sofía. Comían un manjar delicioso que se llamaba mofongo. Pero, sobre todo, se enteró de que quienes los atacaron pertenecían al «Sindicato de Mendoza» y que estaban haciendo daño a la gente... a buenas personas como los Arroyo. Han pasado 18 años desde el día en que los Arroyo la llevaron a su casa y, durante ese tiempo, Hiedra se propuso desmantelar el Sindicato de Mendoza y liberar el Harlem del Este de sus garras. Sin embargo, lo que pasa cuando dedicas tu vida a una sola misión durante casi dos décadas es que no sabes muy bien qué hacer una vez que logras completarla. Por primera vez en su vida, Hiedra está preparada para aventurarse fuera del Harlem del Este y ver qué le ofrece este mundo más allá de la justicia ciudadana.",
      "stats": [
        {
          "label": "Salud",
          "value": "755"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "4"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Entangling Thorns",
          "className": "citadel_ability_tengu_urn",
          "description": "Invoca un círculo de espinas asfixiantes que infligen daño y ralentizan a los enemigos que se encuentren dentro de su radio.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+2 m de radio y escalado espiritual de DPS aumentado"
            },
            {
              "tier": 3,
              "text": "Los enemigos atrapados en las espinas durante 2.0 s quedan inmovilizados durante +1.6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_storm_flask.webp",
          "cooldown": 32
        },
        {
          "slot": 2,
          "name": "Kudzu Connection",
          "className": "citadel_ability_tangotether",
          "description": "Conecta con un aliado cercano para obtener bonificaciones y curación replicada, e ignorar la penalización de velocidad de movimiento mientras disparas. Sin conexión, recibes un 50 % de las bonificaciones. La conexión requiere línea de visión.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+8 % de cadencia de tiro y +8 % de robo de vida balístico"
            },
            {
              "tier": 3,
              "text": "La habilidad está siempre activa"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_tether.webp",
          "cooldown": 37
        },
        {
          "slot": 3,
          "name": "Stone Form",
          "className": "citadel_ability_tengu_stone_form",
          "description": "Conviértete en piedra impenetrable y choca contra el suelo para aturdir e infligir daño a los enemigos cercanos. Cura un porcentaje de tu vida máxima.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+0.75 s de duración del aturdimiento y escalado espiritual de daño aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_stone_form.webp",
          "cooldown": 40
        },
        {
          "slot": 4,
          "name": "Air Drop",
          "className": "citadel_ability_tengu_airlift",
          "description": "Agarra a un aliado y alza el vuelo con él. Déjalo caer para provocar una explosión que inflige daño espiritual. Tú y tu aliado infligís más daño al dejar de volar. El tiempo de recarga se reduce un 30 % cuando se usa en aliados. Al recibir daño, la habilidad se desactiva brevemente. Durante el vuelo, tu aliado no puede atacar e inflige un -20 % de daño.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al dejar de volar, 300 de barrera para Hiedra y el aliado que aumenta con el poder espiritual"
            },
            {
              "tier": 2,
              "text": "+32 % de ralentización durante 3 s en los enemigos alcanzados"
            },
            {
              "tier": 3,
              "text": "Silencia durante 3 s a los enemigos alcanzados, y aumenta el daño y el escalado de la barrera"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/tengu/tengu_lightning_crash.webp",
          "cooldown": 100
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 63.1,
            "winratePct": 52.3
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 55.4,
            "winratePct": 52.6
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 33.1,
            "winratePct": 52.3
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 20.5,
            "winratePct": 53
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 20.1,
            "winratePct": 52.7
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 18.7,
            "winratePct": 52.2
          }
        ],
        "mid": [
          {
            "id": 811521119,
            "name": "Tesla Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.2,
            "winratePct": 52
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.4,
            "winratePct": 54
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26,
            "winratePct": 54.6
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26,
            "winratePct": 53.2
          },
          {
            "id": 710436191,
            "name": "Capacitor",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 22.7,
            "winratePct": 55.4
          },
          {
            "id": 1102081447,
            "name": "Mystic Slow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 21.9,
            "winratePct": 54.1
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.3,
            "winratePct": 54.2
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 30.7,
            "winratePct": 52.6
          },
          {
            "id": 1427630806,
            "name": "Healing Tempo",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 28.1,
            "winratePct": 56.1
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.6,
            "winratePct": 56.3
          },
          {
            "id": 710436191,
            "name": "Capacitor",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27,
            "winratePct": 51.7
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 24.7,
            "winratePct": 55.2
          }
        ]
      },
      "winrate": 52.6,
      "pickrate": 1.7,
      "matches": 1247577
    },
    {
      "id": 12,
      "name": "Kelvin",
      "className": "hero_kelvin",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kelvin_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/kelvin_bg.webp",
      "tags": [
        "Protector",
        "Explorer",
        "Ice Cold"
      ],
      "gunTag": "Heavy Hitter",
      "role": "Congela a los enemigos en el acto",
      "playstyle": "La diferencia entre una victoria fácil o una derrota ruinosa es curar de forma oportuna y dividir una pelea en equipo de la forma adecuada. Kelvin ralentiza a los enemigos al deslizarse, lo que le da a su equipo la ventaja de maniobrar para conseguirlo.",
      "lore": "Kelvin, un famoso científico aventurero, se propuso como misión en la vida explorar y comprender lo desconocido. Por eso, cuando surgieron rumores sobre una octava puerta astral oculta en el Ártico, Kelvin creó un equipo cuanto antes con las mentes más brillantes de su generación y partió con su expedición por todo lo alto. No volvieron nunca. Un año y medio después, un barco pesquero encontró el cuerpo congelado de Kelvin agarrado a una roca con runas brillantes incrustadas. La tripulación empezó a picar el hielo para examinar el cuerpo más de cerca, cuando de repente Kelvin abrió los ojos. Le tomaron el pulso... no había pulso. Intentaron vendarle las heridas... no sangraba. Y, sin embargo, por imposible que fuera, Kelvin estaba «vivo». Kelvin no recuerda qué pasó en la expedición y por eso busca respuestas.",
      "stats": [
        {
          "label": "Salud",
          "value": "880"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.1"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Frost Grenade",
          "className": "ability_ice_grenade",
          "description": "Lanza una granada que, al explotar, crea una nube de hielo que cura a los aliados y aplica daño espiritual y reduce la velocidad de movimiento de los enemigos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+30 de daño y +30 de curación"
            },
            {
              "tier": 2,
              "text": "-10 s de tiempo de recarga y la desventaja ahora congela la regeneración del aguante"
            },
            {
              "tier": 3,
              "text": "+2 m de radio y aumenta el escalado espiritual de daño y curación"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/freezing_grenade.webp",
          "cooldown": 30
        },
        {
          "slot": 2,
          "name": "Ice Path",
          "className": "ability_icepath",
          "description": "Kelvin crea una senda flotante de hielo y nieve que otorga bonificaciones de movimiento tanto a él como a sus aliados. Kelvin obtiene un 60 % de resistencia a la ralentización mientras dure la habilidad. Los enemigos también pueden caminar por la senda flotante. Pulsa Impulso / Agacharse/deslizarse para ascender o descender mientras estás en la Senda Helada.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+2 m de velocidad de movimiento y +35 % de resistencia a balas para Kelvin al estar en la Senda Helada"
            },
            {
              "tier": 3,
              "text": "+35 % de Espíritu y +20 de Espíritu para Kelvin al estar en la Senda Helada"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_path.webp",
          "cooldown": 50
        },
        {
          "slot": 3,
          "name": "Arctic Beam",
          "className": "ability_icebeam",
          "description": "Dispara energía helada frente a ti que inflige daño a los objetivos y reduce progresivamente su velocidad de movimiento y cadencia de tiro a medida que el rayo impacta contra ellos. Mientras usas Rayo Ártico, tienes una velocidad de movimiento reducida. El rayo también recoge almas.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-20.0 % de cadencia de tiro y velocidad de movimiento"
            },
            {
              "tier": 2,
              "text": "+20.0 de DPS y escalado espiritual aumentado"
            },
            {
              "tier": 3,
              "text": "-13 s de tiempo de recarga y dispara 2 rayos árticos adicionales en un radio de 10 m del último objetivo alcanzado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/ice_beam.webp",
          "cooldown": 28
        },
        {
          "slot": 4,
          "name": "Frozen Shelter",
          "className": "ability_ice_dome",
          "description": "Lánzala contigo mismo u otro héroe como objetivo para congelar el aire y crear una cúpula impenetrable a su alrededor. Al estar dentro de la cúpula, los aliados obtienen regeneración rápidamente y los enemigos quedan ralentizados. Los objetivos de Refugio Congelado se vuelven invulnerables y quedan congelados.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+1.5 s de duración y aplica -20 % de cadencia de tiro"
            },
            {
              "tier": 3,
              "text": "Purga tus desventajas no definitivas y las de tus aliados y +75 de regeneración de vida y escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/kelvin/frozen_shelter.webp",
          "cooldown": 190
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 66,
            "winratePct": 54.9
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 57.6,
            "winratePct": 54.7
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.1,
            "winratePct": 55.3
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 28,
            "winratePct": 52.1
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.8,
            "winratePct": 51.8
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 20.1,
            "winratePct": 55.4
          }
        ],
        "mid": [
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 50.2,
            "winratePct": 54.4
          },
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.8,
            "winratePct": 57.3
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.3,
            "winratePct": 54.4
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.2,
            "winratePct": 56.3
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 34.9,
            "winratePct": 57.1
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.4,
            "winratePct": 54.4
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 60.7,
            "winratePct": 58.4
          },
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 53.2,
            "winratePct": 57.7
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.3,
            "winratePct": 57.9
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.2,
            "winratePct": 57.5
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.5,
            "winratePct": 59.1
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 36.3,
            "winratePct": 62.9
          }
        ]
      },
      "winrate": 54.7,
      "pickrate": 1.2,
      "matches": 859497
    },
    {
      "id": 4,
      "name": "Lady Geist",
      "className": "hero_ghost",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/spectre_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/geist_bg.webp",
      "tags": [
        "Lifesteal",
        "Self Damage",
        "Fatale"
      ],
      "gunTag": "Pistol",
      "role": "Sacrifica vida y luego la drena",
      "playstyle": "La fuente del poder de Lady Geist es gastar vida para lograr efectos devastadores. Cuando se le agota, puede succionar la vida de sus rivales.",
      "lore": "Tiempo atrás, Lady Jeanne Geist fue la estrella de la ciudad, pero a medida que pasaba el tiempo y su belleza se desvanecía, se fue alejando cada vez más de sus días de gloria en la alta sociedad hasta convertirse finalmente en poco más que una mujer frágil que contaba historias de un pasado glorioso en un asilo de ancianos. Y fue entonces cuando se le apareció Oathkeeper. Como poderoso espíritu de otro plano, Oathkeeper le ofreció una manera de recuperar su antigua gloria… Podía devolverle la juventud: lo único que tenía que hacer era drenar la esencia de los vivos para sustentarse. Geist estaba indecisa. Obviamente, el asesinato era un asunto macabro, e indudablemente Oathkeeper no era una entidad en la que se pudiese confiar... Pero, aun así, la idea de tener una segunda oportunidad de revivir su juventud era demasiado buena como para dejarla pasar. Así que ideó un plan: tras hacer un pacto con Oathkeeper, lo ataría y vigilaría, limitando la influencia y el poder que pudiera tener sobre ella. Oathkeeper seguiría alimentándose, pero según las condiciones de Lady Geist, no las suyas. Sin embargo, a medida que los años se han convertido en décadas, la fuerza del sello de contención se ha debilitado y Oathkeeper tiene más hambre que nunca…",
      "stats": [
        {
          "label": "Salud",
          "value": "880"
        },
        {
          "label": "Velocidad",
          "value": "6.3"
        },
        {
          "label": "Sprint",
          "value": "2.4"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Essence Bomb",
          "className": "ability_blood_bomb",
          "description": "Sacrifica parte de tu vida para lanzar una bomba que inflige daño tras un breve tiempo de armado. El tipo de daño autoinfligido es espiritual y se puede mitigar.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+2 m de radio y +50.0 de daño"
            },
            {
              "tier": 3,
              "text": "Las bombas dejan una mancha tóxica en el suelo que inflige un 30.0 % del daño original por segundo durante 6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_bomb.webp",
          "cooldown": 14
        },
        {
          "slot": 2,
          "name": "Life Drain",
          "className": "ability_life_drain",
          "description": "Crea un vínculo que succiona la vida del enemigo con el tiempo y te cura. El objetivo debe estar en la línea de visión y dentro del alcance máximo. Puedes disparar y usar otras habilidades durante la succión, pero tu velocidad de movimiento se reduce. Usa para otorgar vida a héroes aliados.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Activa y concede +2 cargas y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/life_drain.webp",
          "cooldown": 34
        },
        {
          "slot": 3,
          "name": "Malice",
          "className": "ability_blood_shards",
          "description": "Sacrifica parte de tu vida para lanzar fragmentos de sangre que aplican una acumulación de Malicia. Cada acumulación ralentiza a la víctima y aumenta el daño que recibe de ti. El efecto de ralentización disminuye con el tiempo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+25.199999 de daño y +4 fragmentos de sangre"
            },
            {
              "tier": 3,
              "text": "+8 % de amplificación de daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/geist_dagger.webp",
          "cooldown": 6
        },
        {
          "slot": 4,
          "name": "Soul Exchange",
          "className": "ability_health_swap",
          "description": "Intercambia los niveles de vida con los de un objetivo enemigo. Hay un porcentaje de vida mínimo al que se puede reducir a los enemigos y una cantidad mínima de vida recibida en función de la vida actual de las víctimas.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Silencia durante 3 s a los enemigos que se encuentren dentro de un radio de 25 m"
            },
            {
              "tier": 3,
              "text": "+60 de poder espiritual, +40 % de cadencia de tiro y +50 % de resistencia espiritual durante 8 s al lanzarla"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/spectre/blood_exchange.webp",
          "cooldown": 220
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 76.6,
            "winratePct": 54.6
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 74.8,
            "winratePct": 55.1
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.2,
            "winratePct": 56.4
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.9,
            "winratePct": 56.8
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 45.9,
            "winratePct": 52.3
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 26.6,
            "winratePct": 56.6
          }
        ],
        "mid": [
          {
            "id": 2947183272,
            "name": "Radiant Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 69.6,
            "winratePct": 54.6
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49,
            "winratePct": 55.9
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40.5,
            "winratePct": 57.2
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 39.5,
            "winratePct": 57.9
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.1,
            "winratePct": 57.6
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31,
            "winratePct": 52.5
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 43.3,
            "winratePct": 58.7
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.6,
            "winratePct": 56.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 34.6,
            "winratePct": 55
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 33.9,
            "winratePct": 58.2
          },
          {
            "id": 865846625,
            "name": "Leech",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31.7,
            "winratePct": 55
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31.4,
            "winratePct": 60.9
          }
        ]
      },
      "winrate": 52.7,
      "pickrate": 2.1,
      "matches": 1546791
    },
    {
      "id": 31,
      "name": "Lash",
      "className": "hero_lash",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/lash_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/lash_bg.webp",
      "tags": [
        "Initiator",
        "High-Flying",
        "Arrogant"
      ],
      "gunTag": "Burst Fire",
      "role": "Se deja caer para pisotear a sus enemigos",
      "playstyle": "Lash deja poco espacio para respirar a sus enemigos, ya sea volando desde largas distancias para iniciar un combate con adversarios desprevenidos o persiguiéndolos cuando estos intentan huir.",
      "lore": "Jacob Lash es un gilipollas.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "2.1"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Ground Strike",
          "className": "citadel_ability_lash_down_strike",
          "description": "Pega un pisotón en el suelo e inflige daño a los enemigos que tengas delante. Si lanzas Ataque Terrestre mientras estás en el aire, caerás rápidamente hacia el suelo. El daño aumenta más lentamente después de 25 m.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Lanza por los aires a los enemigos golpeados y los ralentiza un 40 % durante 3 s"
            },
            {
              "tier": 3,
              "text": "+120 % de daño por metro y aumento mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_death_slam.webp",
          "cooldown": 18
        },
        {
          "slot": 2,
          "name": "Grapple",
          "className": "citadel_ability_lash",
          "description": "Lánzate por el aire hacia un objetivo. Al usar Pértiga, también se restablece tu límite de saltos e impulsos aéreos.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+20 m de alcance de lanzamiento y +7.0 de daño del arma durante 6 s"
            },
            {
              "tier": 3,
              "text": "+1 cargas, y +1 de aguante, +60 % de control aéreo y +4 m de velocidad de salto al lanzarla"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_lash.webp",
          "cooldown": 35
        },
        {
          "slot": 3,
          "name": "Flog",
          "className": "ability_lash_flog",
          "description": "Azota con tu látigo a los enemigos que tienes delante para convertir una parte del daño infligido en curación.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Aplica -28 % de velocidad de movimiento durante 3 s"
            },
            {
              "tier": 2,
              "text": "Aplica -30 % de cadencia de tiro y -16.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+80.0 de daño, +25.0 de ángulo de ataque y +15.0 % de curación"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_flog.webp",
          "cooldown": 26
        },
        {
          "slot": 4,
          "name": "Death Slam",
          "className": "citadel_ability_lash_ultimate",
          "description": "Se concentra en los enemigos y les conecta látigos. Tras canalizar, levanta y aturde a los enemigos conectados y luego los lanza contra el suelo. Las víctimas y todos los enemigos que se encuentren en la zona de aterrizaje recibirán daño y quedarán ralentizados. Pulsa para lanzar antes a los enemigos conectados. No atrapa a los enemigos que no estén en la línea de visión o que se alejen de su alcance durante el tiempo de conexión.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Aturde a los enemigos en el radio durante 1.2 s y +6 m de alcance de lanzamiento"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/lash/lash_counter_lash.webp",
          "cooldown": 170
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 88,
            "winratePct": 51
          },
          {
            "id": 2010028405,
            "name": "Headshot Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 69.8,
            "winratePct": 50.5
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 69.5,
            "winratePct": 50.9
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 44.8,
            "winratePct": 52
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 41.4,
            "winratePct": 52
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 22.9,
            "winratePct": 51.7
          }
        ],
        "mid": [
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 53.1,
            "winratePct": 50.4
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 49.8,
            "winratePct": 51.2
          },
          {
            "id": 4053935515,
            "name": "Headhunter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 47.5,
            "winratePct": 52.1
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 44.7,
            "winratePct": 50.1
          },
          {
            "id": 395867183,
            "name": "Mystic Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 43.1,
            "winratePct": 51.9
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 42,
            "winratePct": 53.2
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 58.5,
            "winratePct": 51.7
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 57.1,
            "winratePct": 53
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 49.8,
            "winratePct": 52
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 47.5,
            "winratePct": 49.6
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46,
            "winratePct": 57.9
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.6,
            "winratePct": 50.5
          }
        ]
      },
      "winrate": 50.9,
      "pickrate": 2.6,
      "matches": 1911609
    },
    {
      "id": 8,
      "name": "McGinnis",
      "className": "hero_forge",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/engineer_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/mcginnis_bg.webp",
      "tags": [
        "Inventor",
        "Support",
        "Disruption"
      ],
      "gunTag": "Heavy Artillery",
      "role": "Controla la batalla con torretas de combate",
      "playstyle": "Tanto si está creando una zona letal como dividiendo al equipo enemigo, la ubicación precisa lo es todo para McGinnis. Cuando sus aliados están atrincherados, puede impedir que el enemigo los expulse para ayudar a su equipo a seguir adelante.",
      "lore": "Maggie McGinnis siempre tuvo un don para construir cosas. A los 4 años, utilizaba juegos de bloques para recrear maravillas arquitectónicas. A los 10 años, construyó y recableó una lámpara personalizada para el aniversario de sus padres. A los 15 años, diseñó una máquina que refinaba las almas de los muertos... y esta última acaparó un poco más de atención que las maquetas con bloques. Actualmente, McGinnis dirige el departamento de I+D militar de Fairfax Industries y pasa la mayor parte de su tiempo en el taller mecánico, no en un laboratorio. No le interesa la teoría: para ella la ciencia es magia hecha realidad.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Mini Turret",
          "className": "citadel_ability_shieldedsentry",
          "description": "Despliega una torreta que dispara a los enemigos y les inflige daño espiritual a lo largo del tiempo. La torreta desaparece tras un tiempo de vida limitado. Las torretas infligen menos daño a los soldados y a los objetivos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+10 de DPS de la torreta y +10 m de alcance de ataque"
            },
            {
              "tier": 3,
              "text": "+25 % de cadencia de tiro de la torreta y +12 s de duración de la torreta"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_turret.webp",
          "cooldown": 18
        },
        {
          "slot": 2,
          "name": "Medicinal Specter",
          "className": "citadel_ability_mobile_resupply",
          "description": "Invoca un espíritu que proporciona curación a los aliados cercanos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1.5 s de duración"
            },
            {
              "tier": 2,
              "text": "-20.0 s de tiempo de recarga y +100.0 % de recuperación del aguante"
            },
            {
              "tier": 3,
              "text": "+2.0 % de regeneración de vida máxima, +3 m de radio de curación y +40 % de resistencia espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_resupply.webp",
          "cooldown": 50
        },
        {
          "slot": 3,
          "name": "Spectral Wall",
          "className": "citadel_ability_fissure_wall",
          "description": "Lanza un muro que aplica ralentización a los enemigos que atraviesa. Alza el muro para dividir el suelo por la mitad y dañar a los enemigos que estén cerca. Tras el lanzamiento, pulsa o Habilidad 3 para alzar el muro antes de tiempo. Puede destruirse con ataques cuerpo a cuerpo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Amplifica +20 % el daño de McGinnis a los enemigos alcanzados durante 7 s"
            },
            {
              "tier": 2,
              "text": "-20.0 s de tiempo de recarga y +2.0 s de duración"
            },
            {
              "tier": 3,
              "text": "Despliega 2 minitorretas cerca del muro durante 8 s y +24 % de ralentización"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_fissure_2.webp",
          "cooldown": 50
        },
        {
          "slot": 4,
          "name": "Heavy Barrage",
          "className": "citadel_ability_rocket_barrage",
          "description": "Lanza una ráfaga de cohetes que se dirigen a la ubicación seleccionada. McGinnis sufre ralentización, pero aún puede usar su aguante.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Aplica un 24 % de ralentización del movimiento y del impulso durante 1 s"
            },
            {
              "tier": 2,
              "text": "-45.0 s de tiempo de recarga y +6.0 s de duración"
            },
            {
              "tier": 3,
              "text": "+2 m de radio y +15.0 de daño por cohete con escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/engineer_rockets.webp",
          "cooldown": 200
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 56.4,
            "winratePct": 50
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 43,
            "winratePct": 49
          },
          {
            "id": 2407033488,
            "name": "Intensifying Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.5,
            "winratePct": 50.3
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 21.4,
            "winratePct": 50.7
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 17.3,
            "winratePct": 49.8
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 16.6,
            "winratePct": 46.5
          }
        ],
        "mid": [
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 36.6,
            "winratePct": 52.3
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.3,
            "winratePct": 50
          },
          {
            "id": 1102081447,
            "name": "Mystic Slow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.6,
            "winratePct": 51
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.1,
            "winratePct": 50.3
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.7,
            "winratePct": 52.7
          },
          {
            "id": 2108215830,
            "name": "Heroic Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.6,
            "winratePct": 53.6
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46.2,
            "winratePct": 53.2
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 39.5,
            "winratePct": 50.5
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.5,
            "winratePct": 49.4
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.8,
            "winratePct": 51.8
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27.3,
            "winratePct": 54.2
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 26,
            "winratePct": 50.6
          }
        ]
      },
      "winrate": 49.6,
      "pickrate": 1.1,
      "matches": 812740
    },
    {
      "id": 63,
      "name": "Mina",
      "className": "hero_vampirebat",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/vampirebat_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/mina_bg.webp",
      "tags": [
        "Harasser",
        "Nimble",
        "Vexing"
      ],
      "gunTag": "Pistol",
      "role": "",
      "playstyle": "",
      "lore": "Mina Ha lo tenía todo… unos padres adinerados, una educación de élite y un matrimonio arreglado que la haría ascender de la alta sociedad corriente a la realeza estadounidense. Era feliz. Hasta que mataron a su prometido. Mina lloró, pero no por él, sino por el futuro que le habían arrebatado. ¿No podía haber esperado el asesino a que se casaran? Así, tendría el apellido que siempre había soñado y nadie tendría que fingir querer a nadie. Podría haber sido perfecto, pero nada lo es en esta vida... Así que Mina hizo lo que hace siempre que las cosas no salen como ella quiere: les pidió a sus padres que lo solucionasen. El Sr. y la Sra. Ha sabían que la única forma de contentar a su hija era ofrecerle algo mejor que lo que había perdido... y casarse con el heredero de una de las familias más alabadas del mundo no era fácil de superar. Tenían que pensar a lo grande y ser ocurrentes. Tenían que prometerle ser inmortal. No fue nada barato, pero finalmente dieron con un vampiro dispuesto a convertirla. Como era de esperar, a Mina le pareció que la idea de la juventud eterna y un fondo fiduciario eran una opción aceptable, y aceptó felizmente la propuesta. Ahora, como vampira novata, Mina está descubriendo rápidamente que la influencia que tenía como humana no sirve de nada en la alta sociedad de los vampiros… y, aunque al principio le molestaba, si hay algo que se le da bien a Mina, es aprender las reglas para poder sabotearlas. Será la Vizcondesa de Nueva York, pero los demás vampiros aún no lo saben.",
      "stats": [
        {
          "label": "Salud",
          "value": "660"
        },
        {
          "label": "Velocidad",
          "value": "6.5"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Rake",
          "className": "ability_vampirebat_steallife",
          "description": "",
          "upgrades": [
            {
              "tier": 2,
              "text": "+30.0 de curación por víctima y -8.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+7.0 % de daño por vida faltante y escalado espiritual aumentado de curación por víctima"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_rake.webp",
          "cooldown": 16
        },
        {
          "slot": 2,
          "name": "Sanguine Retreat",
          "className": "ability_vampirebat_batblink",
          "description": "Dispérsate brevemente, convirtiéndote en no seleccionable como objetivo y volando a la ubicación seleccionada. Se puede volver a lanzar dentro de un breve intervalo de tiempo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al lanzarla, otorga +25 % de cadencia de tiro durante 8 s y añade 8 balas"
            },
            {
              "tier": 3,
              "text": "+1 relanzamiento y +4 m de alcance"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_sanguine_retreat.webp",
          "cooldown": 32
        },
        {
          "slot": 3,
          "name": "Love Bites",
          "className": "ability_vampirebat_lovebites",
          "description": "Tus balas aplican daño espiritual adicional. Infligir daño con tus habilidades acumula una mordedura feroz, que inflige una ráfaga de daño espiritual adicional. Mordeduras Cariñosas tiene diferentes tiempos de recarga por objetivo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+24 % de ralentización durante 3 s al activarse"
            },
            {
              "tier": 2,
              "text": "+3.0 de daño espiritual por bala y +45.0 de daño adicional"
            },
            {
              "tier": 3,
              "text": "-5 de tiempo de recarga y, al activarse, +25 % de cadencia de tiro durante 5 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_love_bites.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Nox Nostra",
          "className": "ability_vampirebat_batswarm",
          "description": "Activa: Libera una nube de murciélagos que buscan objetivos, con cada uno de ellos infligiéndoles daño espiritual y aplicando silencio. Pasiva: Al activar Mordeduras Cariñosas contra héroes, aumenta de forma permanente el número de murciélagos que se liberan.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Al impactar, inflige +0.5 % de la vida actual como daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/vampirebat/vampirebat_nox_nostra.webp",
          "cooldown": 150
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 90.8,
            "winratePct": 45.3
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 86.7,
            "winratePct": 45.5
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 58.7,
            "winratePct": 47
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.8,
            "winratePct": 46.2
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.9,
            "winratePct": 45.3
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 22.7,
            "winratePct": 47.4
          }
        ],
        "mid": [
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.2,
            "winratePct": 45.4
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 55.5,
            "winratePct": 47.3
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 51.3,
            "winratePct": 44.9
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.1,
            "winratePct": 47.4
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 38.4,
            "winratePct": 45
          },
          {
            "id": 3731635960,
            "name": "Dispel Magic",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.6,
            "winratePct": 47.7
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 66.7,
            "winratePct": 46.3
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 58.7,
            "winratePct": 51.1
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 46.4,
            "winratePct": 47.8
          },
          {
            "id": 4075861416,
            "name": "Spirit Rend",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.8,
            "winratePct": 47.2
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.9,
            "winratePct": 43.1
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.3,
            "winratePct": 47.6
          }
        ]
      },
      "winrate": 44.9,
      "pickrate": 3.2,
      "matches": 2374472
    },
    {
      "id": 52,
      "name": "Mirage",
      "className": "hero_mirage",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/mirage_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/mirage_bg.webp",
      "tags": [
        "Bodyguard",
        "Traveller",
        "Focused"
      ],
      "gunTag": "Pistol",
      "role": "Calcula el momento de disparar y atrapa a los objetivos que huyen",
      "playstyle": "Espejismo puede envolverse en un violento tornado para atrapar y elevar a los enemigos. Sus escarabajos le ayudan a resistir contra grupos de adversarios y siempre está preparado para ayudar a un aliado o castigar a un enemigo en cualquier parte.",
      "lore": "Los genios son uno de los grupos de personas más curiosos del mundo moderno. Con un gran poder en dosis controladas, los genios son incapaces de mantener la forma corporal durante más de 48 minutos sin descansar dentro de un recipiente. Debido a ello, la mayoría de los genios emplean guardaespaldas humanos que los transportan, los protegen y les hacen compañía. Espejismo es uno de esos guardaespaldas. Empleado por la embajadora de los genios, Nashala Dion, Espejismo se encuentra en Nueva York en misión diplomática. Los genios esperan poder negociar con el gobierno de los Estados Unidos la venta de una parte de Wyoming para poder construir una nación soberana para su pueblo.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Fire Scarabs",
          "className": "mirage_fire_beetles",
          "description": "Infesta a un enemigo con escarabajos de fuego que le roban la vida y hacen que inflija menos daño.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+1 carga y +2 s de duración"
            },
            {
              "tier": 3,
              "text": "-15 % de penalización de daño y escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_fire_beetles.webp",
          "cooldown": 35
        },
        {
          "slot": 2,
          "name": "Dust Devil",
          "className": "mirage_tornado",
          "description": "Transfórmate en un torbellino que, al avanzar, daña a los enemigos, reduce su velocidad de movimiento y los levanta en el aire. Tras salir del torbellino, obtienes evasión de balas.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+60 de daño"
            },
            {
              "tier": 2,
              "text": "-12 s de tiempo de recarga y +30 % de evasión"
            },
            {
              "tier": 3,
              "text": "Puede volver a lanzarse dentro de 6 s y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_tornado.webp",
          "cooldown": 36
        },
        {
          "slot": 3,
          "name": "Djinn's Mark",
          "className": "mirage_sand_phantom",
          "description": "Activa: Consume todas las Marcas del Genio para infligir daño. Pasiva: Tus disparos aplican una Marca del Genio al objetivo. Cuando la marca caduca o se consume, inflige daño espiritual y la posición del objetivo se revela en el mapa brevemente. Cada marca añadida duplica el daño actual. Hay un tiempo de recarga por objetivo al aplicar marcas adicionales.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al activarse, aplica un 48 % de ralentización decreciente durante 0.8 s"
            },
            {
              "tier": 2,
              "text": "+20 de daño base y +3 s de duración del multiplicador"
            },
            {
              "tier": 3,
              "text": "-0.75 s de tiempo de recarga, +1 marcas máximas y aturde a la víctima durante 0.5 s con el máximo de marcas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_sand_phantom.webp",
          "cooldown": 2.75
        },
        {
          "slot": 4,
          "name": "Traveler",
          "className": "mirage_teleport",
          "description": "Elige una ubicación del minimapa como objetivo para teletransportarte a ese punto tras un breve retraso. Si recibes daño o quedas aturdido/⁠⁠a, inmovilizado/⁠⁠a, dormido/a⁠⁠ o con el movimiento silenciado durante la espera, el teletransporte se interrumpe. Tras teletransportarte, obtienes una barrera.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+3 m/s de velocidad de movimiento y +20 % de cadencia de tiro"
            },
            {
              "tier": 3,
              "text": "No se puede interrumpir con el daño y la barrera obtiene escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/mirage/mirage_teleport.webp",
          "cooldown": 140
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 80.1,
            "winratePct": 45.4
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 36.1,
            "winratePct": 44.9
          },
          {
            "id": 1925087134,
            "name": "Suppressor",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.7,
            "winratePct": 46
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.1,
            "winratePct": 43.5
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.2,
            "winratePct": 48.1
          },
          {
            "id": 2010028405,
            "name": "Headshot Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 23,
            "winratePct": 45.3
          }
        ],
        "mid": [
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 60.8,
            "winratePct": 46.2
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 52.6,
            "winratePct": 44.7
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 43.6,
            "winratePct": 45
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.7,
            "winratePct": 46.4
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.6,
            "winratePct": 48.6
          },
          {
            "id": 1763073141,
            "name": "Recharging Rush",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.4,
            "winratePct": 46.9
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 64.3,
            "winratePct": 48.4
          },
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 60,
            "winratePct": 46.7
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.2,
            "winratePct": 45
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 46.3,
            "winratePct": 46.9
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 33.7,
            "winratePct": 53.1
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 27.1,
            "winratePct": 51.9
          }
        ]
      },
      "winrate": 44.2,
      "pickrate": 1,
      "matches": 731785
    },
    {
      "id": 18,
      "name": "Mo & Krill",
      "className": "hero_krill",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/digger_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/krill_bg.webp",
      "tags": [
        "Tag-Team",
        "Initiator",
        "Burrower"
      ],
      "gunTag": "Spreadshot",
      "role": "Se esconden bajo sus enemigos",
      "playstyle": "Al excavar en el suelo, Mo y Krill pueden pillar por sorpresa a cualquier enemigo; y una vez que se acercan, los resultados pueden ser devastadores.",
      "lore": "Mo y Krill son miembros de las Ratas de Túnel, un grupo que ayuda a facilitar el comercio ilícito entre los distritos gracias a una red de túneles subterráneos. Pero, aunque la mayoría de los habitantes del inframundo neoyorquino respetan el trabajo de las Ratas, de vez en cuando una banda trata de explotar el sistema de túneles para venganzas personales... Es entonces cuando Mo y Krill intervienen y le recuerdan a la ciudad lo que les sucede a quienes desprecian su hospitalidad.",
      "stats": [
        {
          "label": "Salud",
          "value": "930"
        },
        {
          "label": "Velocidad",
          "value": "8"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Scorn",
          "className": "ability_intimidate",
          "description": "Inflige daño a los enemigos cercanos y te cura según el daño infligido. La curación es más potente contra los héroes enemigos.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-5.0 s de tiempo de recarga y +1 m de radio"
            },
            {
              "tier": 3,
              "text": "Aplica una desventaja a los enemigos que permite que Mo y Krill les inflija +15 % de daño, se acumula y dura 16 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_regen.webp",
          "cooldown": 13
        },
        {
          "slot": 2,
          "name": "Burrow",
          "className": "ability_burrow",
          "description": "Escóndete bajo tierra para moverte más rápido y obtener armadura espiritual y antibalas. El daño de los héroes enemigos reduce la bonificación de velocidad. Al saltar, inflige daño espiritual, aplica ralentización y lanza por los aires a los enemigos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+45.0 de DPS al girar"
            },
            {
              "tier": 2,
              "text": "+4 s de tiempo de Excavar y +2 m de radio"
            },
            {
              "tier": 3,
              "text": "-20.0 de tiempo de recarga y +4 m/s de velocidad de movimiento"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_spin.webp",
          "cooldown": 40
        },
        {
          "slot": 3,
          "name": "Sand Blast",
          "className": "ability_throw_sand",
          "description": "Rocía con arena a los enemigos que tengas delante para desarmarlos e infligir daño.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+45 de daño y +5 m de alcance"
            },
            {
              "tier": 2,
              "text": "Ralentiza a los objetivos un -28 % y reduce un -28 % la distancia de los impulsos"
            },
            {
              "tier": 3,
              "text": "+1.5 s de duración y -25.0 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_throw_sand.webp",
          "cooldown": 40
        },
        {
          "slot": 4,
          "name": "Combo",
          "className": "ability_ult_combo",
          "description": "Inmoviliza al objetivo, aturdiéndolo e infligiéndole daño al canalizar. Si muere durante el combo o dentro de los 3 segundos posteriores a su finalización, obtienes vida máxima de forma permanente.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+100 % de robo de vida"
            },
            {
              "tier": 2,
              "text": "-30.0 s de tiempo de recarga y +50.0 % de resistencia a balas"
            },
            {
              "tier": 3,
              "text": "+0.7 s de duración y +35.0 de daño por segundo y escalado aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/grappler/grappler_combo.webp",
          "cooldown": 150
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 89.5,
            "winratePct": 54.5
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 52.1,
            "winratePct": 55.6
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 51.7,
            "winratePct": 54.8
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 47.5,
            "winratePct": 57
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 32.2,
            "winratePct": 55.4
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 22.1,
            "winratePct": 54.5
          }
        ],
        "mid": [
          {
            "id": 395944548,
            "name": "Torment Pulse",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 70,
            "winratePct": 56.4
          },
          {
            "id": 1976391348,
            "name": "Cold Front",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.8,
            "winratePct": 53.6
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 43.1,
            "winratePct": 56.4
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 37.8,
            "winratePct": 55.6
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.5,
            "winratePct": 52.2
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.6,
            "winratePct": 56.3
          }
        ],
        "late": [
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 50.7,
            "winratePct": 55.4
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 49.7,
            "winratePct": 53.6
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 43.3,
            "winratePct": 57.9
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 42.6,
            "winratePct": 55.4
          },
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 38,
            "winratePct": 61.9
          },
          {
            "id": 3812615317,
            "name": "Arctic Blast",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 34.5,
            "winratePct": 58.8
          }
        ]
      },
      "winrate": 49.3,
      "pickrate": 1.5,
      "matches": 1124185
    },
    {
      "id": 87,
      "name": "Nurse Harrow",
      "className": "hero_nurse",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nurse_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/nurse_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/nurse_bg.webp",
      "tags": [
        "Strict",
        "Terrifying",
        "Savior"
      ],
      "gunTag": "Projectile",
      "role": "",
      "playstyle": "",
      "lore": "Como pilar respetado del Ala de Poseídos de Marble Hill, la Enfermera Harrow ha dedicado su vida a combatir los horrores de la posesión sobrenatural. Con una mezcla de atención, severidad y pragmatismo distante, sus pacientes la han calificado tanto de santa como de institutriz cruel. Y probablemente ambas cosas sean ciertas. Pero, aunque cualquier persona en su sano juicio cuestionaría cómo y por qué Harrow guarda el dolor de sus pacientes dentro de su maletín médico, nadie puede poner en duda los resultados de su programa de tratamiento... por muy cruel que resulte.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.8"
        },
        {
          "label": "Sprint",
          "value": "2.5"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "0"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Leech Therapy",
          "className": "ability_nurse_leech_therapy",
          "description": "Lanza un tarro de sanguijuelas que se adhieren a los enemigos, les infligen daño espiritual a lo largo del tiempo y reducen progresivamente la duración de sus mejoras.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Las sanguijuelas drenan aguante y te lo restauran al recogerlas"
            },
            {
              "tier": 2,
              "text": "-10 s de tiempo de recarga y +4 de poder espiritual por sanguijuela"
            },
            {
              "tier": 3,
              "text": "+1 m de radio, +0.3 de escalado espiritual y +8 acumulaciones máx. de sanguijuelas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nurse/leech.webp",
          "cooldown": 30
        },
        {
          "slot": 2,
          "name": "Wretched Vapors",
          "className": "ability_nurse_adrenaline_rush",
          "description": "Rompe un frasco para liberar un vapor etéreo sobre ti o un aliado que provoca un subidón y, después, un bajón. Subidón espectral: Mientras dura, aumenta la velocidad de todas las acciones y anestesia temporalmente todo el daño recibido, generando espectros amenazantes. Bajón espectral: Al disiparse los vapores, todas las acciones se vuelven más lentas y los espectros restantes infligen su daño retrasado más daño adicional. La curación recibida priorizará eliminar primero a los espectros, lo que evitará que inflijan daño.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-15 s de tiempo de recarga y +7 m de alcance de lanzamiento"
            },
            {
              "tier": 2,
              "text": "+1 s de duración y +20 % de curación recibida"
            },
            {
              "tier": 3,
              "text": "+20 % de velocidad por subidón y disipa desventajas no definitivas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nurse/nurse_vapors.webp",
          "cooldown": 40
        },
        {
          "slot": 3,
          "name": "Healing Needles",
          "className": "ability_nurse_healing_needles",
          "description": "Carga el arma con un cargador lleno de jeringas que proporcionan curación a los aliados. Infligir daño recupera cargas, y cada sanguijuela que se recoja las restaura lentamente. Recargar consume una carga para obtener un cargador nuevo. Las jeringas sin utilizar se reembolsan como carga parcial. Vuelve a lanzar para guardarlas.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1 carga máxima"
            },
            {
              "tier": 2,
              "text": "+16 de curación por disparo, y los disparos restauran 0.6 de aguante"
            },
            {
              "tier": 3,
              "text": "+0.4 de escalado espiritual, y los disparos prolongan un 6 % la duración de las mejoras no definitivas hasta su duración máxima"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nurse/needle.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Lurking Terrors",
          "className": "ability_nurse_fear",
          "description": "Abre tu bolsa y revela los horrores que llevas en su interior, lo que inflige daño espiritual a lo largo del tiempo a los enemigos que tengas delante. Los enemigos que te miren acumulan terror y no pueden usar el aguante ni habilidades de movimiento. Al llegar al nivel máximo de terror, huyen de ti atemorizados. Cada sanguijuela que hayas recogido añade duración al miedo. Los enemigos que te den la espalda reciben un 50 % de daño, a menos que estén atemorizados.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-20 % de velocidad de movimiento y cadencia de tiro, además de +30 de daño por segundo"
            },
            {
              "tier": 3,
              "text": "+3.0 s de tiempo de canalización, +0.5 de escalado espiritual y recibe un 50 % menos de daño al canalizar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/nurse/medicine_bag.webp",
          "cooldown": 200
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 80,
            "winratePct": 30.6
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 40,
            "winratePct": 33.3
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.6,
            "winratePct": 37.5
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 33.3,
            "winratePct": 33.3
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.9,
            "winratePct": 38.5
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.9,
            "winratePct": 23.1
          }
        ],
        "mid": [
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40,
            "winratePct": 27.8
          },
          {
            "id": 3970837787,
            "name": "Enchanter's Emblem",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.9,
            "winratePct": 15.4
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.9,
            "winratePct": 53.8
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.7,
            "winratePct": 8.3
          },
          {
            "id": 1150006784,
            "name": "Arcane Surge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.4,
            "winratePct": 27.3
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 24.4,
            "winratePct": 45.5
          }
        ],
        "late": [
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 48.9,
            "winratePct": 45.5
          },
          {
            "id": 1427630806,
            "name": "Healing Tempo",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46.7,
            "winratePct": 28.6
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.6,
            "winratePct": 31.3
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.9,
            "winratePct": 38.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.7,
            "winratePct": 16.7
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 17.8,
            "winratePct": 37.5
          }
        ]
      },
      "winrate": 51.2,
      "pickrate": 2.7,
      "matches": 2010474
    },
    {
      "id": 67,
      "name": "Paige",
      "className": "hero_bookworm",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/bookworm_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/patience_bg.webp",
      "tags": [
        "Helpful",
        "Protector",
        "Booksmart"
      ],
      "gunTag": "Projectile",
      "role": "",
      "playstyle": "",
      "lore": "Hija de un librero especializado en obras raras, Paige creció en un hogar lleno de cariño en el que se daba prioridad a la bondad, la magia y el arte de contar historias. Pero mientras Paige adoptó con naturalidad los valores de sus padres, con su hermano pequeño, Bryce, no fue así. Como adolescente rebelde, a Bryce le molestaba no solo la actitud empalagosa de su familia, sino también su negativa a dejarle experimentar con magias que consideraban demasiado peligrosas. Paige hizo todo lo que se le ocurrió para evitar que se metiera en problemas, pero, como la mayoría de los adolescentes, cuanto más intentaba su hermana mayor decirle lo que era mejor para él, más se alejaba. Paige nunca supo qué hizo Bryce para que lo echaran de casa... solo que volvió un día de la biblioteca y encontró a su hermano desaparecido y a sus padres llorando. Los días se convirtieron en semanas, las semanas en meses y los meses en años. Paige llegó a convertirse en una talentosa bibliomante, ganándose la vida como narradora en bibliotecas de los cinco distritos. Y, aunque sus padres han permanecido en silencio sobre lo ocurrido con Bryce, la obsesión de Paige por encontrarlo no ha hecho más que aumentar. Descubrirá qué le sucedió a su hermano... y no dejará que ni dioses ni mortales se interpongan en su camino.",
      "stats": [
        {
          "label": "Salud",
          "value": "680"
        },
        {
          "label": "Velocidad",
          "value": "6.9"
        },
        {
          "label": "Sprint",
          "value": "3.5"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "42"
        },
        {
          "label": "Melee pesado",
          "value": "120"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Bookwyrm",
          "className": "ability_bookworm_dragonfire",
          "description": "Conjura un dragón que aparece en la ubicación objetivo y vuela hacia delante, infligiendo daño espiritual y dejando un rastro en llamas a su paso.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-12 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "+1.0 carga, +2 s de duración del rastro y +1 m de radio"
            },
            {
              "tier": 3,
              "text": "+12 m de distancia de recorrido, +100.0 de daño y +30.0 de DPS"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_dragon.webp",
          "cooldown": 33
        },
        {
          "slot": 2,
          "name": "Plot Armor",
          "className": "ability_bookworm_knightbarrier",
          "description": "Otorga a un aliado una barrera. Mientras la barrera esté activa, el aliado obtiene daño adicional del arma.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+14 % de cadencia de tiro al usar la barrera"
            },
            {
              "tier": 2,
              "text": "+100 de barrera y +2 s de duración"
            },
            {
              "tier": 3,
              "text": "Afecta hasta a 2 aliados adicionales y aumenta el escalado de la barrera"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_defendandfight.webp",
          "cooldown": 28
        },
        {
          "slot": 3,
          "name": "Captivating Read",
          "className": "ability_bookworm_aoemagic",
          "description": "Lanza magia latente a un área, aplicando ralentización. La magia explota después de un tiempo de retraso, inflige daño espiritual y aplica inmovilización.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+2 m de radio y reduce un -18 % la resistencia espiritual durante 6 s al impactar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_blindinglight.webp",
          "cooldown": 30
        },
        {
          "slot": 4,
          "name": "Rallying Charge",
          "className": "ability_bookworm_knightcharge",
          "description": "Libera una oleada de caballeros y corceles espectrales que cargan a través de la ciudad, aportando curación a los aliados e infligiendo daño espiritual a los enemigos. La fuerza de la curación y del daño espiritual se amplifica a medida que los caballeros se alejan.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Aumenta el ancho en +4 corceles y -45 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+160.0 de daño, +0.5 s de duración del aturdimiento y +70 % de amplificación máxima"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/bookworm/bookworm_charge.webp",
          "cooldown": 210
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 65.2,
            "winratePct": 56.6
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 42.2,
            "winratePct": 58.1
          },
          {
            "id": 1672893796,
            "name": "Grit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 40.1,
            "winratePct": 57
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.3,
            "winratePct": 56.8
          },
          {
            "id": 857669956,
            "name": "Guardian Ward",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32,
            "winratePct": 57.8
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.3,
            "winratePct": 57.3
          }
        ],
        "mid": [
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 47.9,
            "winratePct": 57.3
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.5,
            "winratePct": 58.1
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.2,
            "winratePct": 55.9
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.6,
            "winratePct": 57.9
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.7,
            "winratePct": 56.2
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.9,
            "winratePct": 59.6
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 51.2,
            "winratePct": 57.1
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 48.4,
            "winratePct": 58
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.6,
            "winratePct": 58
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.7,
            "winratePct": 56.7
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 39.5,
            "winratePct": 58.8
          },
          {
            "id": 1662311306,
            "name": "Divine Barrier",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 37.5,
            "winratePct": 58.1
          }
        ]
      },
      "winrate": 56,
      "pickrate": 2.5,
      "matches": 1817500
    },
    {
      "id": 10,
      "name": "Paradox",
      "className": "hero_chrono",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chrono_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/paradox_bg.webp",
      "tags": [
        "Calculated",
        "Disruptor",
        "Tactician"
      ],
      "gunTag": "Burst Fire",
      "role": "Manipula el espacio y el tiempo",
      "playstyle": "La manipulación del tiempo le permite a Paradoja superar a sus enemigos en combates uno contra uno. Su técnica infalible consiste en colocar muros o granadas de pulsaciones a punto de explotar cerca de sus enemigos, o intercambiar posiciones con ellos de manera oportuna.",
      "lore": "Paradoja. Un artefacto del tiempo y el nombre de un conocido gremio de ladrones... que se enorgullece de realizar intrincados atracos contra las personas e instituciones más intocables. ¿Qué hace Paradoja con los innumerables artefactos, secretos de estado y pruebas de paternidad de famosos que roba? Exhibirlos temporalmente para mostrar al mundo que nadie está fuera del alcance de Paradoja. Quienes pertenecen a esta misteriosa organización, además de llevar una máscara, adoptan el nombre de Paradoja. Están en todas partes y en ninguna al mismo tiempo. Y, si quieren algo, son inevitables.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Pulse Grenade",
          "className": "citadel_ability_chrono_pulse_grenade",
          "description": "Lanza una granada que empieza a generar pulsaciones cuando cae. Cada pulsación amplía el radio y aplica daño espiritual, ralentización del tiempo y daño aumentado acumulable para Paradoja contra la víctima.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+20.0 de daño de las pulsaciones y escalado espiritual aumentado"
            },
            {
              "tier": 3,
              "text": "+4.0 % de amplificación de daño y +1.6 s de duración"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_bomb.webp",
          "cooldown": 32
        },
        {
          "slot": 2,
          "name": "Time Wall",
          "className": "citadel_ability_chrono_time_wall",
          "description": "Crea un muro de distorsión temporal que detiene el tiempo para todos los proyectiles y balas enemigos que lo tocan y aumenta la velocidad y el daño de las balas de los aliados. Los enemigos que toquen el muro quedarán ralentizados brevemente.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+3.5 s de duración, +3 m de ancho y +1 m de alto"
            },
            {
              "tier": 2,
              "text": "Silencia a los enemigos durante 2.3 s e inflige +35.0 % de daño del arma"
            },
            {
              "tier": 3,
              "text": "+2 cargas de la habilidad"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_time_wall.webp",
          "cooldown": 25
        },
        {
          "slot": 3,
          "name": "Kinetic Carbine",
          "className": "citadel_ability_chrono_kinetic_carbine",
          "description": "Carga un potente disparo de energía temporal que inflige daño espiritual y detiene el tiempo de los enemigos a los que alcanza. El daño infligido aumenta con el daño del arma. La velocidad de movimiento aumenta mientras se carga. Mientras estés en el aire y cargando, pulsa para ralentizar tu movimiento.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-12.0 s de tiempo de recarga y aumenta el escalado de velocidad"
            },
            {
              "tier": 3,
              "text": "+2 s de retención de la carga y +55 % de aumento de daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/duo/duo_attack.webp",
          "cooldown": 28
        },
        {
          "slot": 4,
          "name": "Paradoxical Swap",
          "className": "citadel_ability_chrono_swap",
          "description": "Dispara un proyectil que intercambia tu posición con la del héroe enemigo objetivo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "200 de barrera durante 8 s y la barrera aumenta con el poder espiritual"
            },
            {
              "tier": 2,
              "text": "-30 s de tiempo de recarga y +13 m de alcance de lanzamiento"
            },
            {
              "tier": 3,
              "text": "Intercambia la posición con todos los enemigos que se encuentren en un radio de 7 m del objetivo alcanzado y +10 % de daño según vida máxima"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chrono/chrono_swap.webp",
          "cooldown": 95
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 2010028405,
            "name": "Headshot Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.1,
            "winratePct": 45.6
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 47.3,
            "winratePct": 46.2
          },
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 37.9,
            "winratePct": 45.4
          },
          {
            "id": 395867183,
            "name": "Mystic Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 33.3,
            "winratePct": 47
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 31.8,
            "winratePct": 46.8
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 20.8,
            "winratePct": 47.6
          }
        ],
        "mid": [
          {
            "id": 2152872419,
            "name": "Sharpshooter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 51.5,
            "winratePct": 46.5
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.7,
            "winratePct": 48
          },
          {
            "id": 4053935515,
            "name": "Headhunter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.8,
            "winratePct": 45.5
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.2,
            "winratePct": 45.4
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.2,
            "winratePct": 46.8
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.2,
            "winratePct": 48.4
          }
        ],
        "late": [
          {
            "id": 3577481646,
            "name": "Mystic Reverb",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 50.7,
            "winratePct": 52.4
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.9,
            "winratePct": 48.4
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.7,
            "winratePct": 46.6
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 38.6,
            "winratePct": 48.2
          },
          {
            "id": 690458959,
            "name": "Express Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 38,
            "winratePct": 44.7
          },
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 36.7,
            "winratePct": 55.3
          }
        ]
      },
      "winrate": 46.4,
      "pickrate": 2.2,
      "matches": 1622406
    },
    {
      "id": 50,
      "name": "Pocket",
      "className": "hero_synth",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/synth_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/pocket_bg.webp",
      "tags": [
        "Trickster",
        "Burst Damage",
        "Frogs"
      ],
      "gunTag": "Spreadshot",
      "role": "Se infiltra e irrumpe en la retaguardia",
      "playstyle": "Con una potente escopeta y una delgada figura, Pocket confía en su habilidad para escapar brevemente dentro de una maleta mística y teletransportarse mediante una capa voladora para poder sobrevivir a situaciones peligrosas.",
      "lore": "Arin Fairfax, la primera persona en la línea de sucesión de Fairfax Industries, se ha estado escondiendo durante los últimos 5 años, después de recibir un disparo en apariencia mortal en su decimoctavo cumpleaños. Arin no sabe quién está intentando impedir que se haga con el control de la empresa de sus padres... pero en el nido de víboras alimentado por la avaricia que es Fairfax Industries, podría ser cualquiera. Al adoptar el nombre de Pocket, Arin quiere desesperadamente mantener en secreto su verdadera identidad… no solo por su propia protección, sino también para forjar una identidad propia e independiente de la de sus padres.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "60"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Barrage",
          "className": "synth_barrage",
          "description": "Canalízala para empezar a lanzar proyectiles que infligen daño espiritual y aplican ralentización alrededor del punto de impacto. Los proyectiles que caen sobre un héroe otorgan a Pocket daño aumentado acumulable. Si la lanzas mientras estás en el aire, Pocket flota. Aluvión no se cancela al impulsarse en el aire o lanzar Capa Voladora.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+4 % de amplificación por acumulación y 3 m de radio"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_barrage.webp",
          "cooldown": 32
        },
        {
          "slot": 2,
          "name": "Flying Cloak",
          "className": "synth_plasma_flux",
          "description": "Lanza una capa con vida propia que se mueve hacia adelante e inflige daño a los enemigos. Puedes pulsar Habilidad 2 para teletransportarte a su ubicación.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+5.0 de daño del arma durante 6 s"
            },
            {
              "tier": 3,
              "text": "+1.6 s de duración y -10 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_plasma_flux.webp",
          "cooldown": 26
        },
        {
          "slot": 3,
          "name": "Enchanter's Satchel",
          "className": "synth_pulse",
          "description": "Escapa dentro de tu maleta. Cuando finaliza, inflige daño espiritual a los enemigos cercanos. Se puede finalizar antes de tiempo realizando cualquier acción.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+1.5 s de duración, +4 m de radio y -32 % de velocidad de movimiento y cadencia de tiro durante 4.0 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_pulse.webp",
          "cooldown": 17
        },
        {
          "slot": 4,
          "name": "Affliction",
          "className": "synth_affliction",
          "description": "Aplica daño a lo largo del tiempo a los enemigos cercanos. El daño de Aflicción no es letal y no aplica activaciones de objetos.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+3 s de duración y +4 m de radio"
            },
            {
              "tier": 3,
              "text": "Impide la curación y +13.0 de DPS con escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/synth/synth_affliction.webp",
          "cooldown": 170
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 87.6,
            "winratePct": 46
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 69.2,
            "winratePct": 45.7
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 51,
            "winratePct": 45.9
          },
          {
            "id": 1976391348,
            "name": "Cold Front",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 34.1,
            "winratePct": 46.8
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 18.7,
            "winratePct": 47.1
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 13.3,
            "winratePct": 44.9
          }
        ],
        "mid": [
          {
            "id": 709540378,
            "name": "Cultist Sacrifice",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 62,
            "winratePct": 45.4
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 57.6,
            "winratePct": 45.2
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.7,
            "winratePct": 47.8
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.1,
            "winratePct": 46.5
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 47.2,
            "winratePct": 46.9
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 31.2,
            "winratePct": 45.5
          }
        ],
        "late": [
          {
            "id": 343572757,
            "name": "Spirit Burn",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 65.4,
            "winratePct": 50.1
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 62.6,
            "winratePct": 48.2
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 58.2,
            "winratePct": 48.1
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 50,
            "winratePct": 50.1
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.3,
            "winratePct": 45.7
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 38.9,
            "winratePct": 44.3
          }
        ]
      },
      "winrate": 44.4,
      "pickrate": 1.5,
      "matches": 1092521
    },
    {
      "id": 84,
      "name": "Rat King",
      "className": "hero_ratking",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/ratking_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/ratking_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/ratking_bg.webp",
      "tags": [
        "Scrappy",
        "Regal",
        "Tenacious"
      ],
      "gunTag": "Spreadshot",
      "role": "",
      "playstyle": "",
      "lore": "Rey Rata, el críptico gobernante de las madrigueras de Nueva York, se alza sobre sus súbditos en tamaño, fuerza y ambición. Harto ya de esconderse bajo tierra, el rey ha presentado al mundo su audaz visión de futuro en la que él y sus súbditos pueden pasearse por la superficie sin temor a los furgones de exterminadores que patrullan las calles de Nueva York (o, como los llaman las ratas, los escuadrones humanos de la muerte). Paso 1: hacerse con el dominio de Long Island. Paso 2: declarar Long Island como nuevo estado soberano de Ratannia. Paso 3: ejecutar a cualquier humano que se niegue a abandonar esta nueva utopía del mundo de los roedores. Pero, aunque el plan es impecable, Rey Rata no quiere arriesgarse y ha decidido invocar al Patrón para inclinar la balanza a su favor.",
      "stats": [
        {
          "label": "Salud",
          "value": "800"
        },
        {
          "label": "Velocidad",
          "value": "6.8"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Scrap Grenade",
          "className": "ability_ratking_scrap_grenade",
          "description": "Lanza una granada de chatarra que explota varias veces, infligiendo daño balístico y aplicando ralentización. La granada se puede golpear para apartarla.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Añade una detonación final adicional más fuerte"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/ratking/ratking_grenade.webp",
          "cooldown": 26
        },
        {
          "slot": 2,
          "name": "Rat Swarm",
          "className": "ability_ratking_ratnibble",
          "description": "Invoca una plaga de ratas que saltan a los enemigos, infligiendo daño espiritual a lo largo del tiempo y reduciendo su resistencia a balas con cada mordisco. Cuantas más ratas haya sobre un objetivo, más rápidos serán los mordiscos. Los enemigos pueden tener varias ratas enganchadas, pero pueden librarse de una rata al principio con un impulso en el suelo o en el aire.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Aumenta el tamaño de la plaga y +4 s de duración de la desventaja"
            },
            {
              "tier": 3,
              "text": "+8 de daño y -1 % de resistencia a balas por mordisco"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/ratking/ratking_swarm.webp",
          "cooldown": 24
        },
        {
          "slot": 3,
          "name": "Royal Pestments",
          "className": "ability_ratking_ratarmor",
          "description": "Ponte tu armadura de chatarra para obtener barrera según tu vida máxima. Mientras la llevas puesta, la armadura puede desviar las balas hacia quien las dispare. Las resistencias no se aplican a la barrera.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-8 s de tiempo de recarga y +15 % de probabilidad de desviar balas"
            },
            {
              "tier": 3,
              "text": "Reduce todo el daño a un máximo de 250 y +10 % de vida máxima como barrera"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/ratking/ratking_shield.webp",
          "cooldown": 22
        },
        {
          "slot": 4,
          "name": "Rule, Ratannia!",
          "className": "ability_ratking_standard_bearer",
          "description": "Embiste e invoca la bandera de Ratannia para otorgar velocidad de movimiento aumentada, inmunidad a las ralentizaciones y reducción del daño recibido a todos los aliados cercanos mientras estén cerca de la bandera.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+2m Move Speed -25s Cooldown"
            },
            {
              "tier": 2,
              "text": "+5 s de duración de la bandera y +8 m de radio"
            },
            {
              "tier": 3,
              "text": "+150 de daño y +10 % de reducción del daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/ratking/ratking_flag.webp",
          "cooldown": 180
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 75.6,
            "winratePct": 61.5
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 63.3,
            "winratePct": 62.1
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 42.1,
            "winratePct": 61.7
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 40,
            "winratePct": 61.6
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 34.7,
            "winratePct": 61.3
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.4,
            "winratePct": 61.2
          }
        ],
        "mid": [
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 60.3,
            "winratePct": 62
          },
          {
            "id": 3585132399,
            "name": "Fortitude",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 52.1,
            "winratePct": 63
          },
          {
            "id": 709540378,
            "name": "Cultist Sacrifice",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.6,
            "winratePct": 61.7
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 35.3,
            "winratePct": 61.3
          },
          {
            "id": 3403085434,
            "name": "Fleetfoot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 33.7,
            "winratePct": 62.2
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 31.2,
            "winratePct": 61.3
          }
        ],
        "late": [
          {
            "id": 1414319208,
            "name": "Berserker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 38.7,
            "winratePct": 60.5
          },
          {
            "id": 1250307611,
            "name": "Juggernaut",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 32.8,
            "winratePct": 59.3
          },
          {
            "id": 1282141666,
            "name": "Siphon Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 32,
            "winratePct": 64
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.7,
            "winratePct": 58.4
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.5,
            "winratePct": 61.4
          },
          {
            "id": 3294954488,
            "name": "Ballistic Enchantment",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 24.5,
            "winratePct": 59.1
          }
        ]
      },
      "winrate": 55.6,
      "pickrate": 4.4,
      "matches": 3261063
    },
    {
      "id": 79,
      "name": "Rem",
      "className": "hero_familiar",
      "type": "unknown",
      "typeLabel": "Versátil",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/familiar_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/familiar_bg.webp",
      "tags": [
        "Helpful",
        "Tiny",
        "zZzzZ"
      ],
      "gunTag": "",
      "role": "",
      "playstyle": "",
      "lore": "Rem, un polizón accidental del mundo de los sueños, se encuentra atrapado en la ciudad que nunca duerme. Guiado por su naturaleza curiosa, Rem y sus serviciales amigos han sido vistos deambulando por los cinco distritos en busca de una forma de volver a casa. Así que, si alguna vez te quedas medio dormido mientras vuelves del trabajo en la línea azul, es posible que acabes de tener un encuentro con uno de los nuevos habitantes de la Manzana Maldita.",
      "stats": [
        {
          "label": "Salud",
          "value": "680"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "4"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "58"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Pillow Toss",
          "className": "ability_familiar_ability02",
          "description": "Lanza tu fiel almohada, que inflige daño espiritual y lanza hacia atrás de manera intensa. Acertar en los enemigos reduce el tiempo de recarga del resto de tus habilidades.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+2 m de radio y aplica -35 % de cadencia de tiro"
            },
            {
              "tier": 3,
              "text": "+100 de daño y +1 carga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_pillow.webp",
          "cooldown": 25
        },
        {
          "slot": 2,
          "name": "Tag Along",
          "className": "ability_familiar_attach",
          "description": "Salta a un aliado y échate una siesta junto a él. Tanto tú como el aliado recibís una ráfaga de curación según la vida que os falte, seguida de regeneración persistente. Salta entre aliados con Habilidad 2 para aplicar la curación, una vez por aliado. La habilidad se interrumpe si te aturde una habilidad definitiva. Puedes usar objetos y todos los lanzamientos que utilices sobre ti se dirigen a tu aliado.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Aumenta un 35 % el alcance, la duración y la eficacia de las barreras protectoras de los objetos al dormir"
            },
            {
              "tier": 3,
              "text": "+15 % de poder espiritual, +35 de poder espiritual al dormir y durante 10 s tras dormir, y mejora el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_tag_along.webp",
          "cooldown": 40
        },
        {
          "slot": 3,
          "name": "Lil Helpers",
          "className": "ability_familiar_helpinghands",
          "description": "Pide ayuda a uno de tus ayudantes para que recoja cajas, utilice máquinas de Sinner's Sacrifice o vaya a ayudar a los aliados y a los soldados. Seguir a un héroe: Otorga una breve ráfaga de resistencia espiritual y velocidad de movimiento que se desvanece con el tiempo. Seguir a un soldado: Otorga curación, daño y resistencia, y permite ir a cuestas. Cuando no hay ningún héroe cerca, las almas que se obtienen por eliminar a soldados se reparten entre el equipo. Se puede lanzar durante Ir a Cuestas. Los ayudantes se echarán una siesta durante 15.1 s tras seguir a alguien.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1 ayudante y +1.5 m/s de velocidad de movimiento"
            },
            {
              "tier": 2,
              "text": "+1 ayudante y +15 % de daño y resistencia con soldados"
            },
            {
              "tier": 3,
              "text": "+1 ayudante y +15 % de resistencia espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_helpers.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Naptime",
          "className": "ability_familiar_ability01",
          "description": "Dirige tu mirada hacia delante, atravesando paredes y suelos. Los enemigos a los que alcanza la mirada quedan ralentizados, su distancia de impulso se reduce y no pueden usar habilidades de movimiento. Cuando finaliza la canalización, se quedan dormidos y despiertan con un dolor de cabeza punzante que les inflige una gran cantidad de daño espiritual.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-1 de aguante al despertarse y sin regeneración del aguante al dormir"
            },
            {
              "tier": 2,
              "text": "+3 m de radio y +0.75 s de duración del sueño"
            },
            {
              "tier": 3,
              "text": "-55 s de tiempo de recarga, y reduce el daño y te vuelves imparable al canalizar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/familiar/familiar_sleep.webp",
          "cooldown": 200
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 67.6,
            "winratePct": 48.2
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 40.4,
            "winratePct": 48.6
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 28,
            "winratePct": 46
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.5,
            "winratePct": 49.3
          },
          {
            "id": 1672893796,
            "name": "Grit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.1,
            "winratePct": 48
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 21.6,
            "winratePct": 48.5
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.2,
            "winratePct": 50.2
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 35.9,
            "winratePct": 48.2
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 34.8,
            "winratePct": 47.3
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.9,
            "winratePct": 47.6
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.9,
            "winratePct": 48.6
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 24.5,
            "winratePct": 48.8
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 39.7,
            "winratePct": 52.1
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.6,
            "winratePct": 48.1
          },
          {
            "id": 1427630806,
            "name": "Healing Tempo",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 36,
            "winratePct": 52.4
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33,
            "winratePct": 49.3
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31.6,
            "winratePct": 50.6
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 30.5,
            "winratePct": 49.3
          }
        ]
      },
      "winrate": 45.4,
      "pickrate": 2.7,
      "matches": 1973627
    },
    {
      "id": 2,
      "name": "Seven",
      "className": "hero_gigawatt",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/gigawatt_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/seven_bg.webp",
      "tags": [
        "High Voltage",
        "Merciless",
        "Area Denial"
      ],
      "gunTag": "Burst Fire",
      "role": "Electrocuta a montones de enemigos",
      "playstyle": "Siete disfruta metiéndose en escaramuzas y esperando el momento para atacar. Entonces, se lanza a la lucha como una tormenta y golpea a sus enemigos con una cascada de relámpagos.",
      "lore": "Cuando la energía mística despertó en la Tierra, el mundo cambió... Todo era posible. Pero el hecho de que todo fuera posible no significaba que todo debiera ser posible. Y así, el gobierno creó reglas. Leyes. Un medio para que los ciudadanos estadounidenses disfrutasen de los beneficios del mundo sobrenatural con seguridad. Pero las reglas y las leyes son para hombres de poca monta. Hombres con limitaciones. Hombres que no eran Siete. Hay muchos rumores sobre lo que Siete hizo para terminar en Lost Whisper, una prisión subterránea para los ocultistas más peligrosos. Pero no hay duda sobre lo que ocurrió la noche de su ejecución. Los vigilantes colocados por los ritualistas más poderosos de 7 naciones diferentes… los vigilantes preparados no solo para evitar interferencias místicas en la ejecución, sino también para destruir simultáneamente el alma de Siete y que nadie que quisiera seguir sus pasos pudiera contactar con él, resucitarle o usarlo de otro modo... fracasaron. Los espectadores vieron con horror cómo le reventaba la cabeza como si nada al mentalista más poderoso contratado por el ejército estadounidense. Gritaron mientras el principal investigador ocultista de Scotland Yard, el que supuestamente había capturado a Siete, se convertía en cenizas. El cuerpo de Siete se retorcía y se rebelaba contra sus ataduras; su piel ardía debido a una electricidad sobrenatural... y, sin embargo, no quería morir. Se rió. Se rió mientras se liberaba de su cautiverio. Se rió mientras sus captores se encogían de miedo. Se rió mientras masacraba a sus verdugos. Se rió mientras probaba el aire fresco que se le había negado durante años. Y se rió cuando pensó en lo que iba a hacer una vez que llegase a la ciudad de Nueva York.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "1.8"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Lightning Ball",
          "className": "citadel_ability_lightning_ball",
          "description": "Dispara una esfera de electricidad que viaja en línea recta e inflige daño a todos los enemigos que se encuentren dentro de su radio. Su velocidad se reduce al infligir daño a los enemigos y se detiene si choca contra algún elemento del escenario.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-28 % de velocidad de movimiento para los objetivos alcanzados y +1 s de duración"
            },
            {
              "tier": 3,
              "text": "+58.5 de DPS y +1.75 m de radio"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_ball.webp",
          "cooldown": 26
        },
        {
          "slot": 2,
          "name": "Static Charge",
          "className": "citadel_ability_static_charge",
          "description": "Aplica una carga a un héroe enemigo objetivo. Tras un breve período de tiempo, la carga estática aturde e inflige daño a los enemigos que se encuentren en el radio.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+7 m de radio y +5 m de alcance de lanzamiento"
            },
            {
              "tier": 3,
              "text": "+1.1 s de duración del aturdimiento y +160 de daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_static.webp",
          "cooldown": 42
        },
        {
          "slot": 3,
          "name": "Power Surge",
          "className": "ability_power_surge",
          "description": "Potencia tu arma con un efecto eléctrico, haciendo que tus balas inflijan daño eléctrico en tu objetivo. El daño eléctrico rebota a los enemigos que estén cerca de tu objetivo una vez por ráfaga.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+3 m de velocidad de movimiento, +8 de daño y escalado aumentado"
            },
            {
              "tier": 3,
              "text": "+10 s de duración y aplica un -15 % de resistencia espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_chain.webp",
          "cooldown": 50
        },
        {
          "slot": 4,
          "name": "Storm Cloud",
          "className": "citadel_ability_storm_cloud",
          "description": "Canaliza una nube de tormenta que se expande a tu alrededor y que inflige daño a todos los enemigos que estén dentro de su radio. Los enemigos no reciben daño cuando están fuera de la línea de visión.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+55 % de resistencia a balas al canalizar Nube de Tormenta"
            },
            {
              "tier": 2,
              "text": "+7 s de tiempo de canalización, +10 m de radio final y +5 m de radio inicial"
            },
            {
              "tier": 3,
              "text": "+65.0 de DPS y +4 m/s de velocidad de vuelo"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/giga_storm.webp",
          "cooldown": 205
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 64.3,
            "winratePct": 55.3
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 43.8,
            "winratePct": 55.5
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 33,
            "winratePct": 56.1
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 29.2,
            "winratePct": 55.7
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 21.2,
            "winratePct": 57.4
          },
          {
            "id": 1150006784,
            "name": "Arcane Surge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 19.3,
            "winratePct": 57.4
          }
        ],
        "mid": [
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 53,
            "winratePct": 57.5
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 48.6,
            "winratePct": 57
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 41.9,
            "winratePct": 57.3
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.9,
            "winratePct": 57.1
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 37.3,
            "winratePct": 55.8
          },
          {
            "id": 709540378,
            "name": "Cultist Sacrifice",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.9,
            "winratePct": 55.3
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 64.8,
            "winratePct": 57.3
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 44.4,
            "winratePct": 58.5
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.1,
            "winratePct": 55.9
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.4,
            "winratePct": 56.5
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.8,
            "winratePct": 56.4
          },
          {
            "id": 3357231760,
            "name": "Unstoppable",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 30.6,
            "winratePct": 58.3
          }
        ]
      },
      "winrate": 55,
      "pickrate": 2.8,
      "matches": 2076761
    },
    {
      "id": 19,
      "name": "Shiv",
      "className": "hero_shiv",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/shiv_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/shiv_bg.webp",
      "tags": [
        "Rage",
        "Bleed",
        "Repeat"
      ],
      "gunTag": "Spreadshot",
      "role": "Hace sangrar a los enemigos y luego los mata",
      "playstyle": "El Navajas no tiene ningún interés en jugar limpio, por lo que confía en tácticas de ataque y huida para debilitar a los enemigos antes de lanzarse a matarlos.",
      "lore": "Como miembro leal de «La Sociedad Baxter», una orden internacional de cazadores de monstruos, el Navajas viaja por Norteamérica buscando acabar con las criaturas que acechan a los vivos. Si bien su carácter menos refinado y su pasado criminal hacen que algunos de los miembros más tradicionales de la Sociedad se muestren cautelosos, nadie puede negar su eficacia.",
      "stats": [
        {
          "label": "Salud",
          "value": "830"
        },
        {
          "label": "Velocidad",
          "value": "6.5"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Serrated Knives",
          "className": "citadel_ability_shiv_dagger",
          "description": "Lanza un cuchillo que hace sangrar a un enemigo. Cada impacto adicional añade una acumulación y restablece la duración del sangrado, lo que hace que el sangrado aumente por acumulación.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+2 carga(s)"
            },
            {
              "tier": 3,
              "text": "+12.0 de DPS por sangrado con escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_toss.webp",
          "cooldown": 16
        },
        {
          "slot": 2,
          "name": "Slice and Dice",
          "className": "citadel_ability_shiv_dash",
          "description": "Impúlsate hacia adelante e inflige daño a los enemigos que encuentres por el camino. La resistencia espiritual de los enemigos alcanzados se reduce. Esta desventaja se puede acumular.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-4 % de resistencia espiritual y +2 m de alcance del impulso"
            },
            {
              "tier": 3,
              "text": "+50 de daño por impacto y -2 s de tiempo de recarga por héroe alcanzado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_flash.webp",
          "cooldown": 16
        },
        {
          "slot": 3,
          "name": "Bloodletting",
          "className": "citadel_ability_shiv_defer_damage",
          "description": "Solo recibes una parte del daño de forma inmediata y difiere el resto para recibirlo a lo largo del tiempo. Actívala para eliminar una parte del daño diferido.",
          "upgrades": [],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_bloodletting.webp",
          "cooldown": 25
        },
        {
          "slot": 4,
          "name": "Killing Blow",
          "className": "citadel_ability_shiv_killing_blow",
          "description": "Pasiva: Infligir daño a los enemigos te llena de furia. Con el máximo de furia, El Navajas inflige más daño y desbloquea propiedades especiales en sus otras habilidades. Activa: Salta hacia adelante e inflige daño espiritual al primer héroe enemigo. Si su vida está por debajo del umbral para matar, en lugar de infligir daño, lo matas. Acabar con un enemigo con Tajo Mortal te permite volver a lanzar la habilidad durante 12 s.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+6 m de alcance y +2 m/s con el máximo de furia"
            },
            {
              "tier": 2,
              "text": "+16 % de daño adicional con el máximo de furia y -25 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+10 % de umbral de vida de los enemigos"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/shiv/shiv_killing_blow.webp",
          "cooldown": 145
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 62.6,
            "winratePct": 46
          },
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.4,
            "winratePct": 43.8
          },
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 53.2,
            "winratePct": 43.5
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 32.5,
            "winratePct": 46.8
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.2,
            "winratePct": 46.4
          },
          {
            "id": 1235347618,
            "name": "Battle Vest",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.1,
            "winratePct": 45.3
          }
        ],
        "mid": [
          {
            "id": 2947183272,
            "name": "Radiant Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 79.5,
            "winratePct": 44.8
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 42.3,
            "winratePct": 44.9
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 34.9,
            "winratePct": 46.9
          },
          {
            "id": 1235347618,
            "name": "Battle Vest",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.4,
            "winratePct": 42.4
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 27.3,
            "winratePct": 42.7
          },
          {
            "id": 2971868509,
            "name": "Bullet Resist Shredder",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.8,
            "winratePct": 43.2
          }
        ],
        "late": [
          {
            "id": 3812615317,
            "name": "Arctic Blast",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 30.5,
            "winratePct": 47.5
          },
          {
            "id": 690458959,
            "name": "Express Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.9,
            "winratePct": 41.5
          },
          {
            "id": 1414319208,
            "name": "Berserker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.1,
            "winratePct": 46.4
          },
          {
            "id": 1396247347,
            "name": "Lucky Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 26.1,
            "winratePct": 50.8
          },
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 23.9,
            "winratePct": 51.4
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 22.9,
            "winratePct": 44.1
          }
        ]
      },
      "winrate": 44.9,
      "pickrate": 2.2,
      "matches": 1633267
    },
    {
      "id": 80,
      "name": "Silver",
      "className": "hero_werewolf",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/werewolf_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/werewolf_bg.webp",
      "tags": [
        "Feral",
        "Hot Mess",
        "Transformation"
      ],
      "gunTag": "Long Range",
      "role": "",
      "playstyle": "",
      "lore": "Lilah Silver es un desastre. Bebe demasiado, fuma demasiado y, cuanto menos se diga de su vida personal, mejor. Pero, pese a todos sus defectos, Silver ha conseguido labrarse una carrera de éxito como cazarrecompensas y, aunque le gusta pensar que sus logros se deben únicamente a su increíble intuición, el hecho de ser una mujer lobo tampoco le ha venido mal.",
      "stats": [
        {
          "label": "Salud",
          "value": "830"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "2.5"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "3"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Slam Fire",
          "className": "ability_werewolf_unloadgun",
          "description": "Recarga instantáneamente tu arma. Obtienes cadencia de tiro adicional e infliges daño del arma adicional en función de la vida del objetivo durante un número limitado de disparos, pero la precisión se reduce. Inflige daño del arma adicional contra soldados y neutrales.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Si aciertas todos los disparos, inflige +7 % de la vida actual como daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_slamfire.webp",
          "cooldown": 25
        },
        {
          "slot": 2,
          "name": "Boot Kick",
          "className": "ability_werewolf_kickflip",
          "description": "",
          "upgrades": [
            {
              "tier": 2,
              "text": "Al alcanzar a un héroe, restaura 2 de aguante"
            },
            {
              "tier": 3,
              "text": "+80 de daño adicional y los enemigos pateados infligen un -35 % de daño durante 5 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_jumpback.webp",
          "cooldown": 21
        },
        {
          "slot": 3,
          "name": "Entangling Bola",
          "className": "ability_werewolf_netshot",
          "description": "Lanza una boleadora que inflige daño espiritual, aplica ralentización e impide usar habilidades de movimiento o aguante.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+0.75 s de duración de la desventaja y la boleadora rebota en 2 objetivos adicionales"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_bola.webp",
          "cooldown": 23
        },
        {
          "slot": 4,
          "name": "Lycan Curse",
          "className": "ability_werewolf_transformation",
          "description": "Pasiva: Infligir daño genera sed de sangre, que aumenta cuando tienes poca vida. Al alcanzar el máximo de sed de sangre, lanzas automáticamente Maldición Licántropa. Activa: Te transformas al instante, obteniendo un aumento de vida máxima y cadencia de tiro acumulable al atacar a héroes enemigos, y sustituyendo tus habilidades y tu arma por sus versiones feroces.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+15 % de resistencia a balas y espiritual"
            },
            {
              "tier": 2,
              "text": "+4 m/s de velocidad de movimiento y 200 de vida adicional"
            },
            {
              "tier": 3,
              "text": "Restablece las habilidades y la duración al matar a un héroe"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/werewolf/werewolf_lycancurse.webp",
          "cooldown": 60
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 81.5,
            "winratePct": 47.6
          },
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 67.1,
            "winratePct": 47.8
          },
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 58.9,
            "winratePct": 48.1
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.9,
            "winratePct": 49.4
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 31.8,
            "winratePct": 48.1
          },
          {
            "id": 1672893796,
            "name": "Grit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 13.4,
            "winratePct": 47.8
          }
        ],
        "mid": [
          {
            "id": 393974127,
            "name": "Slowing Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.1,
            "winratePct": 48
          },
          {
            "id": 1252627263,
            "name": "Lifestrike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 47.5,
            "winratePct": 48.5
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 41.8,
            "winratePct": 51.6
          },
          {
            "id": 3791587546,
            "name": "Weighted Shots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.4,
            "winratePct": 50.2
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28,
            "winratePct": 48.5
          },
          {
            "id": 1813726886,
            "name": "Slowing Hex",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.7,
            "winratePct": 48.8
          }
        ],
        "late": [
          {
            "id": 1414319208,
            "name": "Berserker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 46.8,
            "winratePct": 50.5
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.3,
            "winratePct": 48.1
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 32.6,
            "winratePct": 50.7
          },
          {
            "id": 339443430,
            "name": "Frenzy",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 26.2,
            "winratePct": 56.6
          },
          {
            "id": 3357231760,
            "name": "Unstoppable",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 23.3,
            "winratePct": 51.8
          },
          {
            "id": 3791587546,
            "name": "Weighted Shots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 22.7,
            "winratePct": 46
          }
        ]
      },
      "winrate": 46.1,
      "pickrate": 2.6,
      "matches": 1936011
    },
    {
      "id": 60,
      "name": "Sinclair",
      "className": "hero_magician",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 4,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/magician_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/magician_bg.webp",
      "tags": [
        "Trickster",
        "Copycat",
        "Versatile"
      ],
      "gunTag": "Burst Fire",
      "role": "Engaña y hechiza a los enemigos",
      "playstyle": "Junto a su reticente ayudante, <i>El Magnífico Sinclair</i> confunde a los enemigos con hechizos dirigidos y rayos veloces.",
      "lore": "Los padres de Henry le dijeron que era demasiado joven e impulsivo para enredar con magia de verdad, así que le dieron una baraja de cartas con la que jugar. Resultó ser un as de la prestidigitación y no tardó en dejar boquiabiertos a sus compañeros de clase con fantásticas ilusiones realizadas sin encantamientos ni artefactos místicos. En el instituto conoció a Savannah, con quien inició un turbulento romance desencadenado por su amor compartido por la magia como espectáculo. No tardaron en enamorarse y crear un número juntos. Era obvio que estaban predestinados, así que, al graduarse, Henry le pidió matrimonio a Savannah y se casaron poco tiempo después. Evidentemente, sus respectivos padres no se mostraron muy entusiastas, pero Henry y Savannah sabían que eran almas gemelas, así que sellaron su amor mutuo con un ritual místico de sangre que vincularía sus almas para toda la eternidad. Nadie supo con seguridad a quién culpar cuando un accidente sobre el escenario se llevó la vida de ambos. Henry asegura que Savannah no estaba en su posición. Savannah dice que Henry no esperó a la señal. La única certeza es que, como sus almas están unidas, ninguno de ellos ha podido pasar página. Henry y Savannah, ahora convertidos en fantasmas en constante disputa, deben colaborar si quieren tener alguna oportunidad de deshacer su unión eterna.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Vexing Bolt",
          "className": "ability_magician_magicbolt",
          "description": "Lanza un rayo mágico que inflige daño que aumenta a medida que hace su recorrido. Si tienes ayudante, también lanza Rayo Persecutorio con daño reducido. Pulsa Habilidad 1 para redirigir el rayo a través de la mira.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Los rayos aplican -25 % de cadencia de tiro durante 5 s"
            },
            {
              "tier": 3,
              "text": "+126.0 de daño máximo y +50.0 % de daño de la ayudante"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_magicbolt.webp",
          "cooldown": 24
        },
        {
          "slot": 2,
          "name": "Spectral Assistant",
          "className": "ability_magician_cloneturret",
          "description": "Invoca una ayudante en la ubicación seleccionada que ataca e inflige daño cada vez que disparas tu arma. Pulsa Habilidad 2 para intercambiar tu posición con la de la ayudante. Lanzar Ayudante Espectral también recarga tu arma.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+7 s de duración y 5 m de alcance"
            },
            {
              "tier": 3,
              "text": "+60 % de cadencia de tiro y +12.599999 de daño de la ayudante"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_cloneturret.webp",
          "cooldown": 40
        },
        {
          "slot": 3,
          "name": "Rabbit Hex",
          "className": "ability_magician_animalhexarea",
          "description": "Hechiza un área objetivo y transforma a todos los enemigos en conejos durante un período de tiempo limitado. Los conejos son pequeños y se mueven más rápido, pero reciben daño adicional y no pueden realizar la mayoría de las acciones. El hechizo no interrumpe las habilidades.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+7 % de amplificación de daño y +2 m de radio"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_animalcurse.webp",
          "cooldown": 26
        },
        {
          "slot": 4,
          "name": "Audience Participation",
          "className": "ability_magician_copyult",
          "description": "Copia la habilidad definitiva de un héroe enemigo durante un tiempo limitado. Volver a activar la habilidad usará la definitiva copiada en su lugar. Las copias heredarán los puntos de mejora de dicha habilidad. Participación del Público también copiará el tiempo de recarga.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Mejora la copia"
            },
            {
              "tier": 2,
              "text": "¡Mejora la copia OTRA VEZ!"
            },
            {
              "tier": 3,
              "text": "¡Mejora la copia UNA VEZ MÁS!"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/magician/magician_copyult.webp",
          "cooldown": 85
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 68.1,
            "winratePct": 43
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 62.1,
            "winratePct": 42.9
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 50.4,
            "winratePct": 42.4
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.4,
            "winratePct": 42.6
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.4,
            "winratePct": 44.3
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 20.3,
            "winratePct": 42.4
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 56.5,
            "winratePct": 42.6
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 50.3,
            "winratePct": 43.5
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40,
            "winratePct": 41.7
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.1,
            "winratePct": 43.5
          },
          {
            "id": 865958998,
            "name": "Veil Walker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 29.6,
            "winratePct": 44.3
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.8,
            "winratePct": 44.5
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 57,
            "winratePct": 43.6
          },
          {
            "id": 2717651715,
            "name": "Superior Duration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 53.4,
            "winratePct": 44.7
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 50.4,
            "winratePct": 45.8
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 43.2,
            "winratePct": 45.9
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 28.7,
            "winratePct": 49.6
          },
          {
            "id": 2951612397,
            "name": "Duration Extender",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.6,
            "winratePct": 42.8
          }
        ]
      },
      "winrate": 44.7,
      "pickrate": 0.9,
      "matches": 631066
    },
    {
      "id": 85,
      "name": "Solomon",
      "className": "hero_chessmaster",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chessmaster_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/chessmaster_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/chessmaster_bg.webp",
      "tags": [
        "Strategist",
        "Focused",
        "Checkmate"
      ],
      "gunTag": "Projectile",
      "role": "",
      "playstyle": "",
      "lore": "En un mundo que se mueve demasiado rápido, Salomón se conforma con detenerse y escuchar. Amable y buen consejero, Salomón ha tenido la oportunidad de jugar al ajedrez con turistas, delincuentes y peces gordos del sector. Pero, sea quien sea su rival, Salomón no se inmuta… porque, para él, el ajedrez es mucho más que un juego. Es un ecualizador. Una forma de conectar con gente de todo tipo en igualdad de condiciones.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "6.7"
        },
        {
          "label": "Sprint",
          "value": "3.25"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Setup Bishop",
          "className": "ability_chessmaster_throwbishop",
          "description": "Crea un alfil que permanece colocado de forma indefinida. Mover ( ): Mueve el alfil para aplicar una ralentización decreciente e infligir daño espiritual a los enemigos que atraviesa. Tras un retraso, activa casillas en diagonal que infligen daño espiritual adicional al pisarlas. Reactívala para retirar todos los alfiles y finalizar la habilidad.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+5 m de distancia de desplazamiento y +25 % de ralentización decreciente"
            },
            {
              "tier": 2,
              "text": "+1 pieza(s) como máximo y puede volver a lanzarse al cabo de 8 s"
            },
            {
              "tier": 3,
              "text": "+1 de alcance de las casillas y los impactos reducen la resistencia espiritual un -5 %, acumulándose hasta 5 veces"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chess/chessmaster_bishop.webp",
          "cooldown": 12
        },
        {
          "slot": 2,
          "name": "Kingside Knight",
          "className": "ability_chessmaster_knightbuff",
          "description": "Elige a un aliado para convertirlo en caballo, concediendo aguante adicional y barrera mientras dure el efecto. Al lanzar la habilidad sobre uno mismo, te conviertes en rey, concediendo el doble de barrera, pero no aguante. Mover ( ): Mueve la pieza, haciendo que sea invulnerable hasta que aterriza. Si la lanzas sobre ti mismo⁠/⁠a, reactivas la habilidad para moverte en su lugar.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+80 de barrera y +1 de aguante"
            },
            {
              "tier": 3,
              "text": "Puede aplicarse a dos aliados dentro del radio y elimina todas las desventajas al aplicarse a uno mismo después de mover pieza"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chess/chessmaster_knight.webp",
          "cooldown": 25
        },
        {
          "slot": 3,
          "name": "Rook Battery",
          "className": "ability_chessmaster_forkpiece",
          "description": "Suelta un par de torres que se desplazan hacia delante, infligiendo daño espiritual y aplicando inmovilización. Si las torres impactan contra una pared, rebotan en la dirección contraria. Reactivar: Divide las torres perpendicularmente.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al impactar, reduce la cadencia de tiro un 25 % durante 5 s"
            },
            {
              "tier": 2,
              "text": "Al impactar, inflige un 5 % de la vida actual como daño"
            },
            {
              "tier": 3,
              "text": "+1 rebotes contra paredes, -10 s de tiempo de recarga y +0.5 s de inmovilización"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chess/chessmaster_rook.webp",
          "cooldown": 33
        },
        {
          "slot": 4,
          "name": "Develop Queen",
          "className": "ability_chessmaster_queen",
          "description": "",
          "upgrades": [
            {
              "tier": 2,
              "text": "+15 % de ralentización y +150 de umbral del jaque mate"
            },
            {
              "tier": 3,
              "text": "+2 movimiento(s) y +1 de alcance de las casillas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/chess/chessmaster_queen.webp",
          "cooldown": 240
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 53.2,
            "winratePct": 60
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 53.2,
            "winratePct": 56
          },
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 44.7,
            "winratePct": 71.4
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 40.4,
            "winratePct": 57.9
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 38.3,
            "winratePct": 66.7
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 38.3,
            "winratePct": 50
          }
        ],
        "mid": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 59.6,
            "winratePct": 64.3
          },
          {
            "id": 4139877411,
            "name": "Extra Stamina",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 53.2,
            "winratePct": 60
          },
          {
            "id": 380806748,
            "name": "Compress Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 48.9,
            "winratePct": 52.2
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 46.8,
            "winratePct": 59.1
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 42.6,
            "winratePct": 65
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.4,
            "winratePct": 63.2
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 61.7,
            "winratePct": 51.7
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 38.3,
            "winratePct": 50
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.2,
            "winratePct": 52.9
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.7,
            "winratePct": 46.2
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 21.3,
            "winratePct": 60
          },
          {
            "id": 493591231,
            "name": "Lightning Scroll",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 21.3,
            "winratePct": 70
          }
        ]
      },
      "winrate": 46.8,
      "pickrate": 1.6,
      "matches": 1201737
    },
    {
      "id": 69,
      "name": "The Doorman",
      "className": "hero_doorman",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/doorman_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/doorman_bg.webp",
      "tags": [
        "Disorienting",
        "Map Control",
        "Mind Games"
      ],
      "gunTag": "Pistol",
      "role": "",
      "playstyle": "",
      "lore": "Es correcto, es educado... pero el humilde portero del Hotel Baroness no es lo que parece. Aunque su intención era probar la vida en este plano solo durante unas cuantas semanas, El Portero no tardó en darse cuenta de que el sector neoyorquino de la hostelería era ideal para descubrir las curiosas exigencias que complacen a los humanos.",
      "stats": [
        {
          "label": "Salud",
          "value": "755"
        },
        {
          "label": "Velocidad",
          "value": "7.9"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Call Bell",
          "className": "ability_doorman_bomb",
          "description": "Lanza una campana que inflige daño espiritual al impactar y explota tras un breve tiempo de retraso, causando daño espiritual adicional y haciendo que los enemigos afectados vean reducida la precisión de sus armas y sufran ralentización de movimiento. Se le puede disparar para detonarla antes de tiempo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1 carga"
            },
            {
              "tier": 2,
              "text": "+30 de daño por impacto y +40 de daño por explosión"
            },
            {
              "tier": 3,
              "text": "+4.5 m de radio, +26 s de duración de la campana y escalado mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_bell.webp",
          "cooldown": 18
        },
        {
          "slot": 2,
          "name": "Doorway",
          "className": "ability_doorman_doorway",
          "description": "Coloca dos puertas conectadas en el mundo. Los jugadores y la mayoría de los proyectiles que entren por una puerta saldrán por la otra. Las puertas se cerrarán al final de la duración. Las dos puertas solo pueden colocarse a cierta distancia entre sí.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Otorga una barrera al atravesar las puertas por primera vez"
            },
            {
              "tier": 3,
              "text": "+30 m de alcance de lanzamiento, +40 m de distancia entre las puertas y aumenta con el poder espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_doorway.webp",
          "cooldown": 45
        },
        {
          "slot": 3,
          "name": "Luggage Cart",
          "className": "ability_doorman_luggage_cart",
          "description": "Envía un carrito de equipaje que inflige daño espiritual y arrastra a los héroes enemigos a lo largo de su trayectoria. Se puede usar de manera alternativa con para seleccionar como objetivo a los héroes aliados.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+25 m de alcance de lanzamiento y +90 de daño al chocar contra un muro"
            },
            {
              "tier": 3,
              "text": "-18 s de tiempo de recarga y 1.25 s de aturdimiento al chocar contra un muro"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_luggagetrolley.webp",
          "cooldown": 30
        },
        {
          "slot": 4,
          "name": "Hotel Guest",
          "className": "ability_doorman_hotel",
          "description": "Envía el cuerpo físico del objetivo a hospedarse en el Hotel Baroness. El huésped debe dirigirse inmediatamente al ascensor de salida para volver a su posición original. La estancia en el Hotel Baroness se paga en daño espiritual. No hacer el registro de salida a tiempo cuesta daño espiritual adicional.",
          "upgrades": [
            {
              "tier": 1,
              "text": "1 de drenaje del aguante y -20 s de tiempo de recarga"
            },
            {
              "tier": 2,
              "text": "+150 de daño y +1.5 s de aturdimiento al no salir a tiempo"
            },
            {
              "tier": 3,
              "text": "Eres imparable mientras el hotel está ocupado y 15 s de tiempo de recarga al no salir a tiempo"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/doorman/doorman_elevator.webp",
          "cooldown": 140
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 54.9,
            "winratePct": 45.8
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 52.2,
            "winratePct": 45.9
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 43.6,
            "winratePct": 44.6
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.8,
            "winratePct": 46.7
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.7,
            "winratePct": 45.1
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 28.6,
            "winratePct": 46.2
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 45.3,
            "winratePct": 46.2
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 37.8,
            "winratePct": 44.2
          },
          {
            "id": 1813726886,
            "name": "Slowing Hex",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.9,
            "winratePct": 45
          },
          {
            "id": 3074274290,
            "name": "Trophy Collector",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 29.9,
            "winratePct": 45.4
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.6,
            "winratePct": 46.3
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.4,
            "winratePct": 48.3
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 49.8,
            "winratePct": 49.9
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.6,
            "winratePct": 45.5
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.3,
            "winratePct": 45.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 39.5,
            "winratePct": 47.5
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 35.9,
            "winratePct": 49.3
          },
          {
            "id": 3361811174,
            "name": "Cheat Death",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 35,
            "winratePct": 49.8
          }
        ]
      },
      "winrate": 45.8,
      "pickrate": 1.3,
      "matches": 996642
    },
    {
      "id": 65,
      "name": "Venator",
      "className": "hero_priest",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/priest_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/priest_bg.webp",
      "tags": [
        "Devout",
        "Arms Expert",
        "Tactical"
      ],
      "gunTag": "Crossbow",
      "role": "",
      "playstyle": "",
      "lore": "Los Venator de San Benito son una orden autorizada por el Vaticano, cuyos miembros se despliegan en regiones con una alta concentración de depredadores sobrenaturales. Escasos en número, su modus operandi consiste en observar, identificar y exterminar. Son metódicos, precisos y, una vez detectan una amenaza para el rebaño, no se detienen. Pero incluso entre quienes son conocidos como la Espada de San Benito, hay uno que destaca por encima del resto. Un hombre cuyo corazón endurecido le ha permitido pagar precios terribles en nombre del bien mayor… y a quien una vez más han enviado a Nueva York.",
      "stats": [
        {
          "label": "Salud",
          "value": "820"
        },
        {
          "label": "Velocidad",
          "value": "6.4"
        },
        {
          "label": "Sprint",
          "value": "1"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "125"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Consecrating Grenade",
          "className": "ability_priest_flashbang",
          "description": "Dispara una granada que rebota antes de explotar, infligiendo daño del arma y prendiendo fuego a los enemigos. Los objetivos en llamas infligen daño puro a los enemigos que se encuentren en el área y su curación se ve reducida.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+1.5 m de radio y +1.0 s de duración de la quemadura"
            },
            {
              "tier": 3,
              "text": "-20 % de curación recibida y permite que la habilidad tenga cargas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_grenade.webp",
          "cooldown": 25
        },
        {
          "slot": 2,
          "name": "Gutshot",
          "className": "ability_priest_knockback",
          "description": "Dispara un escopetazo que inflige daño del arma y empuja a los enemigos hacia atrás. Los enemigos que estén cerca de un muro reciben aturdimiento y daño adicional del arma.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-10 s de tiempo de recarga de la habilidad y +0.4 s de duración del aturdimiento"
            },
            {
              "tier": 3,
              "text": "Tras un aturdimiento contra un muro, tu próximo ataque cuerpo a cuerpo pesado queda bendecido"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_shotgun.webp",
          "cooldown": 23
        },
        {
          "slot": 3,
          "name": "Hex-Lined Snap Trap",
          "className": "ability_priest_beartrap",
          "description": "Lanza una trampa que se activa tras un breve retraso. La trampa se activa con el primer enemigo que la toca, infligiendo daño espiritual, aplicando inmovilización y revelando a los enemigos durante un tiempo.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+1 carga e infliges +30 % de daño contra los objetivos revelados"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_trap.webp",
          "cooldown": 28
        },
        {
          "slot": 4,
          "name": "Ira Domini",
          "className": "ability_priest_weaponswap",
          "description": "Carga tu ballesta con 3 estacas, infligiendo un aumento masivo de daño del arma. La última estaca está bendecida, inflige daño puro adicional y ejecuta a los enemigos con poca vida.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Obtienes 1.2 m/s de velocidad de movimiento mientras esté activa"
            },
            {
              "tier": 2,
              "text": "-15 s de tiempo de recarga de la habilidad y +65 de daño adicional"
            },
            {
              "tier": 3,
              "text": "Todas las estacas están bendecidas"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/priest/priest_crossbow.webp",
          "cooldown": 160
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 68.5,
            "winratePct": 47
          },
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 60.7,
            "winratePct": 47.2
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 27.5,
            "winratePct": 45.6
          },
          {
            "id": 1770441818,
            "name": "Weakening Headshot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 20.3,
            "winratePct": 49.5
          },
          {
            "id": 1235347618,
            "name": "Battle Vest",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 19.8,
            "winratePct": 48.1
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 17.3,
            "winratePct": 45.6
          }
        ],
        "mid": [
          {
            "id": 499683006,
            "name": "Bullet Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 54.6,
            "winratePct": 47.2
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 52,
            "winratePct": 47.6
          },
          {
            "id": 1235347618,
            "name": "Battle Vest",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 48.4,
            "winratePct": 46.5
          },
          {
            "id": 2678489038,
            "name": "Hollow Point",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.1,
            "winratePct": 49.8
          },
          {
            "id": 1770441818,
            "name": "Weakening Headshot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.4,
            "winratePct": 45.7
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 28,
            "winratePct": 47.5
          }
        ],
        "late": [
          {
            "id": 1055679805,
            "name": "Vampiric Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 52,
            "winratePct": 48.6
          },
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 38.4,
            "winratePct": 50.6
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.5,
            "winratePct": 46.8
          },
          {
            "id": 3294954488,
            "name": "Ballistic Enchantment",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27,
            "winratePct": 47.1
          },
          {
            "id": 1113837674,
            "name": "Silencer",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 25.5,
            "winratePct": 54.4
          },
          {
            "id": 1282141666,
            "name": "Siphon Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 25.3,
            "winratePct": 52.4
          }
        ]
      },
      "winrate": 46.8,
      "pickrate": 3.4,
      "matches": 2545146
    },
    {
      "id": 66,
      "name": "Victor",
      "className": "hero_frank",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/frank_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/victor_bg.webp",
      "tags": [
        "You",
        "Can't",
        "Kill Me"
      ],
      "gunTag": "Pistol",
      "role": "",
      "playstyle": "",
      "lore": "Mucha gente se pasa toda la vida preguntándose quiénes son en realidad. Para Víctor, esta duda existencial se complicó aún más cuando se despertó en la camilla de una morgue sin saber quién lo había creado, por qué ni a partir de quién. Ahora, en busca de respuestas por los cinco distritos, Víctor espera encontrar a alguien que pueda identificar alguna parte de él.",
      "stats": [
        {
          "label": "Salud",
          "value": "800"
        },
        {
          "label": "Velocidad",
          "value": "6.3"
        },
        {
          "label": "Sprint",
          "value": "1.1"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "1.5"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Pain Battery",
          "className": "ability_frank_shocktarget2",
          "description": "Recibir daño carga pasivamente tu Batería de Dolor. Una vez llena, activar la habilidad dispara varios rayos eléctricos que infligen daño espiritual una vez por objetivo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al impactar, aplica un 32 % de ralentización durante 2s s"
            },
            {
              "tier": 3,
              "text": "Al alcanzar a un héroe, te cura un 15 % de la vida que te falte y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_pain_battery.webp",
          "cooldown": 2
        },
        {
          "slot": 2,
          "name": "Jumpstart",
          "className": "ability_frank_selfzap",
          "description": "Te inflige daño espiritual y luego obtienes regeneración y bonus move speed adicionales que disminuyen con el tiempo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+70 de regeneración total de vida y -8 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+1 carga, +50 % de resistencia a desventajas y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_jump_start.webp",
          "cooldown": 30
        },
        {
          "slot": 3,
          "name": "Aura of Suffering",
          "className": "ability_frank_painaura",
          "description": "Desata dolor, infligiendo daño espiritual a lo largo del tiempo tanto a los enemigos como a ti mismo⁠/⁠a. El daño sigue aumentando cuanto más tiempo se canalice la habilidad, hasta alcanzar una cantidad máxima.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Los enemigos reciben un 20 % de ralentización de movimiento e impulso"
            },
            {
              "tier": 2,
              "text": "+6 de DPS mínimo y +34.0 de DPS máximo"
            },
            {
              "tier": 3,
              "text": "+1 m de radio y los enemigos reciben +16 % de daño"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_aura_of_suffering.webp",
          "cooldown": 2
        },
        {
          "slot": 4,
          "name": "Shocking Reanimation",
          "className": "ability_frank_revive",
          "description": "Tras recibir daño letal, lanza una onda que aplica una ralentización decreciente. Te reanimas después de una canalización breve, infligiendo daño espiritual y aplicando aturdimiento a los enemigos cercanos.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Durante el tiempo de recarga, obtienes +15 % de cadencia de tiro y 6.0 de daño espiritual por bala"
            },
            {
              "tier": 3,
              "text": "+175 de daño, +1.5 s de aturdimiento y -95.0 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/frank/frank_shocking_reanimation.webp",
          "cooldown": 240
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 82,
            "winratePct": 57.7
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 71.6,
            "winratePct": 57.6
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49.9,
            "winratePct": 58.1
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.2,
            "winratePct": 57.1
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.7,
            "winratePct": 55.9
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 13.3,
            "winratePct": 58.2
          }
        ],
        "mid": [
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 67.7,
            "winratePct": 58.4
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 63.4,
            "winratePct": 59.1
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 59.5,
            "winratePct": 57.6
          },
          {
            "id": 395944548,
            "name": "Torment Pulse",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 55.6,
            "winratePct": 58.4
          },
          {
            "id": 2081037738,
            "name": "Mystic Vulnerability",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 51.5,
            "winratePct": 60.3
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.2,
            "winratePct": 60.2
          }
        ],
        "late": [
          {
            "id": 3005970438,
            "name": "Escalating Exposure",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 65.1,
            "winratePct": 60.4
          },
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 52.7,
            "winratePct": 61.1
          },
          {
            "id": 1797283378,
            "name": "Infuser",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 49.9,
            "winratePct": 56.5
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.1,
            "winratePct": 61.5
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31,
            "winratePct": 64.1
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 29.5,
            "winratePct": 64.2
          }
        ]
      },
      "winrate": 54.3,
      "pickrate": 2.6,
      "matches": 1961686
    },
    {
      "id": 3,
      "name": "Vindicta",
      "className": "hero_hornet",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/hornet_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/vindicta_bg.webp",
      "tags": [
        "Sniper",
        "Soaring",
        "One Shot Kill"
      ],
      "gunTag": "Long Range",
      "role": "Dispara a los desprevenidos",
      "playstyle": "Vindicta tiene la movilidad necesaria para atacar a su antojo, torturando a sus presas y haciéndolas sangrar lentamente. Los enemigos heridos a cualquier distancia deberían tener miedo de ser eliminados cuando ella está en el mapa.",
      "lore": "Víctima de John Hathorne durante los juicios por brujería de Salem, Vindicta tuvo una segunda oportunidad de vida cuando su espíritu regresó al plano mortal durante la primera Vorágine (el evento que dio a conocer lo sobrenatural al público en general). Emprende una guerra de un solo fantasma contra «Los Amigos de la Humanidad», una neoinquisición formada por los descendientes de Hathorne. Vindicta busca mantener lo sobrenatural a salvo de los de la calaña de Hathorne, y no teme amontonar tantos cuerpos como sea necesario para hacerlo.",
      "stats": [
        {
          "label": "Salud",
          "value": "755"
        },
        {
          "label": "Velocidad",
          "value": "7.9"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "2"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Stake",
          "className": "citadel_ability_hornet_chain",
          "description": "Lanza una estaca que ata a los enemigos al lugar en el que cae. El movimiento de los enemigos se limita a la longitud de la atadura.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+0.75 s de duración de la atadura y +2 m de radio de captura"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_stake.webp",
          "cooldown": 40
        },
        {
          "slot": 2,
          "name": "Flight",
          "className": "citadel_ability_hornet_leap",
          "description": "Salta al aire y vuela. Mientras vuelas, tu arma inflige daño espiritual adicional y tus objetos tienen mayor alcance.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+50 % de munición base mientras vuelas"
            },
            {
              "tier": 3,
              "text": "Los héroes eliminados restablecen la duración y +10.0 de daño espiritual con escalado espiritual aumentado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/vindicta_flight.webp",
          "cooldown": 42
        },
        {
          "slot": 3,
          "name": "Crow Familiar",
          "className": "citadel_ability_hornet_sting",
          "description": "Tu familiar cuervo inflige daño por impacto, reduce la resistencia a las balas y causa un efecto de sangrado que inflige daño según la vida actual del objetivo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Reduce un -35 % la curación recibida"
            },
            {
              "tier": 2,
              "text": "+0.5 % de daño por sangrado y -16.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+2 s de duración, -8 % de resistencia a balas y -8 % de resistencia espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_crow.webp",
          "cooldown": 32
        },
        {
          "slot": 4,
          "name": "Assassinate",
          "className": "citadel_ability_hornet_snipe",
          "description": "Usa tu rifle con mira telescópica para realizar un potente disparo a larga distancia. Inflige solo daño parcial hasta que esté completamente cargado después de 1.0 s de estar apuntando con la mira. Inflige daño adicional a los enemigos que tengan menos del 50 % de vida. Asestarle un golpe mortal a un jugador con Asesinar te otorga daño adicional del arma.",
          "upgrades": [],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/hornet/hornet_assassinate.webp",
          "cooldown": 55
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 76.9,
            "winratePct": 49.9
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 54.9,
            "winratePct": 50.6
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 54.1,
            "winratePct": 51.7
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 34.1,
            "winratePct": 49.4
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 26.2,
            "winratePct": 50.6
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 25.9,
            "winratePct": 52.5
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 71.6,
            "winratePct": 50.9
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 58.2,
            "winratePct": 51.3
          },
          {
            "id": 3331811235,
            "name": "Long Range",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 46.9,
            "winratePct": 50.7
          },
          {
            "id": 2152872419,
            "name": "Sharpshooter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.7,
            "winratePct": 51.8
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 41.6,
            "winratePct": 50.7
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 34,
            "winratePct": 47.2
          }
        ],
        "late": [
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 48.2,
            "winratePct": 49.9
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 41.8,
            "winratePct": 55.3
          },
          {
            "id": 3919289022,
            "name": "Mercurial Magnum",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 38.5,
            "winratePct": 53.9
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 36.8,
            "winratePct": 51.6
          },
          {
            "id": 2152872419,
            "name": "Sharpshooter",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 35.2,
            "winratePct": 48.2
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 32.8,
            "winratePct": 52.7
          }
        ]
      },
      "winrate": 49.2,
      "pickrate": 2.6,
      "matches": 1900726
    },
    {
      "id": 86,
      "name": "Violet",
      "className": "hero_artist",
      "type": "mystic",
      "typeLabel": "Místico",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/artist_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/artist_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/artist_bg.webp",
      "tags": [
        "Ambitious",
        "Nimble",
        "Creative"
      ],
      "gunTag": "Projectile",
      "role": "",
      "playstyle": "",
      "lore": "Violeta emigró a la Manzana Maldita cuando tenía doce años y, aunque adaptarse a Nueva York le supuso cierto choque cultural, no tardó en enamorarse de la vitalidad de la ciudad. Dedicada en cuerpo y alma a las artes plásticas, su pasión la llevó a cosechar éxitos muy superiores a los de la gran mayoría de sus compañeros. Primero, una beca completa para la escuela de arte. Luego, durante su penúltimo año de carrera, ser incluida en la prestigiosa muestra de jóvenes talentos del MoMA: «The Upstart Gallery». Desde cualquier punto de vista, le va de maravilla para su edad. Sin embargo, Violeta no ha logrado sacudirse el terror existencial a morir en el fracaso. Sabe que triunfar en el mercado del arte no es cuestión de tener el talento suficiente, ni siquiera de rozar la genialidad: consiste en que la persona adecuada pose los ojos en ti en el instante preciso. Y por eso ha puesto la mirada en el ritual... no para inflar su propio talento, sino para tener la oportunidad de mostrarle al mundo de lo que es capaz.",
      "stats": [
        {
          "label": "Salud",
          "value": "710"
        },
        {
          "label": "Velocidad",
          "value": "6.9"
        },
        {
          "label": "Sprint",
          "value": "2.5"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Living Ink",
          "className": "ability_artist_homingbrush",
          "description": "Pasiva: Lanzar cualquier otra habilidad restablece el tiempo de recarga de Estado de Flujo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "-4 s de tiempo de recarga y +15 m de distancia máxima del trazo"
            },
            {
              "tier": 2,
              "text": "Al potenciar, obtienes +10 % de cadencia de tiro durante 10 s (se acumula hasta 5 veces)"
            },
            {
              "tier": 3,
              "text": "+1 s de reducción de los tiempos de recarga por impacto y mejora el escalado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/artist/artist_livingink.webp",
          "cooldown": 22
        },
        {
          "slot": 2,
          "name": "Flow State",
          "className": "ability_artist_rollingprojectile",
          "description": "Arrastra un pincel que continúa avanzando y deja un rastro que otorga distancia de deslizamiento adicional a los aliados, a la vez que aplica una ralentización decreciente e inflige daño espiritual a los enemigos que atraviesa, con un efecto que aumenta cuanto más lejos llega. Vuelve a activar la habilidad para impulsar el pincel hacia delante, lo que finaliza la habilidad antes de tiempo, pero inflige daño espiritual en un área mayor.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+150 % de regeneración del aguante al deslizarse"
            },
            {
              "tier": 2,
              "text": "-6 s de tiempo de recarga, +8 m de alcance del impulso del pincel y +4 s de duración del rastro"
            },
            {
              "tier": 3,
              "text": "Al deslizarse, obtienes amplificación de daño a lo largo del tiempo hasta un 20 % durante 6 s"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/artist/artist_brush.webp",
          "cooldown": 23
        },
        {
          "slot": 3,
          "name": "Still Life",
          "className": "ability_artist_tether",
          "description": "Elige a un héroe como tu modelo, lo que inflige daño espiritual a lo largo del tiempo mientras mantengas la vista sobre él. Si se completa el boceto, recibe daño espiritual adicional, sufre aturdimiento y deja caer un boceto que se puede recoger. Por cada boceto recogido, obtienes atributos permanentes en función del héroe.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al dibujar, obtienes 15 de regeneración de vida, que se restablece durante 4 s al recoger"
            },
            {
              "tier": 2,
              "text": "Al dibujar, los modelos infligen un -35 % de daño"
            },
            {
              "tier": 3,
              "text": "+20 % de velocidad de movimiento, -11 s de tiempo de recarga y +0.45 s de duración del aturdimiento"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/artist/artist_portrait.webp",
          "cooldown": 35
        },
        {
          "slot": 4,
          "name": "Abstract Landscape",
          "className": "ability_artist_bamboogrove",
          "description": "Crea un área circular de tinta que bloquea la visión y otorga Espíritu a los aliados. Revela a los enemigos que se encuentren en su interior y, al salir de ella, hace que reciban daño espiritual y sufran silencio y ralentización, lo que destruye la tinta en el proceso.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+25 % de robo de vida espiritual y +15 de poder espiritual"
            },
            {
              "tier": 3,
              "text": "+1.25 s de duración del silencio y +4 s de duración de la habilidad"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/artist/artist_landscape.webp",
          "cooldown": 180
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 86.7,
            "winratePct": 46.2
          },
          {
            "id": 1439347412,
            "name": "Mystic Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 51.1,
            "winratePct": 56.5
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.9,
            "winratePct": 40.9
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 40,
            "winratePct": 27.8
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 35.6,
            "winratePct": 43.8
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 20,
            "winratePct": 66.7
          }
        ],
        "mid": [
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 51.1,
            "winratePct": 39.1
          },
          {
            "id": 3696726732,
            "name": "Toxic Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 46.7,
            "winratePct": 66.7
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 44.4,
            "winratePct": 60
          },
          {
            "id": 3970837787,
            "name": "Enchanter's Emblem",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40,
            "winratePct": 44.4
          },
          {
            "id": 2947183272,
            "name": "Radiant Regeneration",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 37.8,
            "winratePct": 47.1
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.1,
            "winratePct": 50
          }
        ],
        "late": [
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 53.3,
            "winratePct": 62.5
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 51.1,
            "winratePct": 56.5
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 51.1,
            "winratePct": 52.2
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 46.7,
            "winratePct": 76.2
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.9,
            "winratePct": 38.5
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 28.9,
            "winratePct": 53.8
          }
        ]
      },
      "winrate": 50.1,
      "pickrate": 2.9,
      "matches": 2114039
    },
    {
      "id": 35,
      "name": "Viscous",
      "className": "hero_viscous",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/viscous_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/viscous_bg.webp",
      "tags": [
        "Evasive",
        "Disruptor",
        "Gooey"
      ],
      "gunTag": "Projectile",
      "role": "Rueda evitando las balas",
      "playstyle": "Viscoso irrita a sus oponentes mediante una astuta evasión y usos estratégicos de la curación, lo que le permite resistir los ataques enemigos más brutales.",
      "lore": "El Triángulo de las Bermudas nunca fue un mito, sino un nexo sombrío en las profundidades del océano Atlántico. En su mayor parte, las criaturas que escaparon de esta puerta astral eran benignas (como Nessie), pero ahora algo oscuro y depredador conocido como El Adversario acecha en los mares... y los habitantes del océano se mueren de miedo. Uno de esos habitantes, una anémona marina paranormal, quiere hacer algo al respecto. Con un cuerpo pringoso ectoplásmico para poder atravesar la superficie, Viscoso trata desesperadamente de invocar a los Patrones para mantener las Profundidades a salvo del horror que se esconde debajo.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "63"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Splatter",
          "className": "viscous_goo_grenade",
          "description": "Lanza una bola pegajosa que inflige daño y deja charcos a su paso que ralentizan el movimiento de los enemigos que se encuentren en el radio.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+45.0 de daño y +1.5 m de radio"
            },
            {
              "tier": 3,
              "text": "+1 rebote y escalado espiritual mejorado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_ball.webp",
          "cooldown": 26
        },
        {
          "slot": 2,
          "name": "The Cube",
          "className": "viscous_restorative_goo",
          "description": "Encierra al objetivo en un cubo de sustancia pegajosa regeneradora que protege del daño y aumenta la regeneración de vida. El objetivo no puede realizar ninguna acción nueva mientras está en el cubo. Puedes usarlo contigo mismo. Pulsa Saltar/trepar para escapar antes de tiempo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Aumenta la velocidad de movimiento y la recuperación de aguante"
            },
            {
              "tier": 2,
              "text": "+25 de regeneración de vida y +1 s de duración"
            },
            {
              "tier": 3,
              "text": "Elimina todas las desventajas no definitivas y otorga -20.0 s de tiempo de recarga"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_restorative_goo.webp",
          "cooldown": 42
        },
        {
          "slot": 3,
          "name": "Puddle Punch",
          "className": "viscous_telepunch",
          "description": "Materializa un puño en el mundo que golpea a todos los que estén en la zona y los lanza por los aires. Golpear a un enemigo inflige daño cuerpo a cuerpo y aplica ralentización. Los enemigos pueden contratacar. Tú y tus aliados tenéis mayor control aéreo.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+1 carga y +20 de daño"
            },
            {
              "tier": 2,
              "text": "+1.5 m de radio y +60 % de robo de vida"
            },
            {
              "tier": 3,
              "text": "-14.0 s de tiempo de recarga y ahora inflige daño cuerpo a cuerpo pesado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_punch.webp",
          "cooldown": 24
        },
        {
          "slot": 4,
          "name": "Goo Ball",
          "className": "viscous_goo_bowling_ball",
          "description": "Te transforma en una gran bola pegajosa que inflige daño y aturde a los enemigos al impactar. La bola otorga grandes cantidades de resistencia a las balas y espiritual, rebota en las paredes y puede realizar un doble salto.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+70 de daño y +20 % de resistencias"
            },
            {
              "tier": 3,
              "text": "+7 s de duración, +0.3 s de duración del aturdimiento y +0.2 de escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viscous/viscous_goo_sphere.webp",
          "cooldown": 150
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1998374645,
            "name": "Mystic Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 53.7,
            "winratePct": 45.4
          },
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 39.7,
            "winratePct": 49.4
          },
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 33.7,
            "winratePct": 44.7
          },
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 24.4,
            "winratePct": 48.3
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.3,
            "winratePct": 49.6
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 21.9,
            "winratePct": 49.6
          }
        ],
        "mid": [
          {
            "id": 754480263,
            "name": "Mystic Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 45.5,
            "winratePct": 46.7
          },
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.8,
            "winratePct": 50.1
          },
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.9,
            "winratePct": 47.8
          },
          {
            "id": 26002154,
            "name": "Melee Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.1,
            "winratePct": 50.8
          },
          {
            "id": 3776945997,
            "name": "Extra Charge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 27.5,
            "winratePct": 47.5
          },
          {
            "id": 1252627263,
            "name": "Lifestrike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 26.6,
            "winratePct": 51.9
          }
        ],
        "late": [
          {
            "id": 1193964439,
            "name": "Greater Expansion",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 47.7,
            "winratePct": 48.7
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 44.8,
            "winratePct": 47.9
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 40.3,
            "winratePct": 47.1
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 37.4,
            "winratePct": 50.5
          },
          {
            "id": 787198704,
            "name": "Rapid Recharge",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 34.6,
            "winratePct": 48.2
          },
          {
            "id": 800008313,
            "name": "Crushing Fists",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 34.2,
            "winratePct": 51.5
          }
        ]
      },
      "winrate": 46.1,
      "pickrate": 1.1,
      "matches": 820518
    },
    {
      "id": 58,
      "name": "Vyper",
      "className": "hero_viper",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/kali_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/vyper_bg.webp",
      "tags": [
        "Gunner",
        "Slippery",
        "Rat-a-Tat"
      ],
      "gunTag": "Rapid Fire",
      "role": "Se desliza y asesina a los enemigos",
      "playstyle": "Con un arma potente (y un veneno mortal a la altura), Víbora puede deslizarse hasta la retaguardia de un equipo y asesinar a objetivos prioritarios con una tormenta de balas.",
      "lore": "Cuando se trata de violar la ley, que no te pillen tiene bastante importancia. A Víbora nunca la avisaron de eso. Por suerte para ella, si hay algo que se le da mejor que ser arrestada, es escapar de prisión. Tras haber pasado tiempo en todas las cárceles principales de Nueva York y alrededores, Víbora ha desarrollado una red impresionante de chusma callejera que le debe una. También ha desarrollado una red impresionante de chusma callejera que quiere verla muerta, pero intenta centrarse en lo positivo.",
      "stats": [
        {
          "label": "Salud",
          "value": "780"
        },
        {
          "label": "Velocidad",
          "value": "6.9"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "4"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Screwjab Dagger",
          "className": "ability_viper_debuffdagger",
          "description": "Lanza una daga que inflige daño espiritual y aplica ralentización. Todas las dagas lanzadas posteriormente contra el mismo objetivo acumulan daño espiritual y ralentización.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-8 % de resistencia a balas y -6 % de resistencia a balas por acumulación al impactar"
            },
            {
              "tier": 3,
              "text": "+2 acumulaciones máximas, -2 s de retraso de la carga y restaura un 55 % del tiempo de recarga de la carga al impactar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_debuffdagger.webp",
          "cooldown": 10
        },
        {
          "slot": 2,
          "name": "Lethal Venom",
          "className": "ability_viper_venom",
          "description": "Inyecta veneno letal a un objetivo. Tras un retraso, el veneno surte efecto e inflige daño espiritual. El daño aumenta en función de la vida que le falte al objetivo. Veneno Letal ignorará el bloqueo de daño de Petrificar.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-40 % de curación recibida y -12 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "Las balas también acumulan Veneno Letal"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_venom.webp",
          "cooldown": 28
        },
        {
          "slot": 3,
          "name": "Slither",
          "className": "ability_viper_snakedash",
          "description": "Tienes más distancia de deslizamiento, puedes deslizarte cuesta arriba y girar más rápido mientras te deslizas.",
          "upgrades": [
            {
              "tier": 3,
              "text": "Obtiene 180 de barrera durante 4 s al deslizarse"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_snakedash.webp",
          "cooldown": null
        },
        {
          "slot": 4,
          "name": "Petrifying Bola",
          "className": "ability_viper_petrifybola",
          "description": "Lanza una boleadora explosiva. Al explotar, la boleadora ralentiza e inflige daño a todos los enemigos en el área. En su lugar, los impactos directos infligen daño adicional y petrifican. Las unidades petrificadas bloquean todo el daño, pero no pueden realizar ninguna acción.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+1.0 s de duración de la petrificación y petrifica a todos los enemigos que se encuentren en el área"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/viper/viper_petrifybola.webp",
          "cooldown": 115
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1342610602,
            "name": "Close Quarters",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 73.3,
            "winratePct": 47.6
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 56,
            "winratePct": 47.4
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 48.1,
            "winratePct": 46.7
          },
          {
            "id": 1672893796,
            "name": "Grit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.9,
            "winratePct": 47.9
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 23.7,
            "winratePct": 47.7
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 20.8,
            "winratePct": 46.1
          }
        ],
        "mid": [
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 58.7,
            "winratePct": 49.5
          },
          {
            "id": 3647584222,
            "name": "Split Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 46.4,
            "winratePct": 47.4
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40.4,
            "winratePct": 48.2
          },
          {
            "id": 811521119,
            "name": "Tesla Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.5,
            "winratePct": 48.7
          },
          {
            "id": 499683006,
            "name": "Bullet Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.6,
            "winratePct": 47.4
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 27,
            "winratePct": 48.1
          }
        ],
        "late": [
          {
            "id": 3919289022,
            "name": "Mercurial Magnum",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 60.8,
            "winratePct": 49.3
          },
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 35,
            "winratePct": 53.6
          },
          {
            "id": 334300056,
            "name": "Stamina Mastery",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 31.2,
            "winratePct": 46.5
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 29.8,
            "winratePct": 56
          },
          {
            "id": 2739107182,
            "name": "Burst Fire",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 27.8,
            "winratePct": 44.6
          },
          {
            "id": 1055679805,
            "name": "Vampiric Burst",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 23.2,
            "winratePct": 54.7
          }
        ]
      },
      "winrate": 45.9,
      "pickrate": 1.2,
      "matches": 874243
    },
    {
      "id": 25,
      "name": "Warden",
      "className": "hero_warden",
      "type": "brawler",
      "typeLabel": "Tanque / Bruiser",
      "complexity": 2,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/warden_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/warden_bg.webp",
      "tags": [
        "Initiator",
        "Fearless",
        "One Man Army"
      ],
      "gunTag": "Heavy Hitter",
      "role": "Debilita a sus enemigos y los persigue",
      "playstyle": "Guardia lidera desde el frente, lanzándose a la batalla y dificultando la capacidad de sus oponentes para luchar con eficacia. Pero lo que Guardia considera valiente, otros lo consideran temerario y, si no tiene cuidado, puede verse fácilmente en problemas.",
      "lore": "La mayoría de la gente cree que lo sobrenatural llegó al mundo hace 50 años. Están equivocados. Su presencia dio forma al folclore durante generaciones… y, al igual que hay gente que teme a las sombras, siempre habrá quienes dediquen su vida a luchar en ellas. Procedente de un linaje de alquimistas militantes, la familia de Guardia siempre se preparaba para el día en que tuvieran que evitar un apocalipsis místico... pero, con el paso del tiempo, la importancia de las lecciones parecía cada vez menor. Lo que antes se consideraba una seria advertencia se fue transformando poco a poco en anécdotas divertidas contadas por sus supersticiosos abuelos. Cuando se abrió el portal en Central Park, los padres de Guardia no solo se dieron cuenta de que todo lo que les habían contado era cierto, sino también de que no estaban preparados. Negándose a que la siguiente generación se durmiese en los laureles, entrenaron a Guardia desde su nacimiento para que se convirtiera en una máquina de matar sobrenatural con un solo propósito: impedir que los Patrones entren en nuestro mundo.",
      "stats": [
        {
          "label": "Salud",
          "value": "805"
        },
        {
          "label": "Velocidad",
          "value": "6.3"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Alchemical Flask",
          "className": "ability_warden_crowd_control",
          "description": "Lanza un frasco que inflige daño y reduce el daño del arma y la velocidad de movimiento de los enemigos contra los que impacta.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Los enemigos alcanzados pierden 1 de aguante"
            },
            {
              "tier": 2,
              "text": "+35 de daño y -25 % de daño del arma"
            },
            {
              "tier": 3,
              "text": "-7 s de tiempo de recarga, +2 m de radio y aplica -30 % de cadencia de tiro"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_crowd_control.webp",
          "cooldown": 12
        },
        {
          "slot": 2,
          "name": "Willpower",
          "className": "ability_warden_high_alert",
          "description": "Obtienes una barrera y velocidad de movimiento adicional.",
          "upgrades": [
            {
              "tier": 2,
              "text": "-24 s de tiempo de recarga y +2 s de duración"
            },
            {
              "tier": 3,
              "text": "+30 % de resistencia a desventajas y escalado mejorado de la barrera"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_high_alert.webp",
          "cooldown": 40
        },
        {
          "slot": 3,
          "name": "Binding Word",
          "className": "ability_warden_lock_down",
          "description": "Maldice a un héroe enemigo. Si no se aleja de su posición inicial durante el tiempo de huida, recibirá daño y quedará inmovilizado.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Guardia inflige +20 % de daño balístico adicional durante 5 s a los héroes atrapados"
            },
            {
              "tier": 2,
              "text": "+0.75 s de duración"
            },
            {
              "tier": 3,
              "text": "-14 s de tiempo de recarga y silencia a los enemigos hasta que se escapan o quedan inmovilizados"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_lock_down.webp",
          "cooldown": 34
        },
        {
          "slot": 4,
          "name": "Last Stand",
          "className": "ability_warden_riot_protocol",
          "description": "Tras cargar durante 2 s, emite pulsaciones que infligen daño a los enemigos y te curan en función del daño infligido. Mientras canalices Última Defensa, aumentarás considerablemente tu resistencia a balas y espiritual. Mientras Última Defensa esté activa, eres inmune al miedo.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+50.0 de DPS -40.0 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+4 s de duración, y eres imparable y +30 % de resistencia al canalizar"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/warden/warden_riot_protocol.webp",
          "cooldown": 180
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 3077079169,
            "name": "High-Velocity Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 74.1,
            "winratePct": 49.1
          },
          {
            "id": 2064029594,
            "name": "Opening Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 71.5,
            "winratePct": 49.4
          },
          {
            "id": 1548066885,
            "name": "Extended Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 43.2,
            "winratePct": 49.4
          },
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.3,
            "winratePct": 48.4
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 25.4,
            "winratePct": 49.4
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 22.9,
            "winratePct": 50.3
          }
        ],
        "mid": [
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 61.5,
            "winratePct": 48.9
          },
          {
            "id": 2356412290,
            "name": "Titanic Magazine",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 50.2,
            "winratePct": 48.2
          },
          {
            "id": 2447176615,
            "name": "Enduring Speed",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 49,
            "winratePct": 50.1
          },
          {
            "id": 3403085434,
            "name": "Fleetfoot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 44,
            "winratePct": 50.8
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 37.8,
            "winratePct": 49.4
          },
          {
            "id": 3399065363,
            "name": "Sprint Boots",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 30,
            "winratePct": 50.5
          }
        ],
        "late": [
          {
            "id": 3919289022,
            "name": "Mercurial Magnum",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 55,
            "winratePct": 47.8
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 54.7,
            "winratePct": 53.1
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 31.3,
            "winratePct": 50.7
          },
          {
            "id": 2163598980,
            "name": "Spirit Resilience",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.4,
            "winratePct": 47.1
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 24,
            "winratePct": 57.3
          },
          {
            "id": 1250307611,
            "name": "Juggernaut",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 19.9,
            "winratePct": 51.8
          }
        ]
      },
      "winrate": 49.3,
      "pickrate": 1.2,
      "matches": 872187
    },
    {
      "id": 7,
      "name": "Wraith",
      "className": "hero_wraith",
      "type": "marksman",
      "typeLabel": "Tirador",
      "complexity": 1,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/wraith_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/wraith_bg.webp",
      "tags": [
        "Duelist",
        "Isolator",
        "Telekinetic"
      ],
      "gunTag": "Rapid Fire",
      "role": "Derrite a los objetivos aislados",
      "playstyle": "Destacando en el combate uno contra uno, Espectro aísla a los objetivos y los elimina con una eficiencia despiadada. Luego se teletransporta antes de que alguien pueda tomar represalias.",
      "lore": "La organización de Espectro, piedra angular de la escena del juego de Nueva York, es un secreto tan a voces como parece. Sin embargo, gracias a una cantidad nada trivial de sobornos, amenazas y chantajes, Espectro sabe que está por encima de la ley.",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "7.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "50"
        },
        {
          "label": "Melee pesado",
          "value": "116"
        },
        {
          "label": "Regen. salud",
          "value": "2"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Card Trick",
          "className": "citadel_ability_card_toss",
          "description": "Inflige daño con el arma para invocar cartas de un palo aleatorio. Las cartas se pueden lanzar para infligir daño y aplicar un efecto diferente dependiendo del palo. Las cartas lanzadas vuelan hacia el enemigo o hacia donde apuntes con la mira. Usa el lanzamiento alternativo para lanzar la primera carta.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+40 de daño y escalado espiritual aumentado"
            },
            {
              "tier": 3,
              "text": "Todos los palos mejoran y hay más probabilidades de que aparezcan comodines"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_card_trick.webp",
          "cooldown": 0.6
        },
        {
          "slot": 2,
          "name": "Project Mind",
          "className": "citadel_ability_projectmind",
          "description": "Teletranspórtate a la ubicación seleccionada.",
          "upgrades": [
            {
              "tier": 2,
              "text": "300 de barrera durante 5 s y la barrera aumenta con el poder espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_teleport.webp",
          "cooldown": 50
        },
        {
          "slot": 3,
          "name": "Full Auto",
          "className": "citadel_ability_wraith_rapidfire",
          "description": "Aumenta temporalmente tu cadencia de tiro e inflige daño espiritual adicional.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+10 % de cadencia de tiro y +3 s de duración"
            },
            {
              "tier": 3,
              "text": "Munición ilimitada y escalado aumentado del daño espiritual por bala"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_aura.webp",
          "cooldown": 45
        },
        {
          "slot": 4,
          "name": "Telekinesis",
          "className": "citadel_ability_psychic_lift",
          "description": "Levanta a un héroe enemigo por los aires y lo lanza hacia la ubicación objetivo.",
          "upgrades": [
            {
              "tier": 3,
              "text": "+1.5 s de duración de la desventaja y +6 m de alcance del lanzamiento y de la habilidad"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/wraith_lift.webp",
          "cooldown": 150
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 1009965641,
            "name": "Monster Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 68,
            "winratePct": 48.7
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 60,
            "winratePct": 50.3
          },
          {
            "id": 668299740,
            "name": "Rapid Rounds",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 54.2,
            "winratePct": 48.4
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 33.8,
            "winratePct": 49.2
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 24.7,
            "winratePct": 47.9
          },
          {
            "id": 3633614685,
            "name": "Extra Health",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 23.3,
            "winratePct": 50
          }
        ],
        "mid": [
          {
            "id": 1292979587,
            "name": "Surge of Power",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 59,
            "winratePct": 49.8
          },
          {
            "id": 811521119,
            "name": "Tesla Bullets",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 52.4,
            "winratePct": 49.8
          },
          {
            "id": 4104549924,
            "name": "Swift Striker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 44.9,
            "winratePct": 49.1
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 38.5,
            "winratePct": 47.6
          },
          {
            "id": 84321454,
            "name": "Quicksilver Reload",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.5,
            "winratePct": 45.2
          },
          {
            "id": 1763073141,
            "name": "Recharging Rush",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 27.5,
            "winratePct": 47.3
          }
        ],
        "late": [
          {
            "id": 3919289022,
            "name": "Mercurial Magnum",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 66.2,
            "winratePct": 50.3
          },
          {
            "id": 2480592370,
            "name": "Ricochet",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 55.9,
            "winratePct": 49.9
          },
          {
            "id": 2226497419,
            "name": "Spiritual Overflow",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.webp",
            "slot": "weapon",
            "tier": 4,
            "cost": 6400,
            "pickPct": 46.7,
            "winratePct": 55.1
          },
          {
            "id": 876563814,
            "name": "Spirit Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 40.4,
            "winratePct": 51.2
          },
          {
            "id": 865846625,
            "name": "Leech",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.webp",
            "slot": "vitality",
            "tier": 4,
            "cost": 6400,
            "pickPct": 31.6,
            "winratePct": 53.4
          },
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 29.7,
            "winratePct": 56.1
          }
        ]
      },
      "winrate": 50.4,
      "pickrate": 2.9,
      "matches": 2131294
    },
    {
      "id": 27,
      "name": "Yamato",
      "className": "hero_yamato",
      "type": "assassin",
      "typeLabel": "Asesino",
      "complexity": 3,
      "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_card.webp",
      "smallImage": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/yamato_sm.webp",
      "background": "https://assets-bucket.deadlock-api.com/assets-api-res/images/heroes/backgrounds/yamato_bg.webp",
      "tags": [
        "Relentless",
        "Acrobatics",
        "Pursuer"
      ],
      "gunTag": "Spreadshot",
      "role": "Realiza ataques intensos con delicadeza",
      "playstyle": "Yamato usa ataques precisos para diezmar a sus rivales. Sin embargo, estos ataques dañinos suelen dejarla expuesta, por lo que tiene que hacer que cada disparo valga la pena.",
      "lore": "犯罪組織のボスの家に生まれた花桜梨とその兄の大和にとって、 父の死後に「セブンスムーン」の跡目を継ぐのは自明のことでもあった。 そして何年もの間、かれらは対等の立場で組織を率いて利益と成功を もたらし、やがてはアメリカへの進出をも目論むようになった。 思い描いていた計画は単純で、 大和がアメリカに渡って花桜梨の 国際的な存在感を高め、その間花桜梨は日本に残って国内を統制する、 といったものだった。 兄妹にとって不運だったのは、花桜梨が日本で 指揮をとるという計画を快く思わない部下たちがいたことだった。 そして迅速かつ暴力的な形で、反乱は発生した。大和は花桜梨を 守るために命を落とし、花桜梨と数人の忠実な部下たちは、 その大和の犠牲のおかげもあって、日本からアメリカへと 逃げ延びることに成功した。 アメリカに着いた花桜梨たちを出迎えたのは、本来であれば大和が 会う予定となっていた男であった。彼は日本人の名前になじみが なかったため性別の区別がついておらず、花桜梨のことを 「ヤマト」と呼んだ。花桜梨は男の間違いを正そうと思ったが、 結局そのままにした。兄の記憶を残し続けるためにも、その名を名乗り、 その夢を受け継ぐことが最善の道であろうと考えたからだ。",
      "stats": [
        {
          "label": "Salud",
          "value": "730"
        },
        {
          "label": "Velocidad",
          "value": "8.2"
        },
        {
          "label": "Sprint",
          "value": "1.6"
        },
        {
          "label": "Aguante",
          "value": "3"
        },
        {
          "label": "Melee ligero",
          "value": "55"
        },
        {
          "label": "Melee pesado",
          "value": "128"
        },
        {
          "label": "Regen. salud",
          "value": "1"
        }
      ],
      "abilities": [
        {
          "slot": 1,
          "name": "Power Slash",
          "className": "citadel_ability_power_slash",
          "description": "Canalízala para aumentar el daño durante 1.4 s y luego lanzar un ataque de espada completamente cargado. Pulsa Habilidad 1 o para activar antes el ataque e infligir daño parcial.",
          "upgrades": [
            {
              "tier": 1,
              "text": "+32 % de ralentización durante 3 s"
            },
            {
              "tier": 2,
              "text": "-4 s de tiempo de recarga de las habilidades"
            },
            {
              "tier": 3,
              "text": "+8 m de alcance de lanzamiento, +150.0 de daño y aumenta el escalado espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_power_slash.webp",
          "cooldown": 12
        },
        {
          "slot": 2,
          "name": "Flying Slash",
          "className": "citadel_ability_flying_strike",
          "description": "Lanza un gancho arrojadizo para remolcarte hacia un enemigo, infligirle daño cuerpo a cuerpo y ralentizarlo al llegar.",
          "upgrades": [
            {
              "tier": 2,
              "text": "Obtienes +35 de poder espiritual durante 6 s"
            },
            {
              "tier": 3,
              "text": "Se agarra a los aliados al usar el lanzamiento alternativo, +8 m de alcance de lanzamiento y 1 carga adicional"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_flying_strike.webp",
          "cooldown": 36
        },
        {
          "slot": 3,
          "name": "Crimson Slash",
          "className": "citadel_ability_healing_slash",
          "description": "Corta a los enemigos que tienes delante para infligirles daño y reducir su cadencia de tiro. Si cortas a un héroe enemigo, recibes curación.",
          "upgrades": [
            {
              "tier": 1,
              "text": "Al impactar, inflige +30 % de daño cuerpo a cuerpo durante 4 s"
            },
            {
              "tier": 2,
              "text": "+6 % de curación de vida máxima al alcanzar a un héroe"
            },
            {
              "tier": 3,
              "text": "-10 s de tiempo de recarga y aumenta el escalado"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_crimson_slash.webp",
          "cooldown": 16
        },
        {
          "slot": 4,
          "name": "Shadow Transformation",
          "className": "citadel_ability_infinity_slash",
          "description": "Infúndete con el alma sombría de Yamato. Tras una transformación invencible inicial, tus habilidades se restablecen y son un 60 % más rápidas, obtienes inmunidad a los efectos negativos y tu resistencia a las balas y tu resistencia espiritual aumentan considerablemente. Cuando matas a un héroe, recibes curación y la duración se prolonga.",
          "upgrades": [
            {
              "tier": 2,
              "text": "+4 m de velocidad de movimiento y -30 s de tiempo de recarga"
            },
            {
              "tier": 3,
              "text": "+3.0 s de duración +30 % de resistencia a balas +30 % de resistencia espiritual"
            }
          ],
          "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/abilities/yamato/yamato_blinding_steel.webp",
          "cooldown": 160
        }
      ],
      "popularItems": {
        "early": [
          {
            "id": 465043967,
            "name": "Spirit Strike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 64.4,
            "winratePct": 50.5
          },
          {
            "id": 1437614329,
            "name": "Melee Lifesteal",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 64.3,
            "winratePct": 50.5
          },
          {
            "id": 3862866912,
            "name": "Restorative Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.webp",
            "slot": "weapon",
            "tier": 1,
            "cost": 800,
            "pickPct": 59.6,
            "winratePct": 50.4
          },
          {
            "id": 2829638276,
            "name": "Extra Regen",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.webp",
            "slot": "vitality",
            "tier": 1,
            "cost": 800,
            "pickPct": 30.4,
            "winratePct": 49.3
          },
          {
            "id": 98582110,
            "name": "Stalker",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.7,
            "winratePct": 53.1
          },
          {
            "id": 968099481,
            "name": "Extra Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.webp",
            "slot": "spirit",
            "tier": 1,
            "cost": 800,
            "pickPct": 27.7,
            "winratePct": 49.4
          }
        ],
        "mid": [
          {
            "id": 3190916303,
            "name": "Spirit Snatch",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 53.9,
            "winratePct": 51.6
          },
          {
            "id": 7409189,
            "name": "Improved Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.webp",
            "slot": "spirit",
            "tier": 2,
            "cost": 1600,
            "pickPct": 39.7,
            "winratePct": 48.2
          },
          {
            "id": 2603935618,
            "name": "Healbane",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 37.5,
            "winratePct": 51.2
          },
          {
            "id": 2566692615,
            "name": "Healing Booster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.webp",
            "slot": "vitality",
            "tier": 2,
            "cost": 1600,
            "pickPct": 30.7,
            "winratePct": 51.7
          },
          {
            "id": 1252627263,
            "name": "Lifestrike",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.webp",
            "slot": "vitality",
            "tier": 3,
            "cost": 3200,
            "pickPct": 30.4,
            "winratePct": 53.1
          },
          {
            "id": 395867183,
            "name": "Mystic Shot",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.webp",
            "slot": "weapon",
            "tier": 2,
            "cost": 1600,
            "pickPct": 28.4,
            "winratePct": 48.7
          }
        ],
        "late": [
          {
            "id": 2519598785,
            "name": "Boundless Spirit",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 43.2,
            "winratePct": 52.4
          },
          {
            "id": 3261353684,
            "name": "Superior Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 36.7,
            "winratePct": 51.6
          },
          {
            "id": 2121044373,
            "name": "Tankbuster",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.webp",
            "slot": "spirit",
            "tier": 3,
            "cost": 3200,
            "pickPct": 33.7,
            "winratePct": 49.3
          },
          {
            "id": 3577481646,
            "name": "Mystic Reverb",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 28.1,
            "winratePct": 56.6
          },
          {
            "id": 915014646,
            "name": "Transcendent Cooldown",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.webp",
            "slot": "spirit",
            "tier": 4,
            "cost": 6400,
            "pickPct": 26.9,
            "winratePct": 53.1
          },
          {
            "id": 2481177645,
            "name": "Hunter's Aura",
            "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.webp",
            "slot": "weapon",
            "tier": 3,
            "cost": 3200,
            "pickPct": 25.7,
            "winratePct": 50
          }
        ]
      },
      "winrate": 47.4,
      "pickrate": 2.3,
      "matches": 1673839
    }
  ]
};
