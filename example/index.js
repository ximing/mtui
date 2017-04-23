/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
// import '../src/index.less';
import React, {Component} from "react";
import rab, {connect, createAction} from 'rabjs/index.js';
import {Router, Route} from 'rabjs/router';
// import DemoContainer from './DemoContainer';
import Tag from './tag';
const app = rab({
    debug:true
});

app.router(({history}) => {
    return (
        <Router history={history}>
            <Route path="/*" component={Tag} />
        </Router>
    );
});
app.start('#app');
