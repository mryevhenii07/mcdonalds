import React,{FC} from 'react'
import {useLocation} from 'react-router-dom';
import delivery from '../../../../image/delivery-main.png';

const DeliveryHeader:FC = () => {
const {pathname} = useLocation()

  return (
    <div>
      <img src={delivery} alt="img" width={1130}/>
    </div>
  )
}

export default DeliveryHeader