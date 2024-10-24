import { useState } from 'react';

type PollOption = {
  optionText: string;
};

type Poll = {
  question: string;
  options: PollOption[];
};

export default function Admin() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  const handleCreatePoll = () => {
    const newPoll: Poll = {
      question,
      options: options.map((optionText) => ({ optionText })),
    };
    setPolls([...polls, newPoll]);
    setQuestion('');
    setOptions(['', '', '', '']);
  };

  return (
    <div className="container">
      <h1>Create a Poll</h1>
      <input
        type="text"
        placeholder="Poll Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
          className="input"
        />
      ))}
      <button onClick={handleCreatePoll} className="button">
        Create Poll
      </button>

      <div className="poll-list">
        <h2>Existing Polls</h2>
        {polls.map((poll, index) => (
          <div key={index}>
            <h3>{poll.question}</h3>
            <ul>
              {poll.options.map((option, optIndex) => (
                <li key={optIndex}>{option.optionText}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
