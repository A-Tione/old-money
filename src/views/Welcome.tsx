import { defineComponent, ref, Transition, VNode, watchEffect } from 'vue';
import { RouterView, RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router';
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLDivElement>()
    const {direction, swiping} = useSwipe(main, {
      beforeStart: e => e.preventDefault(),
    })
    const route = useRoute()
    const router = useRouter()
    const welcomeMap: Record<string, string> = {
      'welcome1': '/welcome/2',
      'welcome2': '/welcome/3',
      'welcome3': '/welcome/4',
      'welcome4': '/start',
    }
    const onReplace = throttle(() => {
      const name = (route.name || 'welcome1').toString()
      router.replace(welcomeMap[name])
    }, 500)
    watchEffect(() => {
      if(swiping.value && direction.value === 'left') {
        onReplace()
      }
      
    })
    return () => 
      <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#mangosteen'></use>
          </svg>
          <h1>山竹记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name='main'>
            {({Component: X, route: R}: {Component: VNode, route: RouteLocationNormalizedLoaded}) =>
              <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                  {X}
              </Transition>
            }
          </RouterView>
        </main>
        <footer>
          <RouterView name='footer'/>
        </footer>
      </div>
  }
})