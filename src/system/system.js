/**
 * Created by yzsoft on 16/5/4.
 */
export const apiHostUrl ='http://192.168.1.129:1200/siteapi';
export const mediaHost ='http://192.168.1.129:1200';
//localStorage
export const setLocalData=(key,data)=>{
    if(typeof(data)==='object'){
        localStorage.setItem(key,JSON.stringify(data))
    }else {
        localStorage.setItem(key,data)
    }
};
export const getLocalData=(key)=>{
    let value=null;
    try {
        value=JSON.parse(localStorage.getItem(key))
    }catch(err){
        value=localStorage.getItem(key)
    }
    return value;
};

export const removeLocalData=(key)=>{
    if (Array.isArray(key)){
        for (var i=0,l=key.length;i<l;i++){
            localStorage.removeItem(key[i]);
        }
    }else {
        localStorage.removeItem(key);
    }
};

//sessionStorage
export const setSessionData=(key,data)=>{
    try {
        sessionStorage.setItem(key,JSON.stringify(data))
    }catch(err){
        sessionStorage.setItem(key,data)
    }
};
export const getSessionData=(key)=>{
    let value=null;
    try {
        value=JSON.parse(sessionStorage.getItem(key))
    }catch(err){
        value=sessionStorage.getItem(key)
    }
    return value;
};

export const removeSessionData=(key)=>{
    if (Array.isArray(key)){
        for (var i=0,l=key.length;i<l;i++){
            sessionStorage.removeItem(key[i]);
        }
    }else {
        sessionStorage.removeItem(key);
    }

};