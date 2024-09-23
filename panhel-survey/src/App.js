import './App.css';
import 'survey-core/defaultV2.min.css';
import PNMsurvey from './components/pages/PNMsurvey';
import AXOSurvey from './components/pages/ChapterSurveys/AXOSurvey';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AboutUs from './components/pages/AboutUs';
import InfoPage from './components/pages/InfoPage';
import AGDSurvey from './components/pages/ChapterSurveys/AGDSurvey';
import APHISurvey from './components/pages/ChapterSurveys/APHISurvey';
import XOSurvey from './components/pages/ChapterSurveys/XOSurvey';
import DDDSurvey from './components/pages/ChapterSurveys/DDDSurvey';
import DGSurvey from './components/pages/ChapterSurveys/DGSurvey';
import KDSurvey from './components/pages/ChapterSurveys/KDSurvey';
import KKGSurvey from './components/pages/ChapterSurveys/KKGSurvey'; 


function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path = "/" element = {<AboutUs />} />
          <Route path = "/PNMSurvey" element = {<PNMsurvey />} />
          <Route path = "/AXOSurvey" element = {<AXOSurvey />} />
          <Route path = "/InfoPage" element = {<InfoPage />} />
          <Route path = "/AGDSurvey" element = {<AGDSurvey />} />
          <Route path = "/APHISurvey" element = {<APHISurvey />} />
          <Route path = "/XOSurvey" element = {<XOSurvey />} />
          <Route path = "/DDDSurvey" element = {<DDDSurvey />} />
          <Route path = "/DGSurvey" element = {<DGSurvey />} />
          <Route path = "/KDSurvey" element = {<KDSurvey />} /> 
          <Route path = "/KKGSurvey" element = {<KKGSurvey />} />

          
        </Routes>
    </div>
  )
    
}

export default App;
