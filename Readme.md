# jc-icons-vue

This is an icon library for Vue framework, in which all font icons are drawn by the library author himself.

# Install

## npm

```shell
npm i jc-icons-vue
```

## yarn

```shell
yarn add jc-icons-vue
```

## pnpm 
```shell
pnpm install jc-icons-vue
```

# Usage

```ts
// mian.ts
import { createApp } from 'vue';

import App from './App.vue'
import { JCICons } from 'jc-icons-vue';

function bootstrap() {
    const app = createApp(App)
    app.use(JCICons);
    app.mount('#app');
}

bootstrap();
```

# About the copyright of some icons

The library itself is open source and free, and the free use of icons is authorized by the content in LICENCE. But it doesn't mean that some icons with specific meanings can be used arbitrarily, because some of them are redraws of some trademarks that may be registered, such as github, chrome, python and other logos. When using such logos, please make sure you have permission to use them. All copyright problems caused by trademark registration, but not limited to trademarks, shall be borne by the icon users themselves.
