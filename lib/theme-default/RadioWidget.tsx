import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import { withFormItem } from './FormItem'

const RadioWidget = withFormItem(
  defineComponent({
    name: 'RadioWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const v = e.target.value
        e.target.value = props.value
        props.onChange(v)
      }

      return () => {
        const { schema, schema: {name}, value } = props
        return (schema.enum as any).map((number: number) => {
          return (
            <div>
            <input type="radio" checked={number == value} name={name} id={number as any} value={number} onClick={handleChange} />
            <span>{ number }</span>
            </div>
        )}) 
      }
    },
  }),
)

export default RadioWidget