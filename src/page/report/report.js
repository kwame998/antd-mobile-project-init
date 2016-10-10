import React,{Component} from "react";
import {connect} from "react-redux";
import {List} from "antd-mobile"
import {setFootBarSelect,setNavBarTitle} from '../../redux/action';
class Report extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(setFootBarSelect("report"));
        dispatch(setNavBarTitle('报表'))
    }
    render(){
        return(
            <div className="has_header">
                报表页面
            </div>
        )
    }
}
export default connect(state=>({

}))(Report)