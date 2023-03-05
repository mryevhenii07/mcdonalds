import  React,{FC, useState} from 'react';
import ItemCity from '../itemCity/ItemCity';
import s from './ListCity.module.css';
  const SelectCity:FC = ()=> {
 const [cityRest,setCityRest]=useState(restaurant)
 const [isOpen,setIsOpen]=useState<boolean>(false)

 console.log(cityRest);
 const onOpen =()=>{
    setIsOpen(!isOpen)
 }

  return (

    <div className={s.localWrap} >

  <div className={s.selectCity} onClick={onOpen}>Оберіть місто закладу</div>

  <div className={s.localWrapInput}> 
    {isOpen && <div className={s.listCity}>
    {cityRest.map((res) =><ItemCity {...res}/>)}
   
</div>}
  
    </div>
    </div> 

   
  );
}

export default SelectCity


const restaurant = [
    {
        id: Date.now(),
        city: "Харків",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Рівне",
        street: "Маркс 9",
        time: "09:00-21:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Львів",
        street: "Перемога 99",
        time: "08:00-19:30",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Одеса",
        street: "Карпа 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Чернігів",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Донецьк",
        street: "Міра 99",
        time: "09:00-19:00",
        open: true,
        delivery: true,
        generator: true,
    },
    {
        id: Date.now(),
        city: "Київ",
        street: "Ломоносова 199",
        time: "09:00-12:00",
        open: true,
        delivery: true,
        generator: true,
    }
]