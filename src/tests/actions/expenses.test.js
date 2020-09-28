import { TestScheduler } from 'jest';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should edit expense', () => {
    const action = editExpense(12345, { description : 'random'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : 12345,
        updates : { description : 'random' }
    });
});

test('should remove expense', () => {
    const action = removeExpense(12345);
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : 12345
    });
});

test('should add expense', () => {
    const expenseData = {
        description : 'qwerty',
        note : 'this is note',
        amount : 9865,
        createdAt : 98745
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    })
});

test('should add default expense values', () => {
    const expenseData = {}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id : expect.any(String)
        }
    })
});