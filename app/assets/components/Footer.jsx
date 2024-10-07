import style from '@/app/assets/scss/style.module.scss';
import FireArt from '@/app/assets/components/FireArt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState} from "react";
import WorldMap from './WorldMap';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__top}>
          <div className={style.footer__top__left}>
          <p>Wherever you are in the world, drop a hello!</p>
          <div className={style.social}>
            <a href="https://www.linkedin.com/in/leo17/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/popey17">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/aungmyat.kyaw.7/">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          </div>
          <div className={style.footer__top__right}>
            <WorldMap/>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <div className={style.logo}>
            Let&rsquo;s Get In Touch
          </div>
          <p>Copyright &copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer