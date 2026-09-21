const PRODUCTS = [
  {
    id: "collar-dorado",
    name: "Collar Dorado Artesanal",
    price: 185,
    store: "bisuteria",
    category: "joyas",
    subcategory: "collares",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Collar elaborado a mano con baño de oro de 18k. Diseño exclusivo con acabado mate y brillo sutil.",
    material: "Acero inoxidable, baño de oro 18k",
    stock: true
  },
  {
    id: "aretes-minimalistas",
    name: "Aretes Minimalistas",
    price: 95,
    store: "bisuteria",
    category: "joyas",
    subcategory: "aretes",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Aretes de diseño limpio, ligeros y versátiles para uso diario.",
    material: "Baño de oro 18k",
    stock: true
  },
  {
    id: "pulsera-piedras",
    name: "Pulsera de Piedras Naturales",
    price: 130,
    store: "bisuteria",
    category: "pulseras",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Pulsera con piedras naturales seleccionadas a mano.",
    material: "Piedras naturales y acero",
    stock: true
  },
  {
    id: "anillo-vintage",
    name: "Anillo Vintage Ajustable",
    price: 75,
    store: "bisuteria",
    category: "joyas",
    subcategory: "anillos",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Anillo ajustable con acabado vintage y detalle artesanal.",
    material: "Aleación con baño dorado",
    stock: true
  },
  {
    id: "set-collares",
    name: "Set de Collares Finos",
    price: 210,
    store: "bisuteria",
    category: "joyas",
    subcategory: "collares",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Set de collares finos para combinar en capas.",
    material: "Baño de oro 18k",
    stock: true,
    badge: "Últimos"
  },
  {
    id: "collar-perlas",
    name: "Collar de Perlas",
    price: 160,
    store: "bisuteria",
    category: "perlas",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Collar de perlas con presentación elegante.",
    material: "Perlas cultivadas",
    stock: true
  },
  {
    id: "collares-capas",
    name: "Collares en Capas",
    price: 145,
    store: "bisuteria",
    category: "joyas",
    subcategory: "collares",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Juego de collares en capas para un look contemporáneo.",
    material: "Baño de oro",
    stock: true
  },
  {
    id: "dije-cristal",
    name: "Dije de Cristal",
    price: 68,
    store: "bisuteria",
    category: "dijes",
    image: "https://images.unsplash.com/photo-1551947391-249dcb8ed976?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1551947391-249dcb8ed976?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Dije con cristal facetado y cadena fina.",
    material: "Cristal y acero",
    stock: true
  },
  {
    id: "aretes-aro",
    name: "Aretes de Aro",
    price: 88,
    store: "bisuteria",
    category: "joyas",
    subcategory: "aretes",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Aros medianos con brillo sutil.",
    material: "Baño de oro",
    stock: true
  },
  {
    id: "collar-plata",
    name: "Collar de Plata",
    price: 120,
    store: "bisuteria",
    category: "joyas",
    subcategory: "collares",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Collar plateado con dije geométrico.",
    material: "Acero plateado",
    stock: true
  },
  {
    id: "llavero-oso",
    name: "Llavero Artesanal",
    price: 45,
    store: "bisuteria",
    category: "llaveros",
    image: "https://images.unsplash.com/photo-1748273734249-604fc3a72b88?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1748273734249-604fc3a72b88?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Llavero decorativo de acabado metálico.",
    material: "Metal",
    stock: true
  },
  {
    id: "cristal-amatista",
    name: "Cristal Decorativo",
    price: 110,
    store: "bisuteria",
    category: "cristales",
    image: "https://images.unsplash.com/photo-1654216937627-11728b27bed3?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1654216937627-11728b27bed3?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Pieza de cristal para colección o regalo.",
    material: "Cristal natural",
    stock: true
  },
  {
    id: "hilo-bordado",
    name: "Hilo para Bordado",
    price: 25,
    store: "bisuteria",
    category: "hilo",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Hilo de colores para proyectos creativos.",
    material: "Algodón",
    stock: true
  },
  {
    id: "brazalete-rigido",
    name: "Brazalete Dorado Rígido",
    price: 155,
    store: "bisuteria",
    category: "pulseras",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Brazalete rígido con acabado dorado.",
    material: "Baño de oro 18k",
    stock: true
  },
  {
    id: "peluche-suave",
    name: "Peluche Suave",
    price: 80,
    store: "regalos",
    category: "peluches",
    image: "https://images.unsplash.com/photo-1615486363990-dff6c0722a38?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1615486363990-dff6c0722a38?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Peluche artesanal ideal para regalo.",
    material: "Tela suave",
    stock: true
  },
  {
    id: "bolsa-tote",
    name: "Bolsa Tote",
    price: 95,
    store: "regalos",
    category: "bolsas",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Bolsa tote resistente y versátil.",
    material: "Textil",
    stock: true
  },
  {
    id: "babuchas",
    name: "Babuchas Cómodas",
    price: 70,
    store: "regalos",
    category: "babuchas",
    image: "https://images.unsplash.com/photo-1648475025388-b6c41b848b7b?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1648475025388-b6c41b848b7b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Babuchas suaves para el hogar.",
    material: "Textil",
    stock: true
  },
  {
    id: "tela-decorativa",
    name: "Tela Decorativa",
    price: 55,
    store: "regalos",
    category: "telas",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Tela decorativa por metro para proyectos creativos.",
    material: "Algodón",
    stock: true
  }
];

const STORE_LABELS = {
  bisuteria: "Bisutería",
  regalos: "Regalos"
};

const CATEGORY_LABELS = {
  joyas: "Joyas",
  pulseras: "Pulseras",
  dijes: "Dijes",
  llaveros: "Llaveros",
  cristales: "Cristales",
  perlas: "Perlas",
  hilo: "Hilo",
  collares: "Collares",
  aretes: "Aretes",
  anillos: "Anillos",
  peluches: "Peluches",
  bolsas: "Bolsas",
  babuchas: "Babuchas",
  telas: "Telas"
};

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function getProductsByStore(store) {
  return PRODUCTS.filter((product) => product.store === store);
}

function formatPrice(price) {
  return `$${price}`;
}
