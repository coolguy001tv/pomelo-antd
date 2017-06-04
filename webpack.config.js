/**
 * Created by CoolGuy on 2017/6/4.
 */
const fs = require('fs');
const path = require('path');
let allComponentsName = fs.readdirSync("./components");
let entry = {};
allComponentsName.map((one)=>{
    entry[one]="./components/"+one+"/index.js";
});
module.exports = {
    entry:entry,
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename:"[name].js",
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname,'./components')],
                loader: 'babel-loader',
            },
        ]
    }
};