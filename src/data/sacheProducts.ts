// /src/data/sacheProducts.ts

export interface Product {
  id: string;
  category: 'selagem' | 'corte' | 'dosagem';
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
// PRODUTOS DE SELAGEM SACHÊ
// ════════════════════════════════════════════════════════════

export const sacheSealingProducts: Product[] = [
  {
    id: 'sache-seal-01',
    category: 'selagem',
    name: 'Mordente para Sachê Quatro Lados',
    shortDescription: 'Sistema de selagem para sachês tipo almofada com vedação completa',
    description: 'Mordente especial para selagem de sachês com quatro lados selados, garantindo vedação hermética.',
    fullDescription: 'Mordente especial para selagem de sachês tipo almofada (pillow pack) com quatro lados selados, garantindo vedação completa para produtos líquidos, pastas e pós.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio',
      coating: 'Teflon',
      operatingTemp: 'até 220°C',
    },
    benefits: [
      'Vedação completa',
      'Formato profissional',
      'Selagem forte',
      'Versatilidade',
    ],
    applications: [
      'Sachês tipo almofada',
      'Embalagens de condimentos',
      'Amostras',
      'Produtos líquidos',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-M4L-XXX',
  },
  {
    id: 'sache-seal-02',
    category: 'selagem',
    name: 'Mordente para Sachê Três Lados',
    shortDescription: 'Selagem em três lados para sachês flat com acabamento premium',
    description: 'Mordente para sachês tipo flat com selagem em três lados, ideal para amostras e produtos unitários.',
    fullDescription: 'Mordente desenvolvido para selagem de sachês tipo flat com três lados selados, proporcionando acabamento premium e vedação confiável.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio anodizado',
      coating: 'Teflon',
      operatingTemp: 'até 200°C',
    },
    benefits: [
      'Acabamento premium',
      'Selagem uniforme',
      'Ideal para amostras',
      'Baixa manutenção',
    ],
    applications: [
      'Sachês flat',
      'Amostras grátis',
      'Produtos unitários',
      'Cosméticos',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-M3L-XXX',
  },
  {
    id: 'sache-seal-03',
    category: 'selagem',
    name: 'Resistência para Sachê',
    shortDescription: 'Elemento aquecedor de alta precisão para selagem consistente',
    description: 'Resistência elétrica desenvolvida para garantir aquecimento uniforme em máquinas de sachê.',
    fullDescription: 'Resistência elétrica de alta performance para aquecimento dos mordentes em máquinas de sachê, garantindo temperatura uniforme para selagens perfeitas.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Mica/Cerâmica',
      operatingTemp: 'até 280°C',
    },
    benefits: [
      'Aquecimento rápido',
      'Temperatura uniforme',
      'Longa vida útil',
      'Economia de energia',
    ],
    applications: [
      'Máquinas de sachê',
      'Selagem horizontal',
      'Selagem vertical',
    ],
    availability: 'Em estoque',
    leadTime: '3-5 dias',
    sku: 'SACHE-RES-XXX',
  },
  {
    id: 'sache-seal-04',
    category: 'selagem',
    name: 'Mordente com Perfil Texturizado',
    shortDescription: 'Cria textura na selagem para melhor aderência e visual',
    description: 'Mordente com perfil especial que cria textura na área de selagem, melhorando aderência.',
    fullDescription: 'Mordente com perfil texturizado que cria um padrão na área de selagem, melhorando a aderência em filmes mais espessos e proporcionando visual diferenciado.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
      coating: 'Anti-aderente',
    },
    benefits: [
      'Melhor aderência',
      'Visual diferenciado',
      'Ideal para filmes espessos',
      'Durabilidade',
    ],
    applications: [
      'Filmes multicamadas',
      'Embalagens premium',
      'Produtos especiais',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'SACHE-MTX-XXX',
  },
  {
    id: 'sache-seal-05',
    category: 'selagem',
    name: 'Sistema de Selagem a Frio',
    shortDescription: 'Para filmes cold seal sem necessidade de aquecimento',
    description: 'Sistema de selagem desenvolvido para trabalhar com filmes cold seal, sem aquecimento.',
    fullDescription: 'Sistema de selagem a frio para trabalhar com filmes pré-revestidos (cold seal), ideal para produtos sensíveis ao calor como chocolates.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço/Borracha',
      operatingTemp: 'Ambiente',
    },
    benefits: [
      'Sem aquecimento',
      'Economia de energia',
      'Ideal para chocolates',
      'Processo rápido',
    ],
    applications: [
      'Chocolates',
      'Produtos sensíveis ao calor',
      'Filmes cold seal',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'SACHE-SFR-XXX',
  },
  {
    id: 'sache-seal-06',
    category: 'selagem',
    name: 'Mordente Multi-pista',
    shortDescription: 'Sistema para selagem simultânea de múltiplos sachês',
    description: 'Mordente para máquinas multi-pista, permitindo produção simultânea de vários sachês.',
    fullDescription: 'Sistema de mordente multi-pista para selagem simultânea de múltiplos sachês, aumentando significativamente a produtividade da linha.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Alumínio/Aço',
      dimensions: '2 a 8 pistas',
    },
    benefits: [
      'Alta produtividade',
      'Múltiplas pistas',
      'Selagem uniforme',
      'Eficiência',
    ],
    applications: [
      'Produção em massa',
      'Sachês de condimentos',
      'Açúcar/Sal',
    ],
    availability: 'Sob encomenda',
    leadTime: '15-20 dias',
    sku: 'SACHE-MMP-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE CORTE SACHÊ
// ════════════════════════════════════════════════════════════

export const sacheCuttingProducts: Product[] = [
  {
    id: 'sache-cut-01',
    category: 'corte',
    name: 'Faca para Corte de Sachê Múltiplo',
    shortDescription: 'Sistema de facas paralelas para corte simultâneo de múltiplos sachês',
    fullDescription: 'Conjunto de facas paralelas para corte simultâneo de múltiplos sachês, aumentando produtividade e garantindo cortes uniformes.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço D2',
      dimensions: '2-6 facas',
      tolerance: '±0.02mm',
    },
    benefits: [
      'Alta produtividade',
      'Cortes uniformes',
      'Ajuste fácil',
      'Durabilidade',
    ],
    applications: [
      'Sachês múltiplos',
      'Stick packs',
      'Embalagens em tira',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-FCM-XXX',
  },
  {
    id: 'sache-cut-02',
    category: 'corte',
    name: 'Picotador para Sachês',
    shortDescription: 'Cria micro-perfurações para fácil abertura sem comprometer vedação',
    fullDescription: 'Dispositivo para criar picotes (micro-perfurações) em sachês, facilitando a abertura pelo consumidor sem necessidade de tesoura.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
      dimensions: 'Espaçamento 2-5mm',
    },
    benefits: [
      'Fácil abertura',
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
    sku: 'SACHE-PIC-XXX',
  },
  {
    id: 'sache-cut-03',
    category: 'corte',
    name: 'Faca Easy Open',
    shortDescription: 'Combina corte liso com entalhe para abertura facilitada',
    fullDescription: 'Faca que combina corte liso com um entalhe especial que indica o ponto correto de abertura do sachê.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço ferramenta',
      tolerance: '±0.03mm',
    },
    benefits: [
      'Abertura facilitada',
      'Ponto de abertura definido',
      'Corte limpo',
      'Durabilidade',
    ],
    applications: [
      'Sachês de consumo',
      'Embalagens unitárias',
      'Produtos de conveniência',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-FEO-XXX',
  },
  {
    id: 'sache-cut-04',
    category: 'corte',
    name: 'Faca Zig Zag para Sachê',
    shortDescription: 'Corte serrilhado decorativo que facilita abertura manual',
    fullDescription: 'Faca zig zag para sachês que cria borda serrilhada decorativa e facilita a abertura manual pelo consumidor.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço D2',
      dimensions: 'Diversos passos disponíveis',
    },
    benefits: [
      'Visual diferenciado',
      'Fácil abertura',
      'Diversos padrões',
      'Durabilidade',
    ],
    applications: [
      'Sachês decorativos',
      'Amostras',
      'Produtos premium',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-FZZ-XXX',
  },
  {
    id: 'sache-cut-05',
    category: 'corte',
    name: 'Contra-faca para Sachê',
    shortDescription: 'Base de corte com tratamento especial para longa vida útil',
    fullDescription: 'Contra-faca com tratamento térmico especial para trabalhar em conjunto com as facas de corte, garantindo vida útil prolongada do sistema.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço temperado',
      tolerance: '±0.02mm',
    },
    benefits: [
      'Longa vida útil',
      'Corte consistente',
      'Baixa manutenção',
      'Troca fácil',
    ],
    applications: [
      'Sistemas de corte',
      'Máquinas de sachê',
    ],
    availability: 'Em estoque',
    leadTime: '5-7 dias',
    sku: 'SACHE-CFQ-XXX',
  },
];

