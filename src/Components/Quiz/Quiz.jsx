import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lisbon', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    questionText: 'Who wrote "Romeo and Juliet"?',
    answerOptions: [
      { answerText: 'William Shakespeare', isCorrect: true },
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'Leo Tolstoy', isCorrect: false },
      { answerText: 'Mark Twain', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setFeedbackMessage('Correct!');
      setShowFeedback(true);
      setAnsweredCorrectly(true);
    } else {
      setFeedbackMessage('Try Again');
      setShowFeedback(true);
      setAnsweredCorrectly(false);
    }
  };

  const handleNextQuestionClick = () => {
    setCurrentQuestion((prev) => prev + 1);
    setShowFeedback(false);
    setAnsweredCorrectly(false);
  };

  return (
    <div className='quiz'>
      <h2>{questions[currentQuestion].questionText}</h2>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option.isCorrect)}
            className={showFeedback && option.isCorrect ? 'correct' : ''}
          >
            {option.answerText}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className={`feedback ${answeredCorrectly ? 'correct' : 'wrong'}`}>
          {feedbackMessage}
        </div>
      )}
      {answeredCorrectly && (
        <button onClick={handleNextQuestionClick}>Next Question</button>
      )}
      {currentQuestion >= questions.length - 1 && answeredCorrectly && (
        <div className='final-message'>Quiz Completed!</div>
      )}
    </div>
  );
};

export default Quiz;
