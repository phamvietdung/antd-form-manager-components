import React, { useState, useEffect } from 'react';

import { useFormManagerState } from './hook'

import DateTimeGroup from './form-items/datetime-group';

import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import 'antd/dist/antd.css'

import './styles.css'

import {
    Form, Input, Button, Select, ConfigProvider, DatePicker, InputNumber, Radio, Switch, Checkbox, TimePicker, Row, Col, Space, Spin, Tooltip, notification, List, FormInstance, Typography
} from "antd";

import TextArea from 'antd/lib/input/TextArea';

import moment from 'moment';

import { IFieldType } from './field-type';

import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from './field';

import { Locale } from 'antd/lib/locale-provider';

import ReactDraftOption from './react-draft-wysiwyg/options'

import { IFormOptions } from './form-option';
import { IConditionFunction } from './field-condition';
import { useHandler } from './handler';
import { SetStyles, GetStyles, GetStyleName, IUIType, GetLocale, SetLocale, ILocale } from './const';

const { Title } = Typography;

const { RangePicker } = DatePicker;

const { Option } = Select;

export interface DFormManagerProps {
    fields: any[],
    locale?: ILocale,
    options?: IFormOptions,
    ref?: any,
    data?: object,
    style?: IUIType,
    width?: number,
    isDebug?: boolean
}

const defaultOptions: IFormOptions = {
    select: {
        defaultId: "id",
        defaultLabel: "value"
    },
    datetime: {

    },
    rule: {
        message: "is required!"
    },
    layout: 'vertical'
}

