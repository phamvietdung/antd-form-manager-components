import { Col, Typography } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../field';

const { Title } = Typography;

export default React.memo((props: { formId: any, field: IField, index: number, fieldLayoutInit: Function }) => {

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