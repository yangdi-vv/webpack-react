import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App.tsx';
import { Provider } from 'mobx-react';
import stores from './store/index.ts';



ReactDOM.render(
    <Provider {...stores}>
        <Router history={createBrowserHistory()}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('app')
);

