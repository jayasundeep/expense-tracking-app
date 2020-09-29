import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
    <div>
        <h3>
            
            {props.index}. 
            <Link to={`/edit/${props.expense.id}`}>
                {props.expense.description}
            </Link>
        </h3>
        <div>
            Amount: {numeral(props.expense.amount).format('$0,0.00')}
            -
            Created At: {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
        </div>
    </div>
);

/* const mapStateToProps = (state) => {
    return {
        expenses : state.expenses
    }
} */

export default ExpenseListItem;