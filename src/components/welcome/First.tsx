import { defineComponent } from 'vue';
import pig from "../../assets//icons/pig.svg"
import s from './First.module.scss'
import { RouterLink } from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout'
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{ 
          icon: () => <img class={s.icon} src={pig}/>,
          title: () => <h2>会挣钱<br/>还要会省钱</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})
