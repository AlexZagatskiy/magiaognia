export interface Fireplace {
  id: string;
  name: string;
  category: 'nowoczesny' | 'klasyczny' | 'rustykalny';
  price: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: {
    wymiary: string;
    moc: string;
    material: string;
    instalacja: string;
    spalanie: string;
    wydajność: string;
  };
  featured: boolean;
  technicalDetails: string[];
  benefits: string[];
}

export const fireplaces: Fireplace[] = [
  {
    id: 'milano-lux',
    name: 'Milano Lux',
    category: 'nowoczesny',
    price: 'Od 25,000 zł',
    images: [
      '/fireplaces/milano-lux-1.jpg',
      '/fireplaces/milano-lux-2.jpg',
      '/fireplaces/milano-lux-3.jpg',
      '/fireplaces/milano-lux-4.jpg'
    ],
    shortDescription: 'Nowoczesny kominek wiszący o minimalistycznym designie, idealny do luksusowych wnętrz.',
    fullDescription: 'Milano Lux to kwintesencja nowoczesnego designu. Ten wiszący kominek łączy w sobie funkcjonalność z niezwykłą estetyką. Wykonany z najwyższej jakości stali nierdzewnej i szkła żaroodpornego, stanowi prawdziwą ozdobę każdego wnętrza. Jego minimalistyczna forma idealnie wpisuje się w trendy współczesnej architektury wnętrz.',
    specifications: {
      wymiary: '120 x 80 x 45 cm',
      moc: '8-12 kW',
      material: 'Stal nierdzewna, szkło żaroodporne',
      instalacja: 'Montaż naścienny z systemem wentylacji',
      spalanie: 'Drewno liściaste, brykiet',
      wydajność: '85% sprawności'
    },
    featured: true,
    technicalDetails: [
      'Automatyczny system regulacji przepływu powietrza',
      'Podwójne szyby o grubości 5mm',
      'Certyfikat CE i zgodność z normami europejskimi',
      'Funkcja długiego spalania do 8 godzin',
      'System czyszczenia szyb'
    ],
    benefits: [
      'Nowoczesny design pasujący do każdego wnętrza',
      'Wysoka sprawność energetyczna',
      'Łatwe utrzymanie czystości',
      'Bezpieczeństwo użytkowania',
      'Profesjonalna obsługa serwisowa'
    ]
  },
  {
    id: 'krakowski-klasyk',
    name: 'Krakowski Klasyk',
    category: 'klasyczny',
    price: 'Od 35,000 zł',
    images: [
      '/fireplaces/krakowski-klasyk-1.jpg',
      '/fireplaces/krakowski-klasyk-2.jpg',
      '/fireplaces/krakowski-klasyk-3.jpg'
    ],
    shortDescription: 'Tradycyjny kominek z naturalnego piaskowca, nawiązujący do polskich tradycji rzemieślniczych.',
    fullDescription: 'Krakowski Klasyk to hołd dla polskiej tradycji budowlanej. Wykonany z naturalnego piaskowca z regionu krakowskiego, każdy element jest ręcznie obrabiany przez doświadczonych rzemieślników. Bogato zdobione detale i klasyczne proporcje sprawiają, że ten kominek stanie się sercem Państwa domu.',
    specifications: {
      wymiary: '180 x 120 x 60 cm',
      moc: '10-15 kW',
      material: 'Piaskowiec krakowski, żeliwo',
      instalacja: 'Tradycyjna z kominem murowanym',
      spalanie: 'Drewno liściaste, węgiel kamienny',
      wydajność: '75% sprawności'
    },
    featured: true,
    technicalDetails: [
      'Ręczne wykonanie przez mistrzów kamieniarskich',
      'Żeliwna wkładka kominkowa z Niemiec',
      'Naturalny piaskowiec o unikalnym usłojeniu',
      'Możliwość personalizacji zdobień',
      'Gwarancja 10 lat na konstrukcję'
    ],
    benefits: [
      'Unikatowy charakter każdego egzemplarza',
      'Materiały najwyższej jakości',
      'Tradycyjne rzemiosło',
      'Doskonała akumulacja ciepła',
      'Ponadczasowa elegancja'
    ]
  },
  {
    id: 'nordic-premium',
    name: 'Nordic Premium',
    category: 'nowoczesny',
    price: 'Od 28,000 zł',
    images: [
      '/fireplaces/nordic-premium-1.jpg',
      '/fireplaces/nordic-premium-2.jpg',
      '/fireplaces/nordic-premium-3.jpg',
      '/fireplaces/nordic-premium-4.jpg'
    ],
    shortDescription: 'Skandynawski design w stylu hygge, łączący funkcjonalność z przytulnością północy.',
    fullDescription: 'Nordic Premium reprezentuje to, co najlepsze w skandynawskim designie. Jego czyste linie, naturalne materiały i funkcjonalne rozwiązania tworzą atmosferę hygge w Państwa domu. Kominek został zaprojektowany z myślą o długich, zimowych wieczorach spędzonych w gronie najbliższych.',
    specifications: {
      wymiary: '140 x 90 x 50 cm',
      moc: '7-11 kW',
      material: 'Ceramika, stal, drewno dębowe',
      instalacja: 'Wolnostojący z przewodem kominowym',
      spalanie: 'Drewno iglaste i liściaste',
      wydajność: '82% sprawności'
    },
    featured: true,
    technicalDetails: [
      'Ceramiczne pokrycie akumulujące ciepło',
      'Drewniane elementy z certyfikowanego dębu',
      'Duża szyba o powierzchni 0,6 m²',
      'Regulacja spalania w 3 poziomach',
      'Ekologiczny system dopalania gazów'
    ],
    benefits: [
      'Skandynawska jakość i design',
      'Długie utrzymanie ciepła',
      'Ekologiczne spalanie',
      'Przytulna atmosfera',
      'Łatwość obsługi'
    ]
  },
  {
    id: 'royal-palace',
    name: 'Royal Palace',
    category: 'klasyczny',
    price: 'Od 45,000 zł',
    images: [
      '/fireplaces/royal-palace-1.jpg',
      '/fireplaces/royal-palace-2.jpg',
      '/fireplaces/royal-palace-3.jpg'
    ],
    shortDescription: 'Luksusowy kominek z białego marmuru Carrara, stworzony dla najbardziej wymagających klientów.',
    fullDescription: 'Royal Palace to szczyt luksusu i elegancji. Wykonany z najszlachetniejszego białego marmuru Carrara, z ręcznie rzeźbionymi detalami, reprezentuje najwyższą klasę rzemiosła artystycznego. Ten kominek to inwestycja na pokolenia, która nada Państwa wnętrzom królewskiego splendoru.',
    specifications: {
      wymiary: '200 x 140 x 70 cm',
      moc: '12-18 kW',
      material: 'Marmur Carrara, brąz, żeliwo',
      instalacja: 'Tradycyjna z kominem klasycznym',
      spalanie: 'Drewno liściaste premium',
      wydajność: '78% sprawności'
    },
    featured: true,
    technicalDetails: [
      'Marmur Carrara pierwszego gatunku',
      'Ręcznie wykonane rzeźbiarskie detale',
      'Brązowe aplikacje patynowane',
      'Żeliwna wkładka z systemem konwekcji',
      'Certyfikat autentyczności materiałów'
    ],
    benefits: [
      'Niezrównana elegancja i prestiż',
      'Materiały najwyższej jakości',
      'Ręczne wykonanie przez artystów',
      'Unikalne zdobienia',
      'Dożywotnia wartość inwestycji'
    ]
  },
  {
    id: 'industrial-chic',
    name: 'Industrial Chic',
    category: 'nowoczesny',
    price: 'Od 22,000 zł',
    images: [
      '/fireplaces/industrial-chic-1.jpg',
      '/fireplaces/industrial-chic-2.jpg',
      '/fireplaces/industrial-chic-3.jpg'
    ],
    shortDescription: 'Surowy design industrialny z czarnej stali, idealny do loftów i nowoczesnych wnętrz.',
    fullDescription: 'Industrial Chic to kominek dla miłośników surowego, przemysłowego designu. Wykonany z czarnej stali o matowym wykończeniu, z widocznymi spawami i przemysłowymi detalami, idealnie komponuje się z loftowymi wnętrzami. To połączenie funkcjonalności z charakterystyczną estetyką industrialną.',
    specifications: {
      wymiary: '110 x 85 x 40 cm',
      moc: '6-10 kW',
      material: 'Stal czarna matowa, żeliwo',
      instalacja: 'Wolnostojący lub wbudowany',
      spalanie: 'Drewno, brykiet, pellet',
      wydajność: '80% sprawności'
    },
    featured: false,
    technicalDetails: [
      'Stal o grubości 8mm',
      'Matowe, antykorozyjne wykończenie',
      'Widoczne spawy jako element dekoracyjny',
      'Regulowany system nawiewu powietrza',
      'Opcjonalny system nawiewu gorącego powietrza'
    ],
    benefits: [
      'Unikalny industrialny charakter',
      'Wytrzymała konstrukcja',
      'Uniwersalność montażu',
      'Łatwość konserwacji',
      'Konkurencyjna cena'
    ]
  }
];

export const featuredFireplaces = fireplaces.filter(fireplace => fireplace.featured);

export const getFireplaceById = (id: string): Fireplace | undefined => {
  return fireplaces.find(fireplace => fireplace.id === id);
};

export const getFireplacesByCategory = (category: Fireplace['category']): Fireplace[] => {
  return fireplaces.filter(fireplace => fireplace.category === category);
};