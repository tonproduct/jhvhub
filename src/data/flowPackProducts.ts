// /src/data/flowPackProducts.ts

export interface Product {
  id: string;
  category: 'selagem' | 'corte';
  name: string;
  shortDescription: string;
  description?: string; // For carousel overlay (optional)
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
// PRODUTOS DE SELAGEM
// ════════════════════════════════════════════════════════════

export const flowPackSealingProducts: Product[] = [
  {
    id: 'fp-seal-01',
    category: 'selagem',
    name: 'Ferramentas de selagem como mordentes para vários tipos de embaladoras',
    shortDescription: 'Mordentes de alta performance compatíveis com diversas marcas e modelos de embaladoras do mercado',
    fullDescription: 'Fabricamos ferramentas de selagem como mordentes para vários tipos de embaladoras, garantindo compatibilidade e performance superior.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado com revestimento',
    },
    benefits: [
      'Compatível com diversas embaladoras',
      'Alta durabilidade',
      'Performance superior',
    ],
    applications: [
      'Embaladoras horizontais e verticais',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-MORD-001',
  },
  {
    id: 'fp-seal-02',
    category: 'selagem',
    name: 'Mordentes que seguem os padrões originais dos maiores fabricantes de máquinas de embalagens',
    shortDescription: 'Produzidos seguindo rigorosamente os padrões originais das principais marcas do mercado',
    fullDescription: 'Mordentes fabricados seguindo os padrões originais dos maiores fabricantes de máquinas de embalagens, garantindo encaixe perfeito e performance idêntica ao original.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Conforme padrão original',
    },
    benefits: [
      'Padrão original garantido',
      'Encaixe perfeito',
      'Sem necessidade de adaptações',
    ],
    applications: [
      'Máquinas das principais marcas do mercado',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-MORD-002',
  },
  {
    id: 'fp-seal-03',
    category: 'selagem',
    name: 'Sistemas de selagem com troca rápida – mordentes intercambiáveis',
    shortDescription: 'Sistema modular que permite troca rápida dos mordentes sem parar a linha de produção',
    fullDescription: 'Sistemas de selagem com troca rápida que utilizam mordentes intercambiáveis, reduzindo significativamente o tempo de parada e facilitando a manutenção.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
    },
    benefits: [
      'Troca rápida sem ferramentas especiais',
      'Reduz downtime',
      'Manutenção simplificada',
    ],
    applications: [
      'Linhas de alta produtividade',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-MORD-003',
  },
  {
    id: 'fp-seal-04',
    category: 'selagem',
    name: 'Mordentes e barras de selagem com tipos de perfis especiais',
    shortDescription: 'Perfis especiais desenvolvidos para aplicações que exigem selagem diferenciada',
    fullDescription: 'Mordentes e barras de selagem com tipos de perfis especiais, projetados para atender necessidades específicas de selagem em diferentes materiais e aplicações.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Conforme projeto',
    },
    benefits: [
      'Perfis customizados',
      'Atende aplicações especiais',
      'Selagem otimizada',
    ],
    applications: [
      'Filmes especiais e não tecidos',
    ],
    availability: 'Sob encomenda',
    leadTime: '15-20 dias',
    sku: 'FP-MORD-004',
  },
  {
    id: 'fp-seal-05',
    category: 'selagem',
    name: 'Mordentes, blocos e ferramentas de selagem sob medidas',
    shortDescription: 'Projetos customizados desenvolvidos sob medida para sua aplicação específica',
    fullDescription: 'Mordentes, blocos e ferramentas de selagem fabricados sob medida, com projeto exclusivo para atender as necessidades específicas de cada cliente.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Conforme projeto',
      dimensions: 'Customizadas',
    },
    benefits: [
      'Projeto exclusivo',
      'Sob medida para sua operação',
      'Máxima eficiência',
    ],
    applications: [
      'Aplicações customizadas',
    ],
    availability: 'Sob encomenda',
    leadTime: '15-20 dias',
    sku: 'FP-MORD-005',
  },
  {
    id: 'fp-seal-06',
    category: 'selagem',
    name: 'Fabricação de cabeçotes completos de selagem e corte com tecnologias internacionais',
    shortDescription: 'Cabeçotes completos fabricados com tecnologias e padrões internacionais de qualidade',
    fullDescription: 'Fabricação de cabeçotes completos de selagem e corte utilizando tecnologias internacionais, garantindo os mais altos padrões de qualidade e performance.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado premium',
    },
    benefits: [
      'Tecnologia internacional',
      'Cabeçote completo',
      'Qualidade premium',
    ],
    applications: [
      'Máquinas de alta performance',
    ],
    availability: 'Sob encomenda',
    leadTime: '20-30 dias',
    sku: 'FP-MORD-006',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE CORTE
// ════════════════════════════════════════════════════════════

