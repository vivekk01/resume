import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbarr from './componentsA/navbar.js'
import Resumetemp from './componentsA/resumetemp.js'
import Aboutus from './componentsA/aboutus';
import Myresume from './componentsA/myresumes';
import Sidebar from './componentsB/sidebar'
import PersonalInfo from './componentsB/page1.js'
import profile from './profile.jpg.jpg'
import WorkExp from './componentsB/page2';
import Eduaction from './componentsB/page3';
import Skills from './componentsB/page4';
import Save from './componentsB/page5';
function App() {
  return (
  <>
  <Router>
  
 
  <Navbarr />
                  
            <Routes>
            <Route path= '/myResume' element={<Myresume />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path='/' element={<Resumetemp />} />
            <Route path="/myResume/" element={<Sidebar />}>
                    <Route path="personalInfo" element={<PersonalInfo image={profile}/>} />
                    <Route path="workExperience" element={<WorkExp />} />
                    <Route path="education" element={<Eduaction />} />
                    <Route path="mySkills" element={<Skills />} />                    
                    </Route>
                    <Route path="/workExperience" element={<WorkExp />} />
                    <Route path="/personalInfo" element={<PersonalInfo image={profile}/>} />
                    <Route path="/save" element={<Save />} />
             </Routes>
            </Router>
     
  </>
   
  );
}

export default App;
