import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import "./styles/styles.scss";
import '../node_modules/normalize-css/normalize';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routes/AppRouter';

import createStore from './store/redux-store';
import { addExpense } from './actions/expenses';
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/selectors';
import './firebase/firebase';


const store = createStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

// store.dispatch(setFilterText('water'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));


/* <div><Link to='/'>Go Home</Link></div>
<div><Link to='/create'>Add Expense</Link></div>
<div><Link to='/edit'>Edit Expense</Link></div>
<div><Link to='/help'>Go to Help</Link></div> */
