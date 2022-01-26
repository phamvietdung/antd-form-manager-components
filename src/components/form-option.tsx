type IFormOptions = {

    select?: ISelectOptions,

    datetime?: IDateTimeOptions,

    rule? : IRuleOptions,

    layout? : ILayoutOptions

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