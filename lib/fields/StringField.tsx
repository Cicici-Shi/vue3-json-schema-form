import { getWidget } from '../theme'
import { defineComponent, computed } from 'vue'
import { FieldPropsDefine } from '../types'
import type { CommonWidgetDefine } from '../types'


export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const TextWidgetRef = computed(() => {
      return getWidget('TextWidget', props).value
    })
    const UploadWidgetRef = getWidget('UploadWidget')
    const EmailWidgetRef = getWidget('EmailWidget')
    const UrlWidgetRef = getWidget('UrlWidget')
    const DateWidgetRef = getWidget('DateWidget')

    const widgetOptionsRef = computed(() => {
      const { widget, properties, items, ...rest } = props.uiSchema
      return rest
    })

    return () => {
      const TextWidget = TextWidgetRef.value as CommonWidgetDefine
      const UploadWidget = UploadWidgetRef.value
      const EmailWidget = EmailWidgetRef.value
      const UrlWidget = UrlWidgetRef.value
      const DateWidget = DateWidgetRef.value
      const { value, schema, schema:{upload, email, url, date}, errorSchema } = props

      if (upload) {
        return (
          <UploadWidget
            value={value}
            onChange={handleChange}
            schema={schema}
            errors={errorSchema.__errors}
          />
        )
      } else if (email) {
        return (
          <EmailWidget
            value={value}
            onChange={handleChange}
            schema={schema}
            errors={errorSchema.__errors}
          />
        )
      } else if (url) {
        return (
          <UrlWidget
            value={value}
            onChange={handleChange}
            schema={schema}
            errors={errorSchema.__errors}
          />
        )
      } else if (date) {
        return (
          <DateWidget
            value={value}
            onChange={handleChange}
            schema={schema}
            errors={errorSchema.__errors}
          />
        )
      } else {
        return (
          <TextWidget
            value={value}
            onChange={handleChange}
            schema={schema}
            errors={errorSchema.__errors}
            options={widgetOptionsRef.value}
          />
        )
      }
    }
  },
})
