type IFormOptions = {

    select?: ISelectOptions,

    datetime?: IDateTimeOptions

}

type ISelectOptions = {

    defaultId: string | "id",

    defaultLabel: string | "value",

}

type IDateTimeOptions = {

}

export {

    IFormOptions,

    ISelectOptions,

    IDateTimeOptions
    
}