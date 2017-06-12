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
//版本只有3位,前大于后返回正数，等于为0，小于为负数
let compareVersion = (v1,v2)=>{
    let v1s = v1.split(".");
    let v2s = v2.split(".");
    let smallCompare = (c1,c2)=>{
        return c1-c2;
    };
    let result = smallCompare(v1s[0],v2s[0]);
    if(result !== 0){
        return result;
    }
    result = smallCompare(v1s[1],v2s[1]);
    if(result !== 0){
        return result;
    }
    result = smallCompare(v1s[2],v2s[2]);
    return result;
};
//console.log(realFolder);
//cnpm可能会有存在多个版本的情况，此时用最新版本
if(realFolder.length!=1){
    let reg = /\d+\.\d+.\d+/;
    realFolder.sort((a,b)=>{
        let v1 = a.match(reg)[0];
        let v2 = b.match(reg)[0];
        //保留版本号大的
        return compareVersion(v2,v1);
    })
}
module.exports = realFolder[0];