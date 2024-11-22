import GridLayout from './components/grid/gridLayout';
import BottomBar from './components/navBar/bottomBar';

export default function Home() {
  return (
    <div>
      <div className='bg-white'>
        <GridLayout/>
      </div>
      <div className='absolute bottom-0 w-full'>
        <BottomBar />
      </div>
    </div>
  );
}
