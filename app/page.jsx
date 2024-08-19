'use client';
import Image from "next/image";
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



export default function Home() {

  const [heroScroll, setHeroScroll] = useState();
  console.log(heroScroll);
  

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
    <Nav heroScroll={heroScroll} />
    <motion.main className={style.main}>
      <Hero setHeroScroll={setHeroScroll}/>
      <About />
      <Work />
      <Contact />
      {heroScroll> 0.5 && <Footer />}

    </motion.main>
    </>
  );
}
