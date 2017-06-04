/**
 * Created by CoolGuy on 2017/6/4.
 * 寻找真正的pomelo-antd的目录
 * 使用cnpm时，因为node_modules/pomelo-antd是链接过来的，可能会出现找不到的情况
 */
let fs = require('fs');
let path = require('path');
let node_modules = path.resolve(__dirname,"../node_modules");
let node_modules_files = fs.readdirSync(node_modules);
let pomeloAntdFolders = node_modules_files.filter((file)=>{
    return ~file.indexOf("pomelo-antd")
});
let realFolder = [];
pomeloAntdFolders.map((folder)=>{
    if(fs.lstatSync(path.resolve(node_modules,folder)).isDirectory()){
        realFolder.push(path.resolve(__dirname,"../node_modules",folder));
    }
});
//console.log(realFolder);
if(realFolder.length!=1){
    console.error(realFolder);
}
module.exports = realFolder[0];