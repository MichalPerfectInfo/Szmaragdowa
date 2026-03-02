import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
import imgbg from "../assets/1.jpg";
import { Polityka }  from "../data/polityka";

export const AboutInvestor: React.FC = () => (
  <section id="o-inwestorze" className="py-20 bg-gray-50 scroll-mt-20">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Inwestycje budowane na solidnych fundamentach</h2>
    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
      <p>
        Szmaragdowa Niercuhomości to firma deweloperska z ogromnym doświadczeniem w realizacji kameralnych osiedli mieszkaniowych. 
        Naszą misją jest tworzenie miejsc, które nie są tylko budynkami, ale prawdziwymi domami.
      </p>
      <p>
        Każda nasza inwestycja poprzedzona jest szczegółowymi badaniami gruntu oraz wnikliwą analizą lokalizacji. 
        Wybieramy miejsca, które gwarantują wzrost wartości nieruchomości w czasie oraz komfort życia mieszkańców.
      </p>
      <p>
        Współpracujemy wyłącznie ze sprawdzonymi wykonawcami i dostawcami materiałów budowlanych najwyższej jakości. 
        Jesteśmy dumni z terminowości naszych realizacji i transparentności procesu sprzedaży.
      </p>
    </div>

    {/* Karta z obrazem w tle i przyciskiem */}
    <div className="mt-12 relative rounded-xl overflow-hidden shadow-lg h-96 sm:h-[28rem]">
  {/* Obraz w tle dopasowany do całej karty */}
  <img
    src={imgbg}
    alt="Nasze inwestycje"
    className="absolute inset-0 w-full h-full object-cover brightness-75 blur-sm"
  />
  {/* Tekst i przycisk */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Poznaj nasze inne inwestycje</h3>
    <a
      href="https://brylantowa-nieruchomosci.pl/"
      className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors"
    >
      Zobacz więcej
    </a>
  </div>
</div>
  </div>
</section>
);

export const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setFormStatus("submitting");
  const form = event.currentTarget;

  try {
    // Send form via EmailJS using the imported module
    await emailjs.sendForm(
      "service_yr06mln",
      "template_2jnjybp",
      form,
      { publicKey: "nF9ENLBFiedvKYVlF" } // Correct format for public key in v4
    );

    setFormStatus("success");
    form.reset();

  } catch (error) {
    console.error("EmailJS sending error:", error);
    setFormStatus("error");
  }
};

  return (
    <section id="kontakt" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skontaktuj się!</h2>
              <p className="text-gray-600 text-lg">Masz pytania? Chętnie na nie odpowiemy. Umów się na spotkanie.</p>
            </div>

            <a 
              href="#formularz"
              onClick={(e) => handleScroll(e, '#formularz')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg w-full md:w-auto font-bold shadow-lg hover:bg-primary-700 transition-all text-lg text-center inline-block cursor-pointer"
            >
              Umów spotkanie
            </a>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary-50 rounded-lg text-primary-700"><MapPin /></div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Miejsce inwestycji</h4>
                   <p className="text-gray-600">ul. Sybiraków 10<br/>05-250 Radzymin</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary-50 rounded-lg text-primary-700"><Mail /></div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                   <a href="mailto:daniel.swiercz@onet.pl" className="text-primary-600 hover:text-primary-700 hover:underline transition-colors">daniel.swiercz@onet.pl</a>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary-50 rounded-lg text-primary-700"><Phone /></div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-lg mb-1">Telefon</h4>
                   <a href="tel:+48519452981" className="block text-primary-600 hover:text-primary-700 hover:underline transition-colors">+48 519 452 981</a>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Map & Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" id="formularz">
            {/* Map Placeholder */}
            <div className="w-full h-56 bg-gray-100 rounded-xl mb-8 relative overflow-hidden flex items-center justify-center group">
               <img src="https://lh3.googleusercontent.com/pw/AP1GczPXEzn7YW05Lnap5GAIH3q4bpSJd3eBf_IC31_DYghyRpvD0S9Rd6FObkl1D-uCL9CJPxZPhavzRHVxve4oz8g5aqF1ozGoMf_E4mnG0U-PoT1BbzSspTBWKNWSV-xTLT7qlMozeD3Hz0wXgR7jRxeo=w1010-h669-s-no-gm?authuser=1" alt="Mapa" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-opacity group-hover:opacity-90" />
               <div className="relative z-10 flex flex-col gap-3">
                  <a 
                    href="https://maps.app.goo.gl/MpkHZcT6qQxcMKfz6" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-4 py-2 rounded shadow-md hover:shadow-lg transition-all text-gray-900 font-semibold text-sm"
                  >
                    Wskazówki dojazdu
                  </a>
               </div>
            </div>

            {/* Form */}
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center animate-fade-in-up">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dziękujemy za wiadomość!</h3>
                <p className="text-gray-600">Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-primary-600 font-bold hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Imię i nazwisko *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="user_name"
                      required 
                      className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Telefon *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required 
                      className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                      placeholder="+48..."
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">Adres e-mail *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="user_email"
                    required 
                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" 
                    placeholder="jan@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="message">Treść wiadomości</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="Dzień dobry, jestem zainteresowany mieszkaniem..."
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                  <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <button type="button" onClick={() => setIsModalOpen(true)} className="underline cursor-pointer">polityką prywatności</button>.
                  </label>
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm border border-red-100">
                    <AlertCircle size={16} />
                    <span>Wystąpił błąd. Spróbuj ponownie później lub zadzwoń do nas.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-all hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Wysyłanie...
                    </>
                  ) : (
                    "Wyślij wiadomość"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Modal Polityki Prywatności */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Główne okno modala z maksymalną wysokością */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Kontener z przewijanym tekstem (scroll) */}
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              {/* TUTAJ WSTAWIAMY NASZ NOWY KOMPONENT */}
              <Polityka />
            </div>

            {/* Przycisk Zamknij - zawsze na dole */}
            <div className="flex justify-end mt-6 pt-4 border-t border-gray-100 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors font-bold"
              >
                Zamknij
              </button>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};