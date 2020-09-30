import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import "./styles/styles.scss";
import '../node_modules/normalize-css/normalize';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routes/AppRouter';

import createStore from './store/redux-store';
import { addExpense, startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
// import getVisibleExpenses from './selectors/selectors';
import { firebase } from './firebase/firebase';
import { render } from 'enzyme';


const store = createStore();

/* store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});  */

// store.dispatch(setFilterText('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p> Loading... </p>, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('uid:', user.uid, 'email:', user.email);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else {
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});


/* <div><Link to='/'>Go Home</Link></div>
<div><Link to='/create'>Add Expense</Link></div>
<div><Link to='/edit'>Edit Expense</Link></div>
<div><Link to='/help'>Go to Help</Link></div> */
