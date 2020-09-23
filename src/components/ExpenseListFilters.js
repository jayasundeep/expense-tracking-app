import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseFilterText extends React.Component {
    state = {
        calenderFocus : null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocus) => {
        this.setState(() => ({ calenderFocus }))
    }
    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text}
                    placeholder='Search text'
                    onChange={(e) => {
                        this.props.dispatch(setFilterText(e.target.value));
                    }}
                />
                <select
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        }else{
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker 
                    focusedInput={this.state.calenderFocus}
                    numberOfMonths={1}
                    onFocusChange={this.onFocusChange}
                    onDatesChange={this.onDatesChange}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId="start_date_id"
                    endDateId="end_date_id"
                />

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseFilterText);