import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RegionPage from "./pages/RegionPage";
import NatureHotspotPage from "./pages/NatureHotspotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/region" element={<RegionPage />} exact={true} />
        <Route path="/nh" element={<NatureHotspotPage />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
