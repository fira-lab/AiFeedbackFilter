import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import About from './About/About';
import Service from './Services/Service';
import Contact from './Contact/Contact';
import Feedback from './Feedback/Feedback';
import Testimonials from './Testimonials/Testimonials';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar/navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path='/feedback' element = {<Feedback/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;