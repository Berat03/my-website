'use client';
import Grid from './components/grid/grid';
import NavBar from './components/navBar/navBar';

export default function Home() {
    return (
        <div className="mouse-cursor h-full mainMenuBackground">
            <Grid />|
            <NavBar />
        </div>
    );
}
