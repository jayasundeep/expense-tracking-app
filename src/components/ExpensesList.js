import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/selectors';
import ExpenseFilters from './ExpenseListFilters';


export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        <ExpenseFilters />
        {props.expenses.length === 0 ? 
            <p>Hey, you can add your expenses here!</p> 
            :
            props.expenses.map((expense, index) => {
                return <ExpenseListItem index={index+1} expense={expense} key={expense.id}/>
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
