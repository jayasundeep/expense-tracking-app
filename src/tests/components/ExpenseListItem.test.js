import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('renders one expense item correctly', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});