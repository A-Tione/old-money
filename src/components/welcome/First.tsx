import { FunctionalComponent } from 'vue';
import s from './Welcome.module.scss'
export const First: FunctionalComponent = () => {
  return <div class={s.card}>
      <svg>
        <use xlinkHref='#pig'></use>
      </svg>
      <h2>会挣钱<br />还要会省钱</h2>
    </div>
}

First.displayName = 'FirstActions'
