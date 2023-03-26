import './styles/App.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/about.css';
import './styles/partners.css';
import './styles/resources.css';
import './styles/programs.css';
import './styles/calendar.css';
import './styles/photogallery.css';
import './styles/news.css';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
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

function App() {

  return (
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="overview" element={<Overview/>} />
        <Route path="staff-executive-board" element={<Staff/>} />
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
      </Routes>
  );
}

export default App; 
