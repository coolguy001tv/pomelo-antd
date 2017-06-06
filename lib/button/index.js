//todo: 目前没有实现mui的水波特效
import Button from 'antd/lib/button';
import React from 'react';
const PropTypes = require('prop-types');
let Btn = (props,context)=>{
    let newProps = Object.assign({},props);
    let {theme,themeConfig} = context;
    //delete newProps.theme;
    delete newProps.dispatch;
    //console.log(newProps,theme,themeConfig);
    let currentTheme = themeConfig[theme];
    if(!currentTheme){
        currentTheme = themeConfig['default'];
    }
    //按按钮目前只关注背景色
    let themeColor = currentTheme.palette.primary1Color;
    //只有在没有手动设置背景色/边框色的情况下，使用主题色
    newProps.style && !newProps.style.backgroundColor && (newProps.style.backgroundColor = themeColor);
    newProps.style && !newProps.style.borderColor && (newProps.style.borderColor = themeColor);
    return (
        <Button {...newProps}/>
    )
};
//不得已用这个方式来获取到theme的值
Btn.contextTypes = {
    theme: PropTypes.string,
    themeConfig: PropTypes.object,
};
export default Btn;