// ════════════════════════════════════════════════════════════
// PRODUTOS DE DOSAGEM SACHÊ
// ════════════════════════════════════════════════════════════

export const sacheDosagemProducts: Product[] = [
  {
    id: 'sache-dos-01',
    category: 'dosagem',
    name: 'Dosador de Líquidos para Sachê',
    shortDescription: 'Sistema de dosagem precisa para líquidos, pastas e géis',
    description: 'Dosador volumétrico ou gravimétrico para enchimento preciso de sachês com produtos líquidos.',
    fullDescription: 'Dosador volumétrico ou gravimétrico para enchimento preciso de sachês com produtos líquidos, pastas ou géis. Alta precisão para evitar desperdício.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável 316',
      dimensions: '1ml - 500ml',
      tolerance: '±0.5%',
    },
    benefits: [
      'Alta precisão',
      'Fácil limpeza',
      'Sem desperdício',
      'Velocidade ajustável',
    ],
    applications: [
      'Líquidos',
      'Pastas',
      'Géis',
      'Cremes',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'SACHE-DLQ-XXX',
  },
  {
    id: 'sache-dos-02',
    category: 'dosagem',
    name: 'Dosador Volumétrico para Pós',
    shortDescription: 'Copos dosadores para produtos em pó e granulados',
    description: 'Sistema de dosagem com copos volumétricos para produtos em pó e granulados finos.',
    fullDescription: 'Dosador volumétrico com copos intercambiáveis para dosagem precisa de produtos em pó, granulados e partículas finas.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável 304',
      dimensions: '1g - 100g',
      tolerance: '±1%',
    },
    benefits: [
      'Dosagem precisa',
      'Copos intercambiáveis',
      'Fácil ajuste',
      'Baixa manutenção',
    ],
    applications: [
      'Pós',
      'Granulados',
      'Açúcar',
      'Temperos',
    ],
    availability: 'Em estoque',
    leadTime: '7-10 dias',
    sku: 'SACHE-DVP-XXX',
  },
  {
    id: 'sache-dos-03',
    category: 'dosagem',
    name: 'Bomba Peristáltica',
    shortDescription: 'Dosagem precisa para líquidos viscosos e sensíveis',
    description: 'Bomba peristáltica para dosagem de líquidos sem contato direto com partes mecânicas.',
    fullDescription: 'Bomba peristáltica para dosagem de líquidos viscosos ou sensíveis, onde o produto não entra em contato direto com partes mecânicas, garantindo higiene total.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inox/Silicone',
      dimensions: '0.5ml - 100ml',
      tolerance: '±0.5%',
    },
    benefits: [
      'Sem contato',
      'Higiene total',
      'Ideal para viscosos',
      'Fácil limpeza',
    ],
    applications: [
      'Cosméticos',
      'Farmacêuticos',
      'Alimentos sensíveis',
      'Géis',
    ],
    availability: 'Em estoque',
    leadTime: '10-15 dias',
    sku: 'SACHE-BPE-XXX',
  },
  {
    id: 'sache-dos-04',
    category: 'dosagem',
    name: 'Sistema de Dosagem Gravimétrico',
    shortDescription: 'Pesagem em tempo real para máxima precisão',
    description: 'Sistema de dosagem por peso com célula de carga para precisão máxima.',
    fullDescription: 'Sistema de dosagem gravimétrico com célula de carga que pesa o produto em tempo real, garantindo precisão máxima independente da densidade do produto.',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    ],
    specifications: {
      material: 'Aço inoxidável',
      tolerance: '±0.1%',
    },
    benefits: [
      'Máxima precisão',
      'Independe da densidade',
      'Controle em tempo real',
      'Rastreabilidade',
    ],
    applications: [
      'Produtos de alto valor',
      'Farmacêuticos',
      'Controle rigoroso',
    ],
    availability: 'Sob encomenda',
    leadTime: '15-20 dias',
    sku: 'SACHE-DGR-XXX',
  },
];
