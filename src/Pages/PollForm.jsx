import { useState } from "react";
import React from "react";
import '../App.css';

const PollForm = () => {
    const [question, setQuestion] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [voted, setVoted] = useState(false);

    const submitVote = () => {
        // Simulate sending the vote to the backend
        // For demonstration purposes, just log the selected option and question
        console.log("Question:", question);
        console.log("Voted for:", selectedOption);
        setVoted(true);
    };

    return (
        <div className="container">
            <h1>PollForm</h1>
            <div className="poll">
                <label htmlFor="question">Enter your poll question:</label>
                <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <h2>{question}</h2>
                <div className="options">
                    <div className="option">
                        <input type="radio" id="option1" name="poll" value="JavaScript" 
                            checked={selectedOption === "JavaScript"} 
                            onChange={() => setSelectedOption("JavaScript")} />
                        <label htmlFor="option1">Yes</label>
                    </div>
                    <div className="option">
                        <input type="radio" id="option2" name="poll" value="Python" 
                            checked={selectedOption === "Python"} 
                            onChange={() => setSelectedOption("Python")} />
                        <label htmlFor="option2">No</label>
                    </div>
                </div>
                <button onClick={submitVote} disabled={!question || !selectedOption || voted}>Submit Vote</button>
                {voted && <div id="result">Thank you for voting!</div>}
            </div>
        </div>
    );
};

export default PollForm;
