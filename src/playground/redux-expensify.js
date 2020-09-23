import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({
    id
} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates = {}) => 
({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

const getExpense = (id) => ({
    type : 'GET_EXPENSE',
    id
});

// Filter reducer functions

const setFilterText = (text = '') => ({
    type : 'SET_FILTER_TEXT',
    text
});

const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type : 'SORT_BY_DATE'
});

const setStartDate = (startDate = undefined) => ({
    type : 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type : 'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter((item) => {return item.id !== action.id})
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        case 'GET_EXPENSE':
            return state.filter((expense) => {
                return expense.id == action.id
            })
        default :
            return state
            
    }
}

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filterReducer
    })
);

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => (
    expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// store.dispatch(setStartDate(125));
store.dispatch(setFilterText('e'));
store.dispatch(sortByDate());

const expenseOne = store.dispatch(addExpense({description : 'Rent', amount : 300, createdAt : -1000}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffee', amount : 200, createdAt : 1000}));


// store.dispatch(removeExpense({id : expenseTwo.expense.id}));
/* store.dispatch(editExpense(expenseOne.expense.id, {amount : 400, createdAt : 1}));
store.dispatch(getExpense(expenseOne.expense.id));


store.dispatch(sortByAmount());
store.dispatch(sortByDate());



store.dispatch(setStartDate());
store.dispatch(setEndDate(1250)); */






