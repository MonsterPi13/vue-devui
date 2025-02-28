import { defineComponent } from 'vue';
import './form-operation.scss';

export default defineComponent({
  name: 'DFormOperation',
  props: {
    
  },
  setup(props, ctx) {
    return () => {
      return <div class="form-operation">
        {ctx.slots.default?.()}
      </div>
    }
  }
})