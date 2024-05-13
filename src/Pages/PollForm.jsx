import React, { useState } from 'react';
import '../App.css';
import apiService from '../apiService';

const PollForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const [votes, setVotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [voted, setVoted] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [pollCreated, setPollCreated] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (event, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
      setVotes([...votes, 0]);
    } else {
      alert('You can only have up to 6 options.');
    }
  };

  const deleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
    const updatedVotes = [...votes];
    updatedVotes.splice(index, 1);
    setVotes(updatedVotes);
  };

  const handleVoteChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitVote = () => {
    if (selectedOption !== '') {
      const updatedVotes = [...votes];
      updatedVotes[selectedOption]++;
      setVotes(updatedVotes);
      setVoted(true);
    } else {
      alert('Please select an option before submitting.');
    }
  };

  const displayResult = () => {
    const totalVotes = votes.reduce((a, b) => a + b, 0);
    return options.map((option, index) => {
      const percentage = totalVotes === 0 ? 0 : ((votes[index] / totalVotes) * 100).toFixed(2);
      return (
        <div key={index} className="option-result">
          <div className="option-text">{option}</div>
          <div className="bar-container">
            <div className="bar" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="percentage">{percentage}%</div>
        </div>
      );
    });
  };

  const submitPoll = async (event) => {
    event.preventDefault();
    try {
      const pollData = {
        question,
        options
      };
      await apiService.createPoll(pollData);
      onSubmit(pollData); // Pass the submitted poll data to the parent component
      setThankYouVisible(true);
      setPollCreated(true);
    } catch (error) {
      console.error('Failed to submit poll:', error.message);
    }
  };

  const sharePoll = () => alert('Poll shared!');

  return (
    <div className="container">
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
              onChange={handleQuestionChange}
              required
            />

            <label>Type your answers here:</label>
            <div id="answersContainer">
              {options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="text"
                    value={option}
                    onChange={(event) => handleOptionChange(event, index)}
                    required
                    placeholder="Type your answer here"
                  />
                </div>
              ))}
              {options.length < 6 && (
                <div className="option">
                  <button type="button" onClick={addOption}>Add Option</button>
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => deleteOption(index)}>Delete</button>
          </form>
        </>
      ) : (
        <div id="thankYouMessage">
          <h3>Thank you for creating the poll!</h3>
          {pollCreated && (
            <>
              <h2>{question}</h2>
              <div className="poll">
                {options.map((option, index) => (
                  <div key={index} className="option">
                    <input
                      type="radio"
                      id={`option${index}`}
                      name="poll"
                      value={index}
                      onChange={handleVoteChange}
                    />
                    <label htmlFor={`option${index}`}>{option}</label>
                  </div>
                ))}
                <button type="button" onClick={submitVote}>Submit Vote</button>
              </div>
              {voted && (
                <div id="result">
                  {displayResult()}
                  </div>
              )}
            </>
          )}
        </div>
      )}

      <button className="share-button" onClick={sharePoll}>Share Poll</button>
    </div>
  );
};

export default PollForm;
