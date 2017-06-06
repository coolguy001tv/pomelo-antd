//todo: Ŀǰû��ʵ��mui��ˮ����Ч
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
    //����ťĿǰֻ��ע����ɫ
    let themeColor = currentTheme.palette.primary1Color;
    //ֻ����û���ֶ����ñ���ɫ/�߿�ɫ������£�ʹ������ɫ
    newProps.style && !newProps.style.backgroundColor && (newProps.style.backgroundColor = themeColor);
    newProps.style && !newProps.style.borderColor && (newProps.style.borderColor = themeColor);
    return (
        <Button {...newProps}/>
    )
};
//�������������ʽ����ȡ��theme��ֵ
Btn.contextTypes = {
    theme: PropTypes.string,
    themeConfig: PropTypes.object,
};
export default Btn;