import React from 'react'
import delivery from '../../image/delivery-info.png';
import exclamation from '../../image/exclamation.jpg';
import s from './SafeInfo.module.css';
const SafeInfo = () => {
  return (
    <div className={s.wrapSafe}>
        <div >
          <div className={s.imgBlockLeft}> <img className={s.imgExclamation} src={exclamation} alt="img safe" width={400} height={400}/></div> 
        <h2>Правила безпеки</h2>
        <p>Шановні гості, під час повітряної тривоги або за відсутності електроенергії МакДональдз не працюватиме. Після завершення тривоги чи відновлення постачання електроенергії нам потрібний час, щоб відкрити заклади.</p>
        <button  className={s.safeBtn}>Детальніше</button>
        </div>
        <div className={s.wrapRightBlock}>
            <img src={delivery} alt="img safe" width={570} height={410}/>
            <h2>Доставляємо улюблене</h2>
            <p>Вам більше не доведеться виходити з дому, щоб насолоджуватися вашими улюбленими стравами. Отримайте їх разом з нашим безконтактним McDelivery.</p>
       <button className={s.safeBtn}>Детальніше</button>
        </div>
        
    </div>
  )
}

export default SafeInfo