import React, { use, useRef } from "react";
import ExpertiseCard from "./ExpertiseCard";
import { useGSAP } from "@gsap/react";

const ExpertiseCards = ({ dataPromise }) => {
  const data = use(dataPromise);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    let cleanup = () => {};

    const loadGSAP = async () => {
      let gsap = window.gsap;

      if (!gsap) {
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });
        gsap = window.gsap;
      }

      const { ScrollTrigger } = window;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      const cardEls = cardRefs.current.filter(Boolean); 
      const CARD_HEIGHT = 800;

      cardEls.forEach((card, i) => {
        if (i < cardEls.length) {
          gsap.to(card, {
            rotate: 5,
            scale: 1 - (cardEls.length - i) * 0.04,
            yPercent: -4 * (cardEls.length - i - 1),
            scrollTrigger: {
              trigger: card,
              start: " top top",
              end: `+=${CARD_HEIGHT}`,
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          });
        }
      });


      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    loadGSAP();

   
    return () => cleanup();
  }, [data]);

  return (
    <div ref={containerRef} className="space-y-20">
      {data.map((card, i) => (
        <ExpertiseCard
          key={card.id}
          card={card}
          ref={(el) => (cardRefs.current[i] = el)}
          className="card"
        />
      ))}
    </div>
  );
};

export default ExpertiseCards;