import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import { APARTMENTS_DATA } from '../data/apartments';
import { PenTool, X, Copy, RefreshCw } from 'lucide-react';
import { Apartment } from '../types';
import { ImageModal } from './ImageModal';

export const InteractiveEstateMap: React.FC = () => {
  const mappableApartments = APARTMENTS_DATA.filter(apt => apt.polygonPoints);

  const [localApartments, setLocalApartments] = useState(mappableApartments);
  const [hoveredBuilding, setHoveredBuilding] = useState<Apartment | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [drawPoints, setDrawPoints] = useState<{x: number, y: number}[]>([]);
  const [draggingPointIndex, setDraggingPointIndex] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pointActionInProgress = useRef(false);
  const ORIGINAL_WIDTH = 1920;
  const ORIGINAL_HEIGHT = 1080;

  // State for dragging the creator panel
  const creatorPanelRef = useRef<HTMLDivElement>(null);
  const [creatorPos, setCreatorPos] = useState({ x: 16, y: 16 });
  const [isDraggingCreator, setIsDraggingCreator] = useState(false);
  const dragCreatorOffset = useRef({ x: 0, y: 0 });

  const [tooltipStyle, setTooltipStyle] = useState({
    left: 0,
    top: 0,
    opacity: 0,
    verticalPosition: 'top' as 'top' | 'bottom',
  });

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;

    if (!hoveredBuilding || !tooltip || !container) {
      setTooltipStyle(prev => ({ ...prev, opacity: 0 }));
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const margin = 16; // 1rem

    let finalX = tooltipPos.x;
    let finalY = tooltipPos.y;
    let verticalPos: 'top' | 'bottom' = 'top';

    // Horizontal clamping
    if (finalX - tooltipWidth / 2 < margin) {
      finalX = tooltipWidth / 2 + margin;
    }
    if (finalX + tooltipWidth / 2 > containerRect.width - margin) {
      finalX = containerRect.width - tooltipWidth / 2 - margin;
    }

    // Vertical check and flip
    if (finalY - (tooltipHeight * 1.15) < margin) {
      verticalPos = 'bottom';
    }

    setTooltipStyle({
      left: finalX,
      top: finalY,
      opacity: 1,
      verticalPosition: verticalPos,
    });
  }, [tooltipPos, hoveredBuilding]);

  const handleMouseMove = (e: MouseEvent<SVGElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      
      if (isDrawingMode && draggingPointIndex !== null) {
        const scaleX = ORIGINAL_WIDTH / rect.width;
        const scaleY = ORIGINAL_HEIGHT / rect.height;
        const newX = Math.round((e.clientX - rect.left) * scaleX);
        const newY = Math.round((e.clientY - rect.top) * scaleY);
        setDrawPoints(prevPoints =>
          prevPoints.map((point, i) =>
            i === draggingPointIndex ? { x: newX, y: newY } : point
          )
        );
      }
    }
  };

  const handleSvgClick = (e: MouseEvent<SVGElement>) => {
    if (pointActionInProgress.current) return;
    if (!isDrawingMode || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = ORIGINAL_WIDTH / rect.width;
    const scaleY = ORIGINAL_HEIGHT / rect.height;
    const x = Math.round((e.clientX - rect.left) * scaleX);
    const y = Math.round((e.clientY - rect.top) * scaleY);
    setDrawPoints(prev => [...prev, { x, y }]);
  };

  const handlePointMouseDown = (e: MouseEvent<SVGCircleElement>, index: number) => {
    e.stopPropagation();
    pointActionInProgress.current = true;
    setDraggingPointIndex(index);
  };
  
  const handleMouseUp = () => {
    setDraggingPointIndex(null);
    setTimeout(() => { pointActionInProgress.current = false; }, 0);
  };

  const handleBuildingClick = (e: MouseEvent<SVGElement>, aptId: number) => {
    e.stopPropagation();
    if (!isDrawingMode) {
      const clickedApt = localApartments.find(apt => apt.id === aptId);
      if (clickedApt?.imageUrls && clickedApt.imageUrls.length > 0) setSelectedApartment(clickedApt);
    }
  };

  const getPolygonClasses = (floor: number, isHovered: boolean) => {
    const base = "transition-all duration-300 ease-in-out stroke-[3]";
    const hover = isHovered ? "stroke-[6]" : ""; // Tylko obrys zmienia się przy najechaniu
    // Zmieniono na jaśniejszy, bardziej widoczny zielony dla parteru
    if (floor === 0) return `${base} ${hover} fill-blue-700/40 stroke-blue-900`;
    if (floor === 1) return `${base} ${hover} fill-emerald-600/40 stroke-emerald-500`;
    return `${base} ${hover} fill-gray-500/40 stroke-gray-400`;
  };

  // Drag handlers for creator panel
  const handleCreatorMouseDown = (e: MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    if (!creatorPanelRef.current) return;
    dragCreatorOffset.current = {
      x: e.clientX - creatorPos.x,
      y: e.clientY - creatorPos.y,
    };
    setIsDraggingCreator(true);
  };

  useEffect(() => {
    const handleCreatorMouseMove = (e: globalThis.MouseEvent) => {
      let newX = e.clientX - dragCreatorOffset.current.x;
      let newY = e.clientY - dragCreatorOffset.current.y;
      
      if (containerRef.current && creatorPanelRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const panelRect = creatorPanelRef.current.getBoundingClientRect();
        newX = Math.max(0, Math.min(newX, containerRect.width - panelRect.width));
        newY = Math.max(0, Math.min(newY, containerRect.height - panelRect.height));
      }
      setCreatorPos({ x: newX, y: newY });
    };

    const handleCreatorMouseUp = () => setIsDraggingCreator(false);

    if (isDrawingMode && isDraggingCreator) {
      document.addEventListener('mousemove', handleCreatorMouseMove);
      document.addEventListener('mouseup', handleCreatorMouseUp, { once: true });
      document.body.style.cursor = 'move';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleCreatorMouseMove);
      document.removeEventListener('mouseup', handleCreatorMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDrawingMode, isDraggingCreator]);


  const tempPolygonString = drawPoints.map(p => `${p.x},${p.y}`).join(',');

  return (
    <>
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group select-none" ref={containerRef}>
      
      <div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2 items-end">
        <button 
          onClick={() => {
            setIsDrawingMode(!isDrawingMode);
            setDrawPoints([]);
          }}
          className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg ${isDrawingMode ? 'bg-indigo-600 text-white scale-105' : 'bg-white/95 text-gray-800 hover:bg-white'}`}
        >
          {isDrawingMode ? <X size={16} /> : <PenTool size={16} />}
          {isDrawingMode ? 'Anuluj' : 'Rysuj nowy kształt'}
        </button>
      </div>

      {isDrawingMode && (
        <div 
          ref={creatorPanelRef}
          className="absolute z-30 bg-white p-5 rounded-2xl shadow-2xl w-72 border border-gray-200 animate-fade-in"
          style={{ top: 0, left: 0, transform: `translate(${creatorPos.x}px, ${creatorPos.y}px)` }}
        >
          <h4 
            className="font-bold text-gray-900 mb-2 cursor-move"
            onMouseDown={handleCreatorMouseDown}
          >
            Kreator Kształtu
          </h4>
          <p className="text-xs text-gray-500 mb-4">Klikaj na mapie, aby wyznaczyć granice mieszkania.</p>
          <div className="bg-gray-50 p-3 rounded-xl text-[10px] font-mono break-all mb-4 max-h-32 overflow-y-auto border border-gray-200 text-gray-600">
            {tempPolygonString || "Oczekiwanie na punkty..."}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => {navigator.clipboard.writeText(tempPolygonString); alert('Punkty skopiowane!');}}
              disabled={drawPoints.length < 3}
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
            >
              <Copy size={14} /> Kopiuj
            </button>
            <button 
              onClick={() => setDrawPoints([])}
              className="px-4 bg-gray-100 text-gray-600 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      )}

      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczNFEQUX8YsFbxBBf72ASpKLvou2Y88B1tcGmWiMmiSNucAEpBuh0Z5uIfQ-RSruZCMD9XPCoiNQ7aLi2WC5hD0iOLAAVf-FSRTNEKk1JJohw-aOTXkVpnNR9Qu5L3VzJYwBgjrFhUss6er9NaVEprkp=w1920-h1080-s-no-gm" 
        alt="Wizualizacja Osiedla" 
        className="w-full h-auto block object-cover pointer-events-none"
      />

      <svg 
        className={`absolute inset-0 w-full h-full ${isDrawingMode ? 'cursor-crosshair' : ''}`}
        viewBox={`0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`}
        preserveAspectRatio="none"
        onMouseMove={handleMouseMove}
        onClick={handleSvgClick}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          setHoveredBuilding(null);
        }}
      >
        {localApartments.map((building) => {
          const isHovered = hoveredBuilding?.id === building.id;
          const commonProps = {
            className: `
              ${getPolygonClasses(building.floor, isHovered)}
              ${isDrawingMode ? 'pointer-events-none opacity-20' : ''} 
              cursor-pointer ${building.imageUrls && building.imageUrls.length > 0 ? '' : 'cursor-default'}
            `,
            onMouseEnter: () => !isDrawingMode && setHoveredBuilding(building),
            onMouseLeave: () => !isDrawingMode && setHoveredBuilding(null),
            onClick: (e: MouseEvent<SVGPolygonElement>) => handleBuildingClick(e, building.id),
          };

          if (Array.isArray(building.polygonPoints)) {
            return building.polygonPoints.map((points, index) => (
              <polygon
                key={`${building.id}-${index}`}
                points={points}
                {...commonProps}
              />
            ));
          } 
          
          if (typeof building.polygonPoints === 'string') {
            return (
              <polygon
                key={building.id}
                points={building.polygonPoints}
                {...commonProps}
              />
            );
          }

          return null;
        })}

        {isDrawingMode && drawPoints.length > 0 && (
          <>
            <polygon points={tempPolygonString} className="fill-indigo-500/40 stroke-indigo-500 stroke-[3]" />
            {drawPoints.map((p, i) => (
              <circle 
                key={i} 
                cx={p.x} 
                cy={p.y} 
                r={10} 
                className="fill-white stroke-indigo-600 stroke-[3] cursor-move hover:fill-indigo-100 transition-colors"
                onMouseDown={(e) => handlePointMouseDown(e, i)}
              />
            ))}
          </>
        )}
      </svg>

      {hoveredBuilding && !isDrawingMode && (
        <div 
          ref={tooltipRef}
          className={`absolute z-40 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 pointer-events-none transform -translate-x-1/2 w-64 transition-opacity duration-200
            ${tooltipStyle.verticalPosition === 'top' ? '-translate-y-[115%]' : 'translate-y-[15%]'}`
          }
          style={{ 
            left: `${tooltipStyle.left}px`, 
            top: `${tooltipStyle.top}px`,
            opacity: tooltipStyle.opacity,
          }}
        >
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-bold text-gray-900 leading-tight">{hoveredBuilding.number}</h4>
          </div>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Powierzchnia:</span>
              <span className="font-bold text-gray-900">{hoveredBuilding.area} m²</span>
            </div>
            {hoveredBuilding.gardenArea > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Ogródek:</span>
                <span className="font-bold text-gray-900">{hoveredBuilding.gardenArea} m²</span>
              </div>
            )}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100 text-[11px] font-bold text-center">
            {hoveredBuilding.imageUrls && hoveredBuilding.imageUrls.length > 0
              ? <span className="text-primary-600">Kliknij, aby zobaczyć rzut</span> 
              : <span className="text-gray-400 italic font-medium">Rzut wkrótce</span>}
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg
            ${tooltipStyle.verticalPosition === 'top' 
              ? 'bottom-[-8px] border-b border-r border-gray-100' 
              : 'top-[-8px] border-t border-l border-gray-100'}`
          }></div>
        </div>
      )}

    </div>

    {selectedApartment && (
      <ImageModal apartment={selectedApartment} onClose={() => setSelectedApartment(null)} />
    )}
    </>
  );
};