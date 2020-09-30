import { addExpense, editExpense, removeExpense, startAddExpense, setExpense, startSetExpense } from '../../actions/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const mockStore = configureStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expenseData)
    .then(() => done());
});

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

test('should add expense to store and database', (done) => {
    const expenseData = {
        description : 'qwerty',
        note : 'this is note',
        amount : 9865,
        createdAt : 98745
    };
    const store = mockStore({});
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
            id: expect.any(String),
            ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add default expense values', () => {
    const expenseData = {};
    const defaultExpenseData = {
        description :'',
        note : '',
        amount : 0,
        createdAt : 0
    }
    const store = mockStore({});
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
            id: expect.any(String),
            ...defaultExpenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
});

test('should create set expense action', (done) => {
    const store = mockStore({});
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'SET_EXPENSE',
            expense: expenses
        });
        done();
    });
});
