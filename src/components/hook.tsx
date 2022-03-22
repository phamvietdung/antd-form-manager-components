import { FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { DFormManagerProps } from ".";
import { NewId } from "./helper";

export const useFormManagerState = (props : DFormManagerProps) => {

    const [formId, setFormId] = useState<string>("");

    const [formRef, setFormRef] = useState<any>(undefined);

    const [fields, setFields] = useState<any>([]);

    const [values, setValues] = useState<any>({});

    const [valuesAsync, setValuesAsync] = useState<any>({});

    useEffect(() => {

        const timeOutId = setTimeout(() => setValues(valuesAsync), 500);

        return () => clearTimeout(timeOutId);

    },[valuesAsync]);


    useEffect(() => {

        //console.log(values);

    },[values]);

    useEffect(() => {

        setFormId(NewId());

        if (props.ref == undefined) {
            setFormRef(React.createRef<FormInstance>());
        } else {
            setFormRef(props.ref);
        }

        if(props.data !=undefined)
            setValuesAsync(props.data);

    }, []);

    useEffect(() => {
        console.log(props.data);
    }, [props.data])

    useEffect(() => {

        setFields(props.fields);

    }, [props.fields])

    useEffect(() => {
        //setValues(props.data??{})
    }, [props.data])

    return {
        formId, setFormId,
        formRef, setFormRef,
        fields, setFields,
        values, setValuesAsync
    }

}