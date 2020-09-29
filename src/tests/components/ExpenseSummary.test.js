import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render the component', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render single expense correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={575} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render total for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={15} expenseTotal={527765} />);
    expect(wrapper).toMatchSnapshot();
});
