import React,{Component} from "react";
import {connect} from "react-redux";
import {List,InputItem,Icon,Button,WingBlank} from "antd-mobile"
import {setFootBarSelect,setNavBarTitle} from '../../redux/action';
class Index extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(setFootBarSelect("index"));
        dispatch(setNavBarTitle('首页'))
    }
    render(){
        return(
            <div className="overflow_at app_content has_header">
                我是首页
            </div>
        )
    }
}
export default connect(state=>({

}))(Index)
