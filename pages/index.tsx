import { useState } from 'react';

type PollOption = {
  optionText: string;
};

type Poll = {
  question: string;
  options: PollOption[];
};

const mockPolls: Poll[] = [
  {
    question: 'What is your favorite color?',
    options: [
      { optionText: 'Red' },
      { optionText: 'Blue' },
      { optionText: 'Green' },
      { optionText: 'Yellow' },
    ],
  },
  // You can add more mock polls here
];

export default function PollPage() {
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handlePollSubmit = () => {
    if (selectedPoll && selectedOption) {
      console.log(`You voted for: ${selectedOption}`);
      setSelectedPoll(null);
      setSelectedOption(null);
    }
  };

  return (
    <div className="container">
      <h1>Take a Poll</h1>
      {!selectedPoll ? (
        <div>
          {mockPolls.map((poll, index) => (
            <button key={index} onClick={() => setSelectedPoll(poll)}>
              {poll.question}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>{selectedPoll.question}</h2>
          {selectedPoll.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="poll"
                value={option.optionText}
                onChange={() => setSelectedOption(option.optionText)}
              />
              {option.optionText}
            </div>
          ))}
          <button onClick={handlePollSubmit} disabled={!selectedOption}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
