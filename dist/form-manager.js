"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFormManager = void 0;
const react_1 = __importDefault(require("react"));
require("antd/dist/antd.css");
const antd_1 = require("antd");
/**
 * Primary UI component for user interaction
 */
const DFormManager = (_a) => {
    var { size = 'medium' } = _a, props = __rest(_a, ["size"]);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Form, { name: "basic", labelCol: { span: 8 }, wrapperCol: { span: 16 }, initialValues: { remember: true }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
            react_1.default.createElement(antd_1.Form.Item, { label: size, name: size, rules: [{ required: true, message: 'Please input your username!' }] },
                react_1.default.createElement(antd_1.Input, null)),
            react_1.default.createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                react_1.default.createElement(antd_1.Input.Password, null)),
            react_1.default.createElement(antd_1.Form.Item, { name: "remember", valuePropName: "checked", wrapperCol: { offset: 8, span: 16 } },
                react_1.default.createElement(antd_1.Checkbox, null, "Remember me")),
            react_1.default.createElement(antd_1.Form.Item, { wrapperCol: { offset: 8, span: 16 } },
                react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit")))));
};
exports.DFormManager = DFormManager;
