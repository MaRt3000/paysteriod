
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import DashBoard from './components/DashBoard';

export default function App() {
  return <MantineProvider>{
    <div className=''>
      <DashBoard />
      </div>}
      </MantineProvider>;
}


