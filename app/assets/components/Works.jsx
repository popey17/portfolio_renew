"use client";
import style from '@/app/assets/scss/style.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import workImg1 from '@/public/assets/img/page/img_work01.jpg';
import workImg2 from '@/public/assets/img/page/img_work02.jpg';
import workImg3 from '@/public/assets/img/page/img_work03.jpg';
import workImg4 from '@/public/assets/img/page/img_work04.jpg';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import WorkBtn from './WorkBtn';


function Work() {
  const workImg = useRef([]);
  const work = useRef(null);
  const titleLeft = useRef(null);
  const titleRight = useRef(null);
  const sectionTitle = useRef();

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(titleRight.current, { x: 200 });
    tl.from(titleLeft.current, { x: -200 }, '<');

    ScrollTrigger.create({
      trigger: sectionTitle.current,
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2,
      // markers: true,
      animation: tl
    });
  },[]);

  useGSAP(() => {
    const images = gsap.utils.toArray(workImg.current);
    
    gsap.to(images, {
      scrollTrigger: {
        trigger: work.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true
      },
      clipPath: 'inset(0% 0% 100% 0%)',
      stagger: 0.5
    })
  },[]);


  

  
  return (

    <section className={`${style.section} ${style['section--work']}`} id='work'>
      <div className={style.section__inner}>
        <h2 ref={sectionTitle} className={style.sectionTitle}>
          <span ref={titleLeft}>My</span>&nbsp;<span ref={titleRight}>Works</span>
        </h2>
        <div className={style.work__Container}>
          <div ref={work} className={style.work}>
            <div className={style.work__left}>
              <div className={style.work__left__item}>
                <p className={style.title}>
                  3js Explode Text
                </p>
                <div className={style.btnContainer}>
                  <WorkBtn href='#' >Demo</WorkBtn>
                  <WorkBtn href='#' >Source Code</WorkBtn>
                </div>
              </div>
              <div className={style.work__left__item}>
                <p className={style.title}>
                  Awward Winning <br/>Image Reveal
                </p>
                <div className={style.btnContainer}>
                <WorkBtn href='#' >Demo</WorkBtn>
                <WorkBtn href='#' >Source Code</WorkBtn>
                </div>
              </div>
              <div className={style.work__left__item}>
                <p className={style.title}>
                  3js Dragon
                </p>
                <div className={style.btnContainer}>
                <WorkBtn href='#' >Demo</WorkBtn>
                <WorkBtn href='#' >Source Code</WorkBtn>
                </div>
              </div>
              <div className={style.work__left__item}>
                <p className={style.title}>
                  Patient Record<br/> System
                </p>
                <div className={style.btnContainer}>
                <WorkBtn href='#' >Demo</WorkBtn>
                <WorkBtn href='#' >Source Code</WorkBtn>
                </div>
              </div>
            </div>
            <div className={style.work__right}>
              <figure ref={(el) => (workImg.current[0] = el)} className={style.work__right__item}>
                <Image src={workImg1} alt="work" />
              </figure>
              <figure ref={(el) => (workImg.current[1] = el)} className={style.work__right__item}>
                <Image src={workImg2} alt="work" />
              </figure>
              <figure ref={(el) => (workImg.current[2] = el)} className={style.work__right__item}>
                <Image src={workImg3} alt="work" />
              </figure>
              <figure className={style.work__right__item}>
                <Image src={workImg4} alt="work" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work