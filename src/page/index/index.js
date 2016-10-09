import React,{Component} from "react";
import {connect} from "react-redux";
import {List} from "antd-mobile"
import {setFootBarSelect,setNavBarTitle} from '../../redux/action';
class Index extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(setFootBarSelect("index"));
        dispatch(setNavBarTitle('首页'))
    }
    render(){
        return(
            <div className="has_header">
               <div className="index_card">
                   <img src="https://modao.cc/uploads2/images/485/4851839/raw_1471938610.png" alt="index"/>
               </div>
                <div>
                    <p className="app_title">公司公告</p>
                    <List>
                        <List.Item
                            thumb
                            extra="2016-08-20"
                            arrow="horizontal"
                        >
                            2017年预算通知
                        </List.Item>
                        <List.Item
                            thumb
                            extra="2016-08-15"
                            arrow="horizontal"
                        >
                            2016年报销政策通知
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
export default connect(state=>({

}))(Index)
