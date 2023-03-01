import React from 'react'
import s from './Footer.module.css';
import appleStore from '../../image/apple-store.png';
import goooglePlay from '../../image/google-play.png';
import logoFooter from '../../image/logo-header.png';

import {FaFacebookF,FaTiktok,FaYoutube,FaTwitter,FaInstagram} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.footerContact}>
            <div>
                <h3>МакДональдз® в Україні</h3>
                <div>Зворотний зв'язок</div>
                <div>Знайти нас</div>
                <div>Тендери</div>
            </div>
            <div>
                <h3>Кар'єра</h3>
                <div>Кар'єра</div>
                <div>Запитання та відповіді</div>
                <div>Зарплатний калькулятор</div>
            </div>
            <div>
                <h3>Стратегія впливу</h3>
                <div>Стратегія впливу</div>
                <div>Фундація Рональда МакДональда</div>
                <div>Бережемо планету</div>
                <div>Робочі місця</div>
            </div>
            <div>
                <h3>Якість та гігієна</h3>
                <div>Якість та гігієна</div>
                <div>Гігієна в ресторанах</div>
                <div>Гігієна в ресторанах</div>
            </div>
        </div>
        <div className={s.wrapFooterMessenger}>
            <div className={s.wrapBtnIcons}>
                <button><FaFacebookF size={16}/></button>
                <button><FaTiktok size={16}/></button>
                <button><FaYoutube size={16}/></button>
                <button><FaTwitter size={16}/></button>
                <button><FaInstagram size={16}/></button>
            </div>
            <div >
                <img className={s.googleImg} src={appleStore} alt="img" />
                <img className={s.appleImg} src={goooglePlay} alt="img" />
            </div>
        </div>

        <div className={s.wrapFooterInfo}>
            <div className={s.wrapFooterInfoLeft}>
                <div>Політика конфіденційності</div>
                <div>Положення та умови</div>
            </div>
            <div>
                <div>
      <img src={logoFooter}  alt="img" width={15} height={15}/>
      <span className={s.footerImg}>Усi права захищенi ©2023 МакДональдз®</span> 
       </div>

            </div>
        </div>
    </div>
  )
}

export default Footer