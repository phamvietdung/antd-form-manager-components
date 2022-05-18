import { Col, Typography, Form, Input, InputNumber, DatePicker, Select, Radio, CheckboxOptionType } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../interfaces/field';

const { Option } = Select;

export const _SelectItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IFieldSelect;
    let index = props.index;
    let formId = props.formId;
    let fieldLayoutInit = props.disabledHander;
    let formItemInit = props.formItemInit;
    // let stylesInit = props.stylesInit;
    let disabledHander = props.disabledHander;

    return (
        <Col {...fieldLayoutInit(field, index)}  >
            <Form.Item {...formItemInit(field, index)}>
                <Select
                    disabled={disabledHander(field.disabled)}
                    showSearch
                    // style={stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    defaultActiveFirstOption={false}
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    allowClear={!field?.allowClear ? false : true}
                >
                    {
                        field.dataSource != undefined
                        && field.dataSource!.data != undefined
                        && field.dataSource!.data!.map((select_data: any, select_index: any) => (
                            <Option
                                value={field.dataSource!.id !== undefined ? select_data[field.dataSource!.id] : select_data['id']}
                                key={`${formId}-fields-${field.name}-${index}-${select_index}`}>
                                {field.dataSource!.label !== undefined ? select_data[field.dataSource!.label] : select_data['value']}
                            </Option>
                        ))
                    }
                </Select>
            </Form.Item>
        </Col>
    )

})



export const _RadioItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    // stylesInit: Function
}) => {

    let field = props.field as IFieldSelect;
    let index = props.index;
    let formId = props.formId;
    let fieldLayoutInit = props.disabledHander;
    let formItemInit = props.formItemInit;
    // let stylesInit = props.stylesInit;
    let disabledHander = props.disabledHander;
    return (
        <Col {...fieldLayoutInit(field, index)}  >
            <Form.Item {...formItemInit(field, index)}>
                <Radio.Group
                    // // style={stylesInit()}
                    options={
                        field.dataSource!.data!.map((select_data: any, select_index: any) : CheckboxOptionType => {
                            // label :select_data['id'],
                            // value : select_data['value']
                            return {
                                label :select_data['value'],
                                value : select_data['id']
                            }
                        })
                       }
                    //onChange={this.onChange4}
                    //value={value4}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Form.Item>
        </Col>
    )

})