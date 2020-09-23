import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import  moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        console.log(props.expense[0]);
        this.state = {
            description : this.props.expense ? this.props.expense[0].description : '',
            amount : this.props.expense ? this.props.expense[0].amount.toString() : '',
            note : this.props.expense ? this.props.expense[0].note : '',
            createdAt : this.props.expense ? moment(this.props.expense[0].createdAt) : moment(),
            calenderFocused : false,
            error : undefined
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d{0,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calenderFocused : focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error : 'You should fill both description and amount' }));
        }else {
            this.setState(() => ({ error : undefined }));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount, 10),
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            });
            console.log("submitted!");
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <p>{this.state.error}</p>
                </div>
                <input
                    placeholder='Enter Description'
                    type='text'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                >
                </input>

                <input
                    placeholder='Enter Amount'
                    type='text'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                </input>

                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}                   
                />

                <input
                    placeholder='Write some note(optional)'
                    type='text'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </input>

                <button>Add Expense</button>

            </form>
        )
    }
}