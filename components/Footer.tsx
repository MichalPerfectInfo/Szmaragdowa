import React from 'react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Developer */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white inline-block">Deweloper</h4>
            <div className="text-gray-400 text-sm space-y-3">
              <p className="font-bold text-white text-lg mb-2">Szmaragdowa Nieruchomości Sp. z o.o.</p>
              <p>ul. Starej Baśni 6, Rybienko Nowe</p>
              <p>07-200 Wyszków</p>
              <div className="pt-4 space-y-1 text-xs opacity-60">
                <p>NIP: 7622014168</p>
                <p>KRS: 0000946595</p>
                <p>REGON: 521012758</p>
              </div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white inline-block">Menu</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#lokalizacja" onClick={(e) => handleScroll(e, '#lokalizacja')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Lokalizacja</a></li>
              <li><a href="#o-inwestycji" onClick={(e) => handleScroll(e, '#o-inwestycji')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">O inwestycji</a></li>
              <li><a href="#mieszkania" onClick={(e) => handleScroll(e, '#mieszkania')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Mieszkania</a></li>
              <li><a href="#nawigator" onClick={(e) => handleScroll(e, '#nawigator')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Nawigator</a></li>
              <li><a href="#o-inwestorze" onClick={(e) => handleScroll(e, '#o-inwestorze')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">O inwestorze</a></li>
              <li><a href="#kontakt" onClick={(e) => handleScroll(e, '#kontakt')} className="hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-block">Kontakt</a></li>
            </ul>
          </div>

          {/* Column 3: Disclaimer */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white inline-block">Informacje</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Zdjęcia, opisy oraz wizualizacje zamieszczone na stronie mają charakter poglądowy i nie stanowią oferty w rozumieniu Kodeksu cywilnego.
            </p>
          </div>

          {/* Column 4: Contact/CTA */}
          <div>
             <h4 className="text-lg font-bold mb-6 text-white inline-block">Umów spotkanie</h4>
             <div className="text-gray-400 text-sm space-y-4">
               <p>Biuro Sprzedaży czynne:</p>
               <p>Pn-Pt: 9:00 - 17:00</p>
               <p>
                 <a href="mailto:daniel.swiercz@onet.pl" className="hover:text-white block mb-1 underline decoration-primary-500 underline-offset-4">daniel.swiercz@onet.pl</a>
                 <a href="tel:+48519452981" className="hover:text-white font-bold block text-lg mt-2 text-white">+48 519 452 981</a>
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} DS DEV. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 md:mt-0">Realizacja: <a href="#" className="hover:text-white transition-colors">Agencja Interaktywna</a></p>
        </div>
      </div>
    </footer>
  );
};