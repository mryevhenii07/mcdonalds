import React,{FC} from 'react'
import {IRestaurantAddress} from '../../../../interface/interface';
import s from './ItemCity.module.css';
interface PropsItem extends IRestaurantAddress{

}

const ItemCity:FC<PropsItem> = ({id,city,street,time,open,delivery,generator}) => {
  return (
    <div className={s.city}>  {city}</div>
  )
}

export default ItemCity