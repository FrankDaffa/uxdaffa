import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <FeaturedWork />
            <Approach />
            <About />
            <Contact />
          </main>
        } />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;