import  React,{FC, useState,useEffect} from 'react';
import axios from 'axios';
import ItemCity from '../itemCity/ItemCity';
import {IRestaurantAddress} from '../../../../interface/interface';
import s from './ListCity.module.css';
  const ListCity:FC = ()=> {
 const [cityRest,setCityRest]=useState([])
 const [isOpen,setIsOpen]=useState<boolean>(false)

 const onOpen =()=>{
    setIsOpen(!isOpen)
 }

 useEffect(()=>{
     axios.get(`https://628f5e0d0e69410599db2da5.mockapi.io/mac`).then((res) => setCityRest(res.data) )
 },[])
console.log(cityRest);

  return (
<div className={s.localWrap} >
<div className={s.selectCity} onClick={onOpen}>Оберіть місто закладу</div>
<div className={s.localWrapInput}> 

    {isOpen && <div className={s.listCity}>
    {cityRest.map((res:any) =><ItemCity key={res.id} {...res}/>)}
</div>}

    </div>
    </div> 
);
}

export default ListCity


