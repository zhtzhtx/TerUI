var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
/* 引入classNames插件，'npm install classNames --save''npm install @types/classNames --save'
*  用来控制className的变量
*/
import classNames from 'classnames';
// 设置导出的按钮
export var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, href = props.href, children = props.children, restProps = __rest(props
    // btn,btn-lg, btn-primary
    , ["btnType", "className", "disabled", "size", "href", "children"]);
    // btn,btn-lg, btn-primary
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a['disabled'] = (btnType === 'link') && disabled,
        _a));
    // 判断是否为Link按钮
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
// 按钮的默认样式
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};
export default Button;
