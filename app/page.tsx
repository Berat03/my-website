'use client';

import GridLayout from './components/grid/gridLayout';
import BottomBar from './components/navBar/bottomBar';
import './page.css';

export default function Home() {
  return (
    <div className='outer-container'>
      <div className='content-container wii-menu-background relative'>
        <GridLayout />
        <BottomBar />
      </div>
    </div>
  );
}
