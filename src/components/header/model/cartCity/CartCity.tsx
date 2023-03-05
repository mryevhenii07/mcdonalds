import React from 'react'
import {useParams} from 'react-router-dom';
import s from './cartCity.module.css';

const CartCity = () => {
    const params = useParams()
    console.log(params);
    
  return (
    <div>CartCity</div>
  )
}

export default CartCity