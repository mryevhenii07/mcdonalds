import React,{FC} from 'react'
import {IoLocationSharp,IoSearchOutline} from 'react-icons/io5';
import Buttons from './buttons/Buttons';
import { Link,useLocation } from 'react-router-dom';

import Modal from './model/Modal';
import s from './Header.module.css';
import logo from '../../image/logo-header.png';


const Header:FC = () => {
const {pathname} = useLocation()

return (
    <>
    {pathname !== '/open' && ( 
    <div className={s.header}>
    <div className={`${s.headerWrap} ${s.gridInit } ${s.grid } `}>
        <Link to="/mcdonalds" className={`${s.wrapLogo} ${s.boxInit } ${s.box } ${s.lLogo }`}>  <img src={logo} alt="Logo" width={70} height={60} /></Link>
        <div className={` ${s.boxInit } ${s.box } ${s.lSection }`}>
            <Modal/>  <div className={s.wrapSearchLocation}>
                <button className={s.search}><IoSearchOutline className={s.searchIcon}/> Пошук</button>
                <button className={s.location}><IoLocationSharp className={s.locationIcon}/>Знайти нас</button>
            </div>
        </div>
        <nav className={` ${s.boxInit } ${s.box } ${s.lNav }`}>
        <Buttons/>
        </nav>
    </div>
</div>
    )}
   
   
    </>
  )
}

export default Header