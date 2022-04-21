import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Home from '../views/home';

function inviteRoute(){
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default inviteRoute

