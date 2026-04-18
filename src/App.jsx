import React from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
    </main>
  );
};

export default App;