import React from 'react'
import s from './InfoWork.module.css';
import imgLeft from '../../image/work-info-1.png';
import imgCenter from '../../image/work-info-2.png';
import imgRight from '../../image/work-info-3.png';
const InfoWork = () => {
  return (
    <div className={s.wrapInfoWork}>

        <div>
        <img src={imgLeft} alt="img" width={370} height={160}/>
        <div className={s.wrapInfo}> 
        <h2>Робота в МакДональдз</h2>
        <p className={s.infoWorkParagraph}>У нас ти зможеш поєднувати навчання й роботу, зустрічатися із друзями та мати вдосталь часу для родини!</p>
        <button className={s.infoWorkBtn}>Детальніше</button>
       
        </div></div>

        
        <div>
        <img src={imgCenter} alt="img" width={370} height={160}/>
        <div className={s.wrapInfo}>
        <h2>Іграшки в Хеппі Міл</h2>
        <p className={s.infoWorkParagraph}>Коли ваші діти насолоджуються смачною та збалансованою їжею, вам це також сподобається.</p>
        <button className={s.infoWorkBtn}>Детальніше</button>
        </div></div>
      
        <div>
        <img src={imgRight} alt="img" width={370} height={160}/>  <div className={s.wrapInfo}>
        <h2>  МакДональда в Україні</h2>
        <p className={s.infoWorkParagraph}>Фундація працює в Україні з 2016 року й утілює програми, що покращують здоров’я дітей.</p>
        <button className={s.infoWorkBtn}>Детальніше</button>
        </div></div>
    </div>
  )
}

export default InfoWork