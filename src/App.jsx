import React, { Suspense } from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExpertiseCards from './components/ExpertiseCards';

gsap.registerPlugin(ScrollTrigger);

const dataPromise = fetch("/expertise.json").then(res=>res.json())

const App = () => {
  return (
    <main className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
      <Suspense>
        <ExpertiseCards dataPromise={dataPromise}></ExpertiseCards>
      </Suspense>
    </main>
  );
};

export default App;