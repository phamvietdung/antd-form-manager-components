import { FormLayout } from "antd/lib/form/Form"

type IFormOptions = {

    select?: ISelectOptions,

    datetime?: IDateTimeOptions,

    rule? : IRuleOptions,

    layout? : FormLayout,

    styles? : React.CSSProperties


}

type IRuleOptions = {
    message : string
}

type ISelectOptions = {

    defaultId: string,

    defaultLabel: string

}

type IDateTimeOptions = {

}

type ILayoutOptions = {

}

export {

    IFormOptions,

    ISelectOptions,

    IDateTimeOptions, 

    IRuleOptions,

    ILayoutOptions
    
}