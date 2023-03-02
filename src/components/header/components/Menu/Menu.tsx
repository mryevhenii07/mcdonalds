import { FC} from 'react'
import s from './Menu.module.css';
import happyMImg from '../../../../image/happy-m.png';
import macMenuImg from '../../../../image/mac-menu.png';
import chickenImg from '../../../../image/menu-chicken.png';
import coffeImg from '../../../../image/menu-coffe.png';
import disertImg from '../../../../image/menu-disert.png';
import potatoesImg from '../../../../image/menu-potatoes.png';
import rollImg from '../../../../image/menu-roll.png';
import snackImg from '../../../../image/menu-snack.png';
import sodaImg from '../../../../image/menu-soda.png';
import soysImg from '../../../../image/menu-soys.png';



const Menu:FC = () => {
   
  return (
    <div className={s.menu} >
        <div className={s.wrapMenu}>
            <div>
                <div className={s.wrapImgName}>
                    <img src={rollImg} alt="img" width={60}/>
                    <div>Бургери та роли</div>
                </div>
                <div className={s.wrapImgName}>
                    <img src={chickenImg} alt="img" width={60}/>
                    <div>Курка</div>
                </div>
                <div className={s.wrapImgName}>
                    <img src={snackImg} alt="img" width={60}/>
                    <div>Снеки</div>
                </div>
                <div className={s.wrapImgName}>
                    <img src={potatoesImg} alt="img" width={60}/>
                    <div>Картопля</div>
                </div>
               
            </div>
            <div>
            <div className={s.wrapImgName}>
                    <img src={soysImg} alt="img" width={60}/>
                    <div>Соуси</div>
                </div>
            <div className={s.wrapImgName}>
                    <img src={disertImg} alt="img" width={60}/>
                    <div>Десерти</div>
                </div>
            <div className={s.wrapImgName}>
                    <img src={sodaImg} alt="img" width={60}/>
                    <div>Напої</div>
                </div>
            <div className={s.wrapImgName}>
                    <img src={coffeImg} alt="img" width={60}/>
                    <div>Кава</div>
                </div>
            </div>
            <div>
            <div className={s.wrapImgName}>
                    <img src={happyMImg} alt="img" width={60}/>
                    <div>Хеппі Міл</div>
                </div>
                <div className={s.wrapImgName}>
                    <img src={macMenuImg} alt="img" width={60}/>
                    <div>МакМеню</div>
                </div>
            </div>
        </div>
        <div className={s.wrapMenuBtn}><button>Переглянути повне меню</button></div>
        
    </div> 
  )
}

export default Menu