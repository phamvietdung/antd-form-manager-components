import React from 'react';

import 'antd/dist/antd.css'
import {
    Form, Input, Button, Select, ConfigProvider, DatePicker, InputNumber, Radio, Switch, Checkbox, TimePicker, Row, Col, Space, Spin, Tooltip, notification, List,
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
    locale? : Locale,
    options? : IFormOptions
}

export const DFormManager = ({
    ...props
}: DFormManagerProps) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <ConfigProvider locale={props.locale??enUS}>

        </ConfigProvider>
    );
};
