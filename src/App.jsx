import React, { Suspense } from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExpertiseCards from './components/ExpertiseCards';
import ContentSection from './components/ContentSection';
import Brands from './components/Brands';

gsap.registerPlugin(ScrollTrigger);

const dataPromise = fetch("/expertise.json").then(res=>res.json())

const App = () => {
  return (
    <>
    <main className='w-11/12 mx-auto scrollbar-hide'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section></Section>
      <Suspense>
        <ExpertiseCards dataPromise={dataPromise}></ExpertiseCards>
      </Suspense>
      <ContentSection></ContentSection>
      
    </main>
      <Brands></Brands>
    </>
  );
};

export default App;