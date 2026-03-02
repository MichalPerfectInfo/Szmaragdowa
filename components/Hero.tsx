import React from 'react';
import { Home, Wifi, ShieldCheck, Maximize } from 'lucide-react';

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

      {/* Features Bar */}
      <div className="relative z-10 -mt-10 mb-20 px-4">
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