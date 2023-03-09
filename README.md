# Vue3 JsonSchema Form

Based on Vue.js and JSON Schema, you only need to provide a JSON Schema to generate a corresponding form, which supports custom components, custom error message configuration and validation rules.

## What is JSON Schema
JSON Schema是基于JSON格式,用于定义JSON数据结构以及校验JSON数据内容。
使用场景：
1.数据校验
不只是JavaScript/Typescript，其他编程语言也有基于JSON Schema实现的校验器，如Java的Snow 、go的gojsonschema和Python的jschon 等等都是基于此去开发的。所以通过JSON Schema规范，还可以保持前后端校验的一致。
2.form自动生成
​ JSON Schem虽然有规范约束，但仍然还是一份描述数据的JSON配置，那么基于这份配置，逻辑上就能自动渲染出功能完整的表单UI。

JSON Schema的表单生成
通过 JSON Schema 生成form表单，数据校验校验基于 ajv，只需要一个必须的 schema 参数即可生成完整可校验的form表单。
支持嵌套

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

线上演示地址：借助monaco-editor展现schema、UISchema、value及最终展示效果。使用者可以了解基本示例，并直接在页面上编辑schema，即时看到效果。

Vite

TOdo
elementplus

自定义
input password密码   xxx校验和上面一样
input radio 单选按钮
select 下拉列表框



[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
