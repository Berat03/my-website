import React, { useRef } from 'react';
import Box from './box';
import items from '../items';
import './grid.css';
import './box.css';
import './button.css';

export default function Grid() {
    const gridSize = 12;
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const numGrids = Math.ceil(items.length / gridSize);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const boxWidth = container.offsetWidth; 
            container.scrollBy({
                left: -boxWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const boxWidth = container.offsetWidth; 
            container.scrollBy({
                left: boxWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="grid-container w-full h-full overflow-hidden relative">
            {/* Scrollable Content */}
            <div
                className="scroll-container flex gap-4 transition-all duration-500"
                ref={scrollContainerRef}>
                {Array.from({ length: numGrids }).map((_, gridIndex) => (
                    <div
                        className="grid-box grid grid-cols-4 gap-4"
                        key={`grid-${gridIndex}`}>
                        {items
                            .slice(
                                gridIndex * gridSize,
                                (gridIndex + 1) * gridSize,
                            )
                            .map((item) => (
                                <Box
                                    key={item.id}
                                    id={item.id}
                                    gifUrl={item.gifUrl}
                                    link={item.link}
                                />
                            ))}
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <button
                    onClick={scrollLeft}
                    className="scroll-button left absolute left-2 top-1/3 transform -translate-y-1/2 "></button>
                <button
                    onClick={scrollRight}
                    className="scroll-button right absolute right-2 top-1/3 transform -translate-y-1/2"></button>
        </div>
    );
}
