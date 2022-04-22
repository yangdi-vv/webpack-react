import React from 'react';
import {Router, Route, Switch} from 'react-router';
import { createBrowserHistory } from 'history';
import Home from '@views/Home';

function inviteRoute(){
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/"><Home/></Route>
            </Switch>
        </Router>
    );
}

export default inviteRoute;

