import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import ProjectGallery from './pages/ProjectGallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-gallery/*" element={<ProjectGallery />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
