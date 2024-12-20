import { FunctionalComponent } from 'vue';
import s from './Welcome.module.scss'
export const Third: FunctionalComponent = () => {
  return <div class={s.card}>
  <svg>
    <use xlinkHref='#chart'></use>
  </svg>
  <h2>每日提醒<br/>不遗漏每一笔账单</h2>
</div>
}

Third.displayName = 'Third'