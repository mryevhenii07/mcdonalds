import React from 'react'
import s from './StrategyHeader.module.css';
import strategy from '../../../../image/strategy.png';
import strategyOne from '../../../../image/strategy-1.png';
import strategyTwo from '../../../../image/strategy-2.png';
import strategyThree from '../../../../image/strategy-3.png';
const StrategyHeader = () => {
  return (
    <div className={s.wrapStrategy}>
      <h1>Стратегія впливу</h1>
<img src={strategy} alt="img"  width={1130}/>
<h2>Ми тут - до ваших послуг</h2>
<p>Ще ніколи громади не були такими важливими. А McDonald’s завжди там – де громада. До нас звертаються у пошуку роботи, коли опиняються в незнайомому місті, коли потребують затишного куточку й гарячої страви.</p>
<p>Ми не просто обслуговуємо відвідувачів, частуючи їх Біг-Маками, ми віддано служимо нашим працівникам, клієнтам, партнерам, постачальникам і кожному із громади, хто до нас причетний. Тому зараз, коли українці як ніколи потребують підтримки, ми зі ще більшою силою працюємо, щоб допомогти громадам.</p>
<p>З першого дня повномасштабної війни на потреби населення ми передали більше 700 тонн продукції на понад 130 мільйонів гривень, працівники МакДональдз разом із Фундацією Дім Рональда МакДональда започаткували програми підтримки сімей і лікарень, які постраждали через війну. Наші працівники активно волонтерять в програмах Фундації, використовуючи для цього увесь свій досвід та експертизу, здобуту в МакДональдз.</p>
<p>Ми беремо на себе зобов’язання, що забезпечать підтримку наших громад у складний час тепер і в майбутньому. Ми працюємо, аби потішити українців улюбленими стравами, аби підтримати наших працівників і партнерів, аби працювати, щоб сплачувати податки і підтримувати економіку країни.</p>
<p>Дивлячись у майбутнє, ми маємо амбіцію зробити значно більше. З цієї причини ми продовжуємо зосереджувати зусилля на чотирьох напрямах:</p>
  <ul>
    <li><a href="#">Якість їжі і джерела постачання</a> ;</li>
    <li>Збереження нашої планети;</li>
    <li>Підтримка громад;</li>
    <li>Робочі місця, рівність та розширення можливостей.</li>
  </ul>
    <div className={s.wrapBlockInfo}>
    <div>
      <img src={strategyOne} alt="img" width={350}/>
      <h2>Фундація Дім Рональда МакДональда</h2>
      <p>Присутність батьків у лікарні допомагає дітям успішніше боротися з хворобою. З підтримкою рідних нам усе вдається краще. Тільки рідні можуть дати тепло та відчуття безпеки.</p>
      <button className={s.strategyBtn}>Дізнатись більше</button>
    </div>
    <div>
      <img src={strategyTwo} alt="img" width={350}/>
      <h2>Збереження планети для нас у пріоритеті</h2>
      <p>Ми виступаємо рушійною силою із захисту клімату та навколишнього середовища й прискорюємо провадження рішень із багаторазового використання. </p>
      <button className={s.strategyBtn}>Дізнатись більше</button>
    </div>
    <div>
      <img src={strategyThree} alt="img" width={350}/>
      <h2>Робочі місця, рівність та розширення можливостей</h2>
      <p>Ми створюємо можливості для навчання та здобуття професійних навичок у громадах, де працюємо, – через посилення рівності та причетності до всього нашого бізнесу.</p>
      <button className={s.strategyBtn}>Дізнатись більше</button>
    </div>
   </div>
    </div>
  )
}

export default StrategyHeader