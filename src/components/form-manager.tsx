import React, { useState, useEffect } from 'react';

import { useFormManagerState } from './hook'

import 'antd/dist/antd.css'
import {
    Form, Input, Button, Select, ConfigProvider, DatePicker, InputNumber, Radio, Switch, Checkbox, TimePicker, Row, Col, Space, Spin, Tooltip, notification, List, FormInstance,
} from "antd";

import TextArea from 'antd/lib/input/TextArea';

import moment from 'moment';

import { IFieldType } from './field-type';

import { IFieldDateTime, IFieldNumber, IFieldSelect, IField } from './field';

import { Locale } from 'antd/lib/locale-provider';

import enUS from 'antd/es/locale/en_US';

import { IFormOptions } from './form-option';
import { IConditionFunction } from './field-condition';

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
    }
}

export const DFormManager = ({
    ...props
}: DFormManagerProps) => {

    const { formId, setFormId,
        formRef, setFormRef,
        fields, setFields,
        values, setValuesAsync } = useFormManagerState(props);


    const disabledHander = (disabled: undefined | boolean | IConditionFunction) => {
        let result = false;
        if (typeof (disabled) == 'boolean') {
            result = disabled;
        }
        else if (typeof (disabled) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = disabled(_values);
            else if (values != undefined)
                result = disabled(values);
        }
        return result;
    }

    const requiredHander = (required: undefined | boolean | IConditionFunction) => {
        let result = false;
        if (typeof (required) == 'boolean') {
            result = required;
        }
        else if (typeof (required) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = required(_values);
            else if (values != undefined)
                result = required(values);

        }
        return result;
    }

    const visibleHander = (visible: undefined | boolean | IConditionFunction) => {
        let result = false;
        if (typeof (visible) == 'boolean') {
            result = visible;
        }
        else if (typeof (visible) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = visible(_values);
            else if (values != undefined)
                result = visible(values);

        }
        return result;
    }

    const onValueChange = (value: Object, values: any) => {
        //console.log('change');
        setValuesAsync(values);
    }

    const onFieldChange = (value: Object, values: any) => {
        //console.log(value,values)
    }

    const formItemInit = (field: IField, index: number) => {
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
                    id={formId} ref={formRef} name="control-ref" initialValues={props.data ?? {}}
                    onValuesChange={onValueChange}
                    onFieldsChange={onFieldChange}
                >
                    {fields.map((field: IField, index: number) => {

                        switch (field.type) {
                            case 'input':
                                return (
                                    <Col {...fieldLayoutInit(field, index)}>
                                        <Form.Item {...formItemInit(field, index)}>
                                            <Input
                                                placeholder={field.placeholder ?? ""}
                                                maxLength={field.max ?? undefined}
                                                disabled={disabledHander(field.disabled)}
                                            />
                                        </Form.Item>
                                    </Col>
                                )
                            case 'password':
                                return (
                                    <Col {...fieldLayoutInit(field, index)}  >
                                        <Form.Item {...formItemInit(field, index)}>
                                            <Input.Password
                                                placeholder={field.placeholder ?? ""}
                                                disabled={disabledHander(field.disabled)}
                                                maxLength={field.max ?? undefined}
                                            />
                                        </Form.Item>
                                    </Col>
                                )
                            case 'textarea':
                                return (
                                    <Col {...fieldLayoutInit(field, index)}  >
                                        <Form.Item {...formItemInit(field, index)}>
                                            <TextArea
                                                placeholder={field.placeholder ?? ""}
                                                disabled={disabledHander(field.disabled)}
                                                maxLength={field.max ?? undefined}
                                            />
                                        </Form.Item>
                                    </Col>
                                )
                            case 'number':
                                return (
                                    <Col {...fieldLayoutInit(field, index)}  >
                                        <Form.Item {...formItemInit(field, index)}>
                                            <InputNumber
                                                formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                                                parser={(value: any) => value.replace(/\$\s?|(\.*)/g, '')}
                                                style={{ width: '100%' }}
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

                    })
                    }
                </Form>

            </ConfigProvider>
            : <></>
    );
};
