import React, { Component } from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.scss';
import { Button, SelectorButton } from '../Button/Buttons';
import './style.scss';
import { LocationInput } from '../Inputs/Inputs';
import {withRouter} from 'react-router-dom';


export class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchString : '',
            adults : 0,
            children : 0,
            rooms : 0,
        }
    }

    handleSearchChange = (e) => {
        this.setState({searchString : e.target.value})
    }

    addQuery = (key,value,searchParams) => {
        searchParams.set(key,value);
        return searchParams;
    }
    
    removeQuery = (key,searchParams) => {
        searchParams.delete(key);
        return searchParams;
    }
    
    onSearchClick = () => {
        let url = this.props.location;
        let searchParams = new URLSearchParams(url.search);
        
        if(this.state.searchString != ''){
        this.addQuery('search',this.state.searchString,searchParams)
        }
  
        this.props.history.push({
            pathname: url.pathname,
            search: searchParams.toString()
        })
    }

    render() {
        return (
            <div className="main__search">
                <div className="main_search_components">
                    <LocationInput onChange={this.handleSearchChange}></LocationInput>
                    <div className="selector__input">
                        <span>
                        2 Adults
                        <Button width='24px' height='24px'>+</Button>  
                        <Button width='24px' height='24px'>-</Button>
                        </span>
                        · 
                        <span>
                        0 Children
                        <Button width='24px' height='24px'>+</Button>  
                        <Button width='24px' height='24px'>-</Button>
                        </span>
                          · 
                        <span>
                        1 Room
                        <Button width='24px' height='24px'>+</Button>  
                        <Button width='24px' height='24px'>-</Button>
                        </span>
                    </div>
                    <Button height='42px' onClick={this.onSearchClick}>Search</Button>
                </div>
            </div>
        )
    }
}

export default (withRouter(Search))
