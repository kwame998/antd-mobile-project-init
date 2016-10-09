/**
 * Created by Administrator on 2016/9/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { TabBar } from 'antd-mobile';
import {setFootBarSelect} from '../../redux/action';
class FootBar extends Component{
    render() {
        const {footBar,dispatch}=this.props;
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#00bb9c"
                barTintColor="white"
                hidden={footBar.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={{ uri: './img/index.svg' }}
                    selectedIcon={{ uri: './img/index_select.svg' }}
                    selected={footBar.selectedTab === 'index'}
                    onPress={() => {
                        dispatch(setFootBarSelect("index"))
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './img/finance.svg' }}
                    selectedIcon={{ uri: './img/finance_select.svg' }}
                    title="财政"
                    key="财政"
                    selected={footBar.selectedTab === 'finance'}
                    onPress={() => {
                        dispatch(setFootBarSelect("finance"))
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './img/report.svg' }}
                    selectedIcon={{ uri: './img/report_select.svg' }}
                    title="报表"
                    key="报表"
                    selected={footBar.selectedTab === 'report'}
                    onPress={() => {
                        dispatch(setFootBarSelect("report"))
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: './img/mine.svg' }}
                    selectedIcon={{ uri: './img/mine_select.svg' }}
                    title="个人中心"
                    key="个人中心"
                    selected={footBar.selectedTab === 'mine'}
                    onPress={() => {
                        dispatch(setFootBarSelect("mine"))
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
export default connect(state=>({
    footBar:state.footBar
}))(FootBar)