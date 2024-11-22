'use client';

import GridLayout from './components/grid/gridLayout';
import BottomBar from './components/navBar/bottomBar';
import './page.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';

export default function Home() {
  return (
    <div>
      {/* Audio Player Component */}
      <AudioPlayer src="/audio/menuMusic.mp3" autoPlay={true} loop={true} />

      <div className='wii-menu-background'>
        <GridLayout />
      </div>
      <div className='absolute bottom-0 w-full'>
        <BottomBar />
      </div>
    </div>
  );
}
