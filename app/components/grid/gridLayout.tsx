import React, { useRef } from 'react';
import Box from './box';
import items from '../data/items';
import './grid.css';
import './box.css';
import './button.css';

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
        <div>
            <div className="mt-16 scroll-container" ref={scrollContainerRef}>
                {Array.from({ length: numGrids }).map((_, gridIndex) => (
                    <div className="grid-box" key={`grid-${gridIndex}`}>
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
                        {Array.from({
                            length: Math.max(
                                0,
                                gridSize -
                                    items.slice(
                                        gridIndex * gridSize,
                                        (gridIndex + 1) * gridSize,
                                    ).length,
                            ),
                        }).map((_, index) => (
                            <div
                                key={`empty-${gridIndex}-${index}`}
                                className="box empty-box"></div>
                        ))}
                    </div>
                ))}

                <button
                    onClick={scrollLeft}
                    className="scroll-button left absolute left-2 top-1/3 transform -translate-y-1/2 "></button>
                <button
                    onClick={scrollRight}
                    className="scroll-button right absolute right-2 top-1/3 transform -translate-y-1/2"></button>
            </div>
        </div>
    );
}
