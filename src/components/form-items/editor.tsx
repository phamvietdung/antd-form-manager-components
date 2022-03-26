import { Col, Typography, Form, Input, InputNumber } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../field';
import { Editor } from "react-draft-wysiwyg";
import ReactDraftOption from '../react-draft-wysiwyg/options'



export const _EditorItem = React.memo((props: {
    formId: any, field: IField, index: number,
    fieldLayoutInit: Function, formItemInit: Function,
    disabledHander: Function,
    stylesInit: Function
}) => {

    const formItemEditor = (field: IFieldBase, index: number) => {
        return {
            name: field.name,
            label: field.label,
            // required: requiredHander(field.required),
            //hidden: visibleHander(field.visible),
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

    let field = props.field as IField;
    let index = props.index;
    let fieldLayoutInit = props.disabledHander;
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

})
