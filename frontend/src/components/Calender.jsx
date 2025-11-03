import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calender.css'

function Calender({onDayClick}){
    const [selectedDate,setSelectedDate] = useState(new Date());

    function handleClick(date){
        setSelectedDate(date);
        onDayClick(date)
    }

    return(

      <div className="calendar-wrapper">
        <Calendar
            name="date"
            value={selectedDate}
            onChange={handleClick}
            className="custom-calendar"
        />
      </div>
       
    )
}

export default Calender;