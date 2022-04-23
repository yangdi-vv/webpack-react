// request interface
export interface requestParamsType {
    type: string,
    url: string,
    data?: object,
    params?: object,
    success?:  Function,
    fail?:  Function ,
    error?:  Function,
    final?:  Function,
    timeout?: number,
}
