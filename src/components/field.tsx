import { Rule } from "antd/lib/form";

import { IConditionFunction, IDataSource } from "./field-condition";

import { IFieldType } from "./field-type";

interface IFieldBase {

    type: IFieldType,

    name: string,

    label: string,

    onChange?: Function,

    rules?: (fields: any) => Rule[],

}

interface IFieldLengthValidator{

    min?: number,

    max? : number,
}

interface IFieldCondition{
    
    dependencies?: string[],

    required?: IConditionFunction | boolean,
    
    disabled?: IConditionFunction | boolean,

    visible?: IConditionFunction | boolean,

}

interface IFieldLayout {

    visibleWrap?: string,

    span?: number,

    rows?: number,

}

interface IFieldSelect {

    dataSource?: IDataSource,

    allowClear?: boolean,

    notFoundItem?: any,

    defaultPrefix?: string,

}

interface IFieldNumber extends IFieldBase, IFieldCondition, IFieldLengthValidator {

}

interface IFieldDateTime extends IFieldBase, IFieldCondition {

    showTime?: boolean,
    isNow?: boolean,

}

interface IField extends IFieldBase, IFieldCondition, IFieldLengthValidator {

    format?: string,

    placeholder?: string, 
}

export {
    IField,
    IFieldNumber,
    IFieldDateTime,
    IFieldSelect,
    IFieldBase,
    IFieldCondition,
    IFieldLengthValidator,
    IFieldLayout
}