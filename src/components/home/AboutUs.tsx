import Link from 'next/link';

const AboutUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Najwyższa Jakość',
      description: 'Używamy wyłącznie materiałów premium pochodzących od sprawdzonych europejskich dostawców.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Indywidualne Projekty',
      description: 'Każdy kominek projektujemy indywidualnie, dopasowując go do charakteru Państwa wnętrza.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: 'Profesjonalna Instalacja',
      description: 'Nasz zespół ekspertów zapewnia profesjonalny montaż zgodny z najwyższymi standardami bezpieczeństwa.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Gwarancja i Serwis',
      description: 'Oferujemy 10-letnią gwarancję oraz pełne wsparcie serwisowe przez cały okres użytkowania.'
    }
  ];

  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
            Dlaczego Warto Wybrać Nasze Kominki?
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Z pasją tworzymy niepowtarzalne dzieła, które dodają elegancji i ciepła 
            najbardziej wymagającym wnętrzom. Poznaj nasze wartości i podejście do pracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">
                15 Lat Doświadczenia w Tworzeniu Wyjątkowych Kominków
              </h3>
              <p className="text-lg text-text-gray leading-relaxed mb-6">
                Od ponad dekady specjalizujemy się w projektowaniu i wykonywaniu 
                luksusowych kominków dla najbardziej wymagających klientów. Nasze 
                doświadczenie obejmuje współpracę z architektami, projektantami wnętrz 
                oraz właścicielami ekskluzywnych nieruchomości w całej Polsce.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                Każdy realizowany przez nas projekt to połączenie tradycyjnego 
                rzemiosła z nowoczesnymi technologiami. Dbamy o każdy szczegół, 
                od wyboru najlepszych materiałów po precyzyjne wykończenie.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-text-gray font-medium">Zrealizowanych Projektów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">100%</div>
                <div className="text-text-gray font-medium">Satysfakcji Klientów</div>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center bg-luxury-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transform hover:scale-105 transition-all duration-200"
            >
              Skontaktuj się z nami
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1621215052063-6ed29c948b31?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-light-gray">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-charcoal">Premium Quality</div>
                  <div className="text-sm text-text-gray">Certyfikowane materiały</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-semibold text-charcoal mb-3">
                {feature.title}
              </h4>
              <p className="text-text-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-charcoal mb-4">
              Jak Przebiega Realizacja Projektu?
            </h3>
            <p className="text-lg text-text-gray">
              Poznaj nasz profesjonalny proces od pierwszego kontaktu do finalizacji instalacji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Konsultacja', description: 'Bezpłatna konsultacja i analiza potrzeb' },
              { step: '02', title: 'Projekt', description: 'Indywidualny projekt dostosowany do wnętrza' },
              { step: '03', title: 'Realizacja', description: 'Precyzyjne wykonanie i profesjonalna instalacja' },
              { step: '04', title: 'Odbiór', description: 'Finalizacja projektu i przekazanie dokumentacji' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h4>
                  <p className="text-text-gray">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-luxury-gold/30 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
