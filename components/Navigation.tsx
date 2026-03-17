import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Inne inwestycje', href: "#inne-inwestycje"},
  { name: 'Lokalizacja', href: '#lokalizacja' },
  { name: 'O inwestycji', href: '#o-inwestycji' },
  { name: 'Cennik', href: '#mieszkania' },
  { name: 'Nawigator', href: '#nawigator' },
  { name: 'O inwestorze', href: '#o-inwestorze' },
  { name: 'Kontakt', href: '#kontakt' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 cursor-pointer group">
              <span className="font-bold text-2xl tracking-tight text-white bg-primary-600 rounded-lg p-1">Szmaragdowa</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+48519452981"
              className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-all hover:shadow-md font-semibold text-sm"
            >
              <Phone size={16} />
              <span>+48 519 452 981</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+48519452981"
              className="block w-full text-center mt-6 px-5 py-3 rounded-lg bg-primary-600 text-white font-bold shadow-md"
            >
              Zadzwoń: +48 519 452 981
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};