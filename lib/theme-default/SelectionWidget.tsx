import { defineComponent, ref, watch } from 'vue'
import { SelectionWidgetPropsDefine } from '../types'
import { withFormItem } from './FormItem'

const SelectionWidget = withFormItem(
  defineComponent({
    name: 'SelectionWidget',
    props: SelectionWidgetPropsDefine,
    setup(props) {
      const currentValueRef = ref(props.value || [])

      watch(currentValueRef, (newv, oldv) => {
        if (newv !== oldv) props.onChange(newv)
      })

      watch(
        () => props.value,
        (v:any) => {
          if (v !== currentValueRef.value) currentValueRef.value = v
        },
      )

      return () => {
        const { options, schema } = props
        
        return (
          <div>
            <select multiple={!schema.singleSelect} v-model={currentValueRef.value}>
              {options.map((opt) => {
                return <option value={opt.value}>{opt.key}</option>
              })}
            </select>
            <div>
            {!schema.singleSelect ? <p>按住 Ctrl (windows) / Command (Mac) 按钮来选择多个选项。</p> : ''}
            </div>
            
              
          
          </div>

        )
      }
    },
  }),
)

export default SelectionWidget