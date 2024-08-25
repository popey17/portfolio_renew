"use client";
import style from '@/app/assets/scss/style.module.scss';
import useMousePosition from '@/app/assets/utils/useMousePosition';
import { useState , useRef } from 'react';
import Techslider from '@/app/assets/components/Techslider';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';



function About() {
  const fixedTransition = useRef();
  const section = useRef();
  const text = useRef();
  const paragraph = useRef();

  
  
  
  
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    const splitText = new SplitType(paragraph.current)
    gsap.from(splitText.chars,{
      opacity: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: paragraph.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        markers: true
      }
    })
  },[]);

  useGSAP(() => {
      gsap.fromTo(
        fixedTransition.current,
        { clipPath: 'inset(50% 0%)'},
        { clipPath: 'inset(0% 0%)',
          scrollTrigger: {
            trigger: section.current,
          start: " top top",
          end: "40% end",
          // markers: true,
          pinSpacing: false,
          toggleActions: "play none none reverse",
          scrub: 1
          },
        }
      );

      gsap.set(text.current, {scale: 0.9, opacity: 0});

      let tl = gsap.timeline();
      tl.to(text.current, {scale: 1, opacity: 1, duration: 1});
      tl.to(text.current, {scale: 1, opacity: 0.4, duration: 1, delay: 1},'>');
      
      ScrollTrigger.create({
        trigger: section.current,
        start: "10% 0",
        end: "55% end",
        // markers: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
        scrub: 1,
        animation: tl
      });

      

  },[]);


  return (
    <div ref={section} className={style.aboutSticky}>
      <div  className={style.fixedTransition}>
        <div  className={style.fixedTransition__inner}>
          <div ref={fixedTransition} className={style.stickyContainer}>
            <h2 ref={text} className={style.fixedTransition__title}>ABOUT</h2>
          </div>
        </div>
        <section className={`${style.section} ${style['section--about']}`}>
          <div className={style.aboutText}>
            <h2 className={style.sectionTitle}>Who am I.</h2>
            <p ref={paragraph}>
            I specialize in crafting websites to align with your brand identity while captivating and engaging your audience. My goal is to create digital experiences that are both meaningful and memorable, ensuring a lasting impression on every visitor. In addition to front-end development, I also have knowledege in back-end technologies and cloud services.
            </p>
          </div>   
          <Techslider/>
        </section>
      </div>
    </div>
  )
}

export default About