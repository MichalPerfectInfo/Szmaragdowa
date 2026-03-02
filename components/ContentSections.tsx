import React from 'react';
import { MapPin, Car, Train, TreePine, ShoppingCart, Layers, Shield, Droplets, Grid, Flame, Wind, VolumeX, Building2, School, Waves, Bus } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import { InteractiveEstateMap } from './InteractiveEstateMap';

export const VisualNavigator: React.FC = () => (
  <section id="nawigator" className="py-20 bg-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nawigator Osiedla</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Zobacz statusy mieszkań na interaktywnej wizualizacji. Wybierz swój wymarzony dom.
        </p>
      </div>
      
      {/* Kontener dla interaktywnej mapy osiedla */}
      <div className="max-w-6xl mx-auto bg-white p-2 rounded-2xl shadow-lg">
        <InteractiveEstateMap />
      </div>
    </div>
  </section>
);

export const LocationSection: React.FC = () => (
  <section id="lokalizacja" className="py-20 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-4">Lokalizacja</div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Tylko 30 minut <br/>od serca Warszawy</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Inwestycja zlokalizowana jest w cichej, zielonej okolicy w centrum Radzymina koło Warszawy. 
          To idealny kompromis między miejskim zgiełkiem a podmiejskim spokojem. 
          Bliskość trasy S8 zapewnia ekspresowy dojazd do stolicy.
        </p>
        <div className="space-y-4">
          <LocationCard icon={<Car size={20} />} title="Centrum Warszawy (33 km)" time="30 minut samochodem" />
          <LocationCard icon={<Building2 size={20} />} title="Przedszkole i Żłobek Moje Montessori (550 m)" time="8 min spacerem" />
          <LocationCard icon={<School size={20} />} title="Szkoła Podstawowa Nr 2 (900 m)" time="12 minut spacerem" />
          <LocationCard icon={<Waves size={20} />} title="Radzymiński Ośrodek Kultury i Sportu (1.7 km)" time="4 minuty samochodem" />
          <LocationCard icon={<Bus size={20} />} title="Przystanek szybkiej linii R9 (1.1 km)" time="12 minut spacerem" />
        </div>
      </div>
      
      {/* Interactive Map Component Container */}
      <div className="h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
         <InteractiveMap />
      </div>
    </div>
  </section>
);

const LocationCard = ({ icon, title, time }: { icon: React.ReactNode, title: string, time: string }) => (
  <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100">
    <div className="text-primary-600 mr-4 p-2 bg-white rounded-lg shadow-sm">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

export const InfrastructureSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cała infrastruktura na wyciągnięcie ręki</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nie musisz rezygnować z wygód miasta. W pobliżu inwestycji znajdziesz wszystko, co niezbędne do komfortowego życia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfraCard icon={<MapPin className="w-8 h-8 text-primary-600" />} title="Centrum miasta" desc="5 min spacerem" />
        <InfraCard icon={<TreePine className="w-8 h-8 text-primary-600" />} title="Park i place zabaw" desc="5 min spacerem" />
        <InfraCard icon={<ShoppingCart className="w-8 h-8 text-primary-600" />} title="Centrum handlowe" desc="8 min samochodem" />
      </div>
    </div>
  </section>
);

const InfraCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-primary-50 rounded-xl">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-primary-700 font-medium bg-primary-50 inline-block px-3 py-1 rounded-full text-sm">{desc}</p>
  </div>
);

