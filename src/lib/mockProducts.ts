export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  category: string
  subcategory: string
  description: string
  price: number        // ARS
  promoPrice?: number  // ARS
  image: string
  images: string[]
  stock: number
  tags: string[]
}

export const CATEGORIES = [
  'Dermocosmética',
  'Belleza',
  'Cuidado Personal',
  'Bebés',
  'Hogar y Alimentos',
  'Salud y Farmacia',
  'Ofertas',
]

// Productos de ejemplo — reemplazar con catálogo real (CSV / API)
export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'la-roche-posay-effaclar-serum-30ml',
    name: 'Effaclar Sérum Ultra Concentrado 30ml',
    brand: 'La Roche-Posay',
    category: 'Dermocosmética',
    subcategory: 'Sérum',
    description: 'Sérum anti-imperfecciones de alta concentración. Con ácido salicílico y niacinamida para pieles con tendencia acneica.',
    price: 45000,
    promoPrice: 38240,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Effaclar+Sérum',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Effaclar+Sérum'],
    stock: 12,
    tags: ['acne', 'serum', 'dermocosmetica'],
  },
  {
    id: '2',
    slug: 'vichy-mineral-89-hidratante-booster',
    name: 'Mineral 89 Hidratante Booster',
    brand: 'Vichy',
    category: 'Dermocosmética',
    subcategory: 'Hidratante',
    description: 'Potenciador hidratante diario con agua volcánica de Vichy y ácido hialurónico al 89%.',
    price: 32500,
    promoPrice: 26000,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Mineral+89',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Mineral+89'],
    stock: 8,
    tags: ['hidratante', 'vichy', 'dermocosmetica'],
  },
  {
    id: '3',
    slug: 'cerave-crema-hidratante-piel-seca',
    name: 'Crema Hidratante Piel Seca a Muy Seca',
    brand: 'CeraVe',
    category: 'Dermocosmética',
    subcategory: 'Hidratante',
    description: 'Hidratante con ceramidas y ácido hialurónico para restaurar la barrera cutánea. Para piel seca a muy seca.',
    price: 22000,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=CeraVe+Hidratante',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=CeraVe+Hidratante'],
    stock: 20,
    tags: ['ceramidas', 'piel-seca', 'dermocosmetica'],
  },
  {
    id: '4',
    slug: 'bioderma-sensibio-h2o-agua-micelar',
    name: 'Sensibio H2O Agua Micelar Piel Sensible',
    brand: 'Bioderma',
    category: 'Dermocosmética',
    subcategory: 'Limpieza',
    description: 'Agua micelar para pieles sensibles. Limpia, desmaquilla y calma sin aclarar. Apta para ojos y labios.',
    price: 28000,
    promoPrice: 21400,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Sensibio+H2O',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Sensibio+H2O'],
    stock: 15,
    tags: ['micelar', 'piel-sensible', 'limpieza'],
  },
  {
    id: '5',
    slug: 'neutrogena-hydro-boost-gel-crema',
    name: 'Hydro Boost Gel-Crema Hidratante',
    brand: 'Neutrogena',
    category: 'Dermocosmética',
    subcategory: 'Hidratante',
    description: 'Gel-crema ultra hidratante de absorción rápida con ácido hialurónico. No comedogénico.',
    price: 19500,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Hydro+Boost',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Hydro+Boost'],
    stock: 6,
    tags: ['hidratante', 'neutrogena', 'gel-crema'],
  },
  {
    id: '6',
    slug: 'garnier-vitamina-c-serum-iluminador',
    name: 'Vitamina C Sérum Iluminador 30ml',
    brand: 'Garnier',
    category: 'Belleza',
    subcategory: 'Sérum',
    description: 'Sérum iluminador con vitamina C, niacinamida y ácido hialurónico. Aclara y unifica el tono.',
    price: 15000,
    promoPrice: 11800,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Garnier+Vit+C',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Garnier+Vit+C'],
    stock: 25,
    tags: ['vitamina-c', 'serum', 'iluminador'],
  },
  {
    id: '7',
    slug: 'isdin-fotoprotector-fusion-water-spf50',
    name: 'Fotoprotector Fusion Water SPF 50+',
    brand: 'ISDIN',
    category: 'Dermocosmética',
    subcategory: 'Solar',
    description: 'Protector solar de textura ultraligera en agua. SPF 50+. Acabado invisible. Apto para pieles mixtas a grasas.',
    price: 38000,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=ISDIN+SPF50',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=ISDIN+SPF50'],
    stock: 10,
    tags: ['solar', 'spf50', 'dermocosmetica'],
  },
  {
    id: '8',
    slug: 'bepanthen-crema-protectora-bebes',
    name: 'Crema Protectora para Bebés 100g',
    brand: 'Bepanthen',
    category: 'Bebés',
    subcategory: 'Pañalitis',
    description: 'Crema protectora con dexpantenol para la prevención y tratamiento de la dermatitis del pañal.',
    price: 12500,
    image: 'https://placehold.co/400x400/f7f5f8/1d2343?text=Bepanthen+Bebés',
    images: ['https://placehold.co/400x400/f7f5f8/1d2343?text=Bepanthen+Bebés'],
    stock: 30,
    tags: ['bebes', 'pañalitis', 'bepanthen'],
  },
]
