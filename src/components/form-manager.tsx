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

const { RangePicker } = DatePicker;

const { Option } = Select;

export interface DFormManagerProps {
    fields: any[],
    locale?: Locale,
    options?: IFormOptions,
    ref?: any,
    default?: object
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
        fields, setFields } = useFormManagerState(props);


    const onValueChange = (value: Object, values: any) => {

    }

    const onFieldChange = () => {

    }

    const formItemInit = (field: IField, index: number) => {
        return {
            name: field.name,
            label: field.label,
            key: `${index}`,
            rules: [
                {
                    required: field.required ? true : false
                }
            ]
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
                    id={formId} ref={formRef} name="control-ref" initialValues={props.default ?? {}} onValuesChange={onValueChange}
                    onFieldsChange={onFieldChange}
                >
                    {fields.map((field: IField, index: number) => {

                        switch (field.type) {
                            case 'input':
                                return (
                                    <Form.Item {...formItemInit(field, index)}>
                                        <Input placeholder={field.placeholder ?? ""}
                                            maxLength={field.max ?? undefined}
                                        />
                                    </Form.Item>
                                )
                            case 'password':
                                return (
                                    <Form.Item {...formItemInit(field, index)}>
                                        <Input.Password placeholder={field.placeholder ?? ""}
                                            maxLength={field.max ?? undefined}
                                        />
                                    </Form.Item>
                                )
                            case 'textarea':
                                return (
                                    <Form.Item {...formItemInit(field, index)}>
                                        <TextArea placeholder={field.placeholder ?? ""}
                                            maxLength={field.max ?? undefined}
                                        />
                                    </Form.Item>
                                )
                        }

                    })
                    }
                </Form>

            </ConfigProvider>
            : <></>
    );
};
