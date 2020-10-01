import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// import Header from '../components/Header';
import ExpenceDashBoardpage from '../components/ExpenceDashBoardpage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import HelpComponent from '../components/HelpComponent';
import NotFoundpage from '../components/NotFoundpage';
import LoginPage from '../components/LoginPage';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <PublicRoute exact path="/login" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenceDashBoardpage} />
                <PrivateRoute path="/create" component={AddExpencePage} />
                <PrivateRoute exact path="/edit" component={EditExpencePage} />
                <PrivateRoute path="/edit/:id" component={EditExpencePage} />
                <PrivateRoute path="/help" component={HelpComponent} />
                <PublicRoute component={NotFoundpage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;