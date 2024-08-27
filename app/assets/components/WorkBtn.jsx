'use client'
import { useRef, useEffect } from 'react';
import Link from "next/link";
import style from '@/app/assets/scss/style.module.scss';
import SplitType from 'split-type';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const WorkBtn = ({ children, href }) => {
  const btnText = useRef();

  useGSAP(() => {
    const splitText = new SplitType(btnText.current);

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.05 , paused: true });

    tl.to(splitText.chars, {
      scale: 1.2,
      y: -10,
      duration: 0.3,
      ease: "power3.out",
      stagger: {
        each: 0.05,
      },
    }).to(splitText.chars, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: {
        each: 0.05,
        from: "start",
      },
    }, 0.1);

    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.pause(0);
    };

    const btnElement = btnText.current;
    btnElement.addEventListener('mouseenter', handleMouseEnter);
    btnElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnElement.removeEventListener('mouseenter', handleMouseEnter);
      btnElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  return (
    <div ref={btnText} className={style.btn}>
      <Link href={href}>
        {children}
      </Link>
    </div>
  );
};

export default WorkBtn;
