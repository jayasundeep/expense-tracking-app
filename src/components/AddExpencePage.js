import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenceFrom from './ExpenseForm';

export class AddExpencePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <div>
                    <h2>Add Expense Form</h2>
                </div>
                <ExpenceFrom 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addExpense : (expense) => dispatch(addExpense(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpencePage);