
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/Home';
import Planes from './component/pages/Planes';
import Competition from './component/pages/Competition';
import Subsystem from './component/pages/Subsystem';
import Contact from './component/pages/Contact';
import Aero from './component/pages/Aero';
import Software from'./component/pages/Software';
import Controls from './component/pages/Controls';
import Marketing from'./component/pages/Marketing';
import Footer  from './component/Footer/footer';
import Team from './component/pages/Team';
import Blog from './component/pages/Blog';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/plane' element={<Planes/>}/>
    <Route path='/subsystems' element={<Subsystem/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/competitions' element={<Competition/>}/>
    <Route path='/teams' element={<Team/>}/>
    <Route path='/blogs' element={<Blog/>}/>
    <Route path='/subsystems/aero' element={<Aero/>}/>
    <Route path='/subsystems/software' element={<Software/>}/>
    <Route path='/subsystems/controls' element={<Controls/>}/>
    <Route path='/subsystems/marketing' element={<Marketing/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