export const flowPackCuttingProducts: Product[] = [
  {
    id: 'fp-cut-01',
    category: 'corte',
    name: 'Ferramentas de corte em geral para máquinas de embalagens – facas e contra facas',
    shortDescription: 'Linha completa de facas e contra facas para diversos tipos de embaladoras',
    fullDescription: 'Ferramentas de corte em geral para máquinas de embalagens, incluindo facas e contra facas de alta performance e durabilidade.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Linha completa', 'Alta durabilidade', 'Corte preciso'],
    applications: ['Embaladoras em geral'],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-CUT-001',
  },
  {
    id: 'fp-cut-02',
    category: 'corte',
    name: 'Ferramentas de corte zig zag',
    shortDescription: 'Corte zig zag para facilitar a abertura do pacote pelo consumidor',
    fullDescription: 'Ferramentas de corte zig zag desenvolvidas para facilitar a abertura do pacote, disponíveis em diversos tipos de dentes e passos.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Facilita abertura', 'Diversos padrões disponíveis', 'Durabilidade superior'],
    applications: ['Embalagens de consumo'],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-CUT-002',
  },
  {
    id: 'fp-cut-03',
    category: 'corte',
    name: 'Contra facas retas e raiadas',
    shortDescription: 'Contra facas com perfis retos e raiados para diferentes aplicações de corte',
    fullDescription: 'Contra facas retas e raiadas desenvolvidas para complementar o sistema de corte, garantindo durabilidade e precisão.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Perfis variados', 'Complemento essencial ao sistema', 'Alta durabilidade'],
    applications: ['Máquinas flow pack'],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-CUT-003',
  },
  {
    id: 'fp-cut-04',
    category: 'corte',
    name: 'Ferramentas de corte diagonal com abre fácil para pacote – easy-open',
    shortDescription: 'Sistema easy-open que determina o local correto de abertura do pacote',
    fullDescription: 'Ferramentas de corte diagonal com sistema abre fácil (easy-open) que combina corte liso com seção zig zag, determinando o local correto de abertura.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Abertura facilitada', 'Experiência superior ao consumidor', 'Diferencial no produto'],
    applications: ['Produtos premium', 'Embalagens de consumo'],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'FP-CUT-004',
  },
  {
    id: 'fp-cut-05',
    category: 'corte',
    name: 'Ferramentas de corte para embalagens hot sealing e cold seal',
    shortDescription: 'Soluções de corte específicas para processos de selagem a quente e a frio',
    fullDescription: 'Ferramentas de corte desenvolvidas especificamente para embalagens com processos hot sealing e cold seal, garantindo performance em ambas as aplicações.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Versátil para hot e cold seal', 'Corte limpo', 'Alta durabilidade'],
    applications: ['Embalagens hot sealing', 'Embalagens cold seal'],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-CUT-005',
  },
  {
    id: 'fp-cut-06',
    category: 'corte',
    name: 'Faca de corte dentada e ondulada',
    shortDescription: 'Facas com perfis dentados e ondulados para aplicações específicas',
    fullDescription: 'Facas de corte com perfis dentados e ondulados, desenvolvidas para aplicações que exigem padrões de corte diferenciados.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Perfis especiais', 'Corte diferenciado', 'Durabilidade superior'],
    applications: ['Aplicações especiais'],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'FP-CUT-006',
  },
  {
    id: 'fp-cut-07',
    category: 'corte',
    name: 'Facas de corte – estampo e matriz para flow pack',
    shortDescription: 'Estampos e matrizes de corte específicos para máquinas flow pack',
    fullDescription: 'Facas de corte tipo estampo e matriz desenvolvidas especificamente para máquinas flow pack, garantindo precisão e repetibilidade.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Precisão de estampo', 'Repetibilidade', 'Longa vida útil'],
    applications: ['Máquinas flow pack'],
    availability: 'Sob encomenda',
    leadTime: '10-15 dias',
    sku: 'FP-CUT-007',
  },
  {
    id: 'fp-cut-08',
    category: 'corte',
    name: 'Sistemas de corte com ajustes de corte',
    shortDescription: 'Sistemas completos com mecanismos de ajuste para otimizar a qualidade do corte',
    fullDescription: 'Sistemas de corte completos com mecanismos de ajuste que permitem otimizar a qualidade e precisão do corte de acordo com cada aplicação.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço temperado' },
    benefits: ['Ajuste fino', 'Otimização do corte', 'Flexibilidade operacional'],
    applications: ['Linhas de produção diversas'],
    availability: 'Sob encomenda',
    leadTime: '10-15 dias',
    sku: 'FP-CUT-008',
  },
  {
    id: 'fp-cut-09',
    category: 'corte',
    name: 'Ferramentas de corte rotativas, fixas e móveis para diversas aplicações em empacotadoras',
    shortDescription: 'Linha completa de ferramentas rotativas, fixas e móveis para diferentes empacotadoras',
    fullDescription: 'Ferramentas de corte rotativas, fixas e móveis desenvolvidas para diversas aplicações em empacotadoras, atendendo diferentes necessidades de produção.',
    images: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'],
    specifications: { material: 'Aço ferramenta temperado' },
    benefits: ['Versatilidade', 'Múltiplas configurações', 'Compatibilidade ampla'],
    applications: ['Empacotadoras diversas'],
    availability: 'Sob encomenda',
    leadTime: '15-20 dias',
    sku: 'FP-CUT-009',
  },
];

// ════════════════════════════════════════════════════════════
// FUNÇÃO HELPER PARA BUSCAR PRODUTO POR ID
// ════════════════════════════════════════════════════════════

export const getProductById = (id: string): Product | undefined => {
  const allProducts = [...flowPackSealingProducts, ...flowPackCuttingProducts];
  return allProducts.find(product => product.id === id);
};

// ════════════════════════════════════════════════════════════
// FUNÇÃO HELPER PARA BUSCAR PRODUTOS RELACIONADOS
// ════════════════════════════════════════════════════════════

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};
