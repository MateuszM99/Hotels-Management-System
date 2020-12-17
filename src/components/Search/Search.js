import React, { Component } from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.scss';
import { Button, SelectorButton } from '../Button/Buttons';
import './style.scss';
import { DefaultInput } from '../Inputs/Inputs';


export class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            startDate : null,
            endDate : null
        }
    }
    render() {
        return (
            <div className="main__search">
                <div className="main_search_components">
                    <DefaultInput></DefaultInput>
                    <SelectorButton>2 Adults  · 0 Children  · 1 Room</SelectorButton>
                    <Button>Search</Button>
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>
            </div>
        )
    }
}

export default Search
