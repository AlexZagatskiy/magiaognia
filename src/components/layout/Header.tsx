'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Strona główna', href: '/' },
    { name: 'Nasze kominki', href: '/kominki' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-warm-white shadow-sm border-b border-light-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-serif text-xl font-bold">🔥</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-charcoal">
                  Ekskluzywne Kominki
                </h1>
                <p className="text-xs text-text-gray">Designerskie rozwiązania</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-luxury-gold border-b-2 border-luxury-gold'
                    : 'text-text-gray hover:text-luxury-gold hover:border-b-2 hover:border-luxury-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/kontakt"
              className="bg-luxury-gold text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-accent-gold transition-colors"
            >
              Bezpłatna wycena
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-gray hover:text-luxury-gold p-2"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-gray">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-luxury-gold bg-light-gray rounded-lg'
                      : 'text-text-gray hover:text-luxury-gold hover:bg-light-gray rounded-lg'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-luxury-gold text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-accent-gold transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Bezpłatna wycena
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;