import style from '@/app/assets/scss/style.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';


const Preloader = () => {

  const preloader = useRef('');
  const cols = useRef([]);


  gsap.registerPlugin(useGSAP);

  let tl = gsap.timeline();
  // console.log(cols.current);
  
  // let cols = gsap.utils.toArray(col.current);
  
  useGSAP(() => {

    
    tl.to(cols.current, {duration: 1, yPercent: -110, stagger: 0.1, repeat: 0, delay: 1.5});
    tl.to(preloader.current, {duration: 3, opacity: 0, delay: 1.5, display: 'none'});
});
  
  return (
    <div ref={preloader} className={style.preloader}>
      {[...Array(4)].map((_, i) => (
        <span key={i} ref={el => cols.current[i] = el}></span>
      ))}
    </div>
  )
}

export default Preloader