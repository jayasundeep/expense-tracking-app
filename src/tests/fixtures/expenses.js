import moment from 'moment';

export default [
    {
        id: 1,
        description: 'parking',
        note: '',
        amount: 500,
        createdAt:0
    },
    {
        id: 2,
        description: 'stationery',
        note: '',
        amount: 30,
        createdAt:moment(0).subtract(3, 'days').valueOf()
    },
    {
        id: 3,
        description: 'credit card',
        note: 'shopping',
        amount: 4500,
        createdAt:moment(0).add(2, 'days').valueOf()
    },
    {
        id: 4,
        description: 'travel',
        note: 'Goa',
        amount: 100,
        createdAt:moment(0).add(1, 'days').valueOf()
    }
];
