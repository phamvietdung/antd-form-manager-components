import { FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { DFormManagerProps } from ".";
import { NewId } from "./helper";

export const useFormManagerState = (props : DFormManagerProps) => {

    const [formId, setFormId] = useState<string>("");

    const [formRef, setFormRef] = useState<any>(undefined);

    const [fields, setFields] = useState<any>([]);

    useEffect(() => {

        setFormId(NewId());

        if (props.ref == undefined) {
            setFormRef(React.createRef<FormInstance>());
        } else {
            setFormRef(props.ref);
        }

    }, []);

    useEffect(() => {

        setFields(props.fields);

    }, [props.fields])

    return {
        formId, setFormId,
        formRef, setFormRef,
        fields, setFields
    }

}