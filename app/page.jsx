'use client';
import style from '@/app/assets/scss/style.module.scss';
import Lenis from "lenis";
import { useEffect, useRef, useState} from "react";
import Nav from "@/app/assets/components/Nav";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Work from "./assets/components/Works";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import { Preload } from '@react-three/drei';
import Preloader from './assets/components/Preloader';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Home() {

  const [heroScroll, setHeroScroll] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(heroScroll);
  
  const main = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: main.current,
      start: "top top",
      end: "bottom 20%",
      onUpdate: (self) => {
        let scrollPercentage = self.progress * 100;
        setHeroScroll(scrollPercentage);
      }
    });
  });

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setTimeout( () => {
      setIsLoading(false);
    }, 5000)
  }, []);


  return (
    <div ref={main}>
    <Nav heroScroll={heroScroll} />
    <motion.main className={style.main}>
      {isLoading && <Preloader/>}
      {/* <Preloader /> */}
      <Hero/>
      <About />
      <Work />
      <Contact />
      {heroScroll> 62 && <Footer />}

    </motion.main>
    </div>
  );
}
