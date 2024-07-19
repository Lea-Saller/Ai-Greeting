import React from 'react';

const EventSelector = ({ onSelectEvent }) => {
  const handleChange = (event) => {
    onSelectEvent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="event">Select an event:</label>
      <select id="event" onChange={handleChange}>
        <option value="">choose event</option>
        <option value="birthday">birthday</option>
        <option value="wedding">wedding</option>
        <option value="Bar Mitzvah">Bar Mitzvah</option>
        <option value="Bat Mitzvah">Bat Mitzvah</option>
        <option value="retirement">retirement</option>
      </select>
    </div>
  );
};

export default EventSelector;


