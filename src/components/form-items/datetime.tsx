import { Col, Typography, Form, Input, InputNumber, DatePicker } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../interfaces/field';


import DateTimeGroup from '../form-items/datetime-group';


export const _DatetimeItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IFieldDateTime;
    let index = props.index;
    let fieldLayoutInit = props.disabledHander;
    let formItemInit = props.formItemInit;
    //// let stylesInit = props.stylesInit;
    let disabledHander = props.disabledHander;
    return (
        <Col {...fieldLayoutInit(field, index)}  >
            <Form.Item {...formItemInit(field, index)}>
                <DatePicker
                    //// style={stylesInit()}
                    showToday={field.showToday ?? false}
                    showTime={field.showTime ?? false}
                    placeholder={field.placeholder ?? ""}
                    //disabledDate={} 
                    disabled={disabledHander(field.disabled)}
                //format={field.showTime ? INPUT_DATE_TIME_LONG_FORMAT : INPUT_DATE_TIME_SHORT_FORMAT} 
                />
            </Form.Item>
        </Col>
    )

})

// const formItemInitDob = (field: IFieldBase, index: number) => {
//     return {
//         name: field.name,
//         label: field.label,
//         rules: [
//             ({ getFieldValue }: any) => ({
//                 validator(_: any, value: any) {

//                     if (field.required == true) {
//                         if (value.date == undefined
//                             || value.month == undefined
//                             || value.year == undefined
//                             || value.date.trim() == ""
//                             || value.month.trim() == ""
//                             || value.year.trim() == "")
//                             return Promise.reject(field.validatorMessage ?? "Validator error!");
//                     }

//                     if (field.validator == undefined)
//                         return Promise.resolve();

//                     if (field.validator(getFieldValue(), value))
//                         return Promise.resolve();
//                     else
//                         return Promise.reject(field.validatorMessage ?? "Validator error!");
//                     //Promise.reject(new Error(field.validatorMessage ?? "Validator error!"));
//                 },
//                 //message: field.validatorMessage ?? "Validator error"
//             })
//         ],
//         // required: requiredHander(field.required),
//         hidden: visibleHander(field.visible),
//         className: 'animated-field'
//     }
// }


export const _DatetimeItemGroup = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    const formItemInitDob = (field: IFieldBase, index: number) => {
        return {
            name: field.name,
            label: field.label,
            rules: [
                ({ getFieldValue }: any) => ({
                    validator(_: any, value: any) {

                        if (field.required == true) {
                            if (value.date == undefined
                                || value.month == undefined
                                || value.year == undefined
                                || value.date.trim() == ""
                                || value.month.trim() == ""
                                || value.year.trim() == "")
                                return Promise.reject(field.validatorMessage ?? "Validator error!");
                        }

                        if (field.validator == undefined)
                            return Promise.resolve();

                        if (field.validator(getFieldValue(), value))
                            return Promise.resolve();
                        else
                            return Promise.reject(field.validatorMessage ?? "Validator error!");
                        //Promise.reject(new Error(field.validatorMessage ?? "Validator error!"));
                    },
                    //message: field.validatorMessage ?? "Validator error"
                })
            ],
        }
    }

    let field = props.field as IFieldDateTime;
    let index = props.index;
    let fieldLayoutInit = props.disabledHander;
    let formItemInit = props.formItemInit;
    //// let stylesInit = props.stylesInit;
    let disabledHander = props.disabledHander;
    return (
        <Col {...fieldLayoutInit(field, index)}  >
            <Form.Item {...formItemInitDob(field, index)}>
                {/* <DateTimeGroup
                    //// style={stylesInit()}
                    name={field.name}
                    disabled={disabledHander(field.disabled)}
                /> */}
            </Form.Item>
        </Col>
    )

})