import { defineComponent, PropType } from 'vue';
export const ItemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>ItemPage</div>
    )
  }
})