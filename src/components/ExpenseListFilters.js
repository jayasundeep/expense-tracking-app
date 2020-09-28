import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseFilters extends React.Component {
    state = {
        calenderFocus : null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calenderFocus) => {
        this.setState(() => ({ calenderFocus }))
    };
    onTextChange = (e) => {
        this.props.setFilterText(e.target.value);
    };

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text}
                    placeholder='Search text'
                    onChange={this.onTextChange}
                />
                <select
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            this.props.sortByDate();
                        }else{
                            this.props.sortByAmount();
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


const mapStateToProps = (state) => ({
    filters : state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setFilterText : (text) => dispatch(setFilterText(text)), 
    sortByDate : () => dispatch(sortByDate()), 
    sortByAmount : () => dispatch(sortByAmount()), 
    setStartDate : (startDate) => dispatch(setStartDate(startDate)), 
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);