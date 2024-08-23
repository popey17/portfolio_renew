"use client";
import style from '@/app/assets/scss/style.module.scss';
import useMousePosition from '@/app/assets/utils/useMousePosition';
import { useState , useRef } from 'react';
import Techslider from '@/app/assets/components/Techslider';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function About() {
  const fixedTransition = useRef();
  const section = useRef();
  

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

      let tl = gsap.timeline();

      tl.fromTo(
        fixedTransition.current,
        { 
          clipPath: 'inset(50% 0%)', 
        },
        {
          clipPath: 'inset(0% 0%)',
          scrollTrigger: {
            trigger: section.current,
          start: "0 0",
          end: "center center",
          // markers: true,
          pinSpacing: false,
          toggleActions: "play none none reverse",
          scrub: 1
          },
        }
      );

  },[]);


  return (
    <div ref={section} className={style.aboutSticky}>
      <div  className={style.fixedTransition}>
        <div  className={style.fixedTransition__inner}>
          <div ref={fixedTransition} className={style.stickyContainer}>
            <h2 className={style.fixedTransition__title}>ABOUT</h2>
          </div>
        </div>
        <section className={`${style.section} ${style['section--about']}`}>
          <div className={style.aboutText}>
            <h2 className={style.sectionTitle}>Who am I.</h2>
            <p>
            I&apos;am a <span>web developer</span> with a passion for creating visually compelling websites. I am also have knowledge in backend and cloud services.
            </p>
          </div>   
            <Techslider/>
        </section>
      </div>
    </div>
  )
}

export default About