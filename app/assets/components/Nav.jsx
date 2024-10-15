import style from '@/app/assets/scss/style.module.scss';
import data from '@/app/assets/data/data.json';
import Mainlogo from './Mainlogo';



function Nav({heroScroll}) {
    
  return (
    <header className={`${style.header} ${(heroScroll > 8.9 && heroScroll < 43.5) ? style['header--white'] : ''}`}>
      <div className={style.header__logo}>
        <h1 className={style.header__logo__left}>
          <Mainlogo/>
          Aung Myat Kyaw
        </h1>
        <span className={style.header__logo__right}>
          <span className={style.top}>
            ung
          </span>
          <span className={style.bot}>
            myat
          </span>
        </span>
      </div>
      <div className={style.header__location}>
        I am currently in<br/> <span>{data.location}</span>
      </div>
      <div className={style.header__hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Nav