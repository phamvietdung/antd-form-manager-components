import { Rule } from "antd/lib/form";

import { IConditionFunction, IConditionWithCurrentValueFunction, IDataSource } from "./field-condition";

import { IFieldType } from "./field-type";

interface IFieldHeading {
    type: IFieldType,
    label: string | React.ReactNode,
    align?: 'left' | 'right' | 'center'
}

interface IFieldBase extends IFieldCondition {

    type: IFieldType,

    name: string,

    label: string,

    onChange?: Function,

    rules?: (fields: any) => Rule[],

    placeholder?: string,

    span?: number

}

interface IFieldLengthValidator {

    min?: number,

    max?: number,
}

interface IFieldCondition {

    dependencies?: string[],

    required?: IConditionFunction | boolean,

    disabled?: IConditionFunction | boolean,

    visible?: IConditionFunction | boolean,

    validator?: IConditionWithCurrentValueFunction,

    validatorMessage?: string

}

interface IFieldLayout {

    visibleWrap?: string,

    span?: number,

    rows?: number,

}

interface IFieldSelect extends IFieldBase {

    dataSource?: IDataSource,

    allowClear?: boolean,

    notFoundItem?: any,

    defaultPrefix?: string,

}

interface IFieldNumber extends IFieldBase, IFieldLengthValidator {

}

interface IFieldDateTime extends IFieldBase {
    showTime?: boolean,
    isNow?: boolean,
    showToday?: boolean,
}

interface IField extends IFieldBase, IFieldLengthValidator {

    format?: string,

}

export {
    IField,
    IFieldHeading,
    IFieldNumber,
    IFieldDateTime,
    IFieldSelect,
    IFieldBase,
    IFieldCondition,
    IFieldLengthValidator,
    IFieldLayout
}