import style from '@/app/assets/scss/style.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';


const Preloader = () => {

  const preloader = useRef('');
  const preloaderText = useRef('');
  const cols = useRef([]);
  const numbersList = useRef();
  const textUpper = useRef();
  const textLower = useRef();
  const textNumber = useRef();  

  const numbers = Array.from({ length: 101 }, (_, i) => (i).toString().padStart(3, '0'));
  
  


  gsap.registerPlugin(useGSAP);

  let tl = gsap.timeline();
  
  useGSAP(() => {
    
    tl.fromTo(textUpper.current, { xPercent: -100, opacity: 0 }, { duration: 1, xPercent: 0, opacity: 1, repeat: 0, delay: 0.1 });
    tl.fromTo(textLower.current, { xPercent: 100, opacity: 0 }, { duration: 1, xPercent: 0, opacity: 1, repeat: 0 }, '<');
    tl.to(textNumber.current, { duration: 1, opacity: 1, repeat: 0 }, '<');

    tl.to(numbersList.current, {
      duration: 2.5,
      yPercent: -12500,
      repeat: 0,
      ease: "expo.inOut",
    });

    tl.to(preloaderText.current, { duration: 1, yPercent: -110, repeat: 0}, '>0.1');
    tl.to(cols.current, { duration: 1, yPercent: -110, repeat: 0, stagger: 0.1 }, '<');
    tl.to(preloader.current, { duration: 1, opacity: 0, display: 'none' });
});
  
  return (
    <div ref={preloader} className={style.preloader}>
      <div ref={preloaderText} className={style.preloader__text}>
        <div className={style.preloader__text__upper}>
          <span ref={textUpper} className={style.text}>Hello</span>
          <span ref={textNumber} className={style.number__container}>&lt;
            <span ref={numbersList} className={style.number}>
            {numbers.map((number, i) => (
              <span key={i} >{number}</span>
            ))}
            </span>
            &gt;
          </span>
        </div>
        <div ref={textLower} className={style.preloader__text__lower}>
          <span  className={style.text}>Welcome!</span>
        </div>

      </div>
      {[...Array(4)].map((_, i) => (
        <span className={style.cols} key={i} ref={el => cols.current[i] = el}></span>
      ))}
    </div>
  )
}

export default Preloader