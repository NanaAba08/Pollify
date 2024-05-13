import React, { useState } from 'react';
import '../App.css';
import PollForm from './PollForm';

const PollCreator = () => {
  const [polls, setPolls] = useState([]);

  const handlePollSubmit = (pollData) => {
    setPolls([...polls, pollData]);
  };

  return (
    <div>
      <h1>Poll Creator</h1>
      <PollForm onSubmit={handlePollSubmit} />
      <h2>Submitted Polls</h2>
      <ul>
        {polls.map((poll, index) => (
          <li key={index}>{poll.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default PollCreator;