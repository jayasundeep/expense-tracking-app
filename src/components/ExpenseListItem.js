import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <h3>
            
            {props.index}. 
            <Link to={`/edit/${props.expense.id}`}>
                {props.expense.description}
            </Link>
        </h3>
        <div>
            Amount: {props.expense.amount}
            Created At: {props.expense.createdAt}
        </div>
    </div>
);

/* const mapStateToProps = (state) => {
    return {
        expenses : state.expenses
    }
} */

export default ExpenseListItem;