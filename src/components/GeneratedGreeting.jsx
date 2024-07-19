
import React from 'react';

const GeneratedGreeting = ({ greetings, currentGreetingIndex, onRequestNewGreeting, onEditRequest }) => {
  return (
    <div className="greeting-container">
      <h2>The blessing created</h2>
      <p className="greeting-message">{greetings[currentGreetingIndex]}</p>
      <div className="button-group">
        <button onClick={onRequestNewGreeting}>I want something different</button>
        <button onClick={onEditRequest}>Edit the request</button>
      </div>
    </div>
  );
};

export default GeneratedGreeting;




