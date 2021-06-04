import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';
import Login from 'src/components/login';

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    );
}

export default RoutesManager;
