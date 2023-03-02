import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';
import { Link } from 'react-router-dom';


import s from './Buttons.module.css';

// const buttons =["Меню","McDelivery","Мобільний додаток","Стратегія впливу"Якість та гігієна","Кар'єра"]
const Buttons = () => {
        
return (
<>
        <button className={s.navButtons}>Menu <AiOutlineDown/></button>
        <Link to="delivery" className={s.navButtons}>McDelivery</Link>
        <Link to="application" className={s.navButtons}>Мобільний додаток</Link>
        <Link to="strategy" className={s.navButtons}>Стратегія впливу</Link>
        <Link to="quality" className={s.navButtons}>Якість та гігієна</Link>
        <Link to="career" className={s.navButtons} >Кар'єра</Link></>
)
}

export default Buttons

export {}