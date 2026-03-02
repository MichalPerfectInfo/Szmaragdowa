import React from 'react';

export const Polityka: React.FC = () => {
  return (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-left">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900">POLITYKA PRYWATNOŚCI I PLIKÓW COOKIES</h3>
        <p className="font-semibold text-gray-700">Serwisu: szmaragdowa-nieruchomosci.pl</p>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 text-base mb-1">1. Informacje ogólne</h4>
        <p>
          Administratorem danych osobowych jest Daniel Świercz, prowadzący działalność pod firmą SZMARAGDOWA - NIERUCHOMOŚCI SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ z siedzibą w Rybienku Nowym (07-200), ul. Starej Baśni 6, NIP: 7622014168 (dalej jako: „Administrator”).
        </p>
        <p className="mt-2">
          Kontakt z Administratorem jest możliwy pod adresem e-mail:{' '}
          <a href="mailto:daniel.swiercz@onet.pl" className="text-primary-600 hover:underline font-medium">
            daniel.swiercz@onet.pl
          </a>.
        </p>
        <p className="mt-2">
          Administrator przywiązuje dużą wagę do ochrony prywatności użytkowników i przetwarza dane zgodnie z przepisami RODO.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 text-base mb-1 mt-6">2. Zakres i cel przetwarzania danych</h4>
        <p className="mb-2">Strona ma charakter informacyjny. Przetwarzanie danych osobowych ograniczone jest do niezbędnego minimum:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Kontakt e-mailowy/telefoniczny:</strong> Jeśli dobrowolnie skontaktujesz się z Administratorem, przetwarzamy Twoje dane (imię, nazwisko, adres e-mail, nr telefonu) wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie (Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes).
          </li>
          <li>
            <strong>Logi serwera:</strong> Korzystanie ze strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest strona. Logi obejmują m.in. Twój adres IP, datę i czas serwera, informacje o przeglądarce internetowej. Dane te nie są wykorzystywane do identyfikacji konkretnych osób, a jedynie do celów administracji serwerem.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 text-base mb-1 mt-6">3. Prawa użytkownika</h4>
        <p className="mb-2">Masz prawo do:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Wglądu w swoje dane oraz ich poprawiania.</li>
          <li>Żądania usunięcia danych („prawo do bycia zapomnianym”).</li>
          <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO), jeśli uznasz, że przetwarzanie narusza prawo.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-gray-800 text-base mb-1 mt-6">4. POLITYKA PLIKÓW COOKIES</h4>
        <p>
          Serwis brylantowa-nieruchomosci.pl ogranicza wykorzystanie plików cookies wyłącznie do plików niezbędnych (technicznych), które są wymagane do prawidłowego wyświetlania i działania strony internetowej.
        </p>
        <p className="mt-2">
          Strona nie stosuje plików cookies o charakterze analitycznym, śledzącym ani marketingowym.
        </p>
      </div>
    </div>
  );
};