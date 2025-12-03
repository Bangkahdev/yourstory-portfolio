import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Roadmap from './components/sections/Roadmap';
import Team from './components/sections/Team';
import CallToAction from './components/sections/CallToAction';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Testimonials />
      <Team />
      <CallToAction />
      <Contact />
    </Layout>
  );
}

export default App;