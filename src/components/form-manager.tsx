import React, { useState, useEffect } from 'react';

import { useFormManagerState } from './hook'

import { CSSTransition } from 'react-transition-group';
import './styles.css'
import 'antd/dist/antd.css'
import {
    Form, Input, Button, Select, ConfigProvider, DatePicker, InputNumber, Radio, Switch, Checkbox, TimePicker, Row, Col, Space, Spin, Tooltip, notification, List, FormInstance, Typography
} from "antd";
const { Title } = Typography;

import TextArea from 'antd/lib/input/TextArea';

import moment from 'moment';

import { IFieldType } from './field-type';

import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from './field';

import { Locale } from 'antd/lib/locale-provider';

import enUS from 'antd/es/locale/en_US';

import { IFormOptions } from './form-option';
import { IConditionFunction } from './field-condition';
import { useHandler } from './handler';

const { RangePicker } = DatePicker;

const { Option } = Select;

export interface DFormManagerProps {
    fields: any[],
    locale?: Locale,
    options?: IFormOptions,
    ref?: any,
    data?: object
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

    const { formId, setFormId,
        formRef, setFormRef,
        fields, setFields,
        values, setValuesAsync } = useFormManagerState(props);


    const { disabledHander,
        requiredHander,
        visibleHander } = useHandler(formRef, values);

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
                {
                    required: field.required ? true : false
                }
            ],
            required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            className: 'animated-field'
        }
    }

    const fieldLayoutInit = (field: any, index: number) => {
        return {
            key: `${formId}-${index}`,
            span: field.span ?? 24,
        }
    }


    return (
        formRef != undefined ?
            <ConfigProvider locale={props.locale ?? enUS}>
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
                >
                    <Row gutter={16}>
                        {fields.map((_field: IField, index: number) => {

                            switch (_field.type) {
                                case 'heading':
                                    {
                                        let field = _field as IFieldHeading;

                                        return (
                                            <Col {...fieldLayoutInit(field, index)}>
                                                <div style={{ textAlign: field.align ?? 'left' }}>
                                                    {
                                                        typeof (field.label) == 'string' ?
                                                            <Title level={3}>{field.label}</Title>
                                                            : field.label
                                                    }
                                                </div>
                                            </Col>

                                        )
                                    }
                                case 'input':
                                    {
                                        let field = _field as IField;
                                        return (
                                            <Col {...fieldLayoutInit(field, index)}>

                                                <Form.Item {...formItemInit(field, index)}>
                                                    <Input
                                                        style={props.options?.styles}
                                                        placeholder={field.placeholder ?? ""}
                                                        maxLength={field.max ?? undefined}
                                                        disabled={disabledHander(field.disabled)}
                                                    />
                                                </Form.Item>

                                            </Col>
                                        )
                                    }

                                case 'password':
                                    {
                                        let field = _field as IField;
                                        return (
                                            <Col {...fieldLayoutInit(field, index)}  >
                                                <Form.Item {...formItemInit(field, index)}>
                                                    <Input.Password
                                                        style={props.options?.styles}
                                                        placeholder={field.placeholder ?? ""}
                                                        disabled={disabledHander(field.disabled)}
                                                        maxLength={field.max ?? undefined}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        )
                                    }

                                case 'textarea':
                                    {
                                        let field = _field as IField;
                                        return (
                                            <Col {...fieldLayoutInit(field, index)}  >
                                                <Form.Item {...formItemInit(field, index)}>
                                                    <TextArea
                                                        style={props.options?.styles}
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
                                                        style={props.options?.styles}
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
                                                        style={props.options?.styles}
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
                                case 'select':
                                    {
                                        let field = _field as IFieldSelect;
                                        return (
                                            <Col {...fieldLayoutInit(field, index)}  >
                                                <Form.Item {...formItemInit(field, index)}>
                                                    <Select
                                                        disabled={disabledHander(field.disabled)}
                                                        showSearch
                                                        style={props.options?.styles}
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
                                                                <Option value={field.dataSource!.id !== undefined ? select_data[field.dataSource!.id] : select_data['id']} key={`${formId}-fields-${field.name}-${index}-${select_index}`}>
                                                                    {field.dataSource!.label !== undefined ? select_data[field.dataSource!.label] : select_data['value']}
                                                                </Option>
                                                            ))
                                                        }
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        )
                                    }
                                // case 'datetime':
                                //     return (
                                //         <Col {...fieldLayoutInit(field, index)}  >
                                //             <Form.Item {...formItemInit(field, index)}>
                                //                 <DatePicker
                                //                 showToday={true}
                                //                 // showTime={field.showTime ?? false}
                                //                 disabledDate={disabledEndDate}
                                //                 // onChange={(value) => setEndTime(value)}
                                //                 // disabled={isDisabled(field.disabled, field.name) ?? false}
                                //                 // format={field.showTime ? INPUT_DATE_TIME_LONG_FORMAT : INPUT_DATE_TIME_SHORT_FORMAT}
                                //                  />
                                //             </Form.Item>
                                //         </Col>
                                //     );
                                // case 'time':
                                //     return (
                                //         <Col  {...propsWrapperHandle(field, index)}>
                                //             <Form.Item {...propsFormItemHandle(field)} >
                                //                 <TimePicker {...propsItemHandle()} style={{ width: '100%' }} showNow={true} disabled={isDisabled(field.disabled, field.name) ?? false} />
                                //             </Form.Item>
                                //         </Col>

                                //     )
                            }

                        })
                        }
                    </Row>
                </Form>

            </ConfigProvider>
            : <></>
    );
};
