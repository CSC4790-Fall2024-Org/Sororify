import './App.css';
import 'survey-core/defaultV2.min.css';
import PNMsurvey from './components/pages/PNMsurvey';
import MemberSurvey from './components/pages/MemberSurvey';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AboutUs from './components/pages/AboutUs';


function App() {
  

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path = "/" element = {<AboutUs />} />
          <Route path = "/PNMSurvey" element = {<PNMsurvey />} />
          <Route path = "/MemberSurvey" element = {<MemberSurvey />} />
        </Routes>
    </div>
  )
    
}

export default App;
