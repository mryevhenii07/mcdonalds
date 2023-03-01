import React from 'react'
import s from './MainApplication.module.css';
import appleImg from '../../image/apple-store.png';
import googlePlay from '../../image/google-play.png';
import app from '../../image/main-app.png';

const MainApplication = () => {
  return (
    <div className={s.mainApp}>
        <div >
            <img src={app} alt="app" className={s.mainAppLeft}/>
        </div>
        <div className={s.wrapAppRight}>
            <h2 className={s.mainAppTitle}>Отримуй знижки та особливі пропозиції</h2>
            <p>Завантажуй додаток МакДональдз.</p>
            <div className={s.wrapApplication}>
                <div ><img className={s.appleImg} src={appleImg} alt="apple img"  /></div>
                <div ><img className={s.googleImg} src={googlePlay} alt="google img" /></div>
            </div>
        </div>
    </div>
  )
}

export default MainApplication