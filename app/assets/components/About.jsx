"use client";
import style from '@/app/assets/scss/style.module.scss';
import useMousePosition from '@/app/assets/utils/useMousePosition';
import { useState , useRef } from 'react';
import { motion } from 'framer-motion';
import Techslider from '@/app/assets/components/Techslider';
function About() {

  const target = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition(target);
  const size = isHovered ? 500 : 40;


  return (
    <section className={`${style.section} ${style['section--about']}`}>
      <motion.div ref={target}
        className={style.aboutMaskText}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
        >
        <p className={style.sectionTitle}>Who</p>
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        I was a <span>medical student</span> with training in areas such as human anatomy, physiology, pharmacology, and clinical diagnostics. 
        </p>
      </motion.div>
      <div className={style.aboutText}>
        <h2 className={style.sectionTitle}>Who am I.</h2>
        <p>
        I&apos;am a <span>web developer</span> with a passion for creating visually compelling websites. I am also have knowledge in backend and cloud services.
        </p>
        <Techslider/>
      </div>   
    </section>
  )
}

export default About