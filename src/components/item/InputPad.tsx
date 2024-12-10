import { defineComponent, PropType, ref } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
import { time } from '../../shared/time'
import { DatetimePicker, Popup } from 'vant';

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const now = new Date()
    const appendText = (n: number | string) => {
      const nString = n.toString()
      const doIndex = refAmount.value.indexOf('.')
      if (refAmount.value.length >= 13) return;
      if (doIndex >= 0 && nString === '.') return;
      if (doIndex >= 0 && refAmount.value.length - doIndex > 2) return;
      if (refAmount.value === '0') {
        if (nString === '0') return;
        refAmount.value = nString === '.' ? '0.' : nString;
      }
    }
    const buttons = [
      {
        text: '1', onClick: () => { appendText(1) }
      },
      { text: '2', onClick: () => { appendText(2) } },
      { text: '3', onClick: () => { appendText(3) } },
      { text: '4', onClick: () => { appendText(4) } },
      { text: '5', onClick: () => { appendText(5) } },
      { text: '6', onClick: () => { appendText(6) } },
      { text: '7', onClick: () => { appendText(7) } },
      { text: '8', onClick: () => { appendText(8) } },
      { text: '9', onClick: () => { appendText(9) } },
      { text: '.', onClick: () => { appendText('.') } },
      { text: '0', onClick: () => { appendText(0) } },
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: '提交', onClick: () => { } },
    ]
    const refDate = ref(now)
    const refDatePickerVisible = ref(false)
    const showDatePicker = () => refDatePickerVisible.value = true
    const hideDatePicker = () => refDatePickerVisible.value = false
    const setDate = (date: Date) => {refDate.value = date; hideDatePicker()}
    const refAmount = ref('0')
    return () => <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon name="date" class={s.icon}></Icon>
          <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
          <Popup position='bottom' show={refDatePickerVisible.value}>
            <DatetimePicker value={refDate.value} type='date' title='选择年月日'
              onConfirm={setDate} onCancel={hideDatePicker}
            />
          </Popup>
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button =>
          <button onClick={button.onClick}>
            {button.text}
          </button>
        )}
      </div>
    </>
  }
})