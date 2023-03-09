export default {
  name: 'Number',
  schema: {
    type: 'object',
    properties: {
      number: {
        type: 'number',
        title: 'Number',
        description: '仅支持数字类型，提供步进箭头'
      },
      singleSelect: {
        type: 'number',
        title: 'Number(select)',
        enum: [1, 2, 3, 4],
        singleSelect: true
      },
      radio: {
        type: 'number',
        title: 'Number(radio)',
        name: 'number',
        enum: [1, 2, 3, 4],
        radio: true
      }
    }
  },
  default: {
    number: 3,
    radio: '2'
  },
  uiSchema: {
    properties: {
      radio: {
        color: 'red'
      }
    }
  }
}
