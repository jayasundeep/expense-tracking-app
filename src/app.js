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


const store = createStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

// store.dispatch(setFilterText('water'));

const expenseOne = store.dispatch(addExpense({ description : 'Water Bill', amount : 250, createdAt : Date.now()}));
const expenseThree = store.dispatch(addExpense({ description : 'Rent', amount : 500, createdAt : Date.now()}));
const expenseTwo = store.dispatch(addExpense({ description : 'Gas Bill', amount : 350, createdAt : 1000 }));


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
