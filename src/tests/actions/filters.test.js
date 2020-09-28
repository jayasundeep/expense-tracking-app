import { setStartDate, setEndDate, setFilterText, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment';

test('should generate filter objects to set start date', () => {
    const filterAction = setStartDate(moment(0));
    expect(filterAction).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    })
});

test('should generate filter objects to set end date', () => {
    const filterAction = setEndDate(moment(0));
    expect(filterAction).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    })
});

test('should generate filter objects to sort by date', () => {
    const filterAction = sortByDate();
    expect(filterAction).toEqual({
        type : 'SORT_BY_DATE'
    })
});

test('should generate filter objects to sort by amount', () => {
    const filterAction = sortByAmount();
    expect(filterAction).toEqual({
        type : 'SORT_BY_AMOUNT'
    })
});

test('should generate filter objects to set start date', () => {
    const filterAction = setFilterText('test string');
    expect(filterAction).toEqual({
        type : 'SET_FILTER_TEXT',
        text : 'test string'
    })
});