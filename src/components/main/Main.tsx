import React,{useState} from 'react'
import s from './Main.module.css';
import mainOne from '../../image/main-1.png';
const Main = () => {

  return (
    <div >
    <div className={s.main} >
        <img src={mainOne} alt="Img" width={1170} height={520}/>
        <div className={s.mainModal}>
            <h2 className={s.mainTitle}>Приготуйтеся до смачненького</h2>
            <p className={s.mainParagraph}>Готові знову смакувати хрусткі креветки та рибку? Тоді саме час зайти в МакДональдз — ми повернули ваші улюблені роли з креветками, Фіш Роли та креветки.</p>
       <div>Y.....Y</div>
        </div>
    </div>
    </div>
  )
}

export default Main