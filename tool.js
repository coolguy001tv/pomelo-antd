/**
 * Created by CoolGuy on 2017/6/3.
 * 这个文件不要修改位置了，避免出现奇葩的问题
 */
var fs =require('fs');
var indexJs = (name)=>{
    //return `var C = require('antd/lib/${name}');\nexports["default"]=C;\nmodule.exports=exports["default"];\n`;
    return `import C from 'antd/lib/${name}';\nexport default C;`
};
var cssJs = (name)=>{
    return `require ('antd/lib/${name}/style/css');\n`;
};
var buildDefaultFolders = (parent)=>{
    let antd = "./node_modules/antd/lib";
    fs.mkdirSync(`./${parent}/`);
    let files = fs.readdirSync(antd);
    //console.log(files);
    files.map((file)=>{
        let folderPath = `./${parent}/${file}/`;
        let cssFolderPath = folderPath+"style/";
        fs.mkdir(folderPath,(err)=>{
            //console.log(err);
            fs.writeFile(`${folderPath}index.js`,indexJs(file),(err)=>{
                    err && console.log(err);
                });
            fs.mkdir(cssFolderPath,()=>{
                fs.writeFile(`${cssFolderPath}css.js`,cssJs(file),(err)=>{
                    err && console.log(err);
                })
            })

        });
        //if(!stat.isDirectory()){
        //   fs.mkdirSync(folderPath);
        //}
        //fs.writeFile(`${folderPath}index.js`,indexJs(file),(err)=>{
        //    err && console.log(err);
        //});
    })
};
buildDefaultFolders("lib");