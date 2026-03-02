import React from 'react';

export const ApartmentList: React.FC = () => {
  return (
    <section id="mieszkania" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wybierz wygodne mieszkanie</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Znajdź układ idealnie dopasowany do Twoich potrzeb w naszej interaktywnej tabeli.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-6xl mx-auto">
          <iframe
            src="https://portal-raportujeceny-1wra.bolt.host/iframe/cd1fe991-1ccd-4938-a91b-eb7eb47d7e02/cff7149b-ff1a-4aa2-8e95-cd833ef4beb1"
            title="Lista dostępnych mieszkań"
            className="w-full h-[80vh] min-h-[700px] border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
