import React from 'react'
import { Link } from 'react-router-dom';
import s from '../style/page/appBar.module.css';
import macMenu from '../image/mac-menu.png';
import chickenImg from '../image/menu-chicken.png';
import coffeeImg from '../image/menu-coffe.png';
import dissertsImg from '../image/menu-disert.png';
import potatoesImg from '../image/menu-potatoes.png';
import sneckImg from '../image/menu-snack.png';
import rollImg from '../image/menu-roll.png';
import sodaImg from '../image/menu-soda.png';
import soysImg from '../image/menu-soys.png';
const AppBar = () => {
  return (
    <div className={s.wrap}>

    <div className={s.blockLeft}>

    <div className={s.blockLeftFirstMenu} >
        <div className={s.wrapLeftImgName}>
        <Link to='/menu' className={s.titleBlockLeft}>Menu</Link>
        <img src={macMenu} alt="img" width={70}/>
        </div>
    </div>

    <div className={s.blockLeftSecondMenu}>
    <div className={s.wrapLeftImgName}> 
        <Link to='/menu/burgers' className={s.titleBlockLeft}>Roll and Burgers</Link>
        <img src={rollImg} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Chicken</p>
        <img src={chickenImg} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Coffee</p>
        <img src={coffeeImg} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Disserts</p>
        <img src={dissertsImg} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Potatoes</p>
        <img src={potatoesImg} alt="img" width={70} />
    </div>
   
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Snack</p>
        <img src={sneckImg} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Soda</p>
        <img src={macMenu} alt="img" width={70} />
    </div>
    <div className={s.wrapLeftImgName}> 
        <p className={s.titleBlockLeft}>Soys</p>
        <img src={soysImg} alt="img" width={70} />
    </div>
  

    </div>
    </div>

    <div className={s.blockRight}> 
      <h1>Бургери та роли</h1>
      </div>
   
    <div></div>
  </div>
  )
}

export default AppBar