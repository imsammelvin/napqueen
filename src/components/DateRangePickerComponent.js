// DateRangePickerComponent
import React, { useState } from "react";

const DateRangePickerComponent = () => {
  const defaultStartDate = "2020-11-08";
  const defaultEndDate = "2020-12-23";
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const inputStyle1 = {
    width: "130px",
    padding: "5px 8px",
    border: "1px solid #ccc",
    borderRight: "1px solid transparent",
    fontFamily: "Arial",
    fontSize: "15px",
  };

  const inputStyle2 = {
    width: "130px",
    padding: "5px 8px",
    border: "1px solid #ccc",
    borderLeft: "1px solid transparent",
    fontFamily: "Arial",
    fontSize: "15px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const dateTextStyle = {
    fontSize: "13px",
    margin: "3px",
    color: "#000000",
    fontWeight: "500",
  };

  const smallTextStyle = {
    fontSize: "11px",
    margin: "0px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <p style={dateTextStyle}>Date &amp; Time</p>
      <div>
        <input
          type="date"
          id="start-date-picker"
          value={startDate}
          onChange={handleStartDateChange}
          style={inputStyle1}
        />

        <input
          type="date"
          id="end-date-picker"
          value={endDate}
          onChange={handleEndDateChange}
          style={inputStyle2}
        />
      </div>
      <p style={smallTextStyle}>PST Timezone</p>
    </div>
  );
};

export default DateRangePickerComponent;
