'use client';

import { useState } from 'react';
import Link from 'next/link';
import { fireplaces, type Fireplace } from '@/data/fireplaces';

export default function KominkiPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('wszystkie');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    { value: 'wszystkie', label: 'Wszystkie kategorie' },
    { value: 'nowoczesny', label: 'Nowoczesne' },
    { value: 'klasyczny', label: 'Klasyczne' },
    { value: 'rustykalny', label: 'Rustykalne' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Nazwa' },
    { value: 'price', label: 'Cena' },
    { value: 'category', label: 'Kategoria' },
  ];

  const filteredFireplaces = fireplaces.filter(fireplace => {
    if (selectedCategory === 'wszystkie') return true;
    return fireplace.category === selectedCategory;
  });

  const sortedFireplaces = [...filteredFireplaces].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'price':
        return a.name.localeCompare(b.name); // Simplified sorting by name for demo
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charcoal to-text-gray text-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Nasze Ekskluzywne Kominki
            </h1>
            <p className="text-xl sm:text-2xl text-warm-white/90 max-w-3xl mx-auto">
              Odkryj naszą pełną kolekcję designerskich kominków, 
              stworzonych z myślą o najwyższej jakości i elegancji.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <label className="text-text-gray font-medium">Kategoria:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-text-gray focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <label className="text-text-gray font-medium">Sortuj według:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-text-gray focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-text-gray">
              Znalezionych: <span className="font-semibold">{sortedFireplaces.length}</span> kominków
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedFireplaces.map((fireplace) => (
              <div key={fireplace.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                {/* Image */}
                <div className="relative h-64 bg-light-gray overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1586299576722-e14abcdcfcb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {fireplace.category}
                    </span>
                  </div>
                  {fireplace.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-charcoal text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popularny
                      </span>
                    </div>
                  )}\n                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2 group-hover:text-luxury-gold transition-colors">
                    {fireplace.name}
                  </h3>
                  <p className="text-text-gray mb-4 leading-relaxed line-clamp-3">
                    {fireplace.shortDescription}
                  </p>
                  
                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-luxury-gold font-medium">Wymiary:</span>
                      <p className="text-text-gray">{fireplace.specifications.wymiary}</p>
                    </div>
                    <div>
                      <span className="text-luxury-gold font-medium">Moc:</span>
                      <p className="text-text-gray">{fireplace.specifications.moc}</p>
                    </div>
                    <div>
                      <span className="text-luxury-gold font-medium">Materiał:</span>
                      <p className="text-text-gray truncate" title={fireplace.specifications.material}>
                        {fireplace.specifications.material}
                      </p>
                    </div>
                    <div>
                      <span className="text-luxury-gold font-medium">Sprawność:</span>
                      <p className="text-text-gray">{fireplace.specifications.wydajność}</p>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-serif font-bold text-charcoal">
                        {fireplace.price}
                      </span>
                    </div>
                    <Link
                      href={`/kominek/${fireplace.id}`}
                      className="bg-luxury-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-gold transition-all transform group-hover:scale-105 duration-200"
                    >
                      Zobacz szczegóły
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedFireplaces.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                Brak wyników
              </h3>
              <p className="text-text-gray mb-6">
                Nie znaleźliśmy kominków spełniających wybrane kryteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('wszystkie');
                  setSortBy('name');
                }}
                className="bg-luxury-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-gold transition-colors"
              >
                Wyczyść filtry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Nie Znalazłeś Idealnego Kominka?
          </h2>
          <p className="text-xl text-warm-white/90 mb-8 max-w-2xl mx-auto">
            Tworzymy również indywidualne projekty dostosowane do Twoich potrzeb i wymagań.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-luxury-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-gold transition-colors transform hover:scale-105 duration-200"
            >
              Zamów projekt indywidualny
            </Link>
            <Link
              href="tel:+48123456789"
              className="border-2 border-warm-white text-warm-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-warm-white hover:text-charcoal transition-all duration-200"
            >
              Zadzwoń: +48 123 456 789
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
