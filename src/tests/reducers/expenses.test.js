import expenses from '../fixtures/expenses';
import expenseReducer from '../../reducers/expenses';
import moment from 'moment';

test('should set default state', () => {
    const result = expenseReducer(undefined, { type : 'default'});
    expect(result).toEqual([]);
});

test('should remove the specified item', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[2].id
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([
        expenses[0],
        expenses[1],
        expenses[3]
    ]);
});

test('should not remove the non existing item', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : -1
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 5,
        description: 'power bill',
        note: 'rent house',
        amount: 2500,
        createdAt:moment()
    }
    const action = {
        type : 'ADD_EXPENSE',
        expense
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([
        ...expenses,
        expense
    ]);
});

test('should not remove the non existing item', () => {
    const updates = {
        note : 'MGB mall',
        amount : 40
    }
    const action = {
        type : 'EDIT_EXPENSE',
        id : 1,
        updates
    }
    const result = expenseReducer(expenses, action);
    expect(result[action.id -1].note).toBe('MGB mall');
    expect(result[action.id -1].amount).toBe(40);
});

test('should not remove the non existing item', () => {
    const updates = {
        note : 'MGB mall',
        amount : 40
    }
    const action = {
        type : 'EDIT_EXPENSE',
        id : -1,
        updates
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses);
});
