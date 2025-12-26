'use client';

import { useState } from 'react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'wycena',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'wycena',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-text-gray text-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl sm:text-2xl text-warm-white/90 max-w-3xl mx-auto">
              Jesteśmy gotowi odpowiedzieć na Twoje pytania i pomóc w wyborze 
              idealnego kominka dla Twojego domu.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Informacje kontaktowe
                </h2>

                {/* Phone Numbers */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Telefony kontaktowe</h3>
                      <a href="tel:+48123456789" className="text-luxury-gold hover:text-accent-gold transition-colors block">
                        +48 123 456 789
                      </a>
                      <a href="tel:+48987654321" className="text-luxury-gold hover:text-accent-gold transition-colors block">
                        +48 987 654 321
                      </a>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Adresy e-mail</h3>
                      <a href="mailto:kontakt@ekskluzywne-kominki.pl" className="text-luxury-gold hover:text-accent-gold transition-colors block">
                        kontakt@ekskluzywne-kominki.pl
                      </a>
                      <a href="mailto:biuro@ekskluzywne-kominki.pl" className="text-luxury-gold hover:text-accent-gold transition-colors block">
                        biuro@ekskluzywne-kominki.pl
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Godziny pracy</h3>
                      <div className="text-text-gray">
                        <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
                        <p>Sobota: 9:00 - 14:00</p>
                        <p>Niedziela: Zamknięte</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-luxury-gold/5 rounded-lg p-4 border border-luxury-gold/20">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-semibold text-charcoal">Szybka odpowiedź</span>
                  </div>
                  <p className="text-sm text-text-gray">
                    Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                  Obszar działania
                </h3>
                <p className="text-text-gray mb-4">
                  Realizujemy projekty na terenie całej Polski, 
                  ze szczególnym uwzględnieniem:
                </p>
                <ul className="space-y-2 text-sm text-text-gray">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Warszawa i okolice
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Kraków i Małopolska
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Wrocław i Dolny Śląsk
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Gdańsk i Pomorze
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Napisz do nas
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Dziękujemy za wiadomość!</span>
                    </div>
                    <p className="mt-1 text-sm">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Adres e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                      placeholder="jan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Temat zapytania
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                    >
                      <option value="wycena">Zapytanie o wycenę</option>
                      <option value="konsultacja">Bezpłatna konsultacja</option>
                      <option value="serwis">Obsługa serwisowa</option>
                      <option value="projekt">Projekt indywidualny</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors resize-vertical"
                      placeholder="Opisz swoje potrzeby, wymiary pomieszczenia, preferowany styl kominka..."
                    />
                  </div>

                  <div className="text-xs text-text-gray">
                    * Pola wymagane
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold text-white py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij wiadomość'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-4">
              Często Zadawane Pytania
            </h2>
            <p className="text-lg text-text-gray">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych kominków
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'Jak długo trwa realizacja zamówienia?',
                answer: 'Standardowy czas realizacji to 4-6 tygodni od zaakceptowania projektu. Projekty indywidualne mogą wymagać więcej czasu - od 6 do 8 tygodni.'
              },
              {
                question: 'Czy instalacja jest wliczona w cenę?',
                answer: 'Cena produktu nie zawiera kosztów instalacji. Oferujemy profesjonalną instalację wykonaną przez nasz zespół ekspertów za dodatkową opłatą.'
              },
              {
                question: 'Jakiej gwarancji udzielacie?',
                answer: 'Wszystkie nasze kominki objęte są 10-letnią gwarancją na konstrukcję oraz 2-letnią gwarancją na komponenty elektroniczne i akcesoria.'
              },
              {
                question: 'Czy możliwa jest personalizacja projektu?',
                answer: 'Tak, oferujemy pełną personalizację zgodnie z indywidualnymi potrzebami. Każdy kominek może być dostosowany pod względem wymiarów, materiałów i wykończenia.'
              },
              {
                question: 'Jakie dokumenty są potrzebne do instalacji?',
                answer: 'Do instalacji kominka potrzebne są: pozwolenie budowlane (w niektórych przypadkach), protokół odbioru komina oraz ocena techniczna komina przez kominiarza.'
              },
              {
                question: 'Czy oferujecie serwis posprzedażowy?',
                answer: 'Tak, oferujemy pełen serwis posprzedażowy, w tym regularne przeglądy, konserwację, naprawy oraz doradztwo techniczne przez cały okres gwarancji.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}