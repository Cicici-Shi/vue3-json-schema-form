import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import { withFormItem } from './FormItem'

const UrlWidget = withFormItem(
  defineComponent({
    name: 'UrlWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const v = e.target.value
        e.target.value = props.value
        const value = Number(v)
        Number.isNaN(value) ? props.onChange(undefined) : props.onChange(value)
      }

      return () => {
        const { value } = props
        return (
          <input type="url"  value={value as any} onInput={handleChange} />
        )
      }
    },
  }),
)

export default UrlWidget