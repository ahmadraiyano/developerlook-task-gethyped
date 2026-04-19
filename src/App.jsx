import React from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
    </main>
  );
};

export default App;