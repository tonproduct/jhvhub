// /src/data/componentesProducts.ts

export interface Product {
  id: string;
  category: 'transmissao' | 'controle' | 'pneumatico';
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
// PRODUTOS DE TRANSMISSÃO
// ════════════════════════════════════════════════════════════

export const transmissaoProducts: Product[] = [
  {
    id: 'comp-trans-01',
    category: 'transmissao',
    name: 'Correia Dentada de Transmissão',
    shortDescription: 'Correia sincronizadora para transmissão de movimento preciso',
    description: 'Correia dentada de alta qualidade para transmissão sincronizada entre eixos.',
    fullDescription: 'Correia dentada de alta qualidade para transmissão sincronizada de movimento entre eixos, garantindo precisão no posicionamento e velocidade constante.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Borracha reforçada',
      dimensions: 'Passo 5mm - 10mm',
    },
    benefits: [
      'Transmissão precisa',
      'Sem deslizamento',
      'Baixo ruído',
      'Manutenção mínima',
    ],
    applications: [
      'Transmissão de movimento',
      'Sincronização de eixos',
      'Acionamento de rolos',
      'Sistemas de corte',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-CDT-XXX',
  },
  {
    id: 'comp-trans-02',
    category: 'transmissao',
    name: 'Polia Dentada Sincronizadora',
    shortDescription: 'Polia para correia dentada com perfil sincronizado',
    description: 'Polia dentada usinada em alumínio ou aço para transmissão precisa.',
    fullDescription: 'Polia dentada usinada em alumínio ou aço, projetada para trabalhar em conjunto com correias dentadas, garantindo transmissão precisa sem deslizamento.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio/Aço',
      dimensions: '20-80 dentes',
      coating: 'Anodizado',
    },
    benefits: [
      'Precisão dimensional',
      'Longa vida útil',
      'Transmissão eficiente',
      'Baixo ruído',
    ],
    applications: [
      'Sistemas de transmissão',
      'Acionamento sincronizado',
      'Redução/multiplicação',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-PDS-XXX',
  },
  {
    id: 'comp-trans-03',
    category: 'transmissao',
    name: 'Rolamento de Esferas',
    shortDescription: 'Rolamento de precisão para suporte de eixos rotativos',
    description: 'Rolamento de esferas de alta qualidade para rotação suave e durável.',
    fullDescription: 'Rolamento de esferas de alta qualidade para suporte de eixos em máquinas de embalagem, garantindo rotação suave e durabilidade.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço cromo',
      tolerance: 'ABEC-5',
    },
    benefits: [
      'Baixo atrito',
      'Alta durabilidade',
      'Operação silenciosa',
      'Manutenção reduzida',
    ],
    applications: [
      'Suporte de eixos',
      'Rolos de tração',
      'Eixos de corte',
      'Sistemas rotativos',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-ROL-XXX',
  },
  {
    id: 'comp-trans-04',
    category: 'transmissao',
    name: 'Eixo de Transmissão Usinado',
    shortDescription: 'Eixo de precisão para transmissão de torque',
    description: 'Eixo usinado em aço com tratamento térmico para alta resistência.',
    fullDescription: 'Eixo usinado em aço com tratamento térmico, projetado para transmitir torque e suportar cargas radiais e axiais em sistemas de embalagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço 1045',
      tolerance: 'h6',
      coating: 'Retificado',
    },
    benefits: [
      'Alta resistência',
      'Precisão dimensional',
      'Durabilidade',
      'Baixa deflexão',
    ],
    applications: [
      'Transmissão de torque',
      'Suporte de rolos',
      'Acionamento de facas',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-EIX-XXX',
  },
  {
    id: 'comp-trans-05',
    category: 'transmissao',
    name: 'Bucha de Bronze Autolubrificante',
    shortDescription: 'Bucha com lubrificação incorporada para baixa manutenção',
    description: 'Bucha de bronze sinterizado com grafite para autolubrificação.',
    fullDescription: 'Bucha de bronze sinterizado com grafite incorporado, proporcionando autolubrificação e reduzindo necessidade de manutenção.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Bronze sinterizado',
      coating: 'Grafite',
    },
    benefits: [
      'Autolubrificante',
      'Baixa manutenção',
      'Operação silenciosa',
      'Resistente ao desgaste',
    ],
    applications: [
      'Guias lineares',
      'Articulações',
      'Suporte de eixos',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-BUC-XXX',
  },
  {
    id: 'comp-trans-06',
    category: 'transmissao',
    name: 'Guia Linear de Precisão',
    shortDescription: 'Sistema de guia para movimentos lineares precisos',
    description: 'Guia linear com patins de esferas para movimento suave e preciso.',
    fullDescription: 'Guia linear com patins de esferas recirculantes, proporcionando movimento suave e preciso para sistemas de corte e selagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
      tolerance: 'Classe N',
    },
    benefits: [
      'Movimento preciso',
      'Baixo atrito',
      'Alta rigidez',
      'Longa vida útil',
    ],
    applications: [
      'Movimento de facas',
      'Posicionamento de mordentes',
      'Automação',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-GLI-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE CONTROLE
// ════════════════════════════════════════════════════════════

export const controleProducts: Product[] = [
  {
    id: 'comp-ctrl-01',
    category: 'controle',
    name: 'Sensor Fotocélula para Registro',
    shortDescription: 'Sensor óptico para detecção de marca de registro em filmes',
    description: 'Fotocélula de alta precisão para leitura de marcas de registro.',
    fullDescription: 'Fotocélula de alta precisão para leitura de marcas de registro, garantindo corte e posicionamento correto em filmes pré-impressos.',
    images: [
      '/produtos/flow-pack/fotocélula para registro de embalagem.png',
    ],
    specifications: {
      material: 'Plástico/Metal',
      dimensions: 'Alcance 5mm - 300mm',
    },
    benefits: [
      'Alta precisão',
      'Resposta rápida',
      'Fácil calibração',
      'Compatível com diversos filmes',
    ],
    applications: [
      'Detecção de marca de corte',
      'Posicionamento de impressão',
      'Sincronização de corte',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-FOT-XXX',
  },
  {
    id: 'comp-ctrl-02',
    category: 'controle',
    name: 'Encoder Rotativo',
    shortDescription: 'Encoder de precisão para controle de velocidade e posição',
    description: 'Encoder rotativo incremental de alta resolução para controle preciso.',
    fullDescription: 'Encoder rotativo incremental de alta resolução para controle preciso da velocidade de alimentação do filme e sincronização dos processos.',
    images: [
      '/produtos/flow-pack/encoder rotativo incremental.png',
    ],
    specifications: {
      material: 'Alumínio/Aço',
      dimensions: '1000-5000 PPR',
    },
    benefits: [
      'Precisão elevada',
      'Resposta instantânea',
      'Durabilidade',
      'Fácil integração',
    ],
    applications: [
      'Controle de velocidade',
      'Sincronização de processos',
      'Medição de comprimento',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-ENC-XXX',
  },
  {
    id: 'comp-ctrl-03',
    category: 'controle',
    name: 'Controlador de Temperatura Digital',
    shortDescription: 'Controlador PID para gestão precisa de temperatura',
    description: 'Controlador digital com display para gestão precisa da temperatura de selagem.',
    fullDescription: 'Controlador de temperatura digital com display e controle PID para gestão precisa da temperatura de selagem em máquinas de embalagem.',
    images: [
      '/produtos/flow-pack/Controlador de Temperatura Digital.png',
    ],
    specifications: {
      material: 'Plástico ABS',
      operatingTemp: '0-400°C',
      tolerance: '±1°C',
    },
    benefits: [
      'Controle preciso',
      'Fácil programação',
      'Display digital',
      'Economia de energia',
    ],
    applications: [
      'Controle de selagem',
      'Sistemas térmicos',
      'Resistências',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-CTD-XXX',
  },
  {
    id: 'comp-ctrl-04',
    category: 'controle',
    name: 'Inversor de Frequência',
    shortDescription: 'Variador de velocidade para motores elétricos',
    description: 'Inversor de frequência para controle preciso de velocidade de motores.',
    fullDescription: 'Inversor de frequência para controle preciso de velocidade de motores em máquinas de embalagem, com proteções integradas.',
    images: [
      '/produtos/flow-pack/Inversor de Frequência.png',
    ],
    specifications: {
      material: 'Metálico',
      dimensions: '0.5HP - 10HP',
    },
    benefits: [
      'Economia de energia',
      'Controle preciso',
      'Partida suave',
      'Proteção de motor',
    ],
    applications: [
      'Controle de velocidade',
      'Motores de tração',
      'Sistemas de dosagem',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-INV-XXX',
  },
  {
    id: 'comp-ctrl-05',
    category: 'controle',
    name: 'Sensor de Nível',
    shortDescription: 'Sensor para monitoramento de nível em funis e reservatórios',
    description: 'Sensor capacitivo ou ultrassônico para monitoramento de nível de produto.',
    fullDescription: 'Sensor capacitivo ou ultrassônico para monitoramento do nível de produto no funil de alimentação, evitando falta ou excesso de material.',
    images: [
      '/produtos/flow-pack/Sensor de Nível.png',
    ],
    specifications: {
      material: 'Aço inox/Plástico',
      dimensions: 'Alcance 50mm - 500mm',
    },
    benefits: [
      'Monitoramento contínuo',
      'Previne paradas',
      'Fácil instalação',
      'Alta confiabilidade',
    ],
    applications: [
      'Controle de nível',
      'Alimentação automática',
      'Prevenção de falta',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'COMP-SNV-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS PNEUMÁTICOS
// ════════════════════════════════════════════════════════════

export const pneumaticoProducts: Product[] = [
  {
    id: 'comp-pneu-01',
    category: 'pneumatico',
    name: 'Cilindro Pneumático Compacto',
    shortDescription: 'Atuador pneumático para acionamento de mecanismos',
    description: 'Cilindro pneumático de dupla ação, compacto e robusto.',
    fullDescription: 'Cilindro pneumático de dupla ação, compacto e robusto, ideal para acionamento de sistemas de corte, selagem e dosagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio/Aço',
      dimensions: 'Diâmetro 16mm - 63mm',
    },
    benefits: [
      'Resposta rápida',
      'Força ajustável',
      'Durabilidade',
      'Fácil manutenção',
    ],
    applications: [
      'Acionamento de facas',
      'Abertura/fechamento de mordentes',
      'Sistemas de empurrar',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-CIL-XXX',
  },
  {
    id: 'comp-pneu-02',
    category: 'pneumatico',
    name: 'Válvula Solenóide 5/2 Vias',
    shortDescription: 'Válvula pneumática para controle de cilindros',
    description: 'Válvula solenóide de 5 vias e 2 posições para controle preciso.',
    fullDescription: 'Válvula solenóide de 5 vias e 2 posições para controle preciso de cilindros pneumáticos de dupla ação.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio/Latão',
      dimensions: 'Vazão 600-1200 L/min',
    },
    benefits: [
      'Controle preciso',
      'Resposta rápida',
      'Alta confiabilidade',
      'Fácil instalação',
    ],
    applications: [
      'Controle de cilindros',
      'Automação pneumática',
      'Sistemas de corte',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-VAL-XXX',
  },
  {
    id: 'comp-pneu-03',
    category: 'pneumatico',
    name: 'Filtro Regulador de Ar',
    shortDescription: 'Unidade de tratamento de ar para sistemas pneumáticos',
    description: 'Conjunto filtro-regulador para ar comprimido limpo e pressão estável.',
    fullDescription: 'Conjunto filtro-regulador para tratamento de ar comprimido, garantindo ar limpo e pressão estável para componentes pneumáticos.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Policarbonato/Metal',
      dimensions: 'Vazão 1000-3000 L/min',
    },
    benefits: [
      'Ar limpo',
      'Pressão estável',
      'Proteção de componentes',
      'Aumento de vida útil',
    ],
    applications: [
      'Tratamento de ar',
      'Proteção de válvulas',
      'Alimentação de cilindros',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'COMP-FRA-XXX',
  },
  {
    id: 'comp-pneu-04',
    category: 'pneumatico',
    name: 'Conexões e Engates Rápidos',
    shortDescription: 'Sistema de conexão rápida para linhas pneumáticas',
    description: 'Conexões e engates para montagem rápida de sistemas pneumáticos.',
    fullDescription: 'Conjunto de conexões e engates rápidos para montagem e manutenção ágil de sistemas pneumáticos em máquinas de embalagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Latão/Plástico',
      dimensions: '4mm - 12mm',
    },
    benefits: [
      'Montagem rápida',
      'Vedação confiável',
      'Manutenção fácil',
      'Reutilizável',
    ],
    applications: [
      'Conexões pneumáticas',
      'Manutenção',
      'Instalação',
    ],
    availability: 'Em estoque',
    leadTime: '1-3 dias',
    sku: 'COMP-CON-XXX',
  },
  {
    id: 'comp-pneu-05',
    category: 'pneumatico',
    name: 'Mangueira Pneumática',
    shortDescription: 'Mangueira flexível para condução de ar comprimido',
    description: 'Mangueira de poliuretano flexível e resistente para sistemas pneumáticos.',
    fullDescription: 'Mangueira de poliuretano de alta qualidade para condução de ar comprimido em sistemas pneumáticos de máquinas de embalagem.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Poliuretano',
      dimensions: '4mm - 12mm',
    },
    benefits: [
      'Alta flexibilidade',
      'Resistente a pressão',
      'Longa durabilidade',
      'Fácil instalação',
    ],
    applications: [
      'Condução de ar',
      'Sistemas pneumáticos',
      'Automação',
    ],
    availability: 'Em estoque',
    leadTime: '1-3 dias',
    sku: 'COMP-MAN-XXX',
  },
];
