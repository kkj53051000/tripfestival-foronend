import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainTripPage from './pages/main/MainTripPage';
import MainFestivalPage from './pages/main/MainFestivalPage';
import TripAreaListPage from "./pages/trip/TripAreaListPage";
import NatureHotspotPage from "./pages/NatureHotspotPage";
import LoginPage from './pages/LoginPage';
import SpecialListPage from './pages/SpecialListPage';
import MainPage from './pages/main/MainPage';
import MainSpecialPage from "./pages/main/MainSpecialPage";
import TripNatureListPage from './pages/trip/TripNatureListPage';
import TripArtificialListPage from "./pages/trip/TripArtificialListPage";
import FestivalAreaListPage from './pages/festival/FestivalAreaListPage';
import FestivalCategoryListPage from "./pages/festival/FestivalCategoryListPage";
import FestivalMonthListPage from './pages/festival/FestivalMonthListPage';
import AdminLandmarkMainPage from './pages/landmark/AdminLandmarkMainPage';
import AdminLandmarkPage from './pages/landmark/AdminLandmarkPage';
import AdminLandmarkImgPage from './pages/landmark/AdminLandmarkImgPage';
import AdminLandmarkFeePage from './pages/landmark/AdminLandmarkFeePage';
import AdminLandmarkHashTagPage from './pages/landmark/AdminLandmarkHashTagPage';
import AdminLandmarkReviewPage from './pages/landmark/AdminLandmarkReviewPage';
import AdminLandmarkTimePage from './pages/landmark/AdminLandmarkTimePage';
import AdminMainPage from './pages/AdminMainPage';
import AdminEventMainPage from './pages/event/AdminEventMainPage';
import AdminEventPage from './pages/event/AdminEventPage';
import AdminEventCateogryPage from './pages/event/AdminEventCateogryPage';
import AdminEventFeePage from './pages/event/AdminEventFeePage';
import AdminEventHashTagPage from './pages/event/AdminEventHashTagPage';
import AdminEventImgPage from './pages/event/AdminEventImgPage';
import AdminEventReviewPage from './pages/event/AdminEventReviewPage';
import AdminEventSeasonPage from './pages/event/AdminEventSeasonPage';
import AdminEventTimePage from './pages/event/AdminEventTimePage';
import AdminHotSightMainPage from './pages/hotsight/AdminHotSightMainPage';
import AdminHotSightOnePage from './pages/hotsight/AdminHotSightOnePage';
import AdminHotSightTwoPage from './pages/hotsight/AdminHotSightTwoPage';
import AdminHotSightLandmarkPage from './pages/hotsight/AdminHotSightLandmarkPage';
import AdminHotSpotMainPage from './pages/hotspot/AdminHotSpotMainPage';
import AdminHotSpotTypePage from './pages/hotspot/AdminHotSpotTypePage';
import AdminHotSpotPage from './pages/hotspot/AdminHotSpotPage';
import AdminNatureHotSpotTypePage from './pages/naturehotspot/AdminNatureHotSpotTypePage';
import AdminNatureHotSpotMainPage from './pages/naturehotspot/AdminNatureHotSpotMainPage';
import AdminNatureHotSpotPage from './pages/naturehotspot/AdminNatureHotSpotPage';
import AdminUserMainPage from './pages/user/AdminUserMainPage';
import AdminUserPage from './pages/user/AdminUserPage';
import AdminWorldMainPage from './pages/world/AdminWorldMainPage';
import AdminWorldCountryPage from './pages/world/AdminWorldCountryPage';
import AdminWorldCountryCityPage from './pages/world/AdminWorldCountryCityPage';
import AdminWorldCountryCityRegionPage from './pages/world/AdminWorldCountryCityRegionPage';
import LandmarkPage from './pages/landmark/LandmarkPage';
import TripSpecialPage from './pages/trip/TripSpecialPage';
import TripAreaLandmarkListPage from './pages/trip/TripAreaLandmarkListPage';
import TripNatureLandmarkListPage from './pages/trip/TripNatureLandmarkListPage';
import TripArtificialLandmarkListPage from './pages/trip/TripArtificialLandmarkListPage';
import TripSpecialMenuPage from './pages/trip/TripSpecialMenuPage';
import FestivalAreaLandmarkListPage from './pages/festival/FsetivalAreaLandmarkListPage';
import FestivalCategoryLandmarkListPage from './pages/festival/FestivalCategoryLandmarkListPage';
import FestivalMonthListLandmarkPage from './pages/festival/FestivalMonthListLandmarkPage';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/t" element={<MainTripPage />} exact={true} />
        <Route path="/f" element={<MainFestivalPage />} exact={true} />
        <Route path="/s" element={<MainSpecialPage />} exact={true} />

        {/* Admin Main */}
        <Route path="/admin" element={<AdminMainPage />} exact={true} />

        {/* Admin User */}
        <Route path="/admin/user" element={<AdminUserMainPage />} exact={true} />
        <Route path="/admin/user/user" element={<AdminUserPage />} exact={true} />

        {/* Admin World */}
        <Route path="/admin/world" element={<AdminWorldMainPage />} exact={true} />
        <Route path="/admin/world/country" element={<AdminWorldCountryPage />} exact={true} />
        <Route path="/admin/world/country/city" element={<AdminWorldCountryCityPage />} exact={true} />
        <Route path="/admin/world/country/city/region" element={<AdminWorldCountryCityRegionPage />} exact={true} />
 
        {/* Admin Landmark */}
        <Route path="/admin/landmark" element={<AdminLandmarkMainPage />} exact={true} />
        <Route path="/admin/landmark/landmark" element={<AdminLandmarkPage />} exact={true} />
        <Route path="/admin/landmark/img" element={<AdminLandmarkImgPage />} exact={true} />
        <Route path="/admin/landmark/fee" element={<AdminLandmarkFeePage />} exact={true} />
        <Route path="/admin/landmark/hashtag" element={<AdminLandmarkHashTagPage />} exact={true} />
        <Route path="/admin/landmark/review" element={<AdminLandmarkReviewPage />} exact={true} />
        <Route path="/admin/landmark/time" element={<AdminLandmarkTimePage />} exact={true} />

        {/* Admin Event */}
        <Route path="/admin/event" element={<AdminEventMainPage />} exact={true} />
        <Route path="/admin/event/event" element={<AdminEventPage />} exact={true} />
        <Route path="/admin/event/category" element={<AdminEventCateogryPage />} exact={true} />
        <Route path="/admin/event/fee" element={<AdminEventFeePage />} exact={true} />
        <Route path="/admin/event/hashtag" element={<AdminEventHashTagPage />} exact={true} />
        <Route path="/admin/event/img" element={<AdminEventImgPage />} exact={true} />
        <Route path="/admin/event/review" element={<AdminEventReviewPage />} exact={true} />
        <Route path="/admin/event/season" element={<AdminEventSeasonPage />} exact={true} />
        <Route path="/admin/event/time" element={<AdminEventTimePage />} exact={true} />

        {/* Admin HotSight */}
        <Route path="/admin/hotsight" element={<AdminHotSightMainPage />} exact={true} />
        <Route path="/admin/hotsight/one" element={<AdminHotSightOnePage />} exact={true} />
        <Route path="/admin/hotsight/two" element={<AdminHotSightTwoPage />} exact={true} />
        <Route path="/admin/hotsight/landmark" element={<AdminHotSightLandmarkPage />} exact={true} />

        {/* Admin HotSpot */}
        <Route path="/admin/hotspot" element={<AdminHotSpotMainPage />} exact={true} />
        <Route path="/admin/hotspot/type" element={<AdminHotSpotTypePage />} exact={true} />
        <Route path="/admin/hotspot/hotspot" element={<AdminHotSpotPage />} exact={true} />

        {/* Admin NatureHotSpot */}
        <Route path="/admin/naturehotspot/type" element={<AdminNatureHotSpotTypePage />} exact={true} />
        <Route path="/admin/naturehotspot" element={<AdminNatureHotSpotMainPage />} exact={true} />
        <Route path="/admin/naturehotspot/naturehotspot" element={<AdminNatureHotSpotPage />} exact={true} />


        {/* Trip List */}
        <Route path="/triparea" element={<TripAreaListPage />} exact={true} />
        <Route path="/tripnature" element={<TripNatureListPage />} exact={true} />
        <Route path="/tripartificial" element={<TripArtificialListPage />} exact={true} />
        <Route path="/tripspecial" element={<TripSpecialPage />} exact={true} />
        <Route path="/tripspecialmenu" element={<TripSpecialMenuPage />} exact={true} />
        <Route path="/triparealandmark/:cityId/:regionId" element={<TripAreaLandmarkListPage />} exact={true} />
        <Route path="/tripnaturelandmark/:natureTypeId/:cityId/:regionId" element={<TripNatureLandmarkListPage />} exact={true} />
        <Route path="/tripartificiallandmark/:artificialTypeId/:cityId/:regionId" element={<TripArtificialLandmarkListPage />} exact={true} />
        
        {/* Festival List */}
        <Route path="/festivalarea" element={<FestivalAreaListPage />} exact={true} />
        <Route path="/festivalarealandmark/:cityId/:regionId" element={<FestivalAreaLandmarkListPage />} exact={true} />
        <Route path="/festivalcategory" element={<FestivalCategoryListPage />} exact={true} />
        <Route path="/festivalcategorylandmark/:categoryId/:cityId/:regionId" element={<FestivalCategoryLandmarkListPage />} exact={true} />
        <Route path="/festivalmonth" element={<FestivalMonthListPage />} exact={true} />
        <Route path="/festivalmonthlandmark/:monthId/:cityId/:regionId" element={<FestivalMonthListLandmarkPage />} exact={true} />

        {/* Landmark */}
        <Route path="/landmark/:id" element={<LandmarkPage />} exact={true} />

        <Route path="/nh" element={<NatureHotspotPage />} exact={true} />
        <Route path="/login" element={<LoginPage />} exact={true} />
        <Route path="/topiclist" element={<SpecialListPage />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
