// src/SmallCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import './SmallCalendar.css'; // For custom styling (optional)

const SmallCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected date:', newDate); // For debugging
  };

  return (
    <div>
      {/* <h2>Select a Date</h2> */}
      <Calendar
        onChange={handleDateChange} // Handle date selection
        value={date} // Controlled value
        className="small-calendar" // Optional: Apply custom styles
      />
      {/* <p>Selected Date: {date.toDateString()}</p> */}
    </div>
  );
};

export default SmallCalendar;