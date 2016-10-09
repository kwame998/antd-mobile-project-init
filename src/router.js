import {Router, Route, hashHistory, IndexRoute,IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import {getSessionData, setSessionData, removeSessionData} from './system/system'
import LayOut from './page/public/layOut'
import Mine from './page/mine/mine'
import Index from './page/index/index'
class RouterContent extends Component {
    render() {
        const self = this;
        return (
            <Router history={hashHistory}>
                <Route path='/' component={LayOut}>
                    <IndexRedirect to="index" />
                    <Route path="mine" component={Mine}/>
                    <Route path="index" component={Index}/>
                </Route>
            </Router>
        )
    }
}
export default RouterContent;
