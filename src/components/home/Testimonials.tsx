'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anna Kowalska',
    location: 'Warszawa',
    content: 'Kominek Milano Lux całkowicie zmienił atmosferę naszego salonu. Jakość wykonania jest niezwykła, a obsługa firmy była na najwyższym poziomie. Polecamy serdecznie!',
    rating: 5,
    fireplace: 'Milano Lux',
    avatar: 'AK'
  },
  {
    id: 2,
    name: 'Tomasz Wiśniewski',
    location: 'Kraków',
    content: 'Krakowski Klasyk to prawdziwe dzieło sztuki. Każdy szczegół jest dopracowany do perfekcji. To inwestycja na całe życie. Bardzo dziękujemy za profesjonalne podejście.',
    rating: 5,
    fireplace: 'Krakowski Klasyk',
    avatar: 'TW'
  },
  {
    id: 3,
    name: 'Magdalena Zielińska',
    location: 'Gdańsk',
    content: 'Nordic Premium idealnie wpisał się w skandynawski charakter naszego domu. Ciepło, jakie daje, jest niesamowite. Wykonanie bez zarzutu, montaż bardzo profesjonalny.',
    rating: 5,
    fireplace: 'Nordic Premium',
    avatar: 'MZ'
  },
  {
    id: 4,
    name: 'Robert Nowak',
    location: 'Wrocław',
    content: 'Royal Palace to szczyt elegancji. Marmur Carrara wygląda jeszcze piękniej na żywo. Kominek stał się centralnym punktem naszego domu. Jakość materiałów fenomenalna.',
    rating: 5,
    fireplace: 'Royal Palace',
    avatar: 'RN'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-4">
            Opinie Naszych Klientów
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Nic nie cieszy nas bardziej niż zadowolenie klientów. Przeczytaj, 
            co mówią o naszych kominkach właściciele luksusowych domów.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-luxury-gold hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-luxury-gold hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-luxury-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl text-text-gray mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-charcoal">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-text-gray">
                  {testimonials[currentIndex].location} • Model: {testimonials[currentIndex].fireplace}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-luxury-gold scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">500+</div>
            <div className="text-text-gray">Zadowolonych Klientów</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">15+</div>
            <div className="text-text-gray">Lat Doświadczenia</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">98%</div>
            <div className="text-text-gray">Pozytywnych Opinii</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;