import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose,withState,withHandlers,lifecycle} from 'recompose';

//Import moment module from date handle.
import moment from 'moment';

//Import Airbnb datepicker.
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

//Import styles
import './styles.scss';

//Day list options.
const dayList = [
  {days:7, label:'7 Days'},
  {days:15,label:'15 Days'},
  {days:30,label:'30 Days'},
  {days:90,label:'90 Days'},
  {days:180, label:'6 Months'},
  {days:360, label:'12 Months'},
  {days:-1, label:'Custom'},
];

const DatePickerPure = ({focusInput,setFocusedInput,dates,setDates,filterSelected,onFilterLast,onFilter}) => {
  return (
    <div className="datepicker-container">
      <div className="filters">
        <div className="filter-title">
          <strong>Filter by the last:</strong>
        </div>
        <div className="filter-options">
          {dayList.map(day => <button type="button" className={filterSelected === day.days ? 'last-btn selected':'last-btn'} key={day.label} onClick={() => onFilterLast(day.days)}>{day.label}</button>)}
        </div>
      </div>  
      <div className="calendar">
        <DayPickerRangeController
           startDate={dates.startDate}
           endDate={dates.endDate}
           numberOfMonths={2}
           minimumNights={1}
           orientation="horizontal"
           keepOpenOnDateSelect={false}
           monthFormat="MMMM YYYY"
           noBorder={true}
           hideKeyboardShortcutsPanel={true}
           isRTL={false}
           withPortal={false}
           onDatesChange={({ startDate, endDate }) =>{
              //If the custom option was selected allow to change the dates.
              if (filterSelected===-1)
                setDates({startDate,endDate});
           }}
           onFocusChange={focusedInput=>{
              //Allow input switching if the custom option was selected.
              const focusVal = (filterSelected===-1)?(focusedInput!=null?focusedInput:"startDate"):null;
              setFocusedInput(focusVal);
           }}
           focusedInput={focusInput}
        />
      </div>
      <div className="footer">
        <button type="button" className="last-btn selected" onClick={onFilter}>
          Filter
        </button>
      </div>
    </div>
  )
}

const DatePickerCompose = compose(
  withState('filterSelected','setFilterSelected',7),
  withState('dates','setDates',{startDate:moment(),endDate:moment()}),
  withState('focusInput','setFocusedInput','startDate'),
  withState('error','setError',null),
  withHandlers({
    onFilterLast: props => (days)=>{

      //Set the selected filter option.
      props.setFilterSelected(days,()=>{

        //If the selection is not the custom option.
        if (days!=-1){

          //Calc new dates and update the state.
          props.setDates({
            endDate   : moment(),
            startDate : moment().subtract(days, "days")
          });

        }

      });

    },
    onFilter: props => (date)=>{
      //If the filter callback function defined.
      if (props.onFilter)
        props.onFilter(props.dates);
    }
  }),
  lifecycle({
    componentDidMount(){
      //If there are dates defined in props.
      if ((this.props.to)&&(this.props.from)){
        //Make dates to save in the states.
        const dates = {
          startDate:moment(this.props.from, 'YYYYMMDD'),
          endDate:moment(this.props.to, 'YYYYMMDD')
        }
        //Set the filter options custom and the dates.
        this.props.setFilterSelected(-1);
        this.props.setFocusedInput('startDate');
        this.props.setDates(dates);
      }
    },
  }),
)(DatePickerPure);


export default DatePickerCompose;