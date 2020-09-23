import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from '../components/Header';
import ExpenceDashBoardpage from '../components/ExpenceDashBoardpage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import HelpComponent from '../components/HelpComponent';
import NotFoundpage from '../components/NotFoundpage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenceDashBoardpage} exact={true} />
                <Route path='/create' component={AddExpencePage} />
                <Route path='/edit' component={EditExpencePage} exact={true}/>
                <Route path='/edit/:id' component={EditExpencePage} />
                <Route path='/help' component={HelpComponent} />
                <Route component={NotFoundpage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;