export interface Product {
  id: number;
  name: string;
  description: string;
  descricaoCompleta: string;
  application: string;
  tags: string[];
  image?: string;
  rating: number;
  reviews: number;
  especificacoes: Record<string, string>;
  beneficios: string[];
  aplicacoes: string[];
  compatibleMachines?: string[];
  relatedProducts?: number[];
}

export const products: Product[] = [
  // Flow Pack Products (1-20)
  {
    id: 1,
    name: "Faca Circular para Corte Transversal",
    description: "Lâmina circular de alta precisão para corte transversal em embaladoras flow pack",
    descricaoCompleta: "Faca circular desenvolvida especificamente para realizar cortes transversais precisos em máquinas flow pack. Fabricada em aço especial com tratamento térmico, garante durabilidade e qualidade de corte superior.",
    application: "Embalagens de alimentos, produtos farmacêuticos, cosméticos e produtos industriais",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 45,
    especificacoes: {
      "Material": "Aço especial temperado",
      "Tratamento": "Térmico e superficial",
      "Acabamento": "Polido",
      "Tolerância": "±0.01mm"
    },
    beneficios: [
      "Alta durabilidade",
      "Corte preciso e limpo",
      "Redução de paradas",
      "Compatível com principais marcas"
    ],
    aplicacoes: [
      "Embalagens de alimentos",
      "Produtos farmacêuticos",
      "Cosméticos",
      "Produtos industriais"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [2, 3, 8]
  },
  {
    id: 2,
    name: "Faca Dentada para Produtos Duros",
    description: "Lâmina dentada especial para corte de produtos com alta resistência",
    descricaoCompleta: "Faca dentada projetada para cortar produtos duros ou congelados sem danificar a embalagem. O design dos dentes permite corte eficiente mesmo em materiais resistentes.",
    application: "Produtos congelados, barras de cereais, produtos duros e biscoitos",
    tags: ["Flow Pack"],
    rating: 4.7,
    reviews: 38,
    especificacoes: {
      "Material": "Aço inoxidável",
      "Tipo de dente": "Serrilhado",
      "Dureza": "58-62 HRC",
      "Revestimento": "Anti-aderente"
    },
    beneficios: [
      "Corte eficiente em produtos duros",
      "Não danifica a embalagem",
      "Design otimizado dos dentes",
      "Alta resistência ao desgaste"
    ],
    aplicacoes: [
      "Produtos congelados",
      "Barras de cereais",
      "Produtos duros",
      "Biscoitos resistentes"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [1, 3, 9]
  },
  {
    id: 3,
    name: "Conjunto de Facas para Selagem Longitudinal",
    description: "Sistema completo de facas para selagem lateral em flow pack",
    descricaoCompleta: "Conjunto integrado de facas projetado para realizar a selagem longitudinal perfeita em máquinas flow pack. Inclui facas superior e inferior com ajuste de precisão.",
    application: "Selagem de sacos flow pack, embalagens de snacks, produtos de panificação e itens de confeitaria",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 52,
    especificacoes: {
      "Material": "Aço carbono",
      "Quantidade": "2 peças (superior/inferior)",
      "Largura": "Sob medida",
      "Tratamento": "Térmico"
    },
    beneficios: [
      "Selagem uniforme",
      "Ajuste preciso",
      "Longa durabilidade",
      "Fácil instalação"
    ],
    aplicacoes: [
      "Selagem de sacos flow pack",
      "Embalagens de snacks",
      "Produtos de panificação",
      "Itens de confeitaria"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [4, 5, 6]
  },
  {
    id: 4,
    name: "Resistência de Selagem Horizontal",
    description: "Elemento aquecedor para selagem horizontal em máquinas flow pack",
    descricaoCompleta: "Resistência elétrica de alta performance desenvolvida para proporcionar aquecimento uniforme na selagem horizontal. Fabricada com materiais de alta qualidade para garantir distribuição homogênea de calor.",
    application: "Selagem de embalagens plásticas, flow pack horizontal, embalagens multicamadas e filmes termoplásticos",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 41,
    especificacoes: {
      "Potência": "500W - 2000W",
      "Voltagem": "110V/220V",
      "Material": "Mica ou cerâmica",
      "Temperatura máxima": "300°C"
    },
    beneficios: [
      "Aquecimento uniforme",
      "Resposta rápida",
      "Economia de energia",
      "Longa vida útil"
    ],
    aplicacoes: [
      "Selagem de embalagens plásticas",
      "Flow pack horizontal",
      "Embalagens multicamadas",
      "Filmes termoplásticos"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [5, 3, 6]
  },
  {
    id: 5,
    name: "Resistência de Selagem Vertical",
    description: "Elemento aquecedor para selagem vertical em sistemas flow pack",
    descricaoCompleta: "Resistência projetada especificamente para selagem vertical, garantindo fechamento perfeito das laterais da embalagem. Design otimizado para distribuição uniforme de temperatura.",
    application: "Selagem lateral de flow pack, embalagens verticais, sachês e pouches",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 39,
    especificacoes: {
      "Potência": "300W - 1500W",
      "Voltagem": "110V/220V/380V",
      "Formato": "Retangular",
      "Isolamento": "Classe F"
    },
    beneficios: [
      "Precisão térmica",
      "Durabilidade superior",
      "Baixa manutenção",
      "Instalação simples"
    ],
    aplicacoes: [
      "Selagem lateral de flow pack",
      "Embalagens verticais",
      "Sachês",
      "Pouches"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [4, 6, 17]
  },
  {
    id: 6,
    name: "Mordente de Selagem com Teflon",
    description: "Mordente revestido em teflon para selagem sem aderência",
    descricaoCompleta: "Mordente de selagem com revestimento em teflon de alta qualidade, evitando aderência do filme plástico e garantindo selagens limpas e uniformes.",
    application: "Selagem de filmes plásticos, embalagens com alto teor de gordura, produtos pegajosos, chocolates e doces",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 48,
    especificacoes: {
      "Material base": "Alumínio",
      "Revestimento": "Teflon PTFE",
      "Espessura do teflon": "0.5mm",
      "Temperatura de trabalho": "até 260°C"
    },
    beneficios: [
      "Anti-aderente",
      "Selagem limpa",
      "Fácil limpeza",
      "Reduz desperdício"
    ],
    aplicacoes: [
      "Selagem de filmes plásticos",
      "Embalagens com alto teor de gordura",
      "Produtos pegajosos",
      "Chocolates e doces"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [3, 4, 5]
  },
  {
    id: 7,
    name: "Rolo de Tração com Revestimento",
    description: "Rolo motorizado com revestimento para tração precisa do filme",
    descricaoCompleta: "Rolo de tração com revestimento especial em borracha ou poliuretano, garantindo aderência perfeita ao filme sem causar danos ou marcas.",
    application: "Alimentação de filme, controle de tensão, sistemas de tração e transporte de material",
    tags: ["Flow Pack"],
    rating: 4.7,
    reviews: 35,
    especificacoes: {
      "Diâmetro": "50mm - 150mm",
      "Revestimento": "Borracha/Poliuretano",
      "Dureza": "60-80 Shore A",
      "Acabamento": "Liso ou texturizado"
    },
    beneficios: [
      "Aderência perfeita ao filme",
      "Não causa danos ou marcas",
      "Controle preciso de tensão",
      "Longa durabilidade"
    ],
    aplicacoes: [
      "Alimentação de filme",
      "Controle de tensão",
      "Sistemas de tração",
      "Transporte de material"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [8, 12, 13]
  },
  {
    id: 8,
    name: "Formador de Tubo (Former)",
    description: "Guia metálico para formação do tubo de embalagem",
    descricaoCompleta: "Former em aço inoxidável polido, responsável por dar forma ao filme plástico, transformando-o em tubo antes da selagem. Design otimizado para diferentes larguras de embalagem.",
    application: "Formação de tubo flow pack, embalagens de diversos tamanhos, filmes de diferentes espessuras e produtos alimentícios",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 44,
    especificacoes: {
      "Material": "Aço inoxidável 304",
      "Acabamento": "Polido espelhado",
      "Largura": "Sob medida",
      "Ângulo de formação": "Ajustável"
    },
    beneficios: [
      "Formação perfeita",
      "Baixo atrito",
      "Fácil ajuste",
      "Durabilidade excepcional"
    ],
    aplicacoes: [
      "Formação de tubo flow pack",
      "Embalagens de diversos tamanhos",
      "Filmes de diferentes espessuras",
      "Produtos alimentícios"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [1, 7, 12]
  },
  {
    id: 9,
    name: "Sensor Fotocélula para Registro",
    description: "Sensor óptico para detecção de marca de registro em filmes impressos",
    descricaoCompleta: "Fotocélula de alta precisão para leitura de marcas de registro, garantindo corte e posicionamento correto em filmes pré-impressos.",
    application: "Detecção de marca de corte, posicionamento de impressão, controle de registro e sincronização de corte",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 31,
    especificacoes: {
      "Tipo": "Reflexivo ou através de feixe",
      "Alcance": "5mm - 300mm",
      "Resposta": "< 1ms",
      "Saída": "NPN/PNP"
    },
    beneficios: [
      "Alta precisão",
      "Resposta rápida",
      "Fácil calibração",
      "Compatível com diversos filmes"
    ],
    aplicacoes: [
      "Detecção de marca de corte",
      "Posicionamento de impressão",
      "Controle de registro",
      "Sincronização de corte"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [10, 11, 1]
  },
  {
    id: 10,
    name: "Encoder Rotativo para Controle de Velocidade",
    description: "Encoder de precisão para monitoramento e controle de velocidade",
    descricaoCompleta: "Encoder rotativo incremental de alta resolução para controle preciso da velocidade de alimentação do filme e sincronização dos processos de selagem e corte.",
    application: "Controle de velocidade, sincronização de processos, medição de comprimento e controle de tensão",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 28,
    especificacoes: {
      "Resolução": "1000-5000 PPR",
      "Tipo": "Incremental",
      "Saída": "TTL/HTL",
      "Proteção": "IP65"
    },
    beneficios: [
      "Precisão elevada",
      "Resposta instantânea",
      "Durabilidade",
      "Fácil integração"
    ],
    aplicacoes: [
      "Controle de velocidade",
      "Sincronização de processos",
      "Medição de comprimento",
      "Controle de tensão"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [9, 11, 18]
  },
  {
    id: 11,
    name: "Correia Dentada de Transmissão",
    description: "Correia sincronizadora para transmissão de movimento preciso",
    descricaoCompleta: "Correia dentada de alta qualidade para transmissão sincronizada de movimento entre eixos, garantindo precisão no posicionamento e velocidade constante.",
    application: "Transmissão de movimento, sincronização de eixos, acionamento de rolos e sistemas de corte",
    tags: ["Flow Pack"],
    rating: 4.7,
    reviews: 33,
    especificacoes: {
      "Material": "Borracha reforçada",
      "Passo": "5mm - 10mm",
      "Largura": "15mm - 50mm",
      "Reforço": "Fibra de vidro"
    },
    beneficios: [
      "Transmissão precisa",
      "Sem deslizamento",
      "Baixo ruído",
      "Manutenção mínima"
    ],
    aplicacoes: [
      "Transmissão de movimento",
      "Sincronização de eixos",
      "Acionamento de rolos",
      "Sistemas de corte"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [12, 10, 14]
  },
  {
    id: 12,
    name: "Polia Dentada Sincronizadora",
    description: "Polia para correia dentada com perfil sincronizado",
    descricaoCompleta: "Polia dentada usinada em alumínio ou aço, projetada para trabalhar em conjunto com correias dentadas, garantindo transmissão precisa sem deslizamento.",
    application: "Sistemas de transmissão, acionamento sincronizado, redução/multiplicação e posicionamento preciso",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 30,
    especificacoes: {
      "Material": "Alumínio/Aço",
      "Número de dentes": "20-80",
      "Furo": "Sob medida",
      "Tratamento": "Anodizado"
    },
    beneficios: [
      "Precisão dimensional",
      "Longa vida útil",
      "Transmissão eficiente",
      "Baixo ruído"
    ],
    aplicacoes: [
      "Sistemas de transmissão",
      "Acionamento sincronizado",
      "Redução/multiplicação",
      "Posicionamento preciso"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [11, 14, 7]
  },
  {
    id: 13,
    name: "Rolamento de Esferas para Eixos",
    description: "Rolamento de precisão para suporte de eixos rotativos",
    descricaoCompleta: "Rolamento de esferas de alta qualidade para suporte de eixos em máquinas flow pack, garantindo rotação suave e durabilidade.",
    application: "Suporte de eixos, rolos de tração, eixos de corte e sistemas rotativos",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 42,
    especificacoes: {
      "Tipo": "Rígido de esferas",
      "Vedação": "2RS/2Z",
      "Precisão": "ABEC-5",
      "Lubrificação": "Graxa de lítio"
    },
    beneficios: [
      "Baixo atrito",
      "Alta durabilidade",
      "Operação silenciosa",
      "Manutenção reduzida"
    ],
    aplicacoes: [
      "Suporte de eixos",
      "Rolos de tração",
      "Eixos de corte",
      "Sistemas rotativos"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [14, 15, 7]
  },
  {
    id: 14,
    name: "Eixo de Transmissão Usinado",
    description: "Eixo de precisão para transmissão de torque",
    descricaoCompleta: "Eixo usinado em aço com tratamento térmico, projetado para transmitir torque e suportar cargas radiais e axiais em sistemas de embalagem.",
    application: "Transmissão de torque, suporte de rolos, acionamento de facas e sistemas mecânicos",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 27,
    especificacoes: {
      "Material": "Aço 1045",
      "Tratamento": "Têmpera e revenimento",
      "Tolerância": "h6",
      "Acabamento": "Retificado"
    },
    beneficios: [
      "Alta resistência",
      "Precisão dimensional",
      "Durabilidade",
      "Baixa deflexão"
    ],
    aplicacoes: [
      "Transmissão de torque",
      "Suporte de rolos",
      "Acionamento de facas",
      "Sistemas mecânicos"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [13, 15, 11]
  },
  {
    id: 15,
    name: "Bucha de Bronze Autolubrificante",
    description: "Bucha com lubrificação incorporada para baixa manutenção",
    descricaoCompleta: "Bucha de bronze sinterizado com grafite incorporado, proporcionando autolubrificação e reduzindo necessidade de manutenção.",
    application: "Guias lineares, articulações, suporte de eixos e mecanismos oscilantes",
    tags: ["Flow Pack"],
    rating: 4.7,
    reviews: 24,
    especificacoes: {
      "Material": "Bronze sinterizado",
      "Lubrificante": "Grafite",
      "Carga máxima": "50 N/mm²",
      "Velocidade": "até 2 m/s"
    },
    beneficios: [
      "Autolubrificante",
      "Baixa manutenção",
      "Operação silenciosa",
      "Resistente ao desgaste"
    ],
    aplicacoes: [
      "Guias lineares",
      "Articulações",
      "Suporte de eixos",
      "Mecanismos oscilantes"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [13, 14, 17]
  },
  {
    id: 16,
    name: "Mola de Compressão para Mordente",
    description: "Mola de precisão para sistema de mordente de selagem",
    descricaoCompleta: "Mola de compressão em aço mola, projetada para fornecer pressão constante no sistema de mordente, garantindo selagem uniforme.",
    application: "Sistema de mordente, pressão de selagem, retorno de mecanismos e amortecimento",
    tags: ["Flow Pack"],
    rating: 4.6,
    reviews: 22,
    especificacoes: {
      "Material": "Aço mola",
      "Carga": "Sob especificação",
      "Comprimento livre": "Variável",
      "Tratamento": "Shot peening"
    },
    beneficios: [
      "Força constante",
      "Durabilidade",
      "Resistência à fadiga",
      "Precisão dimensional"
    ],
    aplicacoes: [
      "Sistema de mordente",
      "Pressão de selagem",
      "Retorno de mecanismos",
      "Amortecimento"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [6, 3, 18]
  },
  {
    id: 17,
    name: "Guia Linear de Precisão",
    description: "Sistema de guia linear para movimentos precisos",
    descricaoCompleta: "Guia linear com patins de esferas recirculantes, proporcionando movimento suave e preciso para sistemas de corte e selagem.",
    application: "Movimento de facas, posicionamento de mordentes, sistemas de dosagem e automação",
    tags: ["Flow Pack"],
    rating: 4.9,
    reviews: 36,
    especificacoes: {
      "Tipo": "Trilho e patim",
      "Precisão": "Classe N",
      "Carga dinâmica": "Variável",
      "Lubrificação": "Graxa"
    },
    beneficios: [
      "Movimento preciso",
      "Baixo atrito",
      "Alta rigidez",
      "Longa vida útil"
    ],
    aplicacoes: [
      "Movimento de facas",
      "Posicionamento de mordentes",
      "Sistemas de dosagem",
      "Automação"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [18, 19, 1]
  },
  {
    id: 18,
    name: "Cilindro Pneumático Compacto",
    description: "Atuador pneumático para acionamento de mecanismos",
    descricaoCompleta: "Cilindro pneumático de dupla ação, compacto e robusto, ideal para acionamento de sistemas de corte, selagem e dosagem.",
    application: "Acionamento de facas, abertura/fechamento de mordentes, sistemas de empurrar e automação",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 29,
    especificacoes: {
      "Diâmetro": "16mm - 63mm",
      "Curso": "10mm - 200mm",
      "Pressão": "1-10 bar",
      "Amortecimento": "Ajustável"
    },
    beneficios: [
      "Resposta rápida",
      "Força ajustável",
      "Durabilidade",
      "Fácil manutenção"
    ],
    aplicacoes: [
      "Acionamento de facas",
      "Abertura/fechamento de mordentes",
      "Sistemas de empurrar",
      "Automação"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [19, 20, 17]
  },
  {
    id: 19,
    name: "Válvula Solenóide 5/2 Vias",
    description: "Válvula pneumática para controle de cilindros",
    descricaoCompleta: "Válvula solenóide de 5 vias e 2 posições para controle preciso de cilindros pneumáticos de dupla ação.",
    application: "Controle de cilindros, automação pneumática, sistemas de corte e acionamentos",
    tags: ["Flow Pack"],
    rating: 4.7,
    reviews: 26,
    especificacoes: {
      "Tipo": "5/2 vias",
      "Acionamento": "Elétrico",
      "Pressão": "2-8 bar",
      "Vazão": "600-1200 L/min"
    },
    beneficios: [
      "Controle preciso",
      "Resposta rápida",
      "Alta confiabilidade",
      "Fácil instalação"
    ],
    aplicacoes: [
      "Controle de cilindros",
      "Automação pneumática",
      "Sistemas de corte",
      "Acionamentos"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [18, 20, 17]
  },
  {
    id: 20,
    name: "Filtro Regulador de Ar Comprimido",
    description: "Unidade de tratamento de ar para sistemas pneumáticos",
    descricaoCompleta: "Conjunto filtro-regulador para tratamento de ar comprimido, garantindo ar limpo e pressão estável para componentes pneumáticos.",
    application: "Tratamento de ar, proteção de válvulas, alimentação de cilindros e sistemas pneumáticos",
    tags: ["Flow Pack"],
    rating: 4.8,
    reviews: 32,
    especificacoes: {
      "Filtragem": "5 microns",
      "Pressão máxima": "10 bar",
      "Vazão": "1000-3000 L/min",
      "Dreno": "Manual/automático"
    },
    beneficios: [
      "Ar limpo",
      "Pressão estável",
      "Proteção de componentes",
      "Aumento de vida útil"
    ],
    aplicacoes: [
      "Tratamento de ar",
      "Proteção de válvulas",
      "Alimentação de cilindros",
      "Sistemas pneumáticos"
    ],
    compatibleMachines: ["Bosch", "IMA", "Ulma", "GEA", "Ilapak", "Outras"],
    relatedProducts: [18, 19, 17]
  },
  // VFFS Products (21-28)
  {
    id: 21,
    name: "Faca de Corte Vertical para VFFS",
    description: "Lâmina especializada para corte em máquinas verticais",
    descricaoCompleta: "Faca de corte desenvolvida especificamente para máquinas VFFS (Vertical Form Fill Seal), com geometria otimizada para corte limpo e preciso em alta velocidade.",
    application: "Embalagens verticais, sachês, snacks, grãos e pós",
    tags: ["VFFS"],
    rating: 4.8,
    reviews: 47,
    especificacoes: {
      "Material": "Aço D2",
      "Dureza": "60-62 HRC",
      "Acabamento": "Polido",
      "Ângulo de corte": "45°"
    },
    beneficios: [
      "Corte preciso",
      "Alta velocidade",
      "Longa durabilidade",
      "Mínimo desperdício"
    ],
    aplicacoes: [
      "Embalagens verticais",
      "Sachês",
      "Snacks",
      "Grãos e pós"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [22, 23, 27]
  },
  {
    id: 22,
    name: "Mordente de Selagem Vertical VFFS",
    description: "Sistema de mordente para selagem em máquinas verticais",
    descricaoCompleta: "Mordente de selagem projetado para máquinas VFFS, com sistema de aquecimento integrado e pressão uniforme para selagens perfeitas.",
    application: "Selagem de sachês, embalagens verticais, pouches e stick packs",
    tags: ["VFFS"],
    rating: 4.9,
    reviews: 51,
    especificacoes: {
      "Material": "Alumínio anodizado",
      "Revestimento": "Teflon",
      "Largura": "200mm - 600mm",
      "Temperatura": "até 250°C"
    },
    beneficios: [
      "Selagem uniforme",
      "Anti-aderente",
      "Aquecimento rápido",
      "Durabilidade"
    ],
    aplicacoes: [
      "Selagem de sachês",
      "Embalagens verticais",
      "Pouches",
      "Stick packs"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [21, 23, 27]
  },
  {
    id: 23,
    name: "Tubo Formador para VFFS",
    description: "Tubo metálico para formação de embalagens verticais",
    descricaoCompleta: "Tubo formador em aço inoxidável polido, responsável por dar forma ao filme na máquina VFFS. Disponível em diversos diâmetros.",
    application: "Formação de sachês, embalagens verticais, stick packs e pouches",
    tags: ["VFFS"],
    rating: 4.9,
    reviews: 43,
    especificacoes: {
      "Material": "Aço inoxidável 304",
      "Acabamento": "Polido espelhado",
      "Diâmetro": "30mm - 200mm",
      "Comprimento": "Sob medida"
    },
    beneficios: [
      "Baixo atrito",
      "Formação perfeita",
      "Fácil limpeza",
      "Resistente à corrosão"
    ],
    aplicacoes: [
      "Formação de sachês",
      "Embalagens verticais",
      "Stick packs",
      "Pouches"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [22, 24, 25]
  },
  {
    id: 24,
    name: "Sistema de Dosagem Volumétrica",
    description: "Dosador de precisão para produtos sólidos e granulados",
    descricaoCompleta: "Sistema de dosagem volumétrica com copos dosadores, ideal para produtos granulados, pós e pequenos sólidos em máquinas VFFS.",
    application: "Dosagem de produtos granulados, pós, pequenos sólidos e alimentos secos",
    tags: ["VFFS"],
    rating: 4.8,
    reviews: 38,
    especificacoes: {
      "Tipo": "Volumétrico",
      "Capacidade": "5ml - 2000ml",
      "Precisão": "±1%",
      "Material": "Aço inoxidável 304"
    },
    beneficios: [
      "Alta precisão",
      "Velocidade ajustável",
      "Fácil limpeza",
      "Baixo desperdício"
    ],
    aplicacoes: [
      "Produtos granulados",
      "Pós",
      "Pequenos sólidos",
      "Alimentos secos"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [23, 25, 26]
  },
  {
    id: 25,
    name: "Rolo Puxador de Filme VFFS",
    description: "Sistema de tração para alimentação de filme vertical",
    descricaoCompleta: "Conjunto de rolos puxadores com revestimento especial para tração precisa do filme em máquinas VFFS, garantindo tensão constante.",
    application: "Alimentação de filme, controle de tensão, posicionamento e sincronização",
    tags: ["VFFS"],
    rating: 4.7,
    reviews: 34,
    especificacoes: {
      "Diâmetro": "80mm - 150mm",
      "Revestimento": "Borracha",
      "Dureza": "70 Shore A",
      "Acionamento": "Servo motor"
    },
    beneficios: [
      "Tração uniforme",
      "Controle preciso",
      "Não danifica o filme",
      "Baixa manutenção"
    ],
    aplicacoes: [
      "Alimentação de filme",
      "Controle de tensão",
      "Posicionamento",
      "Sincronização"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [23, 24, 28]
  },
  {
    id: 26,
    name: "Sensor de Nível para Funil",
    description: "Sensor para monitoramento de nível de produto no funil",
    descricaoCompleta: "Sensor capacitivo ou ultrassônico para monitoramento do nível de produto no funil de alimentação, evitando falta ou excesso de material.",
    application: "Controle de nível, alimentação automática, prevenção de falta e automação",
    tags: ["VFFS"],
    rating: 4.8,
    reviews: 29,
    especificacoes: {
      "Tipo": "Capacitivo/Ultrassônico",
      "Alcance": "50mm - 500mm",
      "Saída": "4-20mA/Digital",
      "Proteção": "IP67"
    },
    beneficios: [
      "Monitoramento contínuo",
      "Previne paradas",
      "Fácil instalação",
      "Alta confiabilidade"
    ],
    aplicacoes: [
      "Controle de nível",
      "Alimentação automática",
      "Prevenção de falta",
      "Automação"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [24, 27, 28]
  },
  {
    id: 27,
    name: "Resistência para Selagem VFFS",
    description: "Elemento aquecedor para mordentes de selagem vertical",
    descricaoCompleta: "Resistência elétrica de alta performance para aquecimento dos mordentes de selagem em máquinas VFFS, com distribuição uniforme de temperatura.",
    application: "Aquecimento de mordentes, selagem vertical, selagem horizontal e sistemas térmicos",
    tags: ["VFFS"],
    rating: 4.8,
    reviews: 40,
    especificacoes: {
      "Potência": "800W - 2500W",
      "Voltagem": "220V/380V",
      "Material": "Mica",
      "Temperatura máxima": "300°C"
    },
    beneficios: [
      "Aquecimento rápido",
      "Distribuição uniforme",
      "Longa vida útil",
      "Economia de energia"
    ],
    aplicacoes: [
      "Aquecimento de mordentes",
      "Selagem vertical",
      "Selagem horizontal",
      "Sistemas térmicos"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [22, 21, 28]
  },
  {
    id: 28,
    name: "Encoder para Sincronização VFFS",
    description: "Encoder de alta resolução para controle de processos",
    descricaoCompleta: "Encoder rotativo incremental para sincronização precisa entre alimentação de filme, dosagem e selagem em máquinas VFFS.",
    application: "Sincronização de processos, controle de velocidade, medição de comprimento e posicionamento",
    tags: ["VFFS"],
    rating: 4.9,
    reviews: 33,
    especificacoes: {
      "Resolução": "2000-10000 PPR",
      "Tipo": "Incremental",
      "Saída": "Line driver",
      "Proteção": "IP65"
    },
    beneficios: [
      "Alta precisão",
      "Sincronização perfeita",
      "Resposta rápida",
      "Durabilidade"
    ],
    aplicacoes: [
      "Sincronização de processos",
      "Controle de velocidade",
      "Medição de comprimento",
      "Posicionamento"
    ],
    compatibleMachines: ["TNA", "Ishida", "Bosch", "IMA", "Outras"],
    relatedProducts: [25, 26, 27]
  },
  // Sachê Products (29-32)
  {
    id: 29,
    name: "Faca para Corte de Sachê Múltiplo",
    description: "Sistema de facas para corte simultâneo de múltiplos sachês",
    descricaoCompleta: "Conjunto de facas paralelas para corte simultâneo de múltiplos sachês, aumentando produtividade e garantindo cortes uniformes.",
    application: "Sachês múltiplos, stick packs, embalagens em tira e produtos unitários",
    tags: ["Sachê"],
    rating: 4.8,
    reviews: 36,
    especificacoes: {
      "Material": "Aço D2",
      "Número de facas": "2-6",
      "Espaçamento": "Ajustável",
      "Dureza": "60-62 HRC"
    },
    beneficios: [
      "Alta produtividade",
      "Cortes uniformes",
      "Ajuste fácil",
      "Durabilidade"
    ],
    aplicacoes: [
      "Sachês múltiplos",
      "Stick packs",
      "Embalagens em tira",
      "Produtos unitários"
    ],
    compatibleMachines: ["IMA", "Bosch", "Marchesini", "Outras"],
    relatedProducts: [30, 31, 32]
  },
  {
    id: 30,
    name: "Mordente para Sachê Quatro Lados",
    description: "Sistema de selagem para sachês com quatro lados selados",
    descricaoCompleta: "Mordente especial para selagem de sachês tipo almofada (pillow pack) com quatro lados selados, garantindo vedação completa.",
    application: "Sachês tipo almofada, embalagens de condimentos, amostras e produtos líquidos",
    tags: ["Sachê"],
    rating: 4.9,
    reviews: 42,
    especificacoes: {
      "Material": "Alumínio",
      "Revestimento": "Teflon",
      "Dimensões": "Sob medida",
      "Sistema": "Aquecimento integrado"
    },
    beneficios: [
      "Vedação completa",
      "Formato profissional",
      "Selagem forte",
      "Versatilidade"
    ],
    aplicacoes: [
      "Sachês tipo almofada",
      "Embalagens de condimentos",
      "Amostras",
      "Produtos líquidos"
    ],
    compatibleMachines: ["IMA", "Bosch", "Marchesini", "Outras"],
    relatedProducts: [29, 31, 32]
  },
  {
    id: 31,
    name: "Dosador de Líquidos para Sachê",
    description: "Sistema de dosagem precisa para produtos líquidos",
    descricaoCompleta: "Dosador volumétrico ou gravimétrico para enchimento preciso de sachês com produtos líquidos, pastas ou géis.",
    application: "Líquidos, pastas, géis e cremes",
    tags: ["Sachê"],
    rating: 4.8,
    reviews: 37,
    especificacoes: {
      "Tipo": "Volumétrico/Gravimétrico",
      "Capacidade": "1ml - 500ml",
      "Precisão": "±0.5%",
      "Material": "Aço inoxidável 316"
    },
    beneficios: [
      "Alta precisão",
      "Fácil limpeza",
      "Sem desperdício",
      "Velocidade ajustável"
    ],
    aplicacoes: [
      "Líquidos",
      "Pastas",
      "Géis",
      "Cremes"
    ],
    compatibleMachines: ["IMA", "Bosch", "Marchesini", "Outras"],
    relatedProducts: [30, 32, 29]
  },
  {
    id: 32,
    name: "Picotador para Sachês",
    description: "Sistema de picote para fácil abertura de sachês",
    descricaoCompleta: "Dispositivo para criar picotes (micro-perfurações) em sachês, facilitando a abertura pelo consumidor sem necessidade de tesoura.",
    application: "Sachês de condimentos, embalagens de açúcar, produtos farmacêuticos e amostras",
    tags: ["Sachê"],
    rating: 4.7,
    reviews: 31,
    especificacoes: {
      "Tipo": "Roldana dentada",
      "Espaçamento": "2-5mm",
      "Material": "Aço temperado",
      "Ajuste": "Pressão regulável"
    },
    beneficios: [
      "Fácil abertura",
      "Não compromete vedação",
      "Ajuste fino",
      "Durabilidade"
    ],
    aplicacoes: [
      "Sachês de condimentos",
      "Embalagens de açúcar",
      "Produtos farmacêuticos",
      "Amostras"
    ],
    compatibleMachines: ["IMA", "Bosch", "Marchesini", "Outras"],
    relatedProducts: [29, 30, 31]
  },
  // Doypack Products (33-34)
  {
    id: 33,
    name: "Mordente para Doypack com Zíper",
    description: "Sistema de selagem para embalagens stand-up com zíper",
    descricaoCompleta: "Mordente especializado para selagem de embalagens tipo doypack com aplicação de zíper, garantindo fechamento hermético e reabertura.",
    application: "Embalagens stand-up, produtos com zíper, alimentos e pet food",
    tags: ["Doypack"],
    rating: 4.9,
    reviews: 45,
    especificacoes: {
      "Material": "Alumínio anodizado",
      "Largura": "100mm - 400mm",
      "Sistema": "Dupla selagem",
      "Temperatura": "até 220°C"
    },
    beneficios: [
      "Selagem perfeita",
      "Aplicação de zíper",
      "Versatilidade",
      "Qualidade premium"
    ],
    aplicacoes: [
      "Embalagens stand-up",
      "Produtos com zíper",
      "Alimentos",
      "Pet food"
    ],
    compatibleMachines: ["Totani", "Viking Masek", "GEA", "Outras"],
    relatedProducts: [34, 22, 23]
  },
  {
    id: 34,
    name: "Aplicador de Zíper para Doypack",
    description: "Dispositivo para aplicação automática de zíper",
    descricaoCompleta: "Sistema automático para aplicação de zíper em embalagens doypack, com controle de tensão e posicionamento preciso.",
    application: "Embalagens reseláveis, stand-up pouches, produtos premium e alimentos",
    tags: ["Doypack"],
    rating: 4.8,
    reviews: 39,
    especificacoes: {
      "Tipo": "Automático",
      "Largura do zíper": "4mm - 10mm",
      "Velocidade": "até 60 ppm",
      "Controle": "Servo motor"
    },
    beneficios: [
      "Aplicação precisa",
      "Alta velocidade",
      "Economia de zíper",
      "Qualidade constante"
    ],
    aplicacoes: [
      "Embalagens reseláveis",
      "Stand-up pouches",
      "Produtos premium",
      "Alimentos"
    ],
    compatibleMachines: ["Totani", "Viking Masek", "GEA", "Outras"],
    relatedProducts: [33, 22, 23]
  },
  // Stick Pack Products (35-36)
  {
    id: 35,
    name: "Conjunto de Facas para Stick Pack",
    description: "Sistema de corte para embalagens stick pack múltiplas",
    descricaoCompleta: "Conjunto de facas paralelas para produção de múltiplos stick packs simultaneamente, com ajuste de largura e corte preciso.",
    application: "Stick packs, sachês estreitos, produtos em pó, açúcar e café",
    tags: ["Stick Pack"],
    rating: 4.8,
    reviews: 34,
    especificacoes: {
      "Material": "Aço D2",
      "Número de pistas": "4-10",
      "Largura por pista": "20mm - 50mm",
      "Dureza": "60-62 HRC"
    },
    beneficios: [
      "Alta produtividade",
      "Múltiplas pistas",
      "Corte preciso",
      "Ajuste fácil"
    ],
    aplicacoes: [
      "Stick packs",
      "Sachês estreitos",
      "Produtos em pó",
      "Açúcar, café"
    ],
    compatibleMachines: ["IMA", "Marchesini", "Bosch", "Outras"],
    relatedProducts: [36, 29, 22]
  },
  {
    id: 36,
    name: "Tubo Formador Multi-pista",
    description: "Sistema de formação para múltiplos stick packs",
    descricaoCompleta: "Tubo formador com múltiplas pistas para produção simultânea de vários stick packs, otimizando produtividade.",
    application: "Stick packs múltiplos, produtos em pó, açúcar e adoçantes",
    tags: ["Stick Pack"],
    rating: 4.9,
    reviews: 38,
    especificacoes: {
      "Material": "Aço inoxidável 304",
      "Número de pistas": "4-10",
      "Largura total": "200mm - 500mm",
      "Acabamento": "Polido"
    },
    beneficios: [
      "Alta produtividade",
      "Formação uniforme",
      "Baixo atrito",
      "Fácil limpeza"
    ],
    aplicacoes: [
      "Stick packs múltiplos",
      "Produtos em pó",
      "Açúcar",
      "Adoçantes"
    ],
    compatibleMachines: ["IMA", "Marchesini", "Bosch", "Outras"],
    relatedProducts: [35, 23, 29]
  },
  // General Products (37-38)
  {
    id: 37,
    name: "Controlador de Temperatura Digital",
    description: "Controlador PID para gestão precisa de temperatura",
    descricaoCompleta: "Controlador de temperatura digital com display e controle PID para gestão precisa da temperatura de selagem em máquinas de embalagem.",
    application: "Controle de selagem, sistemas térmicos, resistências e processos de aquecimento",
    tags: ["Flow Pack", "VFFS", "Sachê"],
    rating: 4.8,
    reviews: 42,
    especificacoes: {
      "Tipo": "PID",
      "Faixa": "0-400°C",
      "Precisão": "±1°C",
      "Saída": "SSR/Relé"
    },
    beneficios: [
      "Controle preciso",
      "Fácil programação",
      "Display digital",
      "Economia de energia"
    ],
    aplicacoes: [
      "Controle de selagem",
      "Sistemas térmicos",
      "Resistências",
      "Processos de aquecimento"
    ],
    compatibleMachines: ["Universal"],
    relatedProducts: [4, 5, 27]
  },
  {
    id: 38,
    name: "Inversor de Frequência",
    description: "Variador de velocidade para motores elétricos",
    descricaoCompleta: "Inversor de frequência para controle preciso de velocidade de motores em máquinas de embalagem, com proteções integradas.",
    application: "Controle de velocidade, motores de tração, sistemas de dosagem e automação",
    tags: ["Flow Pack", "VFFS", "Sachê"],
    rating: 4.7,
    reviews: 37,
    especificacoes: {
      "Potência": "0.5HP - 10HP",
      "Voltagem": "220V/380V",
      "Controle": "Vetorial",
      "Proteção": "IP20"
    },
    beneficios: [
      "Economia de energia",
      "Controle preciso",
      "Partida suave",
      "Proteção de motor"
    ],
    aplicacoes: [
      "Controle de velocidade",
      "Motores de tração",
      "Sistemas de dosagem",
      "Automação"
    ],
    compatibleMachines: ["Universal"],
    relatedProducts: [10, 28, 37]
  }
];
