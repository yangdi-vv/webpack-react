import axios from 'axios';

interface requestParams {
    type: string,
    url: string,
    data: any,
    params?: any,
    success?: any,
    fail?: any,
    error?: any,
    final?: any,
    timeout?: any,
}

function _request({
                      type= 'get',
                      url,
                      data,
                      params,
                      success,
                      fail,
                      error,
                      final,
                      timeout,
                  }: requestParams) {
    if(!url) {
        return Promise.reject('请求参数错误!');
    }

    const obj = {
        headers: {
            'X-Timestamp': new Date().valueOf()
        },
        timeout: timeout || 10000,
        params: {
            page_size: 999,
            page_num: 1
        }
    }

    if(params) {
        obj.params = {
            ...obj.params,
            ...params
        };
    }

    if(['get', 'delete'].includes(type)) {

        axios[type](url, obj).then(res => {
            success && success(res.data);
        }, e => {
            fail&&fail(e);
        }).finally(() => {
            final && final();
        });

    } else if(['post', 'put'].includes(type)) {

        axios[type](url, data, obj).then(res => {
            success && success(res.data);
        }, e => {
            fail && fail(e);
        }).finally(() => {
            final && final();
        });

    }
}

export {
    _request
}
