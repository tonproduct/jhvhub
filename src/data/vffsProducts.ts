// /src/data/vffsProducts.ts

export interface Product {
  id: string;
  category: 'selagem' | 'corte' | 'formacao' | 'dosagem';
  name: string;
  shortDescription: string;
  description?: string;
  fullDescription: string;
  images: string[];
  specifications: {
    material?: string;
    dimensions?: string;
    weight?: string;
    tolerance?: string;
    operatingTemp?: string;
    coating?: string;
  };
  benefits: string[];
  applications: string[];
  compatibility?: {
    brands: string[];
    models: string[];
  };
  availability?: string;
  leadTime?: string;
  sku?: string;
  downloads?: Array<{
    name: string;
    url: string;
    type: string;
    size: string;
  }>;
  relatedProducts?: string[];
}

// ════════════════════════════════════════════════════════════
// PRODUTOS DE SELAGEM VFFS
// ════════════════════════════════════════════════════════════

export const vffsSealingProducts: Product[] = [
  {
    id: 'vffs-seal-01',
    category: 'selagem',
    name: 'Mordente de Selagem Vertical',
    shortDescription: 'Sistema de mordente para selagem em máquinas verticais com aquecimento integrado',
    description: 'Mordente projetado para máquinas VFFS com sistema de aquecimento integrado e pressão uniforme para selagens perfeitas.',
    fullDescription: 'Mordente de selagem projetado para máquinas VFFS, com sistema de aquecimento integrado e pressão uniforme para selagens perfeitas em sachês, pouches e stick packs.',
    images: [
      '/produtos/flow-pack/MORDENTE VERTICAL.png',
      '/produtos/flow-pack/MORDENTE VERTICAL 2.png',
    ],
    specifications: {
      material: 'Alumínio anodizado',
      dimensions: '200mm - 600mm largura',
      operatingTemp: 'até 250°C',
      coating: 'Teflon',
    },
    benefits: [
      'Selagem uniforme',
      'Anti-aderente',
      'Aquecimento rápido',
      'Durabilidade superior',
    ],
    applications: [
      'Selagem de sachês',
      'Embalagens verticais',
      'Pouches',
      'Stick packs',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-MSV-200',
  },
  {
    id: 'vffs-seal-02',
    category: 'selagem',
    name: 'Mordente Horizontal',
    shortDescription: 'Selagem horizontal com perfil otimizado para alta velocidade',
    description: 'Mordente para selagem horizontal em máquinas VFFS, ideal para produção de alta velocidade com qualidade consistente.',
    fullDescription: 'Mordente desenvolvido para selagem horizontal em máquinas verticais, com perfil otimizado para garantir selagem hermética mesmo em alta velocidade de produção.',
    images: [
      '/produtos/flow-pack/barra3 (1).JPEG',
      '/produtos/flow-pack/MORDENTE VERTICAL 3.png',
    ],
    specifications: {
      material: 'Aço temperado',
      operatingTemp: '20°C a 220°C',
      tolerance: '±0.05mm',
    },
    benefits: [
      'Alta velocidade de operação',
      'Selagem hermética',
      'Baixa manutenção',
      'Troca rápida',
    ],
    applications: [
      'Linhas de alta produtividade',
      'Sachês',
      'Embalagens de alimentos',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-MHV-250',
  },
  {
    id: 'vffs-seal-03',
    category: 'selagem',
    name: 'Resistência para Selagem',
    shortDescription: 'Elemento aquecedor de alta performance com distribuição uniforme de temperatura',
    description: 'Resistência elétrica para aquecimento dos mordentes com distribuição uniforme de temperatura.',
    fullDescription: 'Resistência elétrica de alta performance para aquecimento dos mordentes de selagem em máquinas VFFS, com distribuição uniforme de temperatura para selagens consistentes.',
    images: [
      '/produtos/flow-pack/MORDENTE COM RESISTENCIA E TERMOPAR.JPEG',
    ],
    specifications: {
      material: 'Mica',
      operatingTemp: 'até 300°C',
    },
    benefits: [
      'Aquecimento rápido',
      'Distribuição uniforme',
      'Longa vida útil',
      'Economia de energia',
    ],
    applications: [
      'Aquecimento de mordentes',
      'Selagem vertical',
      'Selagem horizontal',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-RES-800',
  },
  {
    id: 'vffs-seal-05',
    category: 'selagem',
    name: 'Rolo de Selagem Vertical',
    shortDescription: 'Sistema de rolos para selagem contínua em alta velocidade',
    description: 'Rolos para selagem vertical contínua, ideais para linhas de alta produtividade.',
    fullDescription: 'Sistema de rolos de selagem para operação contínua em máquinas VFFS, proporcionando selagem uniforme mesmo em velocidades elevadas.',
    images: [
      '/produtos/flow-pack/ROLO DE SELAGEM RECARTILHADO.png',
      '/produtos/flow-pack/ROLO DE SELAGEM 2.png',
    ],
    specifications: {
      material: 'Aço pré-endurecido',
      coating: 'Revestimento especial',
    },
    benefits: [
      'Selagem contínua',
      'Alta velocidade',
      'Uniformidade',
      'Durabilidade',
    ],
    applications: [
      'Produção contínua',
      'Alta velocidade',
      'Filmes diversos',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'VFFS-RSV-XXX',
  },
  {
    id: 'vffs-seal-06',
    category: 'selagem',
    name: 'Termopar para Controle de Temperatura',
    shortDescription: 'Sensor de temperatura de alta precisão para controle de selagem',
    description: 'Termopar tipo J ou K para monitoramento preciso da temperatura de selagem.',
    fullDescription: 'Termopar de alta precisão para monitoramento e controle da temperatura nos mordentes de selagem, garantindo consistência no processo.',
    images: [
      '/produtos/flow-pack/MORDENTE 2.JPEG',
    ],
    specifications: {
      material: 'Tipo J/K',
      operatingTemp: '0°C a 400°C',
    },
    benefits: [
      'Alta precisão',
      'Resposta rápida',
      'Durabilidade',
      'Fácil instalação',
    ],
    applications: [
      'Controle de temperatura',
      'Monitoramento de processo',
      'Automação',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'VFFS-TMP-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE CORTE VFFS
// ════════════════════════════════════════════════════════════

export const vffsCuttingProducts: Product[] = [
  {
    id: 'vffs-cut-00',
    category: 'corte',
    name: 'Facas dentadas',
    shortDescription: 'Facas com perfil dentado para corte preciso em diversos filmes',
    fullDescription: 'Facas dentadas desenvolvidas para corte de alta performance em máquinas verticais, com perfil serrilhado que garante corte limpo em filmes multicamada, metalizado e plástico.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço ferramenta temperado',
      tolerance: '±0.02mm',
    },
    benefits: [
      'Corte limpo em filmes especiais',
      'Alta durabilidade',
      'Perfil otimizado',
      'Baixa manutenção',
    ],
    applications: [
      'Filmes multicamada',
      'Metalizado',
      'Embalagens verticais',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-FDT-XXX',
  },
  {
    id: 'vffs-cut-01',
    category: 'corte',
    name: 'Faca de Corte Vertical',
    shortDescription: 'Lâmina especializada para corte em máquinas verticais com geometria otimizada',
    fullDescription: 'Faca de corte desenvolvida especificamente para máquinas VFFS, com geometria otimizada para corte limpo e preciso em alta velocidade.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço D2',
      tolerance: '±0.02mm',
    },
    benefits: [
      'Corte preciso',
      'Alta velocidade',
      'Longa durabilidade',
      'Mínimo desperdício',
    ],
    applications: [
      'Embalagens verticais',
      'Sachês',
      'Snacks',
      'Grãos e pós',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-FCV-XXX',
  },
  {
    id: 'vffs-cut-02',
    category: 'corte',
    name: 'Faca Zig Zag',
    shortDescription: 'Corte serrilhado para fácil abertura das embalagens',
    fullDescription: 'Faca zig zag para máquinas VFFS, facilitando a abertura da embalagem pelo consumidor final.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço ferramenta temperado',
      dimensions: 'Conforme especificação',
    },
    benefits: [
      'Fácil abertura',
      'Diversos padrões disponíveis',
      'Durabilidade',
      'Corte limpo',
    ],
    applications: [
      'Embalagens de consumo',
      'Sachês',
      'Snacks',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-FZZ-XXX',
  },
  {
    id: 'vffs-cut-03',
    category: 'corte',
    name: 'Contra-faca',
    shortDescription: 'Base de corte com tratamento especial para máxima durabilidade',
    fullDescription: 'Contra-faca para máquinas VFFS com tratamento térmico especial, garantindo vida útil prolongada do conjunto de corte.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
      tolerance: '±0.03mm',
    },
    benefits: [
      'Alta durabilidade',
      'Corte consistente',
      'Baixa manutenção',
      'Troca fácil',
    ],
    applications: [
      'Sistemas de corte VFFS',
      'Produção contínua',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-CFV-XXX',
  },
  {
    id: 'vffs-cut-04',
    category: 'corte',
    name: 'Faca Rotativa',
    shortDescription: 'Sistema rotativo para corte contínuo em alta velocidade',
    fullDescription: 'Sistema de faca rotativa para máquinas VFFS de alta velocidade, proporcionando corte contínuo e uniforme.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço especial',
      dimensions: 'Diâmetro conforme máquina',
    },
    benefits: [
      'Corte contínuo',
      'Alta velocidade',
      'Vida útil prolongada',
      'Manutenção simplificada',
    ],
    applications: [
      'Linhas de alta velocidade',
      'Produção em larga escala',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'VFFS-FRV-XXX',
  },
  {
    id: 'vffs-cut-05',
    category: 'corte',
    name: 'Sistema de Picote',
    shortDescription: 'Cria micro-perfurações para fácil abertura sem comprometer vedação',
    fullDescription: 'Sistema de picote para criar micro-perfurações em embalagens VFFS, facilitando abertura sem comprometer a vedação.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
    },
    benefits: [
      'Abertura facilitada',
      'Não compromete vedação',
      'Ajuste fino',
      'Durabilidade',
    ],
    applications: [
      'Sachês de condimentos',
      'Embalagens de açúcar',
      'Produtos farmacêuticos',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-PIC-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE FORMAÇÃO VFFS
// ════════════════════════════════════════════════════════════

export const vffsFormingProducts: Product[] = [
  {
    id: 'vffs-form-01',
    category: 'formacao',
    name: 'Tubo Formador',
    shortDescription: 'Tubo em aço inoxidável polido para formação perfeita do filme',
    description: 'Tubo formador responsável por dar forma ao filme na máquina VFFS, disponível em diversos diâmetros.',
    fullDescription: 'Tubo formador em aço inoxidável polido, responsável por dar forma ao filme na máquina VFFS. Disponível em diversos diâmetros para atender diferentes tamanhos de embalagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável 304',
      dimensions: '30mm - 200mm diâmetro',
      coating: 'Polido espelhado',
    },
    benefits: [
      'Baixo atrito',
      'Formação perfeita',
      'Fácil limpeza',
      'Resistente à corrosão',
    ],
    applications: [
      'Formação de sachês',
      'Embalagens verticais',
      'Stick packs',
      'Pouches',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-TFO-XXX',
  },
  {
    id: 'vffs-form-02',
    category: 'formacao',
    name: 'Colarinho Formador',
    shortDescription: 'Guia de formação para direcionamento preciso do filme',
    description: 'Colarinho que guia o filme para o tubo formador, garantindo alinhamento perfeito.',
    fullDescription: 'Colarinho formador em aço inoxidável que guia o filme para o tubo formador, garantindo alinhamento perfeito e formação consistente.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável 304',
      coating: 'Polido',
    },
    benefits: [
      'Alinhamento perfeito',
      'Formação consistente',
      'Baixo atrito',
      'Durabilidade',
    ],
    applications: [
      'Máquinas VFFS',
      'Formação de embalagens',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'VFFS-COL-XXX',
  },
  {
    id: 'vffs-form-03',
    category: 'formacao',
    name: 'Rolo Puxador de Filme',
    shortDescription: 'Sistema de tração com revestimento especial para controle preciso',
    description: 'Conjunto de rolos puxadores para tração precisa do filme em máquinas VFFS.',
    fullDescription: 'Conjunto de rolos puxadores com revestimento especial para tração precisa do filme em máquinas VFFS, garantindo tensão constante.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço com revestimento',
      dimensions: '80mm - 150mm diâmetro',
      coating: 'Borracha 70 Shore A',
    },
    benefits: [
      'Tração uniforme',
      'Controle preciso',
      'Não danifica o filme',
      'Baixa manutenção',
    ],
    applications: [
      'Alimentação de filme',
      'Controle de tensão',
      'Posicionamento',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-RPF-XXX',
  },
  {
    id: 'vffs-form-04',
    category: 'formacao',
    name: 'Guia de Filme',
    shortDescription: 'Sistema de guias para direcionamento correto do filme',
    description: 'Conjunto de guias para garantir o direcionamento correto do filme durante o processo.',
    fullDescription: 'Sistema de guias em aço inoxidável para garantir o direcionamento correto do filme desde a bobina até o tubo formador.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável',
      coating: 'Polido',
    },
    benefits: [
      'Direcionamento preciso',
      'Evita desalinhamento',
      'Baixo atrito',
      'Durabilidade',
    ],
    applications: [
      'Alimentação de filme',
      'Alinhamento',
      'Transporte',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'VFFS-GDF-XXX',
  },
];
