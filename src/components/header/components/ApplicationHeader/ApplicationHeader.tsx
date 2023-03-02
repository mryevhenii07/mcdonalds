import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMicrophone} from 'react-icons/fa';
import mainImg from '../../../../image/application-main.png';
import gr from '../../../../image/GR-app.png';

import s from './ApplicationHeader.module.css';
const ApplicationHeader = () => {
  return (
    <div>
      <h1>Мобільний додаток МакДональдз</h1>
      <img src={mainImg} alt="img" width={1130}/>
      <div className={s.wrapBtn}>
        <button >Як завантажити додаток?</button>
        <button>Як зареєструватися в додатку?</button>
        <button>Як скористатися пропозиціями?</button>
      </div>

      <h2 >Як завантажити додаток?</h2>

      <div>
        <div></div>
        <div className={s.wrapGr}>
         
          <div className={s.wrapSearch}>
            <div className={s.search}><AiOutlineSearch/> 
            <p>mcdonald's download app |</p>
            </div> 
              <FaMicrophone/>
              </div>
              <div className={s.gr}>
                <img src={gr} alt="img" width={200} />
              <p>Або відскануй QR код</p>
              </div>
               
        </div>

      </div>
    </div>
  )
}

export default ApplicationHeader