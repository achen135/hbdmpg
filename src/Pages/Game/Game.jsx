import React, { useState } from "react";
import "./Game.css";

const questions = [
  {
    question: "When's his birthday?",
    options: ["06/05", "06/06", "06/07", "06/08"],
    answer: "06/06",
  },
  {
    question: "Which plush is NOT real",
    options: ["Kenny", "James", "Bob", "Tyler"],
    answer: "James",
  },
  {
    question: "What's his favorite fruit?",
    options: ["Mango", "Watermelon", "Pear", "Banana"],
    answer: "Mango",
  },
  {
    question: "When was our first date? (Don't scroll back up now...)",
    options: ["08/01", "08/02", "08/03", "08/06"],
    answer: "08/02",
  },
  {
    question: "Who's his favorite jjk character?",
    options: ["Gojo", "Itadori", "Inumaki", "Todo"],
    answer: "Todo",
  },
  {
    question: "Who's the love of his life?",
    options: ["Pauline!", "sb", "sbd", "himself"],
    answer: "sb"
  }
];

const Quiz = () => {

  const handleClick = () => {
  const section = document.getElementById('letter')
    if(section) {
      section.scrollIntoView()
    }
  }

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    setShowAnswer(true);

    setTimeout(() => {
      setSelected(null);
      setShowAnswer(false);
      setCurrentQ((prev) => (prev + 1) % questions.length);
    }, 1500);
  };

  const q = questions[currentQ];

  return (
    <div className="quiz-wrapper">
      <p className="quiz-title">Boyfriend Quiz</p>
      <div className="quiz-box">
        <p className="quiz-question">{q.question}</p>
        <div className="quiz-options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-option ${
                showAnswer
                  ? opt === q.answer
                    ? "correct"
                    : opt === selected
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
       <div className='next-button' onClick={handleClick}>Last but not least!</div>
    </div>
  );
};

export default Quiz;
