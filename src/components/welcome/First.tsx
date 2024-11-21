import { FunctionalComponent } from 'vue';
import pig from "../../assets/icons/pig.svg"
import s from './Welcome.module.scss'
export const First: FunctionalComponent = () => {
  return <div class={s.card}>
      <img class={s.icon} src={pig}/>
      <h2>会挣钱<br/>还要会省钱</h2>
    </div>
}

First.displayName = 'FirstActions'
