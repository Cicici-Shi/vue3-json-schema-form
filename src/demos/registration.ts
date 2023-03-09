import PasswordWidget from '../components/PasswordWidget'
import RadioWidget from '../../lib/theme-default/RadioWidget'

export default {
  name: 'registration form',
  schema: {
    type: 'object',
    required: [
      "telephone"
  ],
    properties: {
      firstName: {
        type: 'string',
        default: 'Cici',
        title: 'First name:',
      },
      lastName: {
        type: 'string',
        default: 'Shi',
        title: 'Last name:',
      },
      telephone: {
        type: 'string',
        minLength: 10,
        title: 'Telephone:'
      },
      pass1: {
        type: 'string',
        minLength: 10,
        title: 'Password:'
      },
      pass2: {
        type: 'string',
        description: '确保密码匹配',
        minLength: 10,
        title: 'Re-try password:'
      },
      testkeyword: {
        type: 'string',
        minLength: 10,
        test: 'true',
        title: 'Keyword test:'
      }
    }
  },
  default: {
    pass1: '',
    pass2: '',
    testkeyword: ''
  },
  uiSchema: {
    properties: {
      pass1: {
        widget: PasswordWidget
      },
      pass2: {
        color: 'red'
      }
    }
  },
  async customValidate(data: any, errors: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.pass1 != data.pass2) {
          errors.pass2.addError('密码必须相同')
        }
        resolve(true)
      }, 2000)
    })
  }
}
