import { defineComponent } from "vue";
import s from './StartPage.module.scss'
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Center } from "../shared/Center";
import { Icon } from "../shared/Icon";

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi'); 
    }

    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig}></Icon>
        </Center>
        <div class={s.button_warpper}>
          <Button class={s.button} onClick={onClick}>测试</Button>
        </div>
        <FloatButton iconName="add"/>
      </div>
    )
  }
})