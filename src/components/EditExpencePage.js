import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpencePage extends React.Component {
    onSubmit = (expense) => {
        console.log(expense);
        this.props.editExpense(
            this.props.expense.id,
            expense
        );
        this.props.history.push('/dashboard')
    };
    onRemove = () => {
        console.log('I was here!');
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div>
                This is from EditExpencePage of {this.props.match.params.id}!
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense : state.expenses.filter((expense) => expense.id === props.match.params.id)[0]
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
        removeExpense : (id) => dispatch((startRemoveExpense(id)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpencePage);
