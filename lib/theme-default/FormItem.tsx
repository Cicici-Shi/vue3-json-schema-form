import { defineComponent, shallowRef } from 'vue'
import { createUseStyles } from 'vue-jss'

import { CommonWidgetPropsDefine } from '../types'

const useStyles = createUseStyles({
  container: {
    '&:not(:first-child)': {
      margin: '10px 0',
    },
  },
  label: {
    display: 'block',
    color: '#777',
    margin: '3px'
  },
  desc: {
    color: '#aaa',
    margin: '3px',
    fontSize: 12
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    margin: '5px 0',
    padding: 0,
    paddingLeft: 20,
  },
})

const FormItem = defineComponent({
  name: 'FormItem',
  props: CommonWidgetPropsDefine,
  setup(props, { slots }) {
    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value
      const { schema, errors } = props
      return (
        <div class={classes.container}>
          <label class={classes.label}>{schema.title}</label>
          <div class={classes.desc}>{schema.description}</div>
          {slots.default && slots.default()}
          <ul class={classes.errorText}>
            {errors?.map((err) => (
              <li>{err}</li>
            ))}
          </ul>
        </div>
      )
    }
  },
})

export default FormItem

// HOC: higger order component
export function withFormItem(Widget: any) {
  if (['ColorWidget', 'PasswordWidget'].includes(Widget.name)) {
    return shallowRef(defineComponent({
      name: `Wrapped${Widget.name}`,
      props: CommonWidgetPropsDefine,
      setup(props, { attrs }) {
        return () => {
          return (
            <FormItem {...props}>
              <Widget {...props} {...attrs} />
            </FormItem>
          )
        }
      },
    }))
    } else {
      return defineComponent({
        name: `Wrapped${Widget.name}`,
        props: CommonWidgetPropsDefine,
        setup(props, { attrs }) {
          return () => {
            return (
              <FormItem {...props}>
                <Widget {...props} {...attrs} />
              </FormItem>
            )
          }
        },
      })
        }
}