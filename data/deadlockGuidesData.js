/**
 * Contenido editorial de Deadlock.
 * Los datos objetivos (héroes, habilidades, ítems, winrate) viven en
 * deadlockHeroesData.js y deadlockItemsData.js, generados por updateDeadlock.js.
 *
 * Aquí se edita a mano: tierlist, resúmenes, builds, consejos y guías.
 */
const deadlockGuidesData = {
  updatedAt: '2026-11-12',
  patchLabel: 'Datos de noviembre de 2026',
  tierlist: {
    methodology:
      'Tiers editoriales revisados con el winrate y el pickrate reales del parche actual. Un winrate alto no lo es todo: también pesan la facilidad de ejecución, el impacto en equipo y la estabilidad del héroe.',
    tiers: [
      {
        key: 'S',
        label: 'S',
        description: 'Los mejores picks del parche. Gran impacto con poco riesgo.',
        heroes: ['Graves', 'Paige', 'Rat King', 'Seven', 'Kelvin', 'Baba', 'Victor']
      },
      {
        key: 'A',
        label: 'A',
        description: 'Muy fuertes y fiables. Excelentes para subir si los dominas.',
        heroes: ['Haze', 'Lady Geist', 'Ivy', 'Abrams', 'Dynamo', 'Nurse Harrow', 'Lash', 'Deadman Danny', 'Drifter', 'Wraith']
      },
      {
        key: 'B',
        label: 'B',
        description: 'Equilibrados. Funcionan bien según composición y matchup.',
        heroes: ['Violet', 'McGinnis', 'Apollo', 'Mo & Krill', 'Warden', 'Vindicta', 'Infernus', 'Billy', 'Bebop', 'Calico', 'Celeste']
      },
      {
        key: 'C',
        label: 'C',
        description: 'Les falta algo frente al meta o exigen mucha ejecución.',
        heroes: ['Grey Talon', 'Yamato', 'Holliday', 'Solomon', 'Venator', 'Paradox', 'Silver', 'Viscous', 'Vyper', 'The Doorman', 'Rem', 'Mina', 'Shiv', 'Sinclair']
      },
      {
        key: 'D',
        label: 'D',
        description: 'Los picks más débiles ahora mismo. Solo con dominio extremo.',
        heroes: ['Pocket', 'Mirage']
      }
    ]
  },

  heroNotes: {
    Abrams: {
      roleLabel: 'Tanque / Iniciador',
      summary: 'Tanque de primera línea con curación, carga y un ult de impacto en área. Ideal para absorber presión y abrir peleas.',
      build: {
        early: ['Close Quarters', 'Extra Regen', 'Melee Lifesteal', 'Spirit Strike'],
        mid: ['Melee Charge', 'Bullet Resist Shredder', 'Lifestrike', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Silence Glyph contra casteadores', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 2 → 1 → 3. La carga es tu herramienta de inicio; Siphon Life sostiene los tradeos.',
      tips: [
        'Empuja a los enemigos contra paredes con Shoulder Charge para aturdirlos.',
        'Usa Siphon Life cuando haya varios enemigos cerca: cuanta más gente, más curación.',
        'No gastes Seismic Impact para iniciar sin seguimiento del equipo.',
        'Compra resistencias y curación: tu trabajo es aguantar, no hacer daño.'
      ],
      counters: ['Silence', 'Debuff Remover', 'Antiheal'],
      synergies: ['Dynamo', 'Kelvin', 'Ivy']
    },

    Dynamo: {
      roleLabel: 'Iniciador / Soporte',
      summary: 'Soporte de equipo con curación, teletransporte y el agujero negro más decisivo del juego. Su ult gana peleas por sí solo.',
      build: {
        early: ['Extra Charge', 'Extra Regen', 'Mystic Expansion', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Compress Cooldown', 'Duration Extender', 'Recharging Rush'],
        late: ['Greater Expansion', 'Superior Cooldown', 'Transcendent Cooldown', 'Refresher'],
        situational: ['Unstoppable para ult seguro', 'Debuff Remover contra control', 'Healing Booster si tu equipo necesita sustain']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Kinetic Pulse para farmear y Quantum Entanglement para reposicionar.',
      tips: [
        'Coloca Singularity cuando el equipo enemigo esté agrupado o sin movilidad.',
        'Rejuvenating Aurora cura a aliados: úsala antes de que llegue el burst, no después.',
        'Quantum Entanglement te permite entrar, ultar y salir con un aliado.',
        'Compra cooldown reduction: tu valor está en las habilidades, no en el arma.'
      ],
      counters: ['Silence', 'Unstoppable', 'Debuff Remover'],
      synergies: ['Abrams', 'Lash', 'Seven']
    },

    'Grey Talon': {
      roleLabel: 'Tirador / Control',
      summary: 'Arquero de largo alcance con trampas y un ult de ejecución global. Castiga posiciones y controla rutas desde la distancia.',
      build: {
        early: ['Mystic Burst', 'Extra Charge', 'High-Velocity Rounds', 'Opening Rounds'],
        mid: ['Compress Cooldown', 'Improved Spirit', 'Enchanter\'s Emblem', 'Tankbuster'],
        late: ['Boundless Spirit', 'Spirit Burn', 'Superior Cooldown', 'Mystic Reverb'],
        situational: ['Long Range si necesitas más alcance', 'Healbane contra sustain', 'Unstoppable si te bufan mucho']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Charged Shot es tu daño principal; Spirit Snare controla rutas.',
      tips: [
        'Juega desde atrás: tu fuerza es el alcance, no el cuerpo a cuerpo.',
        'Coloca Spirit Snare en pasillos y retiradas antes de la pelea.',
        'Guided Owl sirve para rematar, revelar o cortar una huida.',
        'Cambia de posición después de cada disparo cargado.'
      ],
      counters: ['Lash', 'Haze', 'Pocket'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Haze: {
      roleLabel: 'Carry / Asesina',
      summary: 'Carry de ráfagas que castiga objetivos aislados. Con Fixation y Bullet Dance puede borrar equipos enteros si encuentra el ángulo.',
      build: {
        early: ['Rapid Rounds', 'Extra Spirit', 'Swift Striker', 'Active Reload'],
        mid: ['Bullet Lifesteal', 'Surge of Power', 'Burst Fire', 'Bullet Resist Shredder'],
        late: ['Ricochet', 'Silencer', 'Vampiric Burst', 'Siphon Bullets'],
        situational: ['Metal Skin contra carries de arma', 'Debuff Remover contra control', 'Unstoppable para ultar segura']
      },
      skillOrder: 'Prioriza 3 → 1 → 2. Fixation es tu daño; Sleep Dagger inicia o escapa.',
      tips: [
        'Flanquea siempre: Haze pierde de frente contra la mayoría de carries.',
        'Sleep Dagger + Bullet Dance es una ejecución fiable sobre un objetivo solo.',
        'Usa Smoke Bomb para romper la visión y reposicionarte, no solo para huir.',
        'No ultes si el equipo enemigo tiene stuns disponibles.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Dynamo', 'Ivy', 'Kelvin']
    },

    Infernus: {
      roleLabel: 'Carry / Daño sostenido',
      summary: 'Carry de fuego con daño progresivo y una movilidad excelente. Domina peleas largas y castiga a los equipos sin curación.',
      build: {
        early: ['Extra Spirit', 'Rapid Rounds', 'Improved Spirit', 'Extended Magazine'],
        mid: ['Spirit Lifesteal', 'Duration Extender', 'Mystic Vulnerability', 'Healbane'],
        late: ['Escalating Exposure', 'Superior Duration', 'Spiritual Overflow', 'Boundless Spirit'],
        situational: ['Toxic Bullets contra tanques', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Napalm empuja oleadas y aplica quemadura; Afterburn escala el daño.',
      tips: [
        'Lanza Napalm a la oleada antes de intercambiar: el daño de quemadura se acumula.',
        'Flame Dash sirve para entrar y salir; no lo gastes solo para farmear.',
        'Concussive Combustion es mejor cuando el enemigo ya está ralentizado o agrupado.',
        'Compra heal reduction si el equipo rival tiene mucho sustain.'
      ],
      counters: ['Debuff Remover', 'Silence', 'Antiheal'],
      synergies: ['Dynamo', 'Kelvin', 'Abrams']
    },

    Lash: {
      roleLabel: 'Iniciador / Asesino',
      summary: 'Iniciador aéreo con movilidad vertical única. Entra desde ángulos imposibles y castiga grupos con Death Slam.',
      build: {
        early: ['Mystic Burst', 'Headshot Booster', 'Extra Spirit', 'Extra Charge'],
        mid: ['Improved Spirit', 'Extra Stamina', 'Headhunter', 'Mystic Shot'],
        late: ['Greater Expansion', 'Boundless Spirit', 'Superior Cooldown', 'Spirit Burn'],
        situational: ['Unstoppable para iniciar', 'Debuff Remover contra control', 'Tankbuster contra tanques']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Ground Strike para daño; Grapple para reposicionarte.',
      tips: [
        'Busca ángulos altos antes de iniciar: Lash es letal cayendo desde arriba.',
        'Death Slam conecta mejor sobre enemigos agrupados o sin movilidad.',
        'No inicies sin que tu equipo pueda seguir el daño.',
        'Usa Grapple para escapar después de un mal engage.'
      ],
      counters: ['Silence', 'Knockdown', 'Dynamo'],
      synergies: ['Dynamo', 'Seven', 'Abrams']
    },

    Pocket: {
      roleLabel: 'Asesino / Mago',
      summary: 'Asesino móvil de corta distancia con escopeta, bolsa mágica y daño espiritual en área. Entra, borra un objetivo y desaparece.',
      build: {
        early: ['Mystic Burst', 'Monster Rounds', 'Extra Regen', 'Cold Front'],
        mid: ['Cultist Sacrifice', 'Swift Striker', 'Tankbuster', 'Mystic Expansion'],
        late: ['Spirit Burn', 'Greater Expansion', 'Superior Duration', 'Transcendent Cooldown'],
        situational: ['Debuff Remover contra control', 'Unstoppable para ultar', 'Healbane contra sustain']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Barrage es tu daño; Enchanter\'s Satchel te salva de casi todo.',
      tips: [
        'Usa Enchanter\'s Satchel para esquivar habilidades clave, no solo para huir.',
        'Ataca desde flancos y por la espalda: tu escopeta castiga a corta distancia.',
        'Affliction es excelente para iniciar sobre grupos o forzar retiradas.',
        'Flying Cloak te da una segunda entrada o una salida limpia.'
      ],
      counters: ['Silence', 'Abrams', 'Dynamo'],
      synergies: ['Dynamo', 'Lash', 'Ivy']
    },

    Seven: {
      roleLabel: 'Carry / Mago de área',
      summary: 'Mago de daño en área con un ult que transforma peleas. Farmea rápido, controla oleadas y castiga equipos agrupados.',
      build: {
        early: ['Monster Rounds', 'Extra Spirit', 'Extra Regen', 'Extra Charge'],
        mid: ['Mystic Vulnerability', 'Healbane', 'Duration Extender', 'Spirit Lifesteal'],
        late: ['Escalating Exposure', 'Boundless Spirit', 'Superior Duration', 'Superior Cooldown'],
        situational: ['Unstoppable para ultar', 'Debuff Remover contra control', 'Spirit Resilience contra burst']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Lightning Ball para farmear; Static Charge para iniciar.',
      tips: [
        'Lightning Ball limpia oleadas y presiona líneas con poco riesgo.',
        'Busca ultar desde una posición elevada o detrás de tu tanque.',
        'Static Charge sobre un objetivo agrupado puede ganar la pelea sola.',
        'No te quedes quieto durante Storm Cloud: eres un objetivo fácil.'
      ],
      counters: ['Silence', 'Dynamo', 'Lash'],
      synergies: ['Dynamo', 'Abrams', 'Kelvin']
    },

    Vindicta: {
      roleLabel: 'Francotiradora',
      summary: 'Francotiradora de largo alcance con vuelo y ejecución global. Castiga a los enemigos débiles desde ángulos inesperados.',
      build: {
        early: ['High-Velocity Rounds', 'Opening Rounds', 'Extra Charge', 'Extra Spirit'],
        mid: ['Rapid Recharge', 'Swift Striker', 'Long Range', 'Sharpshooter'],
        late: ['Burst Fire', 'Spiritual Overflow', 'Mercurial Magnum', 'Titanic Magazine'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable si te divean']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Stake para fijar objetivos; Flight para ángulos y escape.',
      tips: [
        'Juega desde la máxima distancia posible y cambia de altura a menudo.',
        'Crow Familiar revela zonas y ayuda a rematar objetivos que huyen.',
        'Assassinate remata a enemigos con poca vida; no la uses de inicio.',
        'Si te divean, usa Flight para romper la línea de visión.'
      ],
      counters: ['Haze', 'Lash', 'Pocket'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Wraith: {
      roleLabel: 'Carry / Duelista',
      summary: 'Duelista de ráfagas y teleportación. Aísla objetivos, los borra con Full Auto y desaparece antes de recibir respuesta.',
      build: {
        early: ['Monster Rounds', 'Quicksilver Reload', 'Rapid Rounds', 'Extra Spirit'],
        mid: ['Surge of Power', 'Tesla Bullets', 'Swift Striker', 'Recharging Rush'],
        late: ['Mercurial Magnum', 'Ricochet', 'Spiritual Overflow', 'Spirit Lifesteal'],
        situational: ['Silencer contra magos', 'Metal Skin contra carries', 'Debuff Remover contra control']
      },
      skillOrder: 'Prioriza 3 → 1 → 2. Full Auto es tu daño sostenido; Card Trick para poke.',
      tips: [
        'Busca 1v1: Wraith brilla aislando objetivos.',
        'Teleporta fuera de la pelea cuando tu Full Auto termine, no cuando estés muerto.',
        'Telekinesis es una ejecución excelente sobre objetivos sin apoyo.',
        'No entres primero: deja que el tanque absorba las habilidades.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Dynamo', 'Ivy', 'Kelvin']
    },

    Apollo: {
      roleLabel: 'Asesino / Duelista',
      summary: 'Espadachín de duelos con retroceso, parada y una ult que congela el tiempo. Premia la precisión y el timing.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Extra Stamina'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para ultar', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 3 → 2 → 1. Flawless Advance es daño; Riposte para castigar ataques.',
      tips: [
        'Usa Riposte contra habilidades predecibles y luego castiga el aturdimiento.',
        'Flawless Advance premia mantener la tecla: aprende el timing perfecto.',
        'Itani Lo Sahn congela objetivos clave; coordínalo con tu equipo.',
        'No entres sin una salida: Disengaging Sigil es tu escape.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Dynamo', 'Abrams', 'Kelvin']
    },

    Baba: {
      roleLabel: 'Mago / Control',
      summary: 'Bruja de control con hilos, patada y una tetera impredecible. Roba poder espiritual y castiga grupos.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Threadsap roba espíritu; Granny Long Legs para control.',
      tips: [
        'Roba poder espiritual con Threadsap antes de comprometerte en pelea.',
        'Baba\'s Brew es aleatoria: úsala cuando cualquier efecto te venga bien.',
        'Feed The Birds es mejor sobre objetivos ya ralentizados.',
        'La patada de Granny Long Legs sirve para alejar diveadores.'
      ],
      counters: ['Silence', 'Unstoppable', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    Bebop: {
      roleLabel: 'Iniciador / Bruiser',
      summary: 'Bruiser de gancho y combos. Un gancho bien puesto convierte cualquier pelea en una ejecución.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Monster Rounds'],
        mid: ['Improved Spirit', 'Mystic Vulnerability', 'Duration Extender', 'Healbane'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Unstoppable para ultar', 'Debuff Remover contra control', 'Tankbuster contra tanques']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Hook es tu herramienta; Bomb mantiene el daño.',
      tips: [
        'Gancho + bomba + uppercut es tu combo básico: practica el orden.',
        'No ganchees a un tanque hacia tu equipo sin una razón.',
        'Usa el láser para castigar objetivos fijados o aturdidos.',
        'Compra movilidad: Bebop sufre si le alcanzan por la espalda.'
      ],
      counters: ['Unstoppable', 'Debuff Remover', 'Silence'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    Billy: {
      roleLabel: 'Bruiser / Caos',
      summary: 'Cabra punk de cuerpo a cuerpo con empujones, golpes y cadenas. Entra, desordena y castiga grupos.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para iniciar', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Bashdown para control; Rising Ram para iniciar.',
      tips: [
        'Rising Ram es tu entrada: manda a un objetivo al aire y sigue con Bashdown.',
        'Blasted te devuelve munición al golpear: usa melee entre recargas.',
        'Chain Gang fija objetivos; coordina con tu equipo para rematarlos.',
        'No persigas eternamente: eres fuerte, pero no inmortal.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Dynamo', 'Abrams', 'Lash']
    },

    Calico: {
      roleLabel: 'Asesina / Sigilo',
      summary: 'Asesina felina que usa las sombras para entrar y salir. Castiga objetivos aislados y escapa con movilidad.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Extra Stamina'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Silence contra magos']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Usa sigilo para buscar ángulos, no para esperar.',
      tips: [
        'Flanquea y ataca cuando el equipo enemigo esté distraído.',
        'Guarda tu movilidad para salir después del pickoff.',
        'No te enfrentes de frente a tanques: busca carries y soportes.',
        'Coordina tus entradas con el engage de tu tanque.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Dynamo', 'Lash', 'Abrams']
    },

    Celeste: {
      roleLabel: 'Mago / Soporte',
      summary: 'Unicornio de daño espiritual y control. Su barrera silencia y sus rayos castigan grupos.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Light Eater para poke; Radiant Daggers para área.',
      tips: [
        'Dazzling Trick no solo protege: si rompen la barrera, silencia alrededor.',
        'Radiant Daggers castiga a los equipos que se agrupan.',
        'Shining Wonder rebota; búscalo en pasillos y zonas cerradas.',
        'Juega cerca de tu equipo: tu valor crece en peleas grupales.'
      ],
      counters: ['Silence', 'Unstoppable', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    'Deadman Danny': {
      roleLabel: 'Tirador / Movilidad',
      summary: 'Tirador con jetpack y misiles. Controla el aire y castiga desde ángulos verticales.',
      build: {
        early: ['High-Velocity Rounds', 'Extra Stamina', 'Extra Spirit', 'Opening Rounds'],
        mid: ['Swift Striker', 'Long Range', 'Compress Cooldown', 'Tankbuster'],
        late: ['Burst Fire', 'Spiritual Overflow', 'Mercurial Magnum', 'Superior Cooldown'],
        situational: ['Unstoppable para volar', 'Debuff Remover contra control', 'Healbane contra sustain']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Strix Salvo para zona; Chimera para reposicionar.',
      tips: [
        'Gestiona el calor del jetpack: no te quedes sin salida en el aire.',
        'Marca objetivos con Strix Salvo y remátalos con disparos cargados.',
        'Jettison Fuel te da daño y un retroceso: úsalo para escapar.',
        'No vueles en línea recta contra francotiradores.'
      ],
      counters: ['Vindicta', 'Grey Talon', 'Silence'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Drifter: {
      roleLabel: 'Asesino / Vampiro',
      summary: 'Vampiro depredador que marca, rastrea y ejecuta. Su ult aísla objetivos y limita su visión.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Silence contra soportes']
      },
      skillOrder: 'Prioriza 2 → 1 → 3. Stalker\'s Mark para iniciar; Rend para ejecutar.',
      tips: [
        'Marca a tu objetivo y espera el momento en que esté solo.',
        'Eternal Night aísla objetivos y corta la visión del equipo enemigo.',
        'Usa la marca para reposicionarte detrás del objetivo.',
        'No entres a pelear contra grupos: eres un asesino, no un tanque.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Lash', 'Dynamo', 'Calico']
    },

    Graves: {
      roleLabel: 'Nigromante / Zona',
      summary: 'Nigromante de control de zona con invocaciones y manos que inmovilizan. Domina peleas estáticas.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Monster Rounds'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Jar of Dead para presión; Grasping Hands para control.',
      tips: [
        'Coloca Grasping Hands en pasillos y objetivos para cortar retiradas.',
        'Recoge muertes cercanas para potenciar tu Jar of Dead.',
        'Los Deadheads presionan objetivos; úsalos para empujar líneas.',
        'Juega detrás de tu tanque y controla la zona, no persigas.'
      ],
      counters: ['Dynamo', 'Silence', 'Unstoppable'],
      synergies: ['Abrams', 'Dynamo', 'Seven']
    },

    Holliday: {
      roleLabel: 'Tiradora / Control',
      summary: 'Vaquera de precisión con lazo y saltos. Castiga objetivos fijados y controla el ritmo de la pelea.',
      build: {
        early: ['High-Velocity Rounds', 'Opening Rounds', 'Extra Charge', 'Extra Spirit'],
        mid: ['Rapid Recharge', 'Swift Striker', 'Long Range', 'Sharpshooter'],
        late: ['Burst Fire', 'Spiritual Overflow', 'Mercurial Magnum', 'Titanic Magazine'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable si te divean']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. El lazo es tu herramienta de pickoff; los saltos, tu escape.',
      tips: [
        'El lazo fija objetivos: coordina con tu equipo para rematarlos.',
        'Usa los saltos para crear ángulos y escapar de diveadores.',
        'Mantén la distancia: tu daño depende de la precisión.',
        'No persigas solo: Holliday es frágil cuando la alcanzan.'
      ],
      counters: ['Haze', 'Lash', 'Pocket'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Ivy: {
      roleLabel: 'Soporte / Movilidad',
      summary: 'Soporte móvil que enlaza aliados, comparte curación y controla con ralentizaciones. Excelente con carries.',
      build: {
        early: ['Extra Regen', 'Extra Spirit', 'Extra Charge', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Healing Booster', 'Compress Cooldown'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Superior Duration', 'Refresher'],
        situational: ['Debuff Remover para aliados', 'Healbane contra sustain', 'Unstoppable para entrar']
      },
      skillOrder: 'Prioriza 2 → 3 → 1. El enlace con aliado es tu identidad.',
      tips: [
        'Enlázate con tu carry antes de la pelea para compartir curación y presión.',
        'Tus ralentizaciones preparan los engages de tu tanque.',
        'No te quedes atrás: Ivy necesita estar cerca de su aliado enlazado.',
        'Compra cooldown reduction para tener el enlace siempre disponible.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Haze', 'Wraith', 'Infernus']
    },

    Kelvin: {
      roleLabel: 'Soporte / Control',
      summary: 'Soporte de hielo con curación, ralentizaciones y control de zona. Mantiene al equipo vivo y condiciona las peleas.',
      build: {
        early: ['Extra Regen', 'Extra Spirit', 'Extra Charge', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Healing Booster', 'Compress Cooldown'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Superior Duration', 'Refresher'],
        situational: ['Debuff Remover contra control', 'Healbane contra sustain', 'Unstoppable para curar']
      },
      skillOrder: 'Prioriza 2 → 3 → 1. La curación y la cúpula son tu prioridad.',
      tips: [
        'La cúpula de hielo separa peleas y protege a tus aliados heridos.',
        'Cura antes del burst, no después: anticipa el daño.',
        'Ralentiza a los diveadores cuando entren sobre tu carry.',
        'Juega cerca del equipo; tu valor no está en el daño.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Abrams', 'Haze', 'Infernus']
    },

    'Lady Geist': {
      roleLabel: 'Maga / Duelista',
      summary: 'Hechicera que usa su propia vida como recurso y drena la de sus enemigos. Domina duelos largos.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Health'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Healbane'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healing Booster', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Gestiona la vida: no regales un burst por codicia.',
      tips: [
        'No empieces las peleas con poca vida: tu recurso es la salud.',
        'Drena a objetivos aislados para recuperarte en pleno combate.',
        'Usa tu ult cuando el enemigo esté comprometido, no al inicio.',
        'Compra curación y resistencias para sostener el intercambio.'
      ],
      counters: ['Antiheal', 'Silence', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Kelvin']
    },

    McGinnis: {
      roleLabel: 'Ingeniera / Zona',
      summary: 'Ingeniera de torretas y muros. Controla espacios, niega rutas y castiga a los equipos que entran sin pensar.',
      build: {
        early: ['Extra Charge', 'Extra Regen', 'Mystic Burst', 'Extra Spirit'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Compress Cooldown', 'Mystic Vulnerability'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Greater Expansion', 'Superior Duration'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para colocar torretas']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Las torretas son tu presión; el muro, tu control.',
      tips: [
        'Coloca torretas en ángulos que cubran objetivos, no en el centro del carril.',
        'El muro corta retiradas y protege tus torretas.',
        'No te quedes parada: reposiciona las torretas según la pelea.',
        'Tu ult castiga a los equipos que se agrupan en espacios cerrados.'
      ],
      counters: ['Dynamo', 'Silence', 'Lash'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Mina: {
      roleLabel: 'Vampira / Hostigadora',
      summary: 'Vampira ágil de hostigamiento con murciélagos y silencio. Castiga objetivos aislados y escapa con su niebla.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Stamina'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Love Bites es tu daño; Sanguine Retreat tu escape.',
      tips: [
        'Usa Sanguine Retreat para esquivar habilidades, no solo para huir.',
        'Love Bites castiga a objetivos que se quedan mucho tiempo en rango.',
        'Nox Nostra silencia grupos: coordínalo con el engage de tu equipo.',
        'No entres primero: busca el momento en que el enemigo gaste control.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Dynamo', 'Abrams', 'Lash']
    },

    Mirage: {
      roleLabel: 'Asesino / Control',
      summary: 'Asesino de tornado y escarabajos. Persigue objetivos, se sostiene en peleas largas y ayuda a distancia.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Extra Spirit'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Silence contra soportes']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. El tornado es tu entrada y tu escape.',
      tips: [
        'Usa el tornado para llegar a objetivos que huyen o para salir.',
        'Los escarabajos te sostienen en peleas largas: no los desperdicies.',
        'Puedes ayudar a un aliado lejano con tu kit: mira el mapa.',
        'No te enfrentes a tanques de frente: busca carries aislados.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Dynamo', 'Lash', 'Abrams']
    },

    'Mo & Krill': {
      roleLabel: 'Tanque / Supresión',
      summary: 'Dúo de excavación que se entierra, suprime y secuestra objetivos. Un tanque de control muy difícil de matar.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para iniciar', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Burrow para entrar; Combo para suprimir.',
      tips: [
        'Entierra para acercarte sin recibir daño y sal con ventaja.',
        'Tu combo de supresión es letal sobre carries aislados.',
        'No te separes del equipo: eres el ancla de la pelea.',
        'Compra resistencias y curación para aguantar el foco.'
      ],
      counters: ['Silence', 'Debuff Remover', 'Antiheal'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    'Nurse Harrow': {
      roleLabel: 'Soporte / Control',
      summary: 'Sanadora siniestra con sanguijuelas, agujas y terrores. Sostiene aliados y castiga a los enemigos que la miran.',
      build: {
        early: ['Extra Regen', 'Extra Spirit', 'Extra Charge', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Healing Booster', 'Compress Cooldown'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Superior Duration', 'Refresher'],
        situational: ['Debuff Remover para aliados', 'Healbane contra sustain', 'Unstoppable para curar']
      },
      skillOrder: 'Prioriza 2 → 1 → 3. Healing Needles y Wretched Vapors son tu sostén.',
      tips: [
        'Cura con las agujas antes del burst; el daño después llega tarde.',
        'Wretched Vapors retrasa el daño: úsalo en aliados bajo presión.',
        'Lurking Terrors castiga a los enemigos que te miran de frente.',
        'Recoge sanguijuelas para potenciar tus habilidades.'
      ],
      counters: ['Silence', 'Dynamo', 'Antiheal'],
      synergies: ['Abrams', 'Haze', 'Infernus']
    },

    Paige: {
      roleLabel: 'Soporte / Bibliomante',
      summary: 'Bibliomante de soporte con barreras, control y una ola de curación global. Muy fuerte en peleas grupales.',
      build: {
        early: ['Extra Regen', 'Extra Spirit', 'Extra Charge', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Healing Booster', 'Compress Cooldown'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Superior Duration', 'Refresher'],
        situational: ['Debuff Remover para aliados', 'Healbane contra sustain', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 3 → 2 → 1. Plot Armor protege; Captivating Read controla.',
      tips: [
        'Usa Plot Armor en tu carry antes de que entre, no cuando ya está muerto.',
        'Captivating Read ralentiza y luego inmoviliza: colócalo en retiradas.',
        'Rallying Charge cura a todo el equipo: coordina pushes con ella.',
        'Bookwyrm controla pasillos y objetivos.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Abrams', 'Haze', 'Seven']
    },

    Paradox: {
      roleLabel: 'Control / Duelista',
      summary: 'Manipuladora del tiempo con intercambio de posición, muro y ráfaga. Rompe composiciones enemigas con un buen swap.',
      build: {
        early: ['High-Velocity Rounds', 'Extra Spirit', 'Extra Charge', 'Opening Rounds'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Mystic Vulnerability', 'Swift Striker'],
        late: ['Burst Fire', 'Boundless Spirit', 'Superior Cooldown', 'Spiritual Overflow'],
        situational: ['Unstoppable para ultar', 'Debuff Remover contra control', 'Healbane contra sustain']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. El swap es tu herramienta; el muro, tu control.',
      tips: [
        'Un swap sobre un carry enemigo hacia tu equipo gana peleas.',
        'Usa el muro para cortar retiradas o proteger a tus aliados.',
        'No intercambies contra un tanque si tu equipo no puede seguirlo.',
        'Practica el combo swap + granada para maximizar el daño.'
      ],
      counters: ['Unstoppable', 'Silence', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Lash']
    },

    'Rat King': {
      roleLabel: 'Tanque / Zona',
      summary: 'Tanque de zona con ratas, armadura y un estandarte que potencia al equipo. Muy difícil de desalojar.',
      build: {
        early: ['Close Quarters', 'Extra Regen', 'Melee Lifesteal', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para colocar el estandarte', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 2 → 1 → 3. Rat Swarm presiona; Royal Pestments te sostiene.',
      tips: [
        'Coloca el estandarte en el centro de la pelea para potenciar a tu equipo.',
        'Rat Swarm reduce la resistencia a balas: combínalo con tu carry.',
        'Usa Scrap Grenade para negar pasillos y retiradas.',
        'Eres el ancla: no persigas, mantén la posición.'
      ],
      counters: ['Dynamo', 'Silence', 'Antiheal'],
      synergies: ['Haze', 'Seven', 'Dynamo']
    },

    Rem: {
      roleLabel: 'Soporte / Control',
      summary: 'Soporte onírico con curación, ayudantes y una siesta que duerme a los enemigos. Muy útil en peleas coordinadas.',
      build: {
        early: ['Extra Regen', 'Extra Spirit', 'Extra Charge', 'Mystic Burst'],
        mid: ['Rapid Recharge', 'Duration Extender', 'Healing Booster', 'Compress Cooldown'],
        late: ['Superior Cooldown', 'Boundless Spirit', 'Superior Duration', 'Refresher'],
        situational: ['Debuff Remover para aliados', 'Healbane contra sustain', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 2 → 3 → 1. Tag Along cura; Naptime controla.',
      tips: [
        'Salta a un aliado herido con Tag Along para curarlo y reposicionarte.',
        'Naptime atraviesa paredes y suelos: úsalo para iniciar.',
        'Los Lil Helpers pueden apoyar a un aliado o empujar una línea.',
        'No te quedes solo: Rem es mucho más fuerte con su equipo.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Abrams', 'Haze', 'Seven']
    },

    Shiv: {
      roleLabel: 'Asesino / Sangrado',
      summary: 'Asesino de sangrado y ejecución. Debilita objetivos con golpes y entra a rematar cuando están bajos.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Silence contra soportes']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Aplica sangrado y entra cuando el objetivo esté bajo.',
      tips: [
        'No entres a full vida: primero aplica sangrado desde la distancia.',
        'Guarda tu movilidad para la ejecución, no para el primer contacto.',
        'Los objetivos con antiheal son más difíciles: cambia de target.',
        'Coordina con tu equipo para aislar carries.'
      ],
      counters: ['Antiheal', 'Abrams', 'Silence'],
      synergies: ['Dynamo', 'Lash', 'Abrams']
    },

    Silver: {
      roleLabel: 'Bruiser / Transformación',
      summary: 'Bounty hunter licántropa que alterna entre tiroteo y forma de lobo. Cambia el ritmo de la pelea a su favor.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para transformarte', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Gestiona la transformación: es tu ventana de poder.',
      tips: [
        'No transformes sin objetivo: la forma de lobo es tu herramienta de ejecución.',
        'Entangling Bola corta movilidad: úsala para iniciar.',
        'Slam Fire te da presión a corta distancia.',
        'Juega agresivo solo cuando tu ult esté disponible.'
      ],
      counters: ['Silence', 'Dynamo', 'Antiheal'],
      synergies: ['Abrams', 'Dynamo', 'Lash']
    },

    Sinclair: {
      roleLabel: 'Mago / Control',
      summary: 'Mago de hexes y redirecciones. Confunde a los enemigos con proyectiles curvos y clones.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Los hexes curvos premian la predicción.',
      tips: [
        'Usa los hexes para castigar enemigos detrás de cobertura.',
        'Tus clones generan confusión: úsalos para iniciar o escapar.',
        'No te quedes quieto: Sinclair es frágil si le alcanzan.',
        'Coordina tu control con el engage de tu tanque.'
      ],
      counters: ['Haze', 'Lash', 'Silence'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    Solomon: {
      roleLabel: 'Mago / Estratega',
      summary: 'Estratega de ajedrez que controla el tablero con piezas. Coloca amenazas y obliga al enemigo a moverse.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Coloca piezas antes de la pelea, no durante.',
      tips: [
        'Prepara el tablero con bishop y rooks antes de que empiece la pelea.',
        'Kingside Knight protege a tu carry: úsalo con antelación.',
        'Rook Battery rebota en paredes: castiga pasillos.',
        'Juega con visión y paciencia; tu poder crece con la preparación.'
      ],
      counters: ['Dynamo', 'Silence', 'Lash'],
      synergies: ['Abrams', 'Haze', 'Dynamo']
    },

    'The Doorman': {
      roleLabel: 'Mago / Control de mapa',
      summary: 'Conserje interdimensional con puertas, equipaje y control de posición. Reubica aliados y enemigos a voluntad.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 2 → 1 → 3. Doorway es tu herramienta de mapa.',
      tips: [
        'Coloca puertas para rotar rápido o para sacar a un aliado de apuros.',
        'El carrito de equipaje desplaza enemigos: úsalo para separarlos.',
        'Hotel Guest aísla objetivos: coordínalo con tu equipo.',
        'Anticipa las puertas antes de la pelea, no durante.'
      ],
      counters: ['Dynamo', 'Silence', 'Unstoppable'],
      synergies: ['Abrams', 'Dynamo', 'Lash']
    },

    Venator: {
      roleLabel: 'Tirador / Cazador',
      summary: 'Cazador de precisión con trampas, escopeta y una ult de ejecución. Controla rutas y castiga objetivos marcados.',
      build: {
        early: ['High-Velocity Rounds', 'Opening Rounds', 'Extra Charge', 'Extra Spirit'],
        mid: ['Rapid Recharge', 'Swift Striker', 'Long Range', 'Sharpshooter'],
        late: ['Burst Fire', 'Spiritual Overflow', 'Mercurial Magnum', 'Superior Cooldown'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable si te divean']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Las trampas controlan; la ult ejecuta.',
      tips: [
        'Coloca trampas en pasillos y objetivos antes de la pelea.',
        'Gutshot castiga a los enemigos contra paredes.',
        'Ira Domini remata objetivos con poca vida: guarda la última estaca.',
        'Mantén la distancia y cambia de posición tras cada disparo.'
      ],
      counters: ['Haze', 'Lash', 'Pocket'],
      synergies: ['Abrams', 'Dynamo', 'Kelvin']
    },

    Victor: {
      roleLabel: 'Bruiser / Resistencia',
      summary: 'Bruiser que convierte el daño recibido en poder y revive tras caer. Absorbe presión y castiga en peleas largas.',
      build: {
        early: ['Close Quarters', 'Extra Regen', 'Melee Lifesteal', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Debuff Remover contra control', 'Metal Skin contra ráfagas', 'Healbane contra sustain']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. Pain Battery escala con el daño recibido.',
      tips: [
        'Recibe daño controlado para cargar Pain Battery antes de la pelea.',
        'Jumpstart te da regeneración: úsalo al iniciar un intercambio.',
        'Aura of Suffering también te daña: no la canalices sin curación.',
        'Tu reanimación sorprende: úsala para reenganchar.'
      ],
      counters: ['Antiheal', 'Silence', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Kelvin']
    },

    Violet: {
      roleLabel: 'Maga / Artista',
      summary: 'Artista que pinta el campo de batalla con tinta. Controla zonas, ralentiza y castiga a los enemigos que se quedan dentro.',
      build: {
        early: ['Extra Spirit', 'Mystic Burst', 'Extra Regen', 'Extra Charge'],
        mid: ['Improved Spirit', 'Duration Extender', 'Mystic Vulnerability', 'Compress Cooldown'],
        late: ['Boundless Spirit', 'Escalating Exposure', 'Superior Duration', 'Spirit Burn'],
        situational: ['Healbane contra sustain', 'Debuff Remover contra control', 'Unstoppable para ultar']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Flow State controla; Still Life castiga.',
      tips: [
        'Pinta rutas de retirada para cortar la huida enemiga.',
        'Still Life premia mantener la mirada: busca ángulos seguros.',
        'Abstract Landscape bloquea visión y silencia: úsalo en objetivos.',
        'No te quedes quieta: reposiciona tus trazos.'
      ],
      counters: ['Dynamo', 'Silence', 'Lash'],
      synergies: ['Abrams', 'Dynamo', 'Seven']
    },

    Viscous: {
      roleLabel: 'Tanque / Evasión',
      summary: 'Tanque elástico que evade, se cura y controla con su cubo. Muy difícil de fijar y de matar.',
      build: {
        early: ['Close Quarters', 'Extra Regen', 'Melee Lifesteal', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Debuff Remover contra control', 'Metal Skin contra ráfagas', 'Unstoppable para iniciar']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. El cubo es tu supervivencia; úsalo con criterio.',
      tips: [
        'Entra en cubo para esquivar habilidades clave, no para esperar.',
        'Tu movilidad rodando te permite iniciar o escapar.',
        'No gastes toda la curación al principio de la pelea.',
        'Eres un tanque de distracción: atrae el foco de los carries.'
      ],
      counters: ['Antiheal', 'Silence', 'Dynamo'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    Vyper: {
      roleLabel: 'Asesina / Veneno',
      summary: 'Asesina de veneno y ráfagas. Se cuela en la retaguardia y ejecuta objetivos prioritarios.',
      build: {
        early: ['Rapid Rounds', 'Extra Spirit', 'Swift Striker', 'Extra Regen'],
        mid: ['Bullet Lifesteal', 'Surge of Power', 'Burst Fire', 'Bullet Resist Shredder'],
        late: ['Ricochet', 'Silencer', 'Vampiric Burst', 'Siphon Bullets'],
        situational: ['Metal Skin contra carries', 'Debuff Remover contra control', 'Healbane contra sustain']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. Busca flancos y castiga objetivos aislados.',
      tips: [
        'Flanquea y ataca cuando el equipo enemigo esté distraído.',
        'El veneno castiga a los objetivos que sobreviven al primer burst.',
        'No entres de frente: eres frágil si te fijan.',
        'Coordina con tu tanque para entrar en el momento adecuado.'
      ],
      counters: ['Abrams', 'Dynamo', 'Silence'],
      synergies: ['Dynamo', 'Lash', 'Abrams']
    },

    Warden: {
      roleLabel: 'Bruiser / Disruptor',
      summary: 'Disruptor de primera línea que debilita y persigue. Su jaula cambia el ritmo de las peleas.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Monster Rounds'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 2 → 3. La jaula es tu herramienta de control.',
      tips: [
        'Usa la jaula para encerrar objetivos y cortar retiradas.',
        'Entra después de que el enemigo gaste su control.',
        'Tu debuff de resistencia hace más daño a los tanques.',
        'No persigas sin visión: Warden castiga, pero también es castigado.'
      ],
      counters: ['Silence', 'Dynamo', 'Debuff Remover'],
      synergies: ['Dynamo', 'Abrams', 'Seven']
    },

    Yamato: {
      roleLabel: 'Duelista / Asesina',
      summary: 'Duelista de espada con dash y golpes cargados. Castiga errores de posición y gana duelos por precisión.',
      build: {
        early: ['Close Quarters', 'Melee Lifesteal', 'Extra Regen', 'Extra Stamina'],
        mid: ['Melee Charge', 'Lifestrike', 'Bullet Resist Shredder', 'Healing Booster'],
        late: ['Crushing Fists', 'Superior Duration', 'Phantom Strike', 'Spirit Resilience'],
        situational: ['Unstoppable para entrar', 'Debuff Remover contra control', 'Metal Skin contra ráfagas']
      },
      skillOrder: 'Prioriza 1 → 3 → 2. El dash es tu entrada y tu salida.',
      tips: [
        'No falles los golpes cargados: son tu daño principal.',
        'Usa el dash para entrar, no para perseguir sin visión.',
        'Los duelos largos favorecen a Yamato si aciertas.',
        'Coordina con tu equipo para aislar objetivos.'
      ],
      counters: ['Antiheal', 'Abrams', 'Silence'],
      synergies: ['Dynamo', 'Abrams', 'Lash']
    }
  },

  guides: [
    {
      id: 'almas-farming',
      title: 'Economía de almas: farmea sin regalar la línea',
      category: 'Fundamentos',
      summary: 'Cómo priorizar oleadas, campamentos y objetivos para no quedarte atrás en almas.',
      content: [
        'En Deadlock las almas lo son todo: desbloquean habilidades, ítems y ventajas de mapa. La regla básica es no perder oleadas. Una oleada vale más que un kill arriesgado si no hay objetivo detrás.',
        'Empuja la línea antes de rotar. Si vas a ayudar a otro carril, deja la oleada en una posición que el enemigo tenga que limpiar o que te dé tiempo a volver.',
        'Los campamentos neutrales son una fuente constante de almas. Alterna oleada y campamento cercano, y no cruces el mapa por un campamento que ya está limpio.',
        'Cuando mates a un rival, no vuelvas inmediatamente a la línea: convierte la ventaja en torre, campamento o visión.'
      ],
      tips: [
        'Último golpe a los troopers siempre que puedas.',
        'No rotes si vas a perder dos oleadas.',
        'Convierte kills en objetivos, no en más kills.'
      ]
    },
    {
      id: 'denies',
      title: 'Denies y presión de línea',
      category: 'Fundamentos',
      summary: 'Gana la línea negando almas al rival y manteniendo la oleada en tu lado.',
      content: [
        'Un deny evita que el enemigo reciba almas de un trooper. En las primeras fases, negar vale casi tanto como farmear: la diferencia de almas se nota en el primer objeto.',
        'Mantén la oleada cerca de tu torre. Si el rival tiene que acercarse para farmear, queda expuesto a tu presión y a un posible engage.',
        'No sacrifiques tu vida por un deny. Si el rival tiene ventaja de daño o apoyo, prioriza sobrevivir y mantener la oleada.',
        'Aprende el ritmo de los troopers: dispara justo antes de que muera para maximizar denies sin perder tus propios últimos golpes.'
      ],
      tips: [
        'Niega siempre que el rival esté fuera de posición.',
        'Congela la oleada cerca de tu torre si vas ganando.',
        'Pide ayuda si el rival te está negando todo.'
      ]
    },
    {
      id: 'objetivos',
      title: 'Urna y Mid Boss: cuándo y cómo',
      category: 'Objetivos',
      summary: 'Los objetivos neutrales deciden partidas. Aprende a prepararlos y a no regalarlos.',
      content: [
        'La Urna y el Mid Boss dan ventajas globales. No los intentes si el equipo enemigo está completo y tú no tienes visión.',
        'Prepara el objetivo con oleadas empujadas: si el rival tiene que defender sus torres, no puede contestar el objetivo.',
        'Coloca visión antes de empezar. Un Mid Boss robado duele más que no haberlo intentado.',
        'Si el enemigo empieza el objetivo, decide rápido: contestar con ventaja o cambiar de objetivo al otro lado del mapa.'
      ],
      tips: [
        'Nunca empieces un objetivo sin visión del equipo rival.',
        'Empuja todas las líneas antes de agruparte.',
        'Si pierdes el objetivo, cambia a torres o campamentos.'
      ]
    },
    {
      id: 'itemizacion',
      title: 'Itemización situacional: compra por lo que ves',
      category: 'Objetos',
      summary: 'No copies la misma build cada partida. Adapta tus objetos al estado del juego.',
      content: [
        'Las builds recomendadas son un punto de partida, no una receta. Mira el equipo enemigo: si hay mucha curación, compra reducción de curación; si hay mucho control, compra limpieza o inmunidad.',
        'Si el enemigo tiene dos o más tanques, invierte en penetración de resistencias y daño porcentual. Si tiene carries de ráfaga, prioriza resistencias y objetos defensivos.',
        'No infles tu build con objetos de tier alto si no tienes la economía. Es mejor completar un objeto clave que quedarte a medias con dos.',
        'Vende objetos obsoletos cuando necesites el slot. El coste de vender es menor que el de llevar un objeto que ya no aporta.'
      ],
      tips: [
        'Revisa el inventario enemigo cada vez que mueras.',
        'Compra antiheal si ves curación sostenida.',
        'No compres el mismo objeto cada partida por inercia.'
      ]
    },
    {
      id: 'teamfight',
      title: 'Teamfight: posición, foco y habilidades',
      category: 'Combate',
      summary: 'Ganar peleas no es tirar todas las habilidades: es elegir el momento y el objetivo correcto.',
      content: [
        'Antes de la pelea, identifica tu rol: el tanque inicia y absorbe, el carry espera el error, el soporte mantiene vivo al equipo. Si haces el trabajo de otro, pierdes la pelea.',
        'No gastes tus habilidades de control al inicio si el enemigo puede esquivarlas. Espera a que se comprometan o a que gasten su movilidad.',
        'El foco debe ser el objetivo que tu equipo puede matar, no siempre el carry. Un soporte fuera de posición también es una buena ejecución.',
        'Después de ganar una pelea, convierte la ventaja: torres, objetivos, visión. Una pelea ganada sin objetivo es media pelea.'
      ],
      tips: [
        'Espera a que el tanque inicie antes de entrar.',
        'Guarda una habilidad para escapar o rematar.',
        'No persigas kills sin visión del resto del equipo.'
      ]
    },
    {
      id: 'primeros-pasos',
      title: 'Primeros pasos: héroes fáciles y roles',
      category: 'Principiante',
      summary: 'Si empiezas en Deadlock, estos héroes te enseñan el juego sin castigarte demasiado.',
      content: [
        'Empieza con héroes de complejidad baja: Abrams, Infernus, Seven, Haze, Wraith o Vindicta. Tienen kits directos y te permiten centrarte en farmear, posicionarte y entender los objetivos.',
        'Aprende un rol principal y uno secundario. Deadlock premia la consistencia: es mejor dominar dos héroes que jugar diez a medias.',
        'Juega las primeras partidas pensando en no morir. Cada muerte regala almas y tempo al enemigo; sobrevivir ya es una ventaja.',
        'Cuando tengas diez partidas, revisa tus repeticiones: fíjate en las muertes evitables y en las oleadas que perdiste.'
      ],
      tips: [
        'Elige un héroe de complejidad 1 al empezar.',
        'Prioriza no morir sobre hacer kills.',
        'Aprende el mapa y los campamentos antes de buscar jugadas.'
      ]
    }
  ]
};
