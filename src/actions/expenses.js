// import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense = {}) => ({
    type : 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense)
                .then((ref) => {
                    dispatch(addExpense({
                        id : ref.key,
                        ...expense
                    }));
                });
    };
};

export const removeExpense = (id) => ({
    type : 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
                .then(() => {
                    dispatch(removeExpense(id));
                });
    }
}

export const editExpense = (id, updates = {}) => 
({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates)
                .then(() => {
                    dispatch(editExpense(id, updates));
                }).catch((e) => {
                    console.log('Error while updating...', e);
                });
    }
}

export const setExpense = (expense = {}) => ({
    type : 'SET_EXPENSE',
    expense
});

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value')
                .then((snapshot) => {
                    const expenses = [];
                    snapshot.forEach((childSnapshot) => {
                        expenses.push({
                            id : childSnapshot.key,
                            ...childSnapshot.val()
                        });
                    });
                    dispatch(setExpense(expenses));
                });
    }
};
