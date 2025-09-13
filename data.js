const movimentos = [
  // OMBRO
  {
    articulacao: "Ombro",
    movimento: "Flexão",
    agonistas: "Deltoide anterior, Peitoral maior (fibras claviculares)",
    antagonistas: "Latíssimo do dorso, Deltoide posterior",
    sinergistas: "Bíceps braquial (cabeça longa), Coracobraquial",
    estabilizadores: "Manguito rotador (supraespinhal, infraespinhal, redondo menor, subescapular), Serrátil anterior, Trapézio",
    testes: [
      { nome: "Teste de Jobe (Empty Can)", videos: [
        "https://www.youtube.com/watch?v=0GEGBot3558",
        "https://www.youtube.com/watch?v=ATI5FSPkeis"
      ]},
      { nome: "Teste de Flexão Resistida do Ombro", videos: [
        "https://www.youtube.com/watch?v=LuCykRRIYU8",
        "https://www.youtube.com/watch?v=4mbGFvZHFJE"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=1d80r-3t8-U",
      "https://www.youtube.com/watch?v=Bq3Gv7Tz96g"
    ]
  },
  {
    articulacao: "Ombro",
    movimento: "Extensão",
    agonistas: "Latíssimo do dorso, Deltoide posterior",
    antagonistas: "Deltoide anterior, Peitoral maior",
    sinergistas: "Tríceps braquial (cabeça longa), Redondo maior",
    estabilizadores: "Manguito rotador, Romboides, Levador da escápula",
    testes: [
      { nome: "Teste de Extensão Resistida", videos: [
        "https://www.youtube.com/watch?v=IeOnnrFnG4A",
        "https://eaulas.usp.br/portal/video?idItem=8958"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=U36o982g1wA"
    ]
  },
  {
    articulacao: "Ombro",
    movimento: "Abdução",
    agonistas: "Deltoide médio, Supraespinhal",
    antagonistas: "Latíssimo do dorso, Peitoral maior",
    sinergistas: "Serrátil anterior, Trapézio (fibras superior e inferior)",
    estabilizadores: "Manguito rotador",
    testes: [
      { nome: "Teste de Abdução Resistida", videos: [
        "https://www.youtube.com/watch?v=V1h4hFpE2mU",
        "https://www.youtube.com/watch?v=I8E-1zH6X7Y"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=fXvA1P-Y2Q0"
    ]
  },
  {
    articulacao: "Ombro",
    movimento: "Adução",
    agonistas: "Peitoral maior, Latíssimo do dorso",
    antagonistas: "Deltoide médio, Supraespinhal",
    sinergistas: "Coracobraquial, Redondo maior",
    estabilizadores: "Manguito rotador, Grande dorsal",
    testes: [
      { nome: "Teste de Adução Resistida", videos: [
        "https://www.youtube.com/watch?v=Qd4n4WqS7hI"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=oV8X7e4k-3U"
    ]
  },
  {
    articulacao: "Ombro",
    movimento: "Rotação Interna",
    agonistas: "Subescapular, Peitoral maior, Latíssimo do dorso, Redondo maior",
    antagonistas: "Infraespinhal, Redondo menor",
    sinergistas: "Deltoide anterior",
    estabilizadores: "Manguito rotador",
    testes: [
      { nome: "Teste de Rotação Interna Resistida", videos: [
        "https://www.youtube.com/watch?v=R0yI_i4_Kow"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=sO-oFzH8p2o"
    ]
  },
  {
    articulacao: "Ombro",
    movimento: "Rotação Externa",
    agonistas: "Infraespinhal, Redondo menor",
    antagonistas: "Subescapular, Peitoral maior, Latíssimo do dorso, Redondo maior",
    sinergistas: "Deltoide posterior",
    estabilizadores: "Manguito rotador",
    testes: [
      { nome: "Teste de Rotação Externa Resistida", videos: [
        "https://www.youtube.com/watch?v=T_sI1zT-rN0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=q6gB4-kL8k0"
    ]
  },

  // COTOVELO
  {
    articulacao: "Cotovelo",
    movimento: "Flexão",
    agonistas: "Bíceps braquial, Braquial, Braquiorradial",
    antagonistas: "Tríceps braquial",
    sinergistas: "Músculos flexores do punho",
    estabilizadores: "Ligamentos colaterais medial e lateral",
    testes: [
      { nome: "Teste de Flexão Resistida do Cotovelo", videos: [
        "https://www.youtube.com/watch?v=kYJ-pG5s-U0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Lq1zN4tJk_k"
    ]
  },
  {
    articulacao: "Cotovelo",
    movimento: "Extensão",
    agonistas: "Tríceps braquial, Ancôneo",
    antagonistas: "Bíceps braquial, Braquial",
    sinergistas: "Extensores do punho",
    estabilizadores: "Ligamentos colaterais medial e lateral",
    testes: [
      { nome: "Teste de Extensão Resistida do Cotovelo", videos: [
        "https://www.youtube.com/watch?v=Tq_Yc2Yp98s"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=3gA3e7hY5_A"
    ]
  },

  // ANTEBRAÇO
  {
    articulacao: "Antebraço",
    movimento: "Pronação",
    agonistas: "Pronador redondo, Pronador quadrado",
    antagonistas: "Supinador, Bíceps braquial",
    sinergistas: "Braquiorradial",
    estabilizadores: "Músculos do punho e cotovelo",
    testes: [
      { nome: "Teste de Pronação Resistida", videos: [
        "https://www.youtube.com/watch?v=H7tS7Y5yOqk"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
    ]
  },
  {
    articulacao: "Antebraço",
    movimento: "Supinação",
    agonistas: "Supinador, Bíceps braquial",
    antagonistas: "Pronador redondo, Pronador quadrado",
    sinergistas: "Braquiorradial",
    estabilizadores: "Músculos do punho e cotovelo",
    testes: [
      { nome: "Teste de Supinação Resistida", videos: [
        "https://www.youtube.com/watch?v=J9f24wM-vWc"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=f-K8g3j_E2Y"
    ]
  },

  // PUNHO
  {
    articulacao: "Punho",
    movimento: "Flexão",
    agonistas: "Flexor radial do carpo, Palmar longo",
    antagonistas: "Extensor radial longo do carpo, Extensor ulnar do carpo",
    sinergistas: "Flexor ulnar do carpo, Flexor profundo e superficial dos dedos",
    estabilizadores: "Ligamentos do carpo",
    testes: [
      { nome: "Teste de Flexão Resistida do Punho", videos: [
        "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Tq_Yc2Yp98s"
    ]
  },
  {
    articulacao: "Punho",
    movimento: "Extensão",
    agonistas: "Extensor radial longo do carpo, Extensor ulnar do carpo, Extensor dos dedos",
    antagonistas: "Flexor radial do carpo, Palmar longo",
    sinergistas: "Extensor radial curto do carpo",
    estabilizadores: "Ligamentos do carpo",
    testes: [
      { nome: "Teste de Extensão Resistida do Punho", videos: [
        "https://www.youtube.com/watch?v=q6gB4-kL8k0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=gQ-Qk8n1LgQ"
    ]
  },
  {
    articulacao: "Punho",
    movimento: "Desvio Radial",
    agonistas: "Extensor radial longo do carpo, Extensor radial curto do carpo, Flexor radial do carpo",
    antagonistas: "Extensor ulnar do carpo, Flexor ulnar do carpo",
    sinergistas: "Abdutor longo do polegar",
    estabilizadores: "Ligamentos do carpo",
    testes: [
      { nome: "Teste de Desvio Radial Resistido", videos: [
        "https://www.youtube.com/watch?v=ZfX_wW6s910"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Vl0TzD7yV_o"
    ]
  },
  {
    articulacao: "Punho",
    movimento: "Desvio Ulnar",
    agonistas: "Extensor ulnar do carpo, Flexor ulnar do carpo",
    antagonistas: "Extensor radial longo do carpo, Flexor radial do carpo",
    sinergistas: "Não aplicável",
    estabilizadores: "Ligamentos do carpo",
    testes: [
      { nome: "Teste de Desvio Ulnar Resistido", videos: [
        "https://www.youtube.com/watch?v=sO-oFzH8p2o"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=1F9y-B94g-I"
    ]
  },

  // MÃO/DEDOS
  {
    articulacao: "Mão/Dedos",
    movimento: "Flexão dos dedos",
    agonistas: "Flexor superficial dos dedos, Flexor profundo dos dedos",
    antagonistas: "Extensor dos dedos",
    sinergistas: "Músculos intrínsecos da mão (lumbrical, interósseos)",
    estabilizadores: "Retináculo flexor, Ligamentos colaterais",
    testes: [
      { nome: "Teste de Flexão Resistida dos Dedos", videos: [
        "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=n-t052M-nC0"
    ]
  },
  {
    articulacao: "Mão/Dedos",
    movimento: "Extensão dos dedos",
    agonistas: "Extensor dos dedos, Extensor do dedo mínimo",
    antagonistas: "Flexor superficial dos dedos, Flexor profundo dos dedos",
    sinergistas: "Lumbrical",
    estabilizadores: "Retináculo extensor",
    testes: [
      { nome: "Teste de Extensão Resistida dos Dedos", videos: [
        "https://www.youtube.com/watch?v=q6gB4-kL8k0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=d_2yQ1xX5J0"
    ]
  },
  {
    articulacao: "Mão/Dedos",
    movimento: "Oponência do polegar",
    agonistas: "Oponente do polegar",
    antagonistas: "Abdutor longo do polegar",
    sinergistas: "Flexor curto do polegar",
    estabilizadores: "Não aplicável",
    testes: [
      { nome: "Teste de Oponência do Polegar", videos: [
        "https://www.youtube.com/watch?v=F01-Ld3u6mI"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=oE-P6gI-uLg"
    ]
  },

  // PESCOÇO
  {
    articulacao: "Pescoço",
    movimento: "Flexão",
    agonistas: "Esternocleidomastoideo",
    antagonistas: "Trapézio (fibras superiores), Esplênio da cabeça",
    sinergistas: "Escalenos, Músculos pré-vertebrais",
    estabilizadores: "Músculos profundos do pescoço (longo da cabeça e do pescoço)",
    testes: [
      { nome: "Teste de Flexão Resistida do Pescoço", videos: [
        "https://www.youtube.com/watch?v=93f0hH-L-pQ"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=gT8-l0s7o8E"
    ]
  },
  {
    articulacao: "Pescoço",
    movimento: "Extensão",
    agonistas: "Trapézio (fibras superiores), Esplênio da cabeça, Semiespinhal da cabeça",
    antagonistas: "Esternocleidomastoideo",
    sinergistas: "Eretor da espinha, Músculos cervicais profundos",
    estabilizadores: "Músculos profundos do pescoço (longo da cabeça e do pescoço)",
    testes: [
      { nome: "Teste de Extensão Resistida do Pescoço", videos: [
        "https://www.youtube.com/watch?v=gT8-l0s7o8E"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=hN7mJgK8_3E"
    ]
  },
  {
    articulacao: "Pescoço",
    movimento: "Rotação",
    agonistas: "Esternocleidomastoideo, Escalenos",
    antagonistas: "Musculatura do pescoço oposta",
    sinergistas: "Músculos cervicais profundos",
    estabilizadores: "Músculos profundos do pescoço (longo da cabeça e do pescoço)",
    testes: [
      { nome: "Teste de Rotação Resistida do Pescoço", videos: [
        "https://www.youtube.com/watch?v=84o-wFq-S-g"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=q6gB4-kL8k0"
    ]
  },

  // COLUNA
  {
    articulacao: "Coluna",
    movimento: "Flexão",
    agonistas: "Reto abdominal, Oblíquos (externo e interno)",
    antagonistas: "Eretores da espinha",
    sinergistas: "Psoas maior",
    estabilizadores: "Transverso do abdome, Oblíquo interno",
    testes: [
      { nome: "Teste de Flexão do Tronco", videos: [
        "https://www.youtube.com/watch?v=0kFv1vj0fB4"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=T_sI1zT-rN0"
    ]
  },
  {
    articulacao: "Coluna",
    movimento: "Extensão",
    agonistas: "Eretores da espinha, Multifídus",
    antagonistas: "Reto abdominal, Oblíquos",
    sinergistas: "Quadrado lombar",
    estabilizadores: "Transverso do abdome, Oblíquo interno",
    testes: [
      { nome: "Teste de Extensão do Tronco", videos: [
        "https://www.youtube.com/watch?v=g3u8iJv2L4o"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Jm_R-k34k_k"
    ]
  },

  // QUADRIL
  {
    articulacao: "Quadril",
    movimento: "Flexão",
    agonistas: "Iliopsoas, Reto femoral",
    antagonistas: "Glúteo máximo, Isquiotibiais",
    sinergistas: "Sartório, Tensor da fáscia lata, Pectíneo",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Thomas", videos: [
        "https://www.youtube.com/watch?v=Rkz3aY5VZ9A",
        "https://www.youtube.com/watch?v=QJYzXyO8U3k"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=H7tS7Y5yOqk"
    ]
  },
  {
    articulacao: "Quadril",
    movimento: "Extensão",
    agonistas: "Glúteo máximo, Isquiotibiais (bíceps femoral, semitendinoso, semimembranoso)",
    antagonistas: "Iliopsoas, Reto femoral",
    sinergistas: "Adutor magno",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Extensão Resistida do Quadril", videos: [
        "https://www.youtube.com/watch?v=Kc_jYYt3s1E",
        "https://www.youtube.com/watch?v=fKwRvzRtbX0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=J9f24wM-vWc"
    ]
  },
  {
    articulacao: "Quadril",
    movimento: "Abdução",
    agonistas: "Glúteo médio, Glúteo mínimo",
    antagonistas: "Adutor longo, Adutor magno",
    sinergistas: "Tensor da fáscia lata, Glúteo máximo",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Trendelenburg", videos: [
        "https://www.youtube.com/watch?v=n-t052M-nC0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Vl0TzD7yV_o"
    ]
  },
  {
    articulacao: "Quadril",
    movimento: "Adução",
    agonistas: "Adutor longo, Adutor magno, Grácil",
    antagonistas: "Glúteo médio, Glúteo mínimo",
    sinergistas: "Pectíneo, Adutor curto",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Adução Resistida do Quadril", videos: [
        "https://www.youtube.com/watch?v=h9p6-y1N_2c"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
    ]
  },
  {
    articulacao: "Quadril",
    movimento: "Rotação Interna",
    agonistas: "Glúteo mínimo, Glúteo médio (fibras anteriores), Tensor da fáscia lata",
    antagonistas: "Glúteo máximo, Piriforme, Gêmeos superior e inferior",
    sinergistas: "Não aplicável",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Rotação Interna do Quadril", videos: [
        "https://www.youtube.com/watch?v=Jm_R-k34k_k"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=h9p6-y1N_2c"
    ]
  },
  {
    articulacao: "Quadril",
    movimento: "Rotação Externa",
    agonistas: "Glúteo máximo, Piriforme, Quadrado femoral",
    antagonistas: "Glúteo mínimo, Glúteo médio (fibras anteriores)",
    sinergistas: "Gêmeos superior e inferior, Obturador interno e externo",
    estabilizadores: "Músculos do CORE",
    testes: [
      { nome: "Teste de Rotação Externa do Quadril", videos: [
        "https://www.youtube.com/watch?v=7u-1f-9z0F4"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Jm_R-k34k_k"
    ]
  },

  // JOELHO
  {
    articulacao: "Joelho",
    movimento: "Flexão",
    agonistas: "Isquiotibiais (bíceps femoral, semitendinoso, semimembranoso)",
    antagonistas: "Quadríceps femoral",
    sinergistas: "Gastrocnêmio, Sartório",
    estabilizadores: "Ligamentos cruzados e colaterais, Poplíteo",
    testes: [
      { nome: "Teste de Gaveta Anterior", videos: [
        "https://www.youtube.com/watch?v=4eRjvVyyXnE",
        "https://www.youtube.com/watch?v=ECLuCko64wI"
      ]},
      { nome: "Teste de Lachman", videos: [
        "https://www.youtube.com/watch?v=P_X4QhK9f6o"
      ]},
      { nome: "Teste de Gaveta Posterior", videos: [
        "https://www.youtube.com/watch?v=v3c4b-s6f-Y"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=F01-Ld3u6mI"
    ]
  },
  {
    articulacao: "Joelho",
    movimento: "Extensão",
    agonistas: "Quadríceps femoral (reto femoral, vasto medial, vasto intermédio, vasto lateral)",
    antagonistas: "Isquiotibiais",
    sinergistas: "Tensor da fáscia lata",
    estabilizadores: "Ligamentos cruzados e colaterais, Músculos do quadril",
    testes: [
      { nome: "Teste de Extensão Resistida do Joelho", videos: [
        "https://www.youtube.com/watch?v=1F9y-B94g-I"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=0kFv1vj0fB4"
    ]
  },

  // TORNOZELO
  {
    articulacao: "Tornozelo",
    movimento: "Flexão Plantar",
    agonistas: "Gastrocnêmio, Sóleo",
    antagonistas: "Tibial anterior",
    sinergistas: "Fibulares, Tibial posterior",
    estabilizadores: "Músculos da perna e pé",
    testes: [
      { nome: "Teste de Flexão Plantar Resistida", videos: [
        "https://www.youtube.com/watch?v=H7tS7Y5yOqk"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=D-y-031f0m0"
    ]
  },
  {
    articulacao: "Tornozelo",
    movimento: "Flexão Dorsal",
    agonistas: "Tibial anterior",
    antagonistas: "Gastrocnêmio, Sóleo",
    sinergistas: "Extensor longo dos dedos",
    estabilizadores: "Músculos da perna e pé",
    testes: [
      { nome: "Teste de Flexão Dorsal Resistida", videos: [
        "https://www.youtube.com/watch?v=J9f24wM-vWc"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
    ]
  },

  // PÉS
  {
    articulacao: "Pés",
    movimento: "Inversão",
    agonistas: "Tibial posterior",
    antagonistas: "Fibulares",
    sinergistas: "Flexor longo dos dedos",
    estabilizadores: "Ligamentos do tornozelo e pé",
    testes: [
      { nome: "Teste de Inversão Resistida", videos: [
        "https://www.youtube.com/watch?v=q6gB4-kL8k0"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=0GEGBot3558"
    ]
  },
  {
    articulacao: "Pés",
    movimento: "Eversão",
    agonistas: "Fibulares",
    antagonistas: "Tibial posterior",
    sinergistas: "Extensor longo dos dedos",
    estabilizadores: "Ligamentos do tornozelo e pé",
    testes: [
      { nome: "Teste de Eversão Resistida", videos: [
        "https://www.youtube.com/watch?v=Yf9c_0uGg8Y"
      ]}
    ],
    funcionamentoNormalVideos: [
      "https://www.youtube.com/watch?v=q6gB4-kL8k0"
    ]
  }
];