import { FunctionalComponent } from "vue";
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';

export const ForthActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
    <RouterLink to="/start">完成</RouterLink>
    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
  </div>
}

ForthActions.displayName = 'ForthActions'