import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from './component/Overview';
import Staff from './component/Staff';
import EducationalPartners from './component/EducationalPartners';
import CommunityPartners from './component/CommunityPartners';
import Supporters from './component/Supporters';
import Jobs from './component/Jobs';
import Scholarships from './component/Scholarships';
import CommunityResources from './component/CommunityResources';
import Programs from './component/Programs';
import Map from './component/Map';
import Calendar from './component/Calendar';
import PhotoGallery from './component/PhotoGallery';
import News from './component/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
        <Route path="*" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="overview" element={<Overview/>}/>
          <Route path="staff-executive-board" element={<Staff/>}/>
          <Route path="educational-partners" element={<EducationalPartners/>}/>
          <Route path="community-partners" element={<CommunityPartners/>}/>
          <Route path="supporters" element={<Supporters/>}/>
          <Route path="job-resources" element={<Jobs/>}/>
          <Route path="scholarships" element={<Scholarships/>}/>
          <Route path="community-resources" element={<CommunityResources/>}/>
          <Route path="programs" element={<Programs/>}/>
          <Route path="constituent-map" element={<Map/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="photo-gallery" element={<PhotoGallery/>}/>
          <Route path="news" element={<News/>}/>
        </Route>
      </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
