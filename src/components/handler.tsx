import { IConditionFunction } from "./field-condition";


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

    return {
        disabledHander,
        requiredHander,
        visibleHander
    }
}