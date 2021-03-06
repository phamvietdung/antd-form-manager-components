
import { Locale } from 'antd/lib/locale-provider';


// import { IFormOptions } from './form-option';

export type DebugPanel = () => JSX.Element;

export type DFormManagerProps = {
    fields: any[],
    locale?: Locale,
    // options?: IFormOptions,
    ref?: any,
    data?: object,
    width?: number,
    /** Provide method to export the current values in UI view */
    getDebugPanel?: (values: any) => void,
    /** Meaning form is ready or not? */
    getIsReady?: (isReady: boolean) => void
}