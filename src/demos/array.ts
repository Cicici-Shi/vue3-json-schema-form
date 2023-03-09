export default {
  name: 'Array',
  schema: {
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      multiTypeArray: {
        type: 'array',
        items: [
          { type: 'string', title: 'string' },
          { type: 'number', title: 'number' },
        ],
      },
      singleTypeArray: {
        type: 'array',
        title: 'singleTypeArray',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name' },
            age: { type: 'number', title: 'Age' },
          },
        },
      },
      multiSelectArray: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['foo', 'bar', 'foobar','fur','bazz', 'furbazz'],
        },
        title: 'multiSelectArray',
      },
    },
  },
  uiSchema: {
    title: 'A registration form',
    properties: {
      firstName: {
        title: 'First name',
      },
      lastName: {
        title: 'Last name',
      },
      telephone: {
        title: 'Telephone',
      },
    },
  },
  default: {
    singleTypeArray: [{ name: 'syc', age: 22 },null],
  },
}