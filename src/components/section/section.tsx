import {FC} from 'react'
import s from './section.module.css';

interface childrenProps {
    children: JSX.Element;
}
const Section:FC<childrenProps> = ({children}) => {
  return (
    <div className={s.section}>{children}</div>
  )
}

export default Section