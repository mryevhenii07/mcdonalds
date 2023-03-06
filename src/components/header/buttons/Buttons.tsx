import React,{FC,useState} from 'react'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu/Menu';


import s from './Buttons.module.css';

// const buttons =["Меню","McDelivery","Мобільний додаток","Стратегія впливу"Якість та гігієна","Кар'єра"]
const Buttons:FC = () => {
const[isOpen,setIsOpen]=useState<boolean>(false)

const onIsOpen =()=>{
        setIsOpen(!isOpen)
}
return (
<><div>    <button className={s.navButtons} onClick={onIsOpen}>Menu <div className={s.wrapIconsMenu}>{isOpen ? <AiOutlineDown/> : <AiOutlineUp/>}</div>   </button>
        <Link to="delivery" className={s.navButtons}>McDelivery</Link>
        <Link to="application" className={s.navButtons}>Мобільний додаток</Link>
        <Link to="strategy" className={s.navButtons}>Стратегія впливу</Link>
        <Link to="quality" className={s.navButtons}>Якість та гігієна</Link>
        <Link to="career" className={s.navButtons} >Кар'єра</Link>
        </div>
        {isOpen && <Menu />} 
        </>
    
)
}

export default Buttons

export {}