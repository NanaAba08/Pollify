import React, { useState } from 'react';
import '../App.css';


function PollForm() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const addAnswer = () => setAnswers([...answers, '']);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const submitPoll = (event) => {
    event.preventDefault();
    console.log('Question:', question);
    console.log('Answers:', answers);
    setThankYouVisible(true);
  };

  const sharePoll = () => alert('Poll shared!');

  return (
    <div className="PollForm-container">
      <nav>
        <a href="/">
          <img src="pollifylogo.jpg" alt="Pollify Logo" />
        </a>
      </nav>

      {!thankYouVisible ? (
        <>
          <h1>Create a Poll in Seconds</h1>
          <form id="PollForm" onSubmit={submitPoll}>
            <label htmlFor="question">Type your question here:</label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />

            <label>Type your answers here:</label>
            <div id="answersContainer">
              {answers.map((answer, index) => (
                <React.Fragment key={index}>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    required
                    placeholder="Type your answer here"
                  />
                </React.Fragment>
              ))}
            </div>
            <button type="button" onClick={addAnswer}>Add Answer</button>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div id="thankYouMessage">
          <h3>Thank you for participating!</h3>
        </div>
      )}

      <button className="share-button" onClick={sharePoll}>Share Poll</button>
    </div>
  );
}

export default PollForm;
