import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates'

test('should render Expense Form component', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense Form component with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('You should fill both description and amount');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set the note on text area change', () => {
    const value = "Add note";
    const wrapper = shallow(<ExpenseForm />);
    // console.log(wrapper.find('input').length);
    wrapper.find('input').at(2).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount of valid input', () => {
    const value = '12.78';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('amount')).toBe(value);
    // expect(wrapper).toMatchSnapshot();
});

test('should not set amount of invalid input', () => {
    const value = '12.789';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('amount')).toBe('');
    // expect(wrapper).toMatchSnapshot();
});

test('should be submitting the form with correct expense data', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description : expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt
    });
});

test('should update createdAt when a date is picked', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // console.log(wrapper.find(SingleDatePicker).length);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should test focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    // wrapper.find(SingleDatePicker).prop('focused')
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calenderFocused')).toBe(true);
})