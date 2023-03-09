
import React,{useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

import {IRestaurantAddress} from '../interface/interface';
import s from '../style/page/fullCity.module.css';
import kiyvImg from '../image/kiyv.jpg';

const  FullCity = ()=>{
  const[city,setCity]=useState<IRestaurantAddress>()
    const {cityId} = useParams()
    
    useEffect(()=>{
      async function fetchCity() {
    try{ 
      const {data} = await axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/mac/` + cityId);
      setCity(data)
      }
        catch(error){ console.log(error)}
      }

      fetchCity()
  },[cityId])


    if(!city){ 
      return  <div>Loading</div>
    }
  return (

    <div className={s.wrap}>
      <div className={s.leftBlock}>
        <div> {city.city}  </div>
        <div>{city.street}  </div>
        <div>{city.time}  </div>

      </div>
          <div className={s.rightBlock}
          >
            <img src={kiyvImg} alt="img" width={750}/>
          </div>

        <Link className={s.btn} to='/open'>Назад</Link>
    </div>
  )
}

export default FullCity

