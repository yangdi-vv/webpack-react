import axios from 'axios';
import { requestParamsType } from '@models/utils';

// common request
function _request({
                      type = 'get',
                      url,
                      data,
                      params,
                      success,
                      fail,
                      final,
                      timeout,
                  }: requestParamsType) {
    //
    if(!url) {
        return Promise.reject('请求参数错误!');
    }

    const obj:any = {
        timeout: timeout || 10000,
    }

    if(params) {
        obj.params = params;
    }

    // get && delete method
    if(['get', 'delete'].includes(type)) {

        axios[type](url, obj).then(res => {
            success && success(res.data);
        }, e => {
            fail&&fail(e);
        }).finally(() => {
            final && final();
        });
    } else if(['post', 'put'].includes(type)) {
        // post && put method
        axios[type](url, data, obj).then(res => {
            success && success(res.data);
        }, e => {
            fail && fail(e);
        }).finally(() => {
            final && final();
        });

    }
}

// components Button splicing className
function getClassName(nameObj: object) {
    let className = '';
    for (let key in nameObj) {
        nameObj[key] && (className = `${className} ${key}`)
    }
    return className;
}

export {
    _request,
    getClassName
};
