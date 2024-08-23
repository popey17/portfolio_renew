"use client"
import style from '@/app/assets/scss/style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faAws, faCss3, faJs, faPhp, faGitAlt, faReact, faLaravel} from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import NextIcon from  "@/public/assets/img/common/icon_nextJs.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const TechSlider = () => {

  const sliderContainer = useRef(null);
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);

  let direction = 1;
  let xPercent = 0;

  gsap.registerPlugin(useGSAP);

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }

    else if(xPercent > 0){
      xPercent = -100;
    }

    gsap.set(firstSlider.current, {xPercent: xPercent})
    gsap.set(secondSlider.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  }
  

  useGSAP(() => {
    gsap.set(firstSlider.current, {left: secondSlider.current.getBoundingClientRect().width})
    requestAnimationFrame(animate);
  },[]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderContainer.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        // end: window.innerHeight,
        onUpdate: e => direction = e.direction * 1
      }
    })

    requestAnimationFrame(animate);
  },[]);


  return (
    <div className={style.techSlider__container}>
      <div ref={sliderContainer} className={style.techSlider}>
        <div ref={secondSlider} className={style.techSlider__item}>
          <div><span><FontAwesomeIcon icon={faHtml5} />Html</span></div>
          <div><span><FontAwesomeIcon icon={faCss3} />CSS</span></div>
          <div><span><FontAwesomeIcon icon={faJs} />JS</span></div>
          <div><span><FontAwesomeIcon icon={faPhp} />PHP</span></div>
          <div><span><FontAwesomeIcon icon={faGitAlt} />Git</span></div>
          <div><span><FontAwesomeIcon icon={faReact} />React</span></div>
          <div><span><Image src={NextIcon} width={35} height={35} alt=''/>Next Js</span></div>
          <div><span><FontAwesomeIcon icon={faLaravel} />Laravel</span></div>
          <div><span><FontAwesomeIcon icon={faAws} />AWS</span></div>
        </div>
        <div ref={firstSlider} className={style.techSlider__item}>
          <div><span><FontAwesomeIcon icon={faHtml5} />Html</span></div>
          <div><span><FontAwesomeIcon icon={faCss3} />CSS</span></div>
          <div><span><FontAwesomeIcon icon={faJs} />JS</span></div>
          <div><span><FontAwesomeIcon icon={faPhp} />PHP</span></div>
          <div><span><FontAwesomeIcon icon={faGitAlt} />Git</span></div>
          <div><span><FontAwesomeIcon icon={faReact} />React</span></div>
          <div><span><Image src={NextIcon} width={35} height={35} alt=''/>Next Js</span></div>
          <div><span><FontAwesomeIcon icon={faLaravel} />Laravel</span></div>
          <div><span><FontAwesomeIcon icon={faAws} />AWS</span></div>
        </div>
      </div>
    </div>
  )
}

export default TechSlider