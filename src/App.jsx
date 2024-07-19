

import React, { useState } from 'react';
import EventSelector from './components/EventSelector';
import QuestionsForm from './components/QuestionsForm';
import GeneratedGreeting from './components/GeneratedGreeting';
import './App.css';


const App = () => {
  const [event, setEvent] = useState('');
  const [questions, setQuestions] = useState({});
  const [options, setOptions] = useState({});
  const [greetings, setGreetings] = useState([]);  // initialize with empty array
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleGenerateGreeting = async () => {
    const response = await fetch('http://localhost:5000/generateGreeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event, questions, options }),
    });
    const data = await response.json();
    setGreetings(data.greetings); // set array of greetings
    setCurrentGreetingIndex(0); // reset to first greeting
    setShowGreeting(true); // show the greeting section
  };

  const handleRequestNewGreeting = () => {
    setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  const handleEditRequest = () => {
    setShowGreeting(false); // go back to editing options
  };

  return (
    <div className="container">
       <h1>AI Event Greeting Generator</h1>

      {!showGreeting ? (
        <>
          <EventSelector onSelectEvent={setEvent} />
          {event && (
            <QuestionsForm
              event={event}
              onUpdateQuestions={setQuestions}
              onUpdateOptions={setOptions}
            />
          )}
          <button onClick={handleGenerateGreeting}>create a greeting</button>
        </>
      ) : (
        <>
          <div className="selected-options">
            <h3>the selected options :</h3>
            <ul>
              <li onClick={() => setShowGreeting(false)}>Event: {event}</li>
              {Object.keys(questions).map((key) => (
                <li key={key} onClick={() => setShowGreeting(false)}>{key}: {questions[key]}</li>
              ))}
              {Object.keys(options).map((key) => (
                <li key={key} onClick={() => setShowGreeting(false)}>{key}: {options[key]}</li>
              ))}
            </ul>
          </div>
          <GeneratedGreeting
            greetings={greetings}
            currentGreetingIndex={currentGreetingIndex}
            onRequestNewGreeting={handleRequestNewGreeting}
            onEditRequest={handleEditRequest}
          />
        </>
      )}
    </div>
  );
};

export default App;




