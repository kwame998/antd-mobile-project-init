/**
 * Created by yzsoft on 16/3/16.
 */
import {apiHostUrl,getSessionData} from './system'
import {api} from './api'
import {Toast} from 'antd-mobile';

//根据 key 获取 api 对应的 url
export const getApi = (key)=> {
    let obj=null;
    $.each(api,function (index,item) {
        if(item.key==key){
            obj=item;
            return false;
        }
    });
    return obj;
};

//封装的 api 请求方法。其中，会对进行全局的 错误处理
export const callApi = (key, data)=> {
    let apiObj = getApi(key),
        url=apiHostUrl+apiObj.url,
        method = apiObj.method;
    if (!apiObj) {
        return false;
    }
    return operateData(url, method, data)
};
export const error=(content="失败")=>{
    Toast.fail(content, 1.5);
};
export const success=(content="成功")=>{
    Toast.success(content, 1);
};
//操作数据的方法
export const operateData = (url, method, data)=> {
    return new Promise(function (resolve, reject) {
        let token = getSessionData('token');
        $.ajax({
            url: url,
            type: method,
            data: data,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function (res) {
                if (res.isError) {
                    let text=res.errorDesc?res.errorDesc:"无";
                    error("请求有误，错误描述:"+text);
                } else {
                    resolve(res);
                }
            },
            error: function (req, status, errinfo) {
                if (req.status == '403') {
                    error("网站拒绝您的访问");
                } else {
                    error("接口程序错误"+errinfo);
                }
                reject(req);
            }
        });

    });
};