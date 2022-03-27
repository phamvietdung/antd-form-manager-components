import { Locale } from "antd/lib/locale-provider"

import enUs from 'antd/lib/locale/en_US';

export interface IConfig {
    locale: Locale,
    className: string,
    itemClassName: string,
    gutter : number,
    defaultData : object,
    maxSpan : number
}

let configs: IConfig = {
    locale: enUs,
    className: 'dform',
    itemClassName: 'animated-field',
    gutter : 16,
    defaultData : {},
    maxSpan : 24
}

export const GetConfig = (): IConfig => {
    return configs;
}

export const ConfigureLocale = (locale: Locale) => {
    configs.locale = locale;
}

export const ConfigureClassName = (className: string) => {
    configs.className = className;
}

export const ConfigureItemClassName = (itemClassName: string) => {
    configs.itemClassName = itemClassName;
}

export const ConfigureGutter = (gutter: number) => {
    configs.gutter = gutter;
}

