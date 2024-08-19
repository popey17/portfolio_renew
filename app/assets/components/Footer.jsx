import style from '@/app/assets/scss/style.module.scss';


const Footer = () => {
  return (
    <div className={style.footer}>

      <div className={style.footer__inner}>
        <div className={style.footer__top}>
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