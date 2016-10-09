import {combineReducers} from 'redux';
import 'babel-polyfill'
import {setSessionData,getSessionData} from '../system/system';
const footBar=(state={
    hidden:false,
    selectedTab:'index'
},action)=>{
  switch (action.type){
      case 'set_footBar_visible':
          return Object.assign({},state,{
              hidden:action.hidden
          });
      case 'set_footBar_select':
          return Object.assign({},state,{
              selectedTab:action.selectedTab
          });
      default:
          return state;
  }
};
const navBar=(state={
    points:{
        left:false,
        leftClick:()=>{},
        right:false,
        color:'#555',
        iconName:''
    },
    title:'首页'
},action)=>{
    switch (action.type){
        case 'set_navBar_points':
            return Object.assign({},state,{
                points:action.points
            });
        case 'set_navBar_title':
            return Object.assign({},state,{
                title:action.title
            });
        default:
            return state;
    }
};
const reducer = combineReducers({
    footBar,
    navBar
});
export  default reducer
