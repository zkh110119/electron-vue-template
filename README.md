# electron-vue-template

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8d4ed60](https://github.com/SimulatedGREG/electron-vue/tree/8d4ed607d65300381a8f47d97923eb07832b1a9a) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

### 缺少nsis包
1、访问 [https://github.com/electron-userland/electron-builder-binaries/releases](https://github.com/electron-userland/electron-builder-binaries/releases)  
2、下载相关版本的包，放置到如下目录：  
 > C:\Users\XXXXXX\AppData\Local\electron-builder\Cache\winCodeSign  
 > C:\Users\XXXXXX\AppData\Local\electron-builder\Cache\nsis  
 > C:\Users\XXXXXX\AppData\Local\electron-builder\Cache\nsis-resources  

 3、如果还是一直提示“resolve  http://npm.taobao.org/mirrors/electron-builder-binaries/xxx/xxxx.7z  error 404”  
 4、将electron_builder_binaries_mirror配置使用英文“;”从.npmrc文件中注释掉。
 


### install vue-devTools
1、克隆[https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)代码（必须是master代码）  
2、进入vue-devtools-master目录  
3、执行
```
yarn
yarn run build
```
4、将生成的shells/chrome目录拷贝到项目devTools目录下  
5、修改项目目录下src/mian/index.dev.js  
```javascript
/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */
/* eslint-disable */
// Install `electron-debug` with `devtron`
require('electron-debug')({showDevTools: true})
const {app, BrowserWindow} = require('electron'),
  path = require('path')
// Install `vue-devtools`
app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {
    })
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
  BrowserWindow.addDevToolsExtension(path.resolve(__dirname, '../../devTools/chrome'))
})
// Require `main` process to boot app
require('./index')
```
        



