import { defineComponent, ref } from "vue";
import s from './StartPage.module.scss'
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import { Overlay } from "../shared/Overlay";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";

export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisble = ref(false)
    const onClickMenu = () => {
      refOverlayVisble.value = !refOverlayVisble.value
    }

    return () => (
      <MainLayout>{{
        title: () => '山竹记账',
        icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu}/>,
        main: () => <>
          <Center class={s.pig_wrapper}>
            <Icon name="pig" class={s.pig}></Icon>
          </Center>
          <RouterLink to="/items/create">
            <Button class={s.button}>开始记账</Button>
          </RouterLink>
          <RouterLink to="/items/create">
            <FloatButton iconName="add"/>
          </RouterLink>
          { refOverlayVisble.value && 
            <Overlay onClose={() => refOverlayVisble.value = false} />
          }
        </>
      }}
      </MainLayout>
    )
  }
})