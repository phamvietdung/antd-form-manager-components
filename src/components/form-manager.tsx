import React, { useState, useEffect, useMemo } from 'react';

import { useFormManagerState } from './hook'

import 'antd/dist/antd.css'

// import './styles.css'

import { Form, Button, ConfigProvider, Row, Col } from "antd";

import { IField, IFieldBase } from './interfaces/field';

import { useHandler } from './handler';

import { HeadingItem, InputItem, PasswordItem, TextareaItem, DatetimeItem, NumberItem, DatetimeItemGroup, SelectItem, RadioItem, EditorItem, PluginItem } from './form-items';

import { DFormManagerProps } from './interfaces/form'

import { GetConfig } from './utils/config';

const configs = GetConfig();

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
        values, setValuesAsync,
        pluginValues, setPluginValues } = useFormManagerState(props);


    const { disabledHander,
        requiredHander,
        visibleHander, requireRule } = useHandler(formRef, values);


    const onValueChange = (value: Object, values: any) => {

        console.log(values);

        combineHook(values);

        setValuesAsync(values);
    }

    const combineHook = (values: any) => {
        var count = 0;

        for (var i = 0; i < fields.length; i++) {
            if (fields[i].combinable != undefined && typeof (fields[i].combinable) == 'function') {
                if (values[fields[i].name] != fields[i].combinable(values)) {
                    values[fields[i].name] = fields[i].combinable(values);
                    count++;
                } else {
                    //console.log('not combine change!');
                }

            }
        }

        if (count > 0)
            formRef.current?.setFieldsValue(values);
    }

    const onFieldChange = (value: any, values: any) => {

    }

    const formItemInit = (field: IFieldBase, index: number) => {
        return {
            name: field.name,
            label: field.label,
            rules: [

                // {
                //     required: typeof (field.required) == 'boolean' ? field.required : false

                // },
                // ({ getFieldValue }: any) => ({
                //     validator(_: any, value: any) {

                //         if (field.validator == undefined)
                //             return Promise.resolve();

                //         const [result, message] = field.validator(getFieldValue(), value);

                //         if (result)
                //             return Promise.resolve();
                //         else
                //             return Promise.reject(message ?? "");
                //         //Promise.reject(new Error(field.validatorMessage ?? "Validator error!"));
                //     },
                //     //message: field.validatorMessage ?? "Validator error"
                // }),
                requireRule(field, props),
            ],
            required: requiredHander(field.required),
            hidden: visibleHander(field.visible),
            // disabled: disabledHander(field.disabled), // not working
            className: configs.itemClassName
        }
    }

    const fieldLayoutInit = (field: any, index: number) => {
        return {
            // key: `${formId}-${index}`,
            span: field.span ?? configs.maxSpan,
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

    const onChangePlugin = (onChangeValues: { name: any, value: any }[]) => {
        //console.clear();
        //console.log("I GOT IT!");
        //console.log(pluginValues);
        //console.log(onChangeValues);

        setPluginValues({ ...pluginValues, ...onChangeValues }); // =)) got got got
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
                        layout={configs.layout}
                        id={formId}
                        ref={formRef}
                        name="control-ref"
                        initialValues={props.data ?? configs.defaultData}
                        onValuesChange={onValueChange}
                        onFieldsChange={onFieldChange}
                        className={configs.className}
                    >
                        <Row gutter={configs.gutter}>
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
                                    case 'plugin':
                                        return <Col  {...fieldLayoutInit(_field, index)} key={`plugin${formId}-${index}`}>
                                            <PluginItem field={_field} index={index} formId={formId} {...combineArgFunction(index)} onChange={onChangePlugin} />
                                        </Col>

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

