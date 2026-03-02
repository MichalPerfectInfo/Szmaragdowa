import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Apartment } from '../types';

interface ImageModalProps {
  apartment: Apartment;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ apartment, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const images = apartment.imageUrls || [];

  // Reset states when apartment changes or index changes
  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
  }, [apartment, currentIndex]);

  // Reset index when apartment changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [apartment]);

  if (images.length === 0) return null;
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const hasMultipleImages = images.length > 1;
  const currentImageUrl = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-4 md:p-6 relative w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Rzut mieszkania {apartment.number}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-900 transition-colors p-2 -mr-2 rounded-full"
            aria-label="Zamknij"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-gray-50 rounded-lg min-h-[300px]">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-500 z-10">
              <Loader2 size={48} className="animate-spin text-primary-600" />
              <p className="font-medium">Ładowanie rzutu...</p>
            </div>
          )}

          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-center p-8 z-10">
              <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex justify-center mb-4">
                  <AlertTriangle size={48} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Błąd ładowania obrazu</h4>
                <p className="text-sm text-gray-700">Nie udało się załadować rzutu. Spróbuj ponownie lub skontaktuj się z nami.</p>
              </div>
            </div>
          )}
          
          <img 
            key={currentIndex} 
            src={currentImageUrl} 
            alt={`Rzut ${currentIndex + 1} z ${images.length} - mieszkanie ${apartment.number}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ease-in-out ${isLoading || imageError ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setImageError(true);
            }}
          />

          {hasMultipleImages && !imageError && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white rounded-full shadow-md transition-all text-gray-800 hover:scale-110"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/50 hover:bg-white rounded-full shadow-md transition-all text-gray-800 hover:scale-110"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight size={28} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-primary-600 scale-125' : 'bg-white/60 hover:bg-white'}`}
                    aria-label={`Zobacz zdjęcie ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
