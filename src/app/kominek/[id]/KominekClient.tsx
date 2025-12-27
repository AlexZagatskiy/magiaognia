'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Fireplace } from "@/data/fireplaces";

export type DetailsGroup = 'opis' | 'specyfikacja' | 'zalety';

interface KominekClientProps {
  fireplace: Fireplace;
}

export default function KominekClient({ fireplace }: KominekClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<DetailsGroup>('opis');

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === fireplace.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? fireplace.images.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
        <section className="py-6 border-b border-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-text-gray hover:text-luxury-gold transition-colors">
                Strona główna
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/kominki" className="text-text-gray hover:text-luxury-gold transition-colors">
                Nasze kominki
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-luxury-gold font-medium">{fireplace.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative aspect-w-4 aspect-h-3 bg-light-gray rounded-2xl overflow-hidden">
                  <div
                      className="w-full h-96 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1586299576722-e14abcdcfcb3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                      }}
                  />

                  {/* Image Navigation */}
                  {fireplace.images.length > 1 && (
                      <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {fireplace.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {fireplace.images.map((_, index) => (
                          <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                                  index === currentImageIndex
                                      ? 'border-luxury-gold'
                                      : 'border-gray-200 hover:border-gray-300'
                              }`}
                          >
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{
                                  backgroundImage: `url('https://images.unsplash.com/photo-1631941150945-837cb81fc7e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                                }}
                            />
                          </button>
                      ))}
                    </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                  <span className="bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {fireplace.category}
                  </span>
                    {fireplace.featured && (
                        <span className="bg-charcoal text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popularny wybór
                    </span>
                    )}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
                    {fireplace.name}
                  </h1>
                  <p className="text-xl text-text-gray leading-relaxed">
                    {fireplace.shortDescription}
                  </p>
                </div>

                {/* Price */}
                <div className="border-t border-b border-light-gray py-6">
                  <div className="flex items-center justify-between">
                    <div>
                    <span className="text-3xl font-serif font-bold text-charcoal">
                      {fireplace.price}
                    </span>
                      <p className="text-sm text-text-gray mt-1">
                        *Cena nie zawiera kosztów instalacji
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-text-gray">Sprawność:</div>
                      <div className="text-xl font-semibold text-luxury-gold">
                        {fireplace.specifications.wydajność}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-light-gray">
                    <div className="text-luxury-gold font-medium mb-1">Wymiary</div>
                    <div className="text-charcoal font-semibold">{fireplace.specifications.wymiary}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-light-gray">
                    <div className="text-luxury-gold font-medium mb-1">Moc grzewcza</div>
                    <div className="text-charcoal font-semibold">{fireplace.specifications.moc}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-light-gray">
                    <div className="text-luxury-gold font-medium mb-1">Typ spalania</div>
                    <div className="text-charcoal font-semibold">{fireplace.specifications.spalanie}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-light-gray">
                    <div className="text-luxury-gold font-medium mb-1">Instalacja</div>
                    <div className="text-charcoal font-semibold">{fireplace.specifications.instalacja}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                      href="/kontakt"
                      className="w-full bg-luxury-gold text-white py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transition-colors text-center block"
                  >
                    Zamów bezpłatną wycenę
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                        href="tel:+48123456789"
                        className="flex items-center justify-center border-2 border-luxury-gold text-luxury-gold py-3 rounded-lg font-medium hover:bg-luxury-gold hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Zadzwoń
                    </Link>
                    <Link
                        href="mailto:kontakt@ekskluzywne-kominki.pl"
                        className="flex items-center justify-center border-2 border-luxury-gold text-luxury-gold py-3 rounded-lg font-medium hover:bg-luxury-gold hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      E-mail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-300 mb-8">
              {[
                { key: 'opis', label: 'Opis produktu' },
                { key: 'specyfikacja', label: 'Specyfikacja techniczna' },
                { key: 'zalety', label: 'Zalety i korzyści' },
              ].map((tab) => (
                  <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as DetailsGroup)}
                      className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                          activeTab === tab.key
                              ? 'border-luxury-gold text-luxury-gold'
                              : 'border-transparent text-text-gray hover:text-luxury-gold hover:border-gray-300'
                      }`}
                  >
                    {tab.label}
                  </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8">
              {activeTab === 'opis' && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-text-gray">
                      {fireplace.fullDescription}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-charcoal mt-8 mb-4">
                      Szczegóły techniczne
                    </h3>
                    <ul className="space-y-2">
                      {fireplace.technicalDetails.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-luxury-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-text-gray">{detail}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
              )}

              {activeTab === 'specyfikacja' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(fireplace.specifications).map(([key, value]) => (
                        <div key={key} className="border border-light-gray rounded-lg p-4">
                          <div className="text-luxury-gold font-medium mb-2 capitalize">
                            {key === 'wymiary' && 'Wymiary'}
                            {key === 'moc' && 'Moc grzewcza'}
                            {key === 'material' && 'Materiał wykonania'}
                            {key === 'instalacja' && 'Rodzaj instalacji'}
                            {key === 'spalanie' && 'Typ spalania'}
                            {key === 'wydajność' && 'Sprawność'}
                          </div>
                          <div className="text-charcoal font-semibold">{value}</div>
                        </div>
                    ))}
                  </div>
              )}

              {activeTab === 'zalety' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                      Dlaczego warto wybrać {fireplace.name}?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {fireplace.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-8 h-8 bg-luxury-gold/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                              <svg className="w-4 h-4 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-text-gray leading-relaxed">{benefit}</span>
                          </div>
                      ))}
                    </div>
                  </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-4">
                Możesz być również zainteresowany
              </h2>
              <p className="text-lg text-text-gray">
                Inne modele z naszej ekskluzywnej kolekcji
              </p>
            </div>
            <div className="text-center">
              <Link
                  href="/kominki"
                  className="inline-flex items-center bg-luxury-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transition-colors transform hover:scale-105 duration-200"
              >
                Zobacz wszystkie modele
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
