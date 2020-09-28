import filterReducer from "../../reducers/filters";
import moment from 'moment';

test('should set filter text', () => {
    const filterState = {
        text : 'sjldk',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SET_FILTER_TEXT',
        text : 'rent'
    }
    const result = filterReducer(filterState, action);
    expect(result.text).toBe('rent');
});

test('should set start date', () => {
    const filterState = {
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SET_START_DATE',
        startDate : moment(0)
    }
    const result = filterReducer(filterState, action);
    expect(result.startDate).toEqual(moment(0));
});

test('should set end date', () => {
    const filterState = {
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const endDate = moment().endOf('month').add(1, 'years');
    const action = {
        type : 'SET_END_DATE',
        endDate
    }
    const result = filterReducer(filterState, action);
    expect(result.endDate).toBe(endDate);
});

test('set sort by to date', () => {
    const filterState = {
        text : '',
        sortBy : 'amount',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {
        type : 'SORT_BY_DATE'
    }
    const result = filterReducer(filterState, action);
    expect(result.sortBy).toBe('date');
});

test('set sort by to amount', () => {
    const result = filterReducer(undefined, { type : 'SORT_BY_AMOUNT' });
    expect(result.sortBy).toBe('amount');
});

test('checks if default values are being set', () => {
    const result = filterReducer(undefined, { type : '@@init' });
    expect(result).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')    
    });
});