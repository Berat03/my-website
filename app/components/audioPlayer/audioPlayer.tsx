'use client'; // Mark as a client component

import { useEffect, useRef, useState } from 'react';
import './audioPlayer.css';

interface AudioPlayerProps {
    src: string; // Path to the audio file
    autoPlay?: boolean; // Whether the audio should play automatically
    loop?: boolean; // Whether the audio should loop
}

export default function AudioPlayer({
    src,
    autoPlay = false,
    loop = false,
}: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay); // Start based on autoPlay

    useEffect(() => {
        const audio = audioRef.current;

        if (autoPlay && audio) {
            audio.play().catch((error) => {
                console.log('Autoplay blocked:', error);
                setIsPlaying(false); // If autoplay is blocked, update state
            });
        }
    }, [autoPlay]);

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <audio ref={audioRef} src={src} loop={loop} />
            <button
                className="audio-toggle-button absolute"
                onClick={toggleAudio}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}
