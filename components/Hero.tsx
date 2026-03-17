import React from 'react';
import { Home, Wifi, ShieldCheck, Maximize, ArrowRight, Award } from 'lucide-react';
import imgbg from "../assets/1.jpg";

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-20 bg-gray-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none" />

      {/* Main Hero Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wide uppercase mb-2">
            Nowa Inwestycja w Radzyminie
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Zielona Przystań <br />
            <span className="text-primary-600">Twój Nowy Dom</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Nowoczesne osiedle domów w zabudowie szeregowej, łączące bliskość natury z komfortem miejskiego życia. Odkryj standard, na jaki zasługujesz.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#mieszkania" 
              onClick={(e) => handleScroll(e, '#mieszkania')}
              className="px-8 py-3 bg-primary-600 text-white font-bold rounded-lg shadow-lg hover:bg-primary-700 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Zobacz mieszkania
            </a>
            <a 
              href="#kontakt" 
              onClick={(e) => handleScroll(e, '#kontakt')}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
            >
              Umów spotkanie
            </a>
          </div>
        </div>

        {/* Right Slider / Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczNFEQUX8YsFbxBBf72ASpKLvou2Y88B1tcGmWiMmiSNucAEpBuh0Z5uIfQ-RSruZCMD9XPCoiNQ7aLi2WC5hD0iOLAAVf-FSRTNEKk1JJohw-aOTXkVpnNR9Qu5L3VzJYwBgjrFhUss6er9NaVEprkp=w1920-h1080-s-no-gm" 
            alt="Wizualizacja osiedla" 
            className="w-full h-full object-cover"
          />
          {/* Badge on Image */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-lg shadow-md max-w-xs">
             <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Status budowy</p>
             <p className="font-bold text-lg text-primary-600">ZAKOŃCZONA</p>
          </div>
        </div>
      </div>

      {/* ========== SEKCJA: INNE INWESTYCJE ========== */}
      <div id="inne-inwestycje" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 scroll-mt-24">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Obraz w tle - aspect-ratio zamiast fixed height żeby nie ucinało */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/7]">
            <img
              src={imgbg}
              alt="Nasze inwestycje"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-emerald-700/20" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-12 lg:px-16 max-w-2xl py-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
                <span className="text-emerald-100 text-xs sm:text-sm font-semibold tracking-wide">Sprawdzony deweloper</span>
              </div>
              
              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Poznaj nasze<br />
                <span className="text-emerald-300">inne inwestycje</span>
              </h3>
              
              {/* Description */}
              <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
                Zaufaj doświadczeniu. Zobacz zrealizowane projekty i przekonaj się o jakości naszych realizacji.
              </p>
              
              {/* CTA Button */}
              <a
                href="https://brylantowa-nieruchomosci.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-emerald-700 font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg shadow-xl hover:bg-emerald-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group/btn"
              >
                Zobacz nasz projekt
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Decorative elements - hidden on mobile */}
          <div className="hidden sm:block absolute top-6 right-6 w-24 h-24 border-2 border-white/10 rounded-full" />
          <div className="hidden sm:block absolute bottom-10 right-20 w-16 h-16 border-2 border-white/10 rounded-full" />
        </div>
      </div>
    
      {/* Features Bar */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <FeatureBox icon={<Home className="text-primary-600" />} title="Media miejskie" desc="Pełne uzbrojenie terenu" />
            <FeatureBox icon={<ShieldCheck className="text-primary-600" />} title="Prywatność" desc="Własna brama i furtka" />
            <FeatureBox icon={<Maximize className="text-primary-600" />} title="Duże podjazdy" desc="Powierzchnia ok. 60 m²" />
            <FeatureBox icon={<Home className="text-primary-600" />} title="Ogródki" desc="Nawet do 150m" />
            <FeatureBox icon={<Wifi className="text-primary-600" />} title="Technologia" desc="Światłowód" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-2">
    <div className="mb-3 p-3 bg-primary-50 rounded-full text-primary-700">{icon}</div>
    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{desc}</p>
  </div>
);