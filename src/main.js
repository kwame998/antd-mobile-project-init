import React from 'react'
import {render} from 'react-dom';
import 'babel-polyfill';
require('./lib/antd-mobile/antd-mobile.min.css');
import {Provider} from 'react-redux';
let rootDocument=document.getElementById('app');
import {store} from './redux/store'
import RouterContent from './router'
render(
  <Provider store={store}>
    <RouterContent/>
  </Provider>
  ,rootDocument);
