import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/30 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621215052063-6ed29c948b31?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-warm-white mb-6">
            Ekskluzywne Kominki
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-luxury-gold">
              dla Wyjątkowych Domów
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-warm-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Projektujemy i instalujemy designerskie kominki najwyższej jakości. 
            Każde rozwiązanie to połączenie tradycyjnego rzemiosła z nowoczesną technologią.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/kominki"
              className="bg-luxury-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transform hover:scale-105 transition-all duration-200 shadow-lg min-w-[200px]"
            >
              Zobacz Nasze Modele
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-warm-white text-warm-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-warm-white hover:text-charcoal transition-all duration-200 min-w-[200px]"
            >
              Bezpłatna Konsultacja
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-warm-white/80">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">15+ Lat Doświadczenia</h3>
              <p className="text-sm text-center">Zaufanie setek klientów</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Premium Materiały</h3>
              <p className="text-sm text-center">Tylko najwyższa jakość</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Gwarancja 10 lat</h3>
              <p className="text-sm text-center">Pełne wsparcie serwisowe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
