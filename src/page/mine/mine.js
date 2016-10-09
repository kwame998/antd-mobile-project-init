import React,{Component} from "react";
import {connect} from "react-redux";
import {List,InputItem,Icon,Button,WingBlank} from "antd-mobile"
import {setFootBarSelect,setNavBarPoints,setNavBarTitle} from '../../redux/action';
class Mine extends Component{
    componentWillMount(){
        const {dispatch}=this.props;
        dispatch(setFootBarSelect("mine"));
        dispatch(setNavBarTitle('个人中心'))
    }
    render(){
        return(
            <div className="has_header">
                <div className="mine_card bg_ff6091 position_re">
                    <img src="https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png"
                         className="radius-img"/>
                    <div className="inline_block">
                        <p className="mb_02" style={{minWidth:"5rem",paddingRight:'.4rem',minHeight: '.3rem'}}>不是所有的程序猿都是闷声不发<Icon className="position_ab top_0 right_0 pd_04" type="setting" /></p>
                        <p>公关部 形象大使</p>
                    </div>
                </div>
                <List>
                    <List.Item
                        extra="2015-07-08"
                        arrow="empty"
                    >
                        入职日期
                    </List.Item>
                    <List.Item
                        extra="公关部"
                        arrow="empty"
                    >
                        所在部门
                    </List.Item>
                    <List.Item
                        extra="形象大使"
                        arrow="empty"
                    >
                        岗位名称
                    </List.Item>
                    <List.Item
                        extra="本科"
                        arrow="empty"
                    >
                        学历
                    </List.Item>
                    <InputItem
                        type="text"
                        defaultValue="13242860186"
                    >手机号</InputItem>
                </List>
                <WingBlank>
                    <Button  style={{marginTop:"1rem",backgroundColor: "#ff6091",color:"#fff"}} className="bg_ff6091">退出登录</Button>
                </WingBlank>
            </div>
        )
    }
}
export default connect(state=>({

}))(Mine)