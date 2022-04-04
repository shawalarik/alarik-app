# 🍁🍁🍁 alarik-app

# Begonia for Vue 3 + Typescript + Vite

Begonia is a learning warehouse, recorded by Alarikshaw and Lorelei. It aims to provide a goal for learning. Our plan is similar to Jingwei reclamation. The early stage is definitely tortuous, difficult, and ineffective, but we will always Persevere until the day when the East China Sea is filled.

## 启动

- 包管理器使用pnpm

- 执行`pnpm install`

- TypeScript
Vite 天然支持引入 .ts 文件。

Vite 仅执行 .ts 文件的转译工作，并 不 执行任何类型检查。并假设类型检查已经被你的 IDE 或构建过程接管了（你可以在构建脚本中运行 tsc --noEmit 或者安装 vue-tsc 然后运行 vue-tsc --noEmit 来对你的 *.vue 文件做类型检查）。

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

#
