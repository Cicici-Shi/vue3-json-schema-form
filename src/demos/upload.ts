export default {
  name: 'Upload',
  schema: {
    type: 'object',
    properties: {
      textarea: {
        type: 'string',
        title: '单个文件上传',
        upload: true,
        description: '仅可上传一个文件'
      },
      color: {
        type: 'array',
        title: '多文件上传',
        upload: true,
        description: '可上传多个文件'
      },
    }
  },
  default: {
  },
  uiSchema: {
  }
}
