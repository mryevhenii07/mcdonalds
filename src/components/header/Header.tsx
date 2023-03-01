import {FC} from 'react'
import s from './Header.module.css';
import logo from '../../image/logo-header.png';
import {IoLocationSharp,IoSearchOutline} from 'react-icons/io5';
import Buttons from './buttons/Buttons';



 const Header:FC = () => {
  return (
    <div className={s.header}>
        <div className={`${s.headerWrap} ${s.gridInit } ${s.grid } `}>

            <div className={`${s.wrapLogo} ${s.boxInit } ${s.box } ${s.lLogo }`}>  <img src={logo} alt="Logo" width={70} height={60} /></div>
            <div className={` ${s.boxInit } ${s.box } ${s.lSection }`}>
                <div>Відкриті ресторани</div>
                <div className={s.wrapSearchLocation}>
                    <button className={s.search}><IoSearchOutline className={s.searchIcon}/> Пошук</button>
                    <button className={s.location}><IoLocationSharp className={s.locationIcon}/>Знайти нас</button>
                </div>
            </div>
            <nav className={` ${s.boxInit } ${s.box } ${s.lNav }`}>
            <Buttons/>
            </nav>
        </div>
    </div>
  )
}

export default Header