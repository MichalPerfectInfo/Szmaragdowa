import React from 'react';
import { Download, PhoneCall, Calendar, FileText, Briefcase, Key, Home } from 'lucide-react';

export const AdditionalInfo: React.FC = () => (
  <section className="py-20 bg-gray-50 border-t border-gray-200 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacje dodatkowe</h2>
      <a 
        href="#" 
        onClick={(e) => e.preventDefault()} 
        className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-semibold shadow-sm hover:shadow-md hover:border-primary-500 transition-all inline-flex items-center justify-center gap-2 mx-auto cursor-pointer"
      >
        <Download size={18} className="text-primary-600" /> Pobierz prospekt informacyjny
      </a>
    </div>
  </section>
);

export const ProcessSection: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Help Block */}
        <div className="bg-primary-700 rounded-2xl p-10 md:p-12 text-center mb-20 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Jak jeszcze możemy Ci pomóc?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Współpracujemy z doświadczonymi ekspertami kredytowymi, którzy bezpłatnie pomogą Ci sprawdzić zdolność kredytową i wybrać najlepszą ofertę finansowania.
          </p>
          <a 
            href="#kontakt"
            onClick={(e) => handleScroll(e, '#kontakt')} 
            className="bg-white text-primary-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block cursor-pointer shadow-md relative z-10"
          >
            Umów bezpłatną konsultację
          </a>
        </div>

        {/* Timeline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak wygląda proces zakupu?</h2>
          <p className="text-gray-600 text-lg">Przeprowadzimy Cię przez każdy etap, zapewniając bezpieczeństwo.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line for mobile/desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            <TimelineItem 
              step={1} 
              icon={<PhoneCall />} 
              title="Rozmowa telefoniczna" 
              desc="Wstępne ustalenie potrzeb i prezentacja oferty." 
              side="left" 
            />
            <TimelineItem 
              step={2} 
              icon={<Calendar />} 
              title="Spotkanie na budowie" 
              desc="Oględziny terenu, układu pomieszczeń i okolicy." 
              side="right" 
            />
            <TimelineItem 
              step={3} 
              icon={<FileText />} 
              title="Umowa rezerwacyjna" 
              desc="Rezerwacja wybranego lokalu i ustalenie warunków." 
              side="left" 
            />
            <TimelineItem 
              step={4} 
              icon={<Briefcase />} 
              title="Doradca kredytowy" 
              desc="Pomoc w uzyskaniu finansowania (opcjonalnie)." 
              side="right" 
            />
            <TimelineItem 
              step={5} 
              icon={<FileText />} 
              title="Umowa deweloperska" 
              desc="Podpisanie aktu notarialnego w kancelarii." 
              side="left" 
            />
            <TimelineItem 
              step={6} 
              icon={<Home />} 
              title="Przeniesienie własności" 
              desc="Finalny akt notarialny przenoszący własność." 
              side="right" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ step, icon, title, desc, side }: { step: number, icon: React.ReactNode, title: string, desc: string, side: 'left' | 'right' }) => {
  const isLeft = side === 'left';
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between relative`}>
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right order-2 md:order-1' : 'md:text-left order-2 md:order-3'}`}>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
             <span className="md:hidden text-primary-600 font-bold mr-2">#{step}</span>
             <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>

      {/* Center Icon/Number */}
      <div className="order-1 md:order-2 z-10 my-6 md:my-0">
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
          {step}
        </div>
      </div>

      {/* Empty Space for alignment */}
      <div className={`w-full md:w-5/12 order-3 ${isLeft ? 'md:order-3' : 'md:order-1'}`}></div>
    </div>
  );
};