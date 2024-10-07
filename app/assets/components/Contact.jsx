'use client';
import { useRef } from 'react';
import React from 'react'
import style from '@/app/assets/scss/style.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei'
import { MeshLambertMaterial } from 'three';
import Image from 'next/image';
import WorldMap from './WorldMap';



const Contact = () => {

  const section = useRef();

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    // ScrollTrigger.create({
    //   trigger: section.current,
    //   pin: section.current,
    //   start: "top top",
    //   // markers: true,
    //   end: "+=500",
    // });

  }, []);



  return (
    <section ref={section} className={`${style.section} ${style['section--contact']}`}>
      <div className={style.section__inner}>
        <div className={style.map__container}>
        </div>
      </div>
    </section>
  )
}

export default Contact