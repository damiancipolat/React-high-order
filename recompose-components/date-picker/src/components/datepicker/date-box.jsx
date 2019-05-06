import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose,withState,withHandlers,lifecycle} from 'recompose';

//Import moment module from date handle.
import moment from 'moment';

//Import styles
import './date-box-styles.scss';

//Import datepicker.
import Datepicker from './date-picker.jsx';

const DateBoxPure = ({dates,openDialog,open,onSelect}) => {
  return (
    <div>
      {JSON.stringify(open)}
      <div className="date-box-container">
        <div className="date-values">          
          {dates.from} / {dates.to}
        </div>
        <div className="date-btn">
          <button type="button" onClick={openDialog}>
            Change
          </button>
        </div>      
      </div>
      <div>
      {
        open===true
        ? <Datepicker 
            className="floating" 
            from={dates.from} 
            to={dates.to} 
            onFilter={(dates)=>onSelect(dates)}
          />
        :''
      }
      </div>
    </div>
  )
}

const DateBoxCompose = compose(
  withState('open','setOpen',false),
  withState('dates','setDates',{
    from: moment().format('YYYY-MM-DD'),
    to: moment().format('YYYY-MM-DD')
  }),
  withHandlers({
    onSelect:props =>(dates)=>{
      //Close dialog and save new date.
      props.setOpen(false,()=>{

        const {startDate,endDate} = dates;

        const newDates = {
          from : startDate.format('YYYY-MM-DD'),
          to   : endDate.format('YYYY-MM-DD')
        };

        props.setDates(newDates,()=>{

          //If there are a callback defined.
          if (props.onFilter)
            props.onFilter(newDates);

        });

      });      
    },
    openDialog: props => ()=>{
      props.setOpen(!props.open);
    }
  }),
  lifecycle({
    componentDidMount(){

      //If there are dates defined in props.
      if ((this.props.to)&&(this.props.from)){
        const {from,to} = this.props;
        this.props.setDates({from,to});        
      }

    }
  }),   
)(DateBoxPure);

export default DateBoxCompose;