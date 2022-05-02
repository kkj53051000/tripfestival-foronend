import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainTripPage from './pages/MainTripPage';
import MainFestivalPage from './pages/MainFestivalPage';
import TripAreaListPage from "./pages/TripAreaListPage";
import NatureHotspotPage from "./pages/NatureHotspotPage";
import LoginPage from './pages/LoginPage';
import SpecialListPage from './pages/SpecialListPage';
import MainPage from './pages/MainPage';
import MainSpecialPage from "./pages/MainSpecialPage";
import TripNatureListPage from './pages/TripNatureListPage';
import TripArtificialListPage from "./pages/TripArtificialListPage";
import FestivalAreaListPage from './pages/FestivalAreaListPage';
import FestivalCategoryListPage from "./pages/FestivalCategoryListPage";
import FestivalMonthListPage from './pages/FestivalMonthListPage';
import AdminLandmarkMainPage from './pages/AdminLandmarkMainPage';
import AdminLandmarkPage from './pages/AdminLandmarkPage';
import AdminLandmarkImgPage from './pages/AdminLandmarkImgPage';
import AdminLandmarkFeePage from './pages/AdminLandmarkFeePage';
import AdminLandmarkHashTagPage from './pages/AdminLandmarkHashTagPage';
import AdminLandmarkReviewPage from './pages/AdminLandmarkReviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/t" element={<MainTripPage />} exact={true} />
        <Route path="/f" element={<MainFestivalPage />} exact={true} />
        <Route path="/s" element={<MainSpecialPage />} exact={true} />

        {/* Admin Landmark */}
        <Route path="/admin/landmark" element={<AdminLandmarkMainPage />} exact={true} />
        <Route path="/admin/landmark/landmark" element={<AdminLandmarkPage />} exact={true} />
        <Route path="/admin/landmark/img" element={<AdminLandmarkImgPage />} exact={true} />
        <Route path="/admin/landmark/fee" element={<AdminLandmarkFeePage />} exact={true} />
        <Route path="/admin/landmark/hashtag" element={<AdminLandmarkHashTagPage />} exact={true} />
        <Route path="/admin/landmark/review" element={<AdminLandmarkReviewPage />} exact={true} />
        
        {/* Trip List */}
        <Route path="/triparea" element={<TripAreaListPage />} exact={true} />
        <Route path="/tripnature" element={<TripNatureListPage />} exact={true} />
        <Route path="/tripartificial" element={<TripArtificialListPage />} exact={true} />
        
        {/* Festival List */}
        <Route path="/festivalarea" element={<FestivalAreaListPage />} exact={true} />
        <Route path="/festivalcategory" element={<FestivalCategoryListPage />} exact={true} />
        <Route path="/festivalmonth" element={<FestivalMonthListPage />} exact={true} />

        <Route path="/nh" element={<NatureHotspotPage />} exact={true} />
        <Route path="/login" element={<LoginPage />} exact={true} />
        <Route path="/topiclist" element={<SpecialListPage />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
