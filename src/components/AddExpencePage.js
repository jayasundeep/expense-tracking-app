import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenceFrom from './ExpenseForm';

const AddExpencePage = (props) => (
    <div>
        <div>
            <h2>Add Expense Form</h2>
        </div>
        <ExpenceFrom 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
)

export default connect()(AddExpencePage);