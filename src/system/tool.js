/**
 * Created by yzsoft on 16/5/13.
 */
export  const  objToArray=(obj)=>{
  var result=[];
  if(!obj){
    console.warn('传入的对象为空');
    return null;
  }
  $.each(obj,function(index,content){
    result.push(content);
  });
  return result;
};
export  const  checkMobile=(mobile)=>{
  let phone = mobile;
  let reg = /^1[3|4|5|7|8]\d{9}$/;
  let result = reg.test(phone);
  return result;
};
