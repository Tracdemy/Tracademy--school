import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const totalDays = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const daysArray = Array.from(
      { length: totalDays },
      (_, index) => index + 1
    );

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.unshift(null);
    }

    return daysArray.map((day, index) => (
      <div key={index} className={`day ${day ? "" : "empty"}`}>
        {day}
      </div>
    ));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar">
      <div className="header flex gap-8 my-3 justify-center">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(currentDate)}
        </h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week grid grid-cols-7 items-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days grid grid-cols-7 ">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
