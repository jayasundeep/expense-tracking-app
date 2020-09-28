import React from 'react';
import { shallow } from 'enzyme';
import { EditExpencePage } from '../../components/EditExpencePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history, match;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn() };
    match = { params : { id : 2} }
    wrapper = shallow(
        <EditExpencePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history}
            match={match}
            expense={expenses[1]}
        />);
})

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit expense func correctly', () => {
    const value = 'Books and pens';
    wrapper.find('ExpenseForm').prop('onSubmit')({
        ...expenses[1],
        note : value
    });
    expect(editExpense).toHaveBeenLastCalledWith(match.params.id, {
        ...expenses[1],
        note : value
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense func correctly', () => {
    // console.log(wrapper.find('button').length);
    wrapper.find('button').at(0).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
});