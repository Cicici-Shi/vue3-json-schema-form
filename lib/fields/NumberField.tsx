import { getWidget } from '../theme'
import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'
import type { CommonWidgetDefine } from '../types'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (v: any) => {
      console.log('v', v)
      props.onChange(v)
      // const value = Number(v)
      // Number.isNaN(value) ? props.onChange(undefined) : props.onChange(value)
    }


    const SelectionWidgetRef = getWidget('SelectionWidget')
    const RadioWidgetRef = getWidget('RadioWidget')
    const NumberWidgetRef = getWidget('NumberWidget')

    return () => {
      const SelectionWidget = SelectionWidgetRef.value
      const RadioWidget = RadioWidgetRef.value
      const NumberWidget = NumberWidgetRef.value as CommonWidgetDefine
      const { value, errorSchema,schema, schema: { singleSelect, radio} } = props

      if (singleSelect) {
        const enumOptions = (schema as any).enum
        const options = enumOptions.map((e: any) => ({ key: e, value: e }))
        return (
          <SelectionWidget
            onChange={props.onChange}
            value={props.value}
            options={options}
            errors={errorSchema.__errors}
            schema={schema}
          />
        )
      } else if (radio) {
        return (
          <RadioWidget
        value={value}
        onChange={handleChange}
        errors={errorSchema.__errors}
        schema={schema}
          />
        )
      } else {
        return (
          <NumberWidget
        value={value}
        onChange={handleChange}
        errors={errorSchema.__errors}
        schema={schema}
          />
        )
      }
    }
  },
})
