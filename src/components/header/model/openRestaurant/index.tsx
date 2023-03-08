import React,{FC} from 'react'

import mainImg from '../../../../image/openStore-main.png';
import secondaryImg from '../../../../image/openStore-secondary.png';
import ListCity from '../listCity/ListCity';
import s from './OpenRestaurant.module.css';

const OpenRestaurants:FC = () => {
  return (
    <div>
      <img src={mainImg} alt="img" width={1130}/>
      <div className={s.wrapInfo}>
        <h4>Під час повітряної тривоги МакДональдз не працюватиме.<br/>
У разі оголошення повітряної тривоги радимо пройти в безпечне місце.</h4>
<div className={s.wrapCity}>
  

<div className={s.wrapInput}>
  <input type="checkbox" name="" id="" /> <span>зараз відкриті</span>
  <input type="checkbox" name="" id="" /> <span>працює доставка</span>
</div>
<ListCity />
</div>
 
      </div>

      <img src={secondaryImg} alt="img" width={1130} />
    </div>
  )
}

export default OpenRestaurants