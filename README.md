## 介绍
1.该项目基于 Vue3 + Element Plus 创建的项目和自定义脚手架组成  
2.由lerna管理脚手架和项目

## 执行
1.执行`lerna bootstrap`安装依赖  
2.执行`npm link`添加脚手架软连接  
3.执行`npm run dev`运行项目  
4.执行`npm run docs:dev`运行文档项目

## 创建组件
创建组件，需要到对应的项目中执行`lCli addCom xxx`  
选择全局组件则会在*components/global/*下创建组件文件，并全局引入  
普通组件则会*components/*下创建组件文件，运用时需手动引入   
创建组件的同时，文档系统会在*docs*下创建对应的`index.md`文件
> 注：xxx为组件名称

## 创建页面
创建页面，需要到对应的项目下执行`lCli addPage xxx`  
则会*pages/*下创建页面文件
> 注：xxx为页面名称
