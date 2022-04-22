import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RegionPage from "./pages/TripAreaPage";
import NatureHotspotPage from "./pages/NatureHotspotPage";
import LoginPage from './pages/LoginPage';
import TopicListPage from './pages/TopicListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/triparea" element={<RegionPage />} exact={true} />
        <Route path="/nh" element={<NatureHotspotPage />} exact={true} />
        <Route path="/login" element={<LoginPage />} exact={true} />
        <Route path="/topiclist" element={<TopicListPage />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
