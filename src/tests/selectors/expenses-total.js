import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses present', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return amount if one expense is present', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(500);
});

test('should add up all the amounts of expenses passed', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(5130);
});