import Link from 'next/link';
import Image from 'next/image';
import { featuredFireplaces } from '@/data/fireplaces';

const PopularModels = () => {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
            Nasze Najpopularniejsze Modele
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Przedstawiamy kolekcję naszych najbardziej cenionych kominków, 
            które zdobyły uznanie wśród najbardziej wymagających klientów.
          </p>
        </div>

        {/* Featured Fireplaces Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredFireplaces.map((fireplace) => (
            <div key={fireplace.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-64 bg-light-gray overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1603039531759-1a1bbe4f9f94?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {fireplace.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                  {fireplace.name}
                </h3>
                <p className="text-text-gray mb-4 leading-relaxed">
                  {fireplace.shortDescription}
                </p>
                
                {/* Specifications Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-luxury-gold font-medium">Wymiary:</span>
                    <p className="text-text-gray">{fireplace.specifications.wymiary}</p>
                  </div>
                  <div>
                    <span className="text-luxury-gold font-medium">Moc:</span>
                    <p className="text-text-gray">{fireplace.specifications.moc}</p>
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
                    className="bg-luxury-gold text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-gold transition-colors group-hover:scale-105 transform duration-200"
                  >
                    Zobacz szczegóły
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to see all models */}
        <div className="text-center">
          <Link
            href="/kominki"
            className="inline-flex items-center bg-charcoal text-warm-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-text-gray transition-colors transform hover:scale-105 duration-200"
          >
            Zobacz wszystkie modele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularModels;
