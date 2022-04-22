// init react application
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './store';
import InviteRoute from './router';
import './index.styl';

// init react application
ReactDOM.render(
    <Provider {...stores}>
        <InviteRoute/>
    </Provider>,
    document.getElementById('app')
);