export const StandardsSection: React.FC = () => (
  <section id="o-inwestycji" className="scroll-mt-20">
    {/* Section 1 */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
           <img src="https://lh3.googleusercontent.com/pw/AP1GczOIMjJhVf-ZJ5iwV9TXexUAqS1nLCGM2QI84-qhb8PoGr7t4z80-Pk2WDryavkAgMee2gvHeO-GtV_YpqOkU44xS8y_8DtAELITbz3ks8eTzFjb1FG1sYQdq8g-wxLDAZoe6JLgKUKuhzQql7I4wBE=w958-h539-s-no-gm?authuser=0" alt="Osiedle" className="rounded-2xl shadow-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Bezczynszowe mieszkania na kameralnym osiedlu</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Zapewniamy pełną prywatność na terenie zamkniętym. Każdy budynek został zaprojektowany z myślą o kameralności.
            Brak czynszu do wspólnoty to realna oszczędność w domowym budżecie. Płacisz tylko za to, co zużyjesz.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Shield size={20} />} text="Teren zamknięty i ogrodzony" />
             <StandardListItem icon={<Shield size={20} />} text="Kameralna zabudowa" />
             <StandardListItem icon={<Shield size={20} />} text="Ścieżka rowerowa" />
          </ul>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nowoczesna architektura oraz własna brama z furtką</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Stawiamy na nowoczesny design i najwyższej klasy materiały. Elewacje wykończone tynkiem silikonowym i elementami drewnopodobnymi.
            Każdy lokal posiada przypisane dwa wygodne miejsca postojowe bezpośrednio przed budynkiem.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<Car size={20} />} text="2 miejsca postojowe w cenie" />
             <StandardListItem icon={<Layers size={20} />} text="Materiały wysokiej jakości" />
          </ul>
        </div>
        <div>
           <img src="https://lh3.googleusercontent.com/pw/AP1GczPFdfY6aDz_LLcwjGbN9xDrGjLEU22U28SRPs8t4SJgH9Z-5bdavwvWibjfJ9K3HDIwmFRxpvXruE-n0CEeoU5VHYv4gv8sLPV6QBS-8mhBJXC_e4VMdTUGlowVJ8Kks0iaaKepE0gsyx_XzY5dAJs=w958-h539-s-no-gm?authuser=0" alt="Architektura" className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
           <img src="https://lh3.googleusercontent.com/pw/AP1GczPIlKVkC3fUAUIRe-op6L7ESWhgBr-0v2SY6fyUZUv8Xi5Si0vmXwL2-sDtz46ChbwQMq8msllr_3zPVRrCvPwCxTq5drRSFLH919-9PFp89_O8Bkt-kv58fGHW-dJi5NutBrELF5_bmShlz5e6-0E=w958-h539-s-no-gm?authuser=0" alt="Ogród" className="rounded-2xl shadow-lg" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-12 h-1 bg-primary-600 mb-6 rounded-full"></div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Prywatny ogródek do każdego mieszkania</h3>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Niezależnie od wybranego piętra, zyskujesz przestrzeń na świeżym powietrzu. Mieszkania na parterze posiadają bezpośrednie wyjście 
            na ogród z salonu, idealne na grilla czy zabawę dla dzieci.
          </p>
          <ul className="space-y-4">
             <StandardListItem icon={<TreePine size={20} />} text="Ogródki do 150m²" />
             <StandardListItem icon={<TreePine size={20} />} text="Przestronne balkony na piętrze" />
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const StandardListItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
    <span className="mr-3 text-primary-600 bg-primary-50 p-2 rounded-md">{icon}</span>
    <span className="font-medium">{text}</span>
  </li>
);

export const TechSpecs: React.FC = () => (
  <section className="py-20 bg-gray-900 text-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Specyfikacja Techniczna</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechItem icon={<Flame />} text="Dobra lokalizacja" />
        <TechItem icon={<Wind />} text="Energooszczędne okna 3-szybowe" />
        <TechItem icon={<Droplets />} text="Nowoczesny piec gazowy kondensacyjny" />
        <TechItem icon={<VolumeX />} text="Ściany wykonane z wysokiej jakości materiałów akustycznych" />
        <TechItem icon={<Layers />} text="Chodnik" />
        <TechItem icon={<Grid />} text="Media miejskie (woda, kanalizacja, gaz)" />
        <TechItem icon={<Shield />} text="Własna brama i furtka dla każdego" />
        <TechItem icon={<Car />} text="Podjazdy o pow. ok 60 m²" />
        <TechItem icon={<Layers />} text="Internet Światłowodowy" />
      </div>
    </div>
  </section>
);

const TechItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
    <div className="flex-shrink-0 text-primary-400 p-2 bg-gray-700 rounded-lg">{icon}</div>
    <span className="font-medium text-gray-100">{text}</span>
  </div>
);

export const LayoutInfo: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Szeroki wybór funkcjonalnych wnętrz</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nasze projekty są elastyczne. Oferujemy mieszkania o zróżnicowanych metrażach, które możesz dostosować do swoich potrzeb.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mieszkania Parterowe</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Idealne dla rodzin z małymi dziećmi lub osób starszych. Brak schodów i bezpośrednie wyjście do ogrodu to atuty nie do przecenienia.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> 2-3 sypialnie</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> Przestronny salon z aneksem</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> Bezpośrednie wyjście na taras</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mieszkania na Piętrze</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Większa powierzchnia użytkowa i dodatkowa przestrzeń na poddaszu. Możliwość aranżacji dwupoziomowego apartamentu.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> Większy metraż całkowity</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> Duży balkon + opcja ogrodu</li>
             <li className="flex items-center gap-3 text-gray-700"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span> Wygodne schody na strych</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);