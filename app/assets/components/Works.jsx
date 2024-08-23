"use client";
import style from '@/app/assets/scss/style.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import workImg from '@/public/assets/img/common/200x133.png';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Work() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const flipCard = () => {
      const randomIndex = Math.floor(Math.random() * 12); 
      setFlippedIndex(randomIndex);
    };

    flipCard();
    const intervalId = setInterval(flipCard, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  const work = useRef();


  gsap.registerPlugin(useGSAP);

  
  return (

    <section ref={work} className={`${style.section} ${style['section--work']}`} id='work'>
      <div className={style.section__inner}>
        <h2 className={style.sectionTitle}>My Works</h2>
        <div className={style.work}>
        {[...Array(12)].map((_, index) => (
            <div key={index} className={style.work__item}>
              <div className={`${style.work__item__inner} ${flippedIndex === index ? style.flipped : ''}`}>
                <div className={style.front}>Front</div>
                <div className={style.back}>
                  <Image src={workImg} alt="work" width={200} height={133} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work