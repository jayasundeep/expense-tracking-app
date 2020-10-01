import React from 'react';

import { Router, BrowserRouter, Route, Switch } from 'react-router-dom'


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
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenceDashBoardpage} />
                <PrivateRoute path="/create" component={AddExpencePage} />
                <PrivateRoute path="/edit" component={EditExpencePage} exact={true}/>
                <PrivateRoute path="/edit/:id" component={EditExpencePage} />
                <Route path="/help" component={HelpComponent} />
                <Route component={NotFoundpage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;