# Pomelo-Antd说明文档

这个项目基于antd进行了一些相关修改

## 如何使用
* 请务必安装`babel-plugin-import`插件，相关地址参见[github](https://github.com/ant-design/babel-plugin-import)
* `babel-plugin-import`的配置信息参考下方，其他细节请参考上方提到的文档：
```
{
  "libraryName": "pomelo-antd",
  "style": 'css',   // or true
}
```
* webpack解析js文件时，请务必将该项目的lib进行babel或其他loader处理，否则会出现类似`You may need an appropriate loader to handle this file type`的错误
    * cnpm 安装后可能会因为目录上的问题导致不能正常解析目录，请参考tools/findPomeloAntd.js进行相关的配置
* 目前的v1.0.0的版本几乎没有对原有的antd做任何修改（除了按钮），后期版本会逐渐修改相关的样式