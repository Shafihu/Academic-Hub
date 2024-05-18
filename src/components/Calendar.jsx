'use client'

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onYearChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const year = startDate.getFullYear();
    onYearChange(year);
  }, [startDate, onYearChange]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="bg-indigo-500 text-[14px] px-5 text-white py-1 rounded-full"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      toggleCalendarOnIconClick
      customInput={<ExampleCustomInput />}
      withPortal
      showYearPicker
      dateFormat="yyyy"
      className="-z-20"
    />
  );
};

export default Calendar;
