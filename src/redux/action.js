import {store} from './../redux/store'
import {setSessionData,getSessionData} from '../system/system';
export const setFootBarVisible=(hidden)=>{
    return {
        type: 'set_footBar_visible',
        hidden
    }
};
export const setFootBarSelect=(selectedTab)=>{
    return {
        type: 'set_footBar_select',
        selectedTab
    }
};
export const setNavBarTitle=(title)=>{
    return {
        type: 'set_navBar_title',
        title
    }
};
export const setNavBarPoints=(points)=>{
    return {
        type: 'set_navBar_points',
        points
    }
};
