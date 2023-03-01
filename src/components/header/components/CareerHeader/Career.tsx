import React from 'react'
import s from './Career.module.css';
import career from '../../../../image/career.jpg';
const Career = () => {
  return (
    <div className={s.career} >
        <h1>Кар’єра в МакДональдз</h1>
        <div><img src={career} alt="career img" width={1170}/></div>
        <p>МакДональдз – це ресторани у понад 100 країнах. Ми створюємо легкі і чудові моменти для мільярдів наших клієнтів у світі.</p>
        <p>В Україні наші ресторани є вже в 20 містах і мережа постійно зростає. Ми - енергійні, інноваційні й старанні. Щодня працюємо з людьми і для людей.</p>
        <p>Наша родина постійно зростає і ми даємо змогу кожному реалізувати себе.Робота в МакДональдз – це простір для великих ідей і кар’єри.</p>
        <p>Хочеш? У МакДональдз завжди знайдеться місце таланту. </p>

        <div className={s.careerWrapInf}>
            <div>
                <h4>Ресторанні можливості</h4>
                <button className={s.careerBtn}>Дізнатися більше</button>
            </div>
            <div>
            <h4>Офісні можливості</h4>
                <button className={s.careerBtn}>Дізнатися більше</button>
            </div>
        </div>

    </div>
  )
}

export default Career