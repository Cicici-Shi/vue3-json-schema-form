import { CommonWidgetPropsDefine } from '../../lib'
import type { CustomFormat } from '../../lib'
import { withFormItem } from '../../lib/theme-default/FormItem'
import { computed, defineComponent } from 'vue'

const component = withFormItem(
  defineComponent({
    name: 'EmailWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const value = e.target.value
        e.target.value = props.value
        props.onChange(value)
      }
      const styleRef = computed(() => {
        return {
          email: (props.options && props.options.email) || 'black',
          padding: '0'
        }
      })

      return () => {
        return (
          <input
            type="email"
            value={props.value as any}
            onInput={handleChange}
            style={styleRef.value}
          />
        )
      }
    },
  }),
)

const format: CustomFormat = {
  name: 'email',
  definition: {
    type: 'string',
    validate: /^(.+)@(S+)$/,
  },
  component: component as any,
}

export default format