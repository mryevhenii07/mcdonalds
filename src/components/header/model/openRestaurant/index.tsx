import React from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai';
import mainImg from '../../../../image/openStore-main.png';
import secondaryImg from '../../../../image/openStore-secondary.png';
import SelectSmall from '../selectCountry/SelectCountry';
import s from './OpenRestaurant.module.css';
const OpenRestaurants = () => {
  return (
    <div>
      <img src={mainImg} alt="img" width={1130}/>
      <div className={s.wrapInfo}>
        <h4>Під час повітряної тривоги МакДональдз не працюватиме.<br/>
У разі оголошення повітряної тривоги радимо пройти в безпечне місце.</h4>
<div className={s.localWrap}>
  <div>Оберіть місто закладу</div>
  
  <div className={s.localWrapInput}>   <SelectSmall /></div>

</div>
<div className={s.wrapInput}>
  <input type="checkbox" name="" id="" /> <span>зараз відкриті</span>
  <input type="checkbox" name="" id="" /> <span>працює доставка</span>
</div>
      </div>

      <img src={secondaryImg} alt="img" width={1130} />
    </div>
  )
}

export default OpenRestaurants