import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const EditExpencePage = (props) => (
    <div>
        This is from EditExpencePage of {props.match.params.id}!
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                console.log(expense);
                props.dispatch(editExpense(
                    props.match.params.id,
                    expense
                ));
            }}
        />
        <button
            onClick={() => {
                props.dispatch(removeExpense(props.expense[0].id));
                props.history.push('/');
            }}
        >
            Remove
        </button>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.filter((expense) => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpencePage);
