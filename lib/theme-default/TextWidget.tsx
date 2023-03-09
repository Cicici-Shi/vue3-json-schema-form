import { defineComponent, computed } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import { withFormItem } from './FormItem'

const TextWidget = withFormItem(
  defineComponent({
    name: 'TextWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const v = e.target.value
        e.target.value = props.value
        props.onChange(v)
      }

      const styleRef = computed(() => {
        return { color: (props.options && props.options.color) || 'black' }
      })

      return () => {
        const { value, schema: { rows } } = props

        if (rows) {
          return (
            <textarea
              rows={rows}
              value={value as any}
              onInput={handleChange}
            />
          )
        } else {
          return (
            <input
              type="text"
              value={value as any}
              onInput={handleChange}
              style={styleRef.value}
            />
          )
        }
      }
    },
  }),
)

export default TextWidget