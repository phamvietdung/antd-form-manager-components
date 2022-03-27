import { IConditionFunction } from "./interfaces/field-condition";


export const useHandler = (formRef : any, values : any) => {

    const disabledHander = (disabled: undefined | boolean | IConditionFunction) => {
        let result = false;
        if (typeof (disabled) == 'boolean') {
            result = disabled;
        }
        else if (typeof (disabled) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = disabled(_values);
            else if (values != undefined)
                result = disabled(values);
        }
        return result;
    }

    const requiredHander = (required: undefined | boolean | IConditionFunction) => {

        let result = false;

        if (typeof (required) == 'boolean') {
            result = required;
        }
        else if (typeof (required) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = required(_values);
            else if (values != undefined)
                result = required(values);

        }
        return result;
    }

    const visibleHander = (visible: undefined | boolean | IConditionFunction) => {
        let result = false;
        if (typeof (visible) == 'boolean') {
            result = visible;
        }
        else if (typeof (visible) == 'function') {

            let _values = formRef.current?.getFieldsValue();

            if (_values != undefined)
                result = visible(_values);
            else if (values != undefined)
                result = visible(values);

        }
        return result;
    }

    const requireRule = (field : any, props : any) =>  ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {

            if (typeof (field.required) == 'function') {

                let fieldvalues = getFieldValue()

                if (field.required(fieldvalues))
                    if (fieldvalues == undefined || fieldvalues[field.name] == undefined || fieldvalues[field.name].trim() == "")
                        return Promise.reject(`${field.label} ${(props.options?.rule?.message ?? "require rule not correct")}`);
                    else
                        return Promise.resolve();
            }
                
            return Promise.resolve();
        }
    })

    return {
        disabledHander,
        requiredHander,
        visibleHander,
        requireRule
    }
}