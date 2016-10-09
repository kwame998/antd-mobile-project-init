import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import React, {Component} from 'react';
import {getSessionData, setSessionData, removeSessionData} from './system/system'
import LayOut from './page/public/layOut'
class RouterContent extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={LayOut}>

                </Route>
            </Router>
        )
    }
}
export default RouterContent;
