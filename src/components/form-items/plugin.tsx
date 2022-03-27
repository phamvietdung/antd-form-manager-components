import { Col, Typography } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../interfaces/field';

interface IPluginProps {
    pluginName: string,
    field: IField
}

//export type PluginElement = (props : {}) => JSX.Element;

export type PluginElement = React.FunctionComponent<{ field: IField }>;// => JSX.Element;

interface IPlugin {
    name: string, plugin: PluginElement
}

const plugins: IPlugin[] = [];

export const _GetPluginComponent = React.memo((props: IPluginProps) => {

    const plugin_filter = plugins.filter((x: IPlugin) => x.name == props.pluginName);

    if (plugin_filter.length > 0) {
        let Current = plugin_filter[0].plugin;
        return (
            <Current {...{ field: props.field }} />
        );
    }

    else
        return (<React.Fragment>
            Plugin: {props.pluginName} is not register!
        </React.Fragment>);
})

export const _SetPluginComponent = (name: string, plugin: PluginElement) => {
    plugins.push(
        {
            name, plugin
        }
    )
    return true;
}

export default React.memo((props: { formId: any, field: IField, index: number }) => {

    let field = props.field as IField;
    let index = props.index;

    return (
        <React.Fragment>
            <_GetPluginComponent pluginName={field.pluginName!} {...{ field }} />
        </React.Fragment>

    )

})

