import React from 'react';

const SelectedOptions = ({ selectedEvent, additionalQuestions, greetingOptions, onEditRequest }) => {
  return (
    <div className="selected-options">
      <ul>
        <li onClick={onEditRequest}>Event: {selectedEvent}</li>
        {additionalQuestions.age && <li onClick={onEditRequest}>Age: {additionalQuestions.age}</li>}
        <li onClick={onEditRequest}>Greeting Type: {greetingOptions.greetingType}</li>
        <li onClick={onEditRequest}>Greeting Mood: {greetingOptions.greetingMood}</li>
      </ul>
    </div>
  );
};

export default SelectedOptions;
