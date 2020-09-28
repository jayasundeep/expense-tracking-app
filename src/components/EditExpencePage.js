import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpencePage extends React.Component {
    onSubmit = (expense) => {
        console.log(expense);
        this.props.editExpense(
            this.props.expense.id,
            expense
        );
        this.props.history.push('/')
    };
    onRemove = () => {
        console.log('I was here!');
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
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
        editExpense : (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense : (id) => dispatch((removeExpense(id)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpencePage);
