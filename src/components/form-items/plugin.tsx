import { Col, Typography } from "antd";
import React from "react";
import { IFieldDateTime, IFieldNumber, IFieldSelect, IField, IFieldBase, IFieldHeading } from '../field';

interface IPlugin {
    name: string, plugin: JSX.Element
}

const plugins: IPlugin[] = [];

export const _GetPluginComponent = React.memo((props: { pluginName: string }) => {

    const plugin_filter = plugins.filter((x: IPlugin) => x.name == props.pluginName);

    if (plugin_filter.length > 0)
        return (plugin_filter[0].plugin);
    else
        return (<React.Fragment>
            Plugin: {props.pluginName} is not register!
        </React.Fragment>);
})

export const _SetPluginComponent = (name: string, plugin: JSX.Element) => {
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
            <_GetPluginComponent pluginName={field.pluginName!} />
        </React.Fragment>

    )

})

