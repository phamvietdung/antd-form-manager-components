export interface IDataSource {
    id?: string,
    label?: string,
    labelDetail?: string,
    data?: Array<Object>,
    dataRemote?: IDataRemote,//Function,
    /** @default when remote had set data before loading */
    default?: any,
    /** @multiple */
    multiple?: boolean
}

export type IDataRemote = (search?: string, id?: any, deps?: any, page?: number) => Promise<any>;

export type IConditionFunction = (obj: Object) => boolean;
