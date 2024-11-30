import './App.css';
import 'survey-core/defaultV2.min.css';
import PNMsurvey from './components/pages/PNMsurvey';
import AXOSurvey from './components/pages/ChapterSurveys/AXOSurvey';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AboutUs from './components/pages/AboutUs';
import APHISurvey from './components/pages/ChapterSurveys/APHISurvey';
import XOSurvey from './components/pages/ChapterSurveys/XOSurvey';
import DDDSurvey from './components/pages/ChapterSurveys/DDDSurvey';
import DGSurvey from './components/pages/ChapterSurveys/DGSurvey';
import KDSurvey from './components/pages/ChapterSurveys/KDSurvey';
import KKGSurvey from './components/pages/ChapterSurveys/KKGSurvey'; 
import Results from './components/pages/Results';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import { AuthProvider } from './components/pages/AuthContext';
import AXOInfoPage from './components/pages/ChapterSurveys/AXOInfoPage';
import APHIInfoPage from './components/pages/ChapterSurveys/APHIInfoPage';
import XOInfoPage from './components/pages/ChapterSurveys/XOInfoPage';
import DGInfoPage from './components/pages/ChapterSurveys/DGInfoPage';
import DDDInfoPage from './components/pages/ChapterSurveys/DDDInfoPage';
import KDInfoPage from './components/pages/ChapterSurveys/KDInfoPage'; 
import KKGInfoPage from './components/pages/ChapterSurveys/KKGInfoPage';
import KKGResults from './components/pages/KKGResults';

function App() {
  
  return (
    <div>
      <AuthProvider>
      <Navbar />
        <Routes>
          <Route path = "/" element = {<AboutUs />} />
          <Route path = "/PNMSurvey" element = {<PNMsurvey />} />
          <Route path = "/AXOSurvey" element = {<AXOSurvey />} />
          <Route path = "/APHISurvey" element = {<APHISurvey />} />
          <Route path = "/XOSurvey" element = {<XOSurvey />} />
          <Route path = "/DDDSurvey" element = {<DDDSurvey />} />
          <Route path = "/DGSurvey" element = {<DGSurvey />} />
          <Route path = "/KDSurvey" element = {<KDSurvey />} /> 
          <Route path = "/KKGSurvey" element = {<KKGSurvey />} />
          <Route path = "/Results" element = {<Results />} />
          <Route path = "/SignUp" element = {<SignUp />} />
          <Route path = "/SignIn" element = {<SignIn />} />

          <Route path = "/AXOInfoPage" element = {<AXOInfoPage />} />
          <Route path = "/APHIInfoPage" element = {<APHIInfoPage />} />
          <Route path = "/XOInfoPage" element = {<XOInfoPage />} />
          <Route path = "/DGInfoPage" element = {<DGInfoPage />} />
          <Route path = "/DDDInfoPage" element = {<DDDInfoPage />} />
          <Route path = "/KDInfoPage" element = {<KDInfoPage />} />
          <Route path = "/KKGInfoPage" element = {<KKGInfoPage />} />
          <Route path = "/KKGResults" element = {<KKGResults />} />
          
        </Routes>
      </AuthProvider>
      
        
    </div>
  )
    
}

export default App;
