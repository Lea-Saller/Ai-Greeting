import React from 'react';

const QuestionsForm = ({ event, onUpdateQuestions, onUpdateOptions }) => {
  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    onUpdateQuestions((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    onUpdateOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {event === 'birthday' && (
        <div>
          <label htmlFor="age">age</label>
          <input type="number" id="age" name="age" onChange={handleQuestionChange} />
        </div>
      )}
      <div>
        <label htmlFor="greetingType">Type of greeting</label>
        <select id="greetingType" name="greetingType" onChange={handleOptionChange}>
          <option value="">choose a kind</option>
          <option value="song">song</option>
          <option value="short">short</option>
          <option value="long">long</option>
          <option value="letter">letter</option>
        </select>
      </div>
      <div>
        <label htmlFor="greetingMood">atmosphere:</label>
        <select id="greetingMood" name="greetingMood" onChange={handleOptionChange}>
          <option value="">choose atmosphere</option>
          <option value="happy">happy</option>
          <option value="entertaining">entertaining</option>
          <option value="funny">funny</option>
        </select>
      </div>
    </div>
  );
};

export default QuestionsForm;

