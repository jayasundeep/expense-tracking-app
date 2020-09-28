import { isMoment } from 'moment';
import getVisibleExpenses from '../../selectors/selectors';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'E',
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    }
    const actionResult = getVisibleExpenses(expenses, filters);
    expect(actionResult).toEqual([
        expenses[2],
        expenses[3],
        expenses[1]
    ]);
});

test('should filter off the expenses before start date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: moment(0), 
        endDate: undefined
    }
    const actionResult = getVisibleExpenses(expenses, filters);
    expect(actionResult).toEqual([
        expenses[2],
        expenses[3],
        expenses[0]
    ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    }
    const actionResult = getVisibleExpenses(expenses, filters);
    expect(actionResult).toEqual([
        expenses[2],
        expenses[3],
        expenses[0],
        expenses[1]
    ]);
});

test('should filter off the expenses after end date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: undefined, 
        endDate: moment(0).add(1, 'days')
    }
    const actionResult = getVisibleExpenses(expenses, filters);
    expect(actionResult).toEqual([
        expenses[3],
        expenses[0],
        expenses[1]
    ]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    }
    const actionResult = getVisibleExpenses(expenses, filters);
    expect(actionResult).toEqual([
        expenses[2],
        expenses[0],
        expenses[3],
        expenses[1]
    ]);
});