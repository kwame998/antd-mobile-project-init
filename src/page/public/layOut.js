import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {setFootBarVisible} from '../../redux/action';
import FootBar from './footBar';
import {NavBar, Icon} from 'antd-mobile';
class LayOut extends Component {
    static propTypes = {
        children: PropTypes.element,
    };

    renderNavBar() {
        let {points, title}=this.props.navBar;
        let {left, leftClick, right, color, iconName}=points;
        if (left && iconName == '') {
            iconName = 'left'
        }
        if (left && right) {
            return (
                <NavBar className="app_bar" iconName={iconName} style={{backgroundColor: color}} onLeftClick={leftClick}
                        rightContent={<Icon type='bars'/>}>{title}</NavBar>
            )
        } else if (left && !right) {
            return (
                <NavBar className="app_bar" iconName={iconName} style={{backgroundColor: color}} onLeftClick={leftClick}
                >{title}</NavBar>
            )
        } else if (!left && right) {
            return (
                <NavBar className="app_bar" iconName={iconName} style={{backgroundColor: color}}
                        rightContent={<Icon type='bars'/>}>{title}</NavBar>
            )
        } else {
            return (
                <NavBar className="app_bar" iconName={""} style={{backgroundColor: color}}>{title}</NavBar>
            )
        }
    };
    render() {
        return (
            <div>
                {this.renderNavBar()}
                <div className="overflow_at app_content">
                    {this.props.children}
                </div>
                <FootBar/>
            </div>
        );
    }
}
export default connect(state=>({
    footBar: state.footBar,
    navBar: state.navBar
}))(LayOut);
