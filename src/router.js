import {Router, Route, hashHistory, IndexRoute,IndexRedirect} from 'react-router';
import React, {Component} from 'react';
import {getSessionData, setSessionData, removeSessionData} from './system/system'
import LayOut from './page/public/layOut'
import Mine from './page/mine/mine'
import Index from './page/index/index'
import Finance from './page/finance/finance'
import Report from './page/report/report'
class RouterContent extends Component {
    render() {
        const self = this;
        return (
            <Router history={hashHistory}>
                <Route path='/' component={LayOut}>
                    <IndexRedirect to="index" />
                    <Route path="mine" component={Mine}/>
                    <Route path="index" component={Index}/>
                    <Route path="finance" component={Finance}/>
                    <Route path="report" component={Report}/>
                </Route>
            </Router>
        )
    }
}
export default RouterContent;
