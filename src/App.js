import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainTripPage from './pages/MainTripPage';
import MainFestivalPage from './pages/MainFestivalPage';
import RegionPage from "./pages/TripAreaPage";
import NatureHotspotPage from "./pages/NatureHotspotPage";
import LoginPage from './pages/LoginPage';
import TopicListPage from './pages/TopicListPage';
import MainPage from './pages/MainPage';
import MainSpecialPage from "./pages/MainSpecialPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/t" element={<MainTripPage />} exact={true} />
        <Route path="/f" element={<MainFestivalPage />} exact={true} />
        <Route path="/s" element={<MainSpecialPage />} exact={true} />
        <Route path="/triparea" element={<RegionPage />} exact={true} />
        <Route path="/nh" element={<NatureHotspotPage />} exact={true} />
        <Route path="/login" element={<LoginPage />} exact={true} />
        <Route path="/topiclist" element={<TopicListPage />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
