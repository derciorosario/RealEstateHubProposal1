export interface Property {
  id: string;
  title: string;
  price: number;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  forSale: boolean;
  forRent: boolean;
  amenities: string[];
  description: string;
  agent: {
    name: string;
    image: string;
    phone: string;
  };
}

export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Casa Familiar Moderna em Sommerschield",
    price: 12500000,
    type: "Casa",
    location: "Sommerschield, Maputo",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Jardim", "Garagem", "Segurança"],
    description: "Linda casa moderna em um bairro tranquilo com excelente segurança. A propriedade possui um design de plano aberto com tetos altos e iluminação natural em todos os ambientes.",
    agent: {
      name: "Ana Santos",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "84 123 4567"
    }
  },
  {
    id: "2",
    title: "Apartamento de Luxo à Beira-Mar",
    price: 18500000,
    type: "Apartamento",
    location: "Marginal, Maputo",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Academia", "Segurança", "Estacionamento"],
    description: "Deslumbrante apartamento à beira-mar com vista panorâmica para a Baía de Maputo. Acabamentos modernos em todo o imóvel com serviço de portaria 24 horas.",
    agent: {
      name: "João Malenga",
      image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "82 345 6789"
    }
  },
  {
    id: "3",
    title: "Charmosa Casa na Polana",
    price: 9500000,
    type: "Casa",
    location: "Polana, Maputo",
    bedrooms: 2,
    bathrooms: 1,
    area: 120,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    forSale: true,
    forRent: false,
    amenities: ["Jardim", "Estacionamento", "Segurança"],
    description: "Casa encantadora no coração da Polana. A uma curta distância de cafés e boutiques. Perfeita como primeira casa ou propriedade de investimento.",
    agent: {
      name: "Luísa Tembe",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "83 456 7890"
    }
  },
  {
    id: "4",
    title: "Vila à Beira-Mar em Costa do Sol",
    price: 32000000,
    type: "Casa",
    location: "Costa do Sol, Maputo",
    bedrooms: 5,
    bathrooms: 5,
    area: 450,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Jardim", "Garagem", "Segurança", "Vista para o Mar"],
    description: "Espetacular vila à beira-mar com vistas ininterruptas do oceano. Características incluem piscina infinita, cinema em casa, adega e acesso direto à praia.",
    agent: {
      name: "Carlos Fernandes",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "84 567 8901"
    }
  },
  {
    id: "5",
    title: "Apartamento Studio Moderno para Alugar",
    price: 30000,
    type: "Apartamento",
    location: "Malhangalene, Maputo",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    forSale: false,
    forRent: true,
    amenities: ["Segurança", "Estacionamento", "Mobiliado"],
    description: "Apartamento studio contemporâneo perfeito para jovens profissionais. Totalmente mobiliado com eletrodomésticos modernos e segurança 24 horas.",
    agent: {
      name: "Paulo Machava",
      image: "https://images.unsplash.com/photo-1564564662038-aabc5b160d56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "86 678 9012"
    }
  },
  {
    id: "6",
    title: "Casa Familiar Espaçosa em Matola",
    price: 8500000,
    type: "Casa",
    location: "Matola, Maputo",
    bedrooms: 4,
    bathrooms: 2,
    area: 280,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Jardim", "Garagem", "Área de Churrasco"],
    description: "Casa familiar em um bairro seguro perto de excelentes escolas. Possui um grande jardim, piscina e área de entretenimento ao ar livre.",
    agent: {
      name: "Teresa Mondlane",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "82 789 0123"
    }
  },
  {
    id: "7",
    title: "Cobertura com Vista para a Cidade",
    price: 24500000,
    type: "Apartamento",
    location: "Coop, Maputo",
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Academia", "Segurança", "Varanda", "Vista para o Mar"],
    description: "Cobertura luxuosa com vista panorâmica para o oceano e a cidade. Inclui terraço privativo no telhado, cozinha de designer e janelas do chão ao teto.",
    agent: {
      name: "Isabel Costa",
      image: "https://images.unsplash.com/photo-1573497019707-1c04de26e4e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "83 890 1234"
    }
  },
  {
    id: "8",
    title: "Casa em Condomínio Fechado",
    price: 6950000,
    type: "Condomínio",
    location: "Triunfo, Maputo",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 160,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    forSale: true,
    forRent: false,
    amenities: ["Piscina", "Segurança", "Estacionamento", "Clubhouse"],
    description: "Casa moderna em um condomínio fechado bem conservado com instalações comunitárias, incluindo piscina e clubhouse.",
    agent: {
      name: "Roberto Sitoe",
      image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "84 901 2345"
    }
  },
  {
    id: "9",
    title: "Apartamento de Luxo para Alugar",
    price: 75000,
    type: "Apartamento",
    location: "Julius Nyerere, Maputo",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    forSale: false,
    forRent: true,
    amenities: ["Piscina", "Academia", "Segurança", "Varanda", "Mobiliado"],
    description: "Apartamento de alto padrão no exclusivo bairro de Julius Nyerere. Totalmente mobiliado com acabamentos de designer e eletrodomésticos premium.",
    agent: {
      name: "Sofia Mabjaia",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      phone: "82 012 3456"
    }
  }
];

export const sampleNews = [
  {
    id: "1",
    title: "Mercado Imobiliário de Moçambique Mostra Sinais de Recuperação",
    excerpt: "Dados recentes indicam uma tendência positiva no mercado imobiliário de Moçambique com aumento do volume de vendas em áreas-chave.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "2023-07-15"
  },
  {
    id: "2",
    title: "Novos Incentivos Fiscais para Compradores de Primeira Casa",
    excerpt: "O governo anunciou novos benefícios fiscais destinados a ajudar compradores de primeira casa a entrar no mercado imobiliário.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "2023-06-28"
  },
  {
    id: "3",
    title: "Preços de Imóveis em Maputo Continuam a Subir",
    excerpt: "O mercado imobiliário da capital moçambicana permanece forte com crescimento consistente de preços, apesar dos desafios econômicos.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    date: "2023-08-03"
  }
];

export const sampleAgents = [
  {
    id: "1",
    name: "Ana Santos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    area: "Sommerschield, Maputo",
    properties: 24,
    phone: "84 123 4567",
    email: "ana.s@privateproperty.co.mz"
  },
  {
    id: "2",
    name: "João Malenga",
    image: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    area: "Centro da Cidade, Maputo",
    properties: 18,
    phone: "82 345 6789",
    email: "joao.m@privateproperty.co.mz"
  },
  {
    id: "3",
    name: "Isabel Costa",
    image: "https://images.unsplash.com/photo-1573497019707-1c04de26e4e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    area: "Coop, Maputo",
    properties: 31,
    phone: "83 890 1234",
    email: "isabel.c@privateproperty.co.mz"
  },
  {
    id: "4",
    name: "Carlos Fernandes",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    area: "Costa do Sol, Maputo",
    properties: 15,
    phone: "84 567 8901",
    email: "carlos.f@privateproperty.co.mz"
  }
];