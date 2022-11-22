
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Enquiry from './Components/Enquiry';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PopUpIcon from './Components/PopUpIcon';
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/enquiry' element={<Enquiry />} />
          <Route exact path='/service' element={<Service />} />
          <Route path="*" element={<Navigate to="/" />}
          />
        </Routes>
        <PopUpIcon/>
        <Footer/>
      </BrowserRouter>

    </>
  );
  
}

export default App;
