const moment = jest.requireActual('moment');
// import moment from 'moment';

export default (timestamp = 0) => {
    return moment(timestamp);
}