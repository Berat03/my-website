import React, { useRef } from 'react';
import Box from './box';
import items from "../data/items";
import "./grid.css";
import "./box.css";

export default function GridLayout() {
  const gridSize = 12;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth',
      });
    }
  };

  const numGrids = Math.ceil(items.length / gridSize);

  return (
    <div className=''>
      <div className="mt-20 scroll-container" ref={scrollContainerRef}>
        {Array.from({ length: numGrids }).map((_, gridIndex) => (
          <div className="grid-box" key={`grid-${gridIndex}`}>
            {items.slice(gridIndex * gridSize, (gridIndex + 1) * gridSize).map((item) => (
              <Box
                key={item.id}
                id={item.id}
                gifUrl={item.gifUrl}
                link={item.link}
              />
            ))}
            {Array.from({
              length: Math.max(0, gridSize - items.slice(gridIndex * gridSize, (gridIndex + 1) * gridSize).length),
            }).map((_, index) => (
              <div key={`empty-${gridIndex}-${index}`} className="box empty-box"></div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={scrollLeft} className="scroll-button">Left</button>
      <button onClick={scrollRight} className="scroll-button">Right</button>
    </div>
  );
}
