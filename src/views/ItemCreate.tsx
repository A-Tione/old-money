import { defineComponent, PropType } from 'vue';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>ItemCreate</div>
    )
  }
})