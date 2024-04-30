import React, { useState } from "react";
import PropTypes from "prop-types";

const DatePicker = ({ selected, onChange, dateFormat, placeholderText }) => {
  const [date, setDate] = useState(selected);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    onChange(newDate); // Call the provided onChange callback
  };

  return (
    <input
      type="date"
      value={date}
      onChange={handleDateChange}
      placeholder={placeholderText}
      format={dateFormat}
    />
  );
};

DatePicker.propTypes = {
  selected: PropTypes.string, // Date in string format (e.g., "2024-04-30")
  onChange: PropTypes.func.isRequired, // Callback function for date change
  dateFormat: PropTypes.string, // Customize date format (e.g., "dd/MM/yyyy")
  placeholderText: PropTypes.string, // Placeholder text for the input
};

export default DatePicker;
