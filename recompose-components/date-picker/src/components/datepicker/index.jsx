import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose,withState,withHandlers} from 'recompose';

//Import styles
import './styles.scss';

const dayList = [
  {days:7, label:'7 Days'},
  {days:15,label:'15 Days'},
  {days:30,label:'30 Days'},
  {days:90,label:'90 Days'},
  {days:180, label:'6 Months'},
  {days:360, label:'12 Months'},
  {days:-1, label:'Custom'},
];

const DatePickerPure = ({filterSelected,onFilterLast,onFilter}) => {
  return (
    <div className="datepicker-container">
      <div className="filters">
        <div className="filter-title">
          Filter by the last: {filterSelected}
        </div>
        <div className="filter-options">
          {dayList.map(day => <button type="button" className={filterSelected===day.days?'last-btn selected':'last-btn'} key={day.label} onClick={()=>onFilterLast(day.days)}>{day.label}</button>)}          
        </div>
      </div>
      <div className="calendar">
        sadsad
      </div>
      <div className="footer">
        <button type="button" onClick={onFilter}>
          Filter
        </button>
      </div>
    </div>
  )
}

const DatePickerCompose = compose(
  withState('filterSelected','setFilterSelected',7),
  withState('dateFrom','setDateFrom'),
  withState('dateTo','setDateTo'),
  withState('error','setError',null),
  withHandlers({
    onFilterLast: props => ()=>{
      console.log(props);
    },
    updFilterDates: props => ()=>{

    },
    onFilter: props => ()=>{
      alert('aaaaa')
    }
    //onChangeValues: props => () => {},
  }),  
  withHandlers({
    /*setInput: props => event => {
      props.setValue(event.target.value);
      props.onChangeValues(props);
    },*/
  }),
)(DatePickerPure);


export default DatePickerCompose;