export const DFormManager = ({
    ...props
}: DFormManagerProps) => {

    if (props.style != undefined)
        SetStyles(props.style);
    if (props.locale != undefined)
        SetLocale(props.locale);

    const { formId, setFormId,
        formRef, setFormRef,
        fields, setFields,
        values, setValuesAsync } = useFormManagerState(props);


    const { disabledHander,
        requiredHander,
        visibleHander, requireRule } = useHandler(formRef, values);

    const onValueChange = (value: Object, values: any) => {
        //console.log('change');
        setValuesAsync(values);
    }

    const onFieldChange = (value: Object, values: any) => {
        //console.log(value,values)
    }


    const formItemInit = (field: IFieldBase, index: number) => {
        return {
            name: field.name,
            label: field.label,
            rules: [

                // {
                //     required: typeof (field.required) == 'boolean' ? field.required : false

                // },
                ({ getFieldValue }: any) => ({
                    validator(_: any, value: any) {

                        if (field.validator == undefined)
                            return Promise.resolve();

                        if (field.validator(getFieldValue(), value))
                            return Promise.resolve();
                        else
                            return Promise.reject(field.validatorMessage ?? "Validator error!");
                        //Promise.reject(new Error(field.validatorMessage ?? "Validator error!"));
                    },
                    //message: field.validatorMessage ?? "Validator error"
                }),
                requireRule(field, props, defaultOptions)
            ],
            required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            // disabled: disabledHander(field.disabled), // not working
            className: 'animated-field'
        }
    }

    const formItemEditor = (field: IFieldBase, index: number) => {
        return {
            name: field.name,
            label: field.label,
            // required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            className: 'animated-field',
            rules: [
                ({ getFieldValue }: any) => ({
                    validator(_: any, value: any) {

                        if (field.required == true) {
                            //console.log(value.blocks);
                            if (value.blocks == undefined
                                || value.blocks.filter((x: any) => x.text != "") == 0)
                                return Promise.reject(field.validatorMessage ?? "Validator error!");

                        }

                        if (field.validator == undefined)
                            return Promise.resolve();

                        if (field.validator(getFieldValue(), value))
                            return Promise.resolve();
                        else
                            return Promise.reject(field.validatorMessage ?? "Validator error!");
                        //Promise.reject(new Error(field.validatorMessage ?? "Validator error!"));
                    }
                    //message: field.validatorMessage ?? "Validator error"
                })
            ]
        }

    }

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
            // required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            className: 'animated-field'
        }
    }

    const fieldLayoutInit = (field: any, index: number) => {
        return {
            // key: `${formId}-${index}`,
            span: field.span ?? 24,
        }
    }

    const stylesInit = () => {
        return GetStyles();
    }

    const combineArgFunction = (index: number) => {
        return {
            disabledHander,
            formItemInit,
            stylesInit,
            fieldLayoutInit,
            key: `${formId}-${index}`,
        }
    }

    return (
        <div style={{ maxWidth: props.width ?? 'auto' }}>
            {formRef != undefined ?
                <ConfigProvider locale={GetLocale()}>
                    <Form
                        validateMessages={
                            {
                                required: "${label} " + (props.options?.rule?.message ?? defaultOptions.rule?.message),
                            }
                        }
                        layout={props.options?.layout ?? 'vertical'}
                        id={formId} ref={formRef} name="control-ref" initialValues={props.data ?? {}}
                        onValuesChange={onValueChange}
                        onFieldsChange={onFieldChange}
                        className={GetStyleName()}
                    >
                        <Row gutter={16}>
                            {fields.map((_field: IField, index: number) => {

                                switch (_field.type) {
                                    case 'heading':
                                        return <HeadingItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'input':
                                        return <InputItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'password':
                                        return <PasswordItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />

                                    case 'textarea':
                                        {
                                            let field = _field as IField;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInit(field, index)}>
                                                        <TextArea
                                                            style={stylesInit()}
                                                            placeholder={field.placeholder ?? ""}
                                                            disabled={disabledHander(field.disabled)}
                                                            maxLength={field.max ?? undefined}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            )
                                        }

                                    case 'number':
                                        {
                                            let field = _field as IFieldNumber;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInit(field, index)}>
                                                        <InputNumber
                                                            style={stylesInit()}
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
                                        }

                                    case 'datetime':
                                        {
                                            let field = _field as IFieldDateTime;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInit(field, index)}>
                                                        <DatePicker
                                                            style={stylesInit()}
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
                                        }
                                    case 'datetime-group':
                                        {
                                            let field = _field as IFieldDateTime;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInitDob(field, index)}>
                                                        <DateTimeGroup
                                                            style={stylesInit()}
                                                            name={field.name}
                                                            disabled={disabledHander(field.disabled)}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            )
                                        }
                                    case 'select':
                                        {
                                            let field = _field as IFieldSelect;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInit(field, index)}>
                                                        <Select
                                                            disabled={disabledHander(field.disabled)}
                                                            showSearch
                                                            style={stylesInit()}
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
                                        }
                                    case 'radio':
                                        {
                                            let field = _field as IFieldSelect;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemInit(field, index)}>
                                                        <Radio.Group
                                                            // style={stylesInit()}
                                                            options={[
                                                                { label: 'Female', value: 'female' },
                                                                { label: 'Male', value: 'male' }
                                                            ]}
                                                            //onChange={this.onChange4}
                                                            //value={value4}
                                                            optionType="button"
                                                            buttonStyle="solid"
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            )
                                        }
                                    case 'editor':
                                        {
                                            let field = _field as IFieldSelect;
                                            return (
                                                <Col {...fieldLayoutInit(field, index)}  >
                                                    <Form.Item {...formItemEditor(field, index)}>
                                                        <Editor toolbar={
                                                            ReactDraftOption.toolbar
                                                        }

                                                            editorStyle={ReactDraftOption.editorStyle}
                                                            toolbarStyle={ReactDraftOption.toolbarStyle} />

                                                    </Form.Item>
                                                </Col>

                                            )
                                        }
                                }

                            })
                            }
                        </Row>
                    </Form>
                    {
                        props.isDebug != undefined && props.isDebug == true ?
                            <React.Fragment>
                                <React.Fragment>
                                    <Button onClick={() => {
                                        formRef.current?.validateFields().then((vls: any) => {
                                            //console.log(vls);
                                        }, (err: any) => {
                                            console.log(err)
                                        })
                                    }}>
                                        Submit
                                    </Button>
                                </React.Fragment>

                                <code>
                                    {JSON.stringify(values)}
                                </code>
                            </React.Fragment>

                            : <></>
                    }
                </ConfigProvider>
                : <></>
            }
        </div>
    );
};




export const HeadingItem = React.memo((props: { formId: any, field: IField, index: number, fieldLayoutInit: Function }) => {

    let field = props.field as IFieldHeading;

    return (
        <Col {...props.fieldLayoutInit(props.formId, field, props.index)}>
            <div style={{ textAlign: field.align ?? 'left' }}>
                {
                    typeof (field.label) == 'string' ?
                        <Title level={3}>{field.label}</Title>
                        : field.label
                }
            </div>
        </Col>

    )

})

export const InputItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    stylesInit: Function
}) => {

    let field = props.field as IField;

    return (
        <Col {...props.fieldLayoutInit(field, props.index)}>

            <Form.Item {...props.formItemInit(field, props.index)}>
                <Input
                    style={props.stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    maxLength={field.max ?? undefined}
                    disabled={props.disabledHander(field.disabled)}
                />
            </Form.Item>

        </Col>
    )

})

export const PasswordItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    stylesInit: Function
}) => {

    let field = props.field as IField;
    return (
        <Col {...props.fieldLayoutInit(field, props.index)}  >
            <Form.Item {...props.formItemInit(field, props.index)}>
                <Input.Password
                    style={props.stylesInit()}
                    placeholder={field.placeholder ?? ""}
                    disabled={props.disabledHander(field.disabled)}
                    maxLength={field.max ?? undefined}
                />
            </Form.Item>
        </Col>
    )

})