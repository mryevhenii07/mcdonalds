import React from 'react'
import s from './QualityHeader.module.css';
import mainImg from '../../../../image/quality-main.png';
import leftImg from '../../../../image/quality-left.png';
import rightImg from '../../../../image/quality-right.png';
const QualityHeader = () => {
  return (
    < >
        <h1 className={s.title}>Правила безпеки під час повітряної тривоги</h1>
        <div className={s.wrapImgMain}><img src={mainImg} alt="img" width={1000} height={400}/></div>
        <p className={s.paragraph}>Шановні гості, під час повітряної тривоги або за відсутності електроенергії МакДональдз не працюватиме — всі мають покинути заклад. Задля вашої безпеки після оголошення повітряної тривоги радимо пройти в безпечне місце. Інформацію про розташування найближчих укриттів дивіться на вхідних дверях закладів.</p>
        <p  className={s.paragraph}>Після завершення тривоги чи відновлення постачання електроенергії нам потрібен час, щоб налаштувати обладнання та підготуватися до відкриття.</p>
        <p  className={s.paragraph}>Наші заклади можуть відкриватися пізніше, ніж зазвичай, для виконання складніших робіт, пов’язаних з обслуговуванням обладнання та генеральним прибиранням закладу.</p>
        <p  className={s.paragraph}>Із турботою, ваш МакДональдз</p>
        <div className={s.wrapInfo}>
          <div>
            <img src={leftImg} alt="img" width={550}/>
            <h2>Гігієна в ресторанах</h2>
            <p>Щоб гарантувати вашу безпеку, ми дотримуємося українських і світових вимог, а крім того, розробили власні взірцеві стандарти якості, чистоти й безпечності та постійно їх посилюємо.</p>
            <button className={s.qualityBtn}>Дізнатись більше</button>
          </div>
          <div>
            <img src={rightImg} alt="img" width={550}/>
            <h2>Якість продукції</h2>
            <p>Ми завжди виступаємо за інновації в харчовій промисловості. А ще - за відповідальне ставлення постачальників до своєї роботи. Наша компанія прагне, щоби все, що ми спільно робимо, не шкодило планеті.</p>
            <button className={s.qualityBtn}>Дізнатись більше</button>
          </div>
<div className={s.wrapSumInfo}> <div className={s.line}></div>
          <p >* 2019 року наші ресторани відвідала рекордна кількість клієнтів — 110 млн.</p>
          </div>
      
        </div>
    </>
  )
}

export default QualityHeader