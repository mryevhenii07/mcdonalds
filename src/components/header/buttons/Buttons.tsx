import React from 'react'
import {AiOutlineDown} from 'react-icons/ai';

import s from './Buttons.module.css';

// const buttons =["Меню","McDelivery","Мобільний додаток","Стратегія впливу"Якість та гігієна","Кар'єра"]
const Buttons = () => {
return (
<>
        <button className={s.navButtons}>Меню <AiOutlineDown/></button>
        <button className={s.navButtons}>McDelivery</button>
        <button className={s.navButtons}>Мобільний додаток</button>
        <button className={s.navButtons}>Стратегія впливу</button>
        <button className={s.navButtons}>Якість та гігієна</button>
        <button className={s.navButtons}>Кар'єра</button></>
)
}

export default Buttons

export {}