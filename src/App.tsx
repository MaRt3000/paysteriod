import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import WalletManagement from './components/WalletManagement';
import HomeAll from './components/HomeAll';

export default function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
           <Route path="/" element={<HomeAll/>} />
           <Route path="/home" element={<HomeAll />} />
          <Route path="/dashboard" element={<DashBoard />} />
         
          <Route path="/wallet" element={<WalletManagement />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
