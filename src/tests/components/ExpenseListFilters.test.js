import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setEndDate = jest.fn();
    setFilterText = jest.fn();
    setStartDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseFilters 
            setEndDate={setEndDate}
            setFilterText={setFilterText}
            setStartDate={setStartDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            filters={filters}
        />);
})

test('should render expense filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense filters correctly', () => {
    wrapper.setProps({
        filters : altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should search by text', () => {
    const value = 'bill';
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    });
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').at(0).simulate('change', {
        target : { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.setProps({
        filters : altFilters
    });
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
        target : { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates changes', () => {
    const startDate = moment(58653);
    const endDate = moment(564346351);
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should detect focus change', () => {
    const calenderFocus = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocus);
    // expect(wrapper.find(DateRangePicker).prop('focusedInput').calenderFocus).toBe(true);
    expect(wrapper.state('calenderFocus')).toBe(calenderFocus);
})