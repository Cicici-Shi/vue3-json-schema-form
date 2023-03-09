export default {
  name: 'Widgets',
  schema: {
    type: 'object',
    properties: {
      textarea: {
        type: 'string',
        title: 'Textarea',
        rows: '4',
        description: '可调节高度的文本区域'
      },
      color: {
        type: 'string',
        format: 'color',
        title: 'Input Color',
      },
      date: {
        type: 'string',
        title: 'Date',
        date: true,
        description: '直接输入value时须符合yyyy-mm-dd格式'
      },
      email: {
        type: 'string',
        title: 'Email',
        email: true
      },
      url: {
        type: 'string',
        title: 'Url',
        uri: true
      },
    }
  },
  default: {
    textarea: 'Be water, my friend',
    color: '#6fbbe2',
    date: "2021-02-02"
  },
  uiSchema: {
  }
}
