import { Col, Typography, Form, Input, InputNumber } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../interfaces/field';
import TextArea from 'antd/lib/input/TextArea';



export const _InputItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IField;

    return (
        <Col {...props.fieldLayoutInit(field, props.index)}>

            <Form.Item {...props.formItemInit(field, props.index)}>
                <Input
                    // style={props.stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    maxLength={field.max ?? undefined}
                    disabled={props.disabledHander(field.disabled)}
                />
            </Form.Item>

        </Col>
    )

})




export const _PasswordItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IField;
    return (
        <Col {...props.fieldLayoutInit(field, props.index)}  >
            <Form.Item {...props.formItemInit(field, props.index)}>
                <Input.Password
                    // style={props.stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    disabled={props.disabledHander(field.disabled)}
                    maxLength={field.max ?? undefined}
                />
            </Form.Item>
        </Col>
    )

})



export const _TextareaItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IField;
    let index = props.index;
    return (
        <Col {...props.fieldLayoutInit(field, index)}  >
            <Form.Item {...props.formItemInit(field, index)}>
                <TextArea
                    // style={props.stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    disabled={props.disabledHander(field.disabled)}
                    maxLength={field.max ?? undefined}
                />
            </Form.Item>
        </Col>
    )

})



export const _NumberItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IField;
    let index = props.index;
    let fieldLayoutInit = props.disabledHander;
    let formItemInit = props.formItemInit;
    // let stylesInit = props.stylesInit;
    let disabledHander = props.disabledHander;
    return (
        <Col {...fieldLayoutInit(field, index)}  >
            <Form.Item {...formItemInit(field, index)}>
                <InputNumber
                    // style={stylesInit()}
                    formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    parser={(value: any) => value.replace(/\$\s?|(\.*)/g, '')}
                    max={field.max ?? undefined}
                    placeholder={field.placeholder ?? ""}
                    min={field.min ?? undefined}
                    //disabled={isDisabled(field.disabled, field.name) ?? false}
                    maxLength={field.max ?? undefined}
                    disabled={disabledHander(field.disabled)}
                />
            </Form.Item>
        </Col>

    )

})