import React from 'react'
import './style.css';
import Layout from '../../components/Layout';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
/**
* @author
* @function CalendarPage
**/

const CalendarPage = (props) => {
  return(
    <Layout>
        <div className = 'page'>
          <div className = "calander"> 
            <Calendar />
          </div>
          
          <div>
            Hello
        </div>
        </div>
        
        
    </Layout>
   )

 }

export default CalendarPage