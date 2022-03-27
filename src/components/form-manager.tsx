import React, { useState, useEffect } from 'react';

import { useFormManagerState } from './hook'

import 'antd/dist/antd.css'

import './styles.css'

import { Form, Button, ConfigProvider, Row } from "antd";

import { IField, IFieldBase } from './interfaces/field';




import { useHandler } from './handler';

// import { SetStyles, GetStyles, GetStyleName, IUIType, GetLocale, SetLocale, ILocale } from './const';

import { HeadingItem, InputItem, PasswordItem, TextareaItem, DatetimeItem, NumberItem, DatetimeItemGroup, SelectItem, RadioItem, EditorItem, PluginItem, SetPluginComponent } from './form-items';

import { DFormManagerProps } from './interfaces/form'

/**
 * Ant[D]esign form manager or called DFormManager is a simple form manager.
 * 
 * With some key feature to make you create a from base on ant.design quickly
 * 
 * I'll provide gRPC support as soon as posible...
 * 
 * @param props DFormManagerProps [https://google.com.vn] 
 * @returns component
 */

export const DFormManager = ({
    ...props
}: DFormManagerProps) => {

    const { formId, setFormId,
        formRef, setFormRef,
        fields, setFields,
        values, setValuesAsync } = useFormManagerState(props);


    const { disabledHander,
        requiredHander,
        visibleHander, requireRule } = useHandler(formRef, values);


    const onValueChange = (value: Object, values: any) => {
        setValuesAsync(values);
    }

    const onFieldChange = (value: Object, values: any) => {
       
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
                requireRule(field, props)
            ],
            required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            // disabled: disabledHander(field.disabled), // not working
            className: 'animated-field'
        }
    }

    const fieldLayoutInit = (field: any, index: number) => {
        return {
            // key: `${formId}-${index}`,
            span: field.span ?? 24,
        }
    }

    const combineArgFunction = (index: number) => {
        return {
            disabledHander,
            formItemInit,
            // stylesInit,
            fieldLayoutInit,
            key: `${formId}-${index}`,
        }
    }

    return (
        <div style={{ maxWidth: props.width ?? 'auto' }}>
            {formRef != undefined ?
                <ConfigProvider locale={props.locale}>
                    <Form
                        validateMessages={
                            {
                                // required: "${label} " + (props.options?.rule?.message ?? defaultOptions.rule?.message),
                            }
                        }
                        // layout={props.options?.layout ?? 'vertical'}
                        id={formId} 
                        ref={formRef} 
                        name="control-ref" 
                        initialValues={props.data ?? {}}
                        onValuesChange={onValueChange}
                        onFieldsChange={onFieldChange}
                    // className={GetStyleName()}
                    >
                        <Row gutter={16}>
                            {fields.map((_field: IField, index: number) => {

                                switch (_field.type) {
                                    case 'heading': return <HeadingItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'input': return <InputItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'password': return <PasswordItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'textarea': return <TextareaItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'number': return <NumberItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'datetime': return <DatetimeItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'datetime-group': return <DatetimeItemGroup field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'select': return <SelectItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'radio': return <RadioItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'editor': return <EditorItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                    case 'plugin': return <PluginItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} />
                                }

                            })
                            }
                        </Row>
                    </Form>
                </ConfigProvider>
                : <></>
            }
        </div>
    );
};

