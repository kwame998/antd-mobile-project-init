import React,{Component} from "react";
import {connect} from "react-redux";
import {List} from "antd-mobile"
import {setFootBarSelect,setNavBarTitle} from '../../redux/action';
class Finance extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(setFootBarSelect("finance"));
        dispatch(setNavBarTitle('财政'))
    }
    render(){
        return(
            <div className="has_header">
                财政页面

            </div>
        )
    }
}
export default connect(state=>({

}))(Finance)

