# Vue3 JsonSchema Form

Based on Vue.js and JSON Schema, you only need to provide a JSON Schema to generate a corresponding form, which supports custom components, custom error message configuration and validation rules.

## What is JSON Schema

JSON Schema 是基于 JSON 格式,用于定义 JSON 数据结构以及校验 JSON 数据内容。
使用场景： 1.数据校验
不只是 JavaScript/Typescript，其他编程语言也有基于 JSON Schema 实现的校验器，如 Java 的 Snow 、go 的 gojsonschema 和 Python 的 jschon 等等都是基于此去开发的。所以通过 JSON Schema 规范，还可以保持前后端校验的一致。
2.form 自动生成
​ JSON Schem 虽然有规范约束，但仍然还是一份描述数据的 JSON 配置，那么基于这份配置，逻辑上就能自动渲染出功能完整的表单 UI。

## JSON Schema 的表单生成

通过 JSON Schema 生成 form 表单，数据校验校验基于 ajv，只需要一个必须的 schema 参数即可生成完整可校验的 form 表单。

### 线上演示地址：

借助 monaco-editor 展现 schema、UISchema、value 及最终展示效果。使用者可以了解基本示例，并直接在页面上编辑 schema，即时看到效果。

### 数据类型及对应效果：
#### Object
包裹多个schema，将转换为各种不同类型的schemaItem
#### Array
单类型数组 single-type
{
  items: { type: string }
}

固定长度，多类型数组 fixed length & multi-type
{
  items: [
    { type: string },
    { type: number }
  ]
}

多选类型数组 multi-select
{
  items: { type: string, enum: ['1', '2']}
}

多文件上传
{
  upload: true
}

#### String
普通输入框

文本区域
{
  rows: '4',
}

选择颜色
{
  format: 'color',
}

单文件上传
{
  upload: true
}

日期选择
{
  date: true
}

邮箱
{
  email: true
}

网址
{
  url: true
}

#### Number
仅输入数字的输入框，带有步进箭头
单项下拉框
单选按钮

## 技术栈
Vue3 + TypeScript + Ajv.js + JSS + Vite + Vitest

## Todo
引入elementplus
提升单测覆盖率