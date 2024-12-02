import { defineComponent, ref } from "vue";
import s from './StartPage.module.scss'
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import { Overlay } from "../shared/Overlay";

export const StartPage = defineComponent({
  setup: (props, context) => {
    const refOverlayVisble = ref(false)
    const onClickMenu = () => {
      refOverlayVisble.value = !refOverlayVisble.value
      console.log(refOverlayVisble.value);
    }

    return () => (
      <div>
        <Navbar>{{
          default: () => '山竹记账',
          icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu}/>
        }}</Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig}></Icon>
        </Center>
        <div class={s.button_warpper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName="add"/>
        { refOverlayVisble.value && 
          <Overlay onClose={() => refOverlayVisble.value = false} />
        }
      </div>
    )
  }
})