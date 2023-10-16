import React, { useState } from "react";
import down from "../../assets/down.png"
const QuestionPanel = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const answerShowHandler = () => {
    setShowAnswer((state) => {
      return !state;
    });
  };
  return (
    <div className="">
      <div
        className="flex items-center rounded-2xl border bg-[#151515] border-[#ec3737e4] p-8 justify-between"
        onClick={answerShowHandler}
      >
        <h1 className="text-4xl py-4 cursor-pointer">{question}</h1>
        <img
          className={`${
            showAnswer
              ? "rotate-180 w-16 h-16 transition-all duration-500"
              : "w-16 h-16 transition-all duration-500"
          }`}
          src={down}
        ></img>
      </div>
      {showAnswer && <p className="text-3xl py-11 px-8 cursor-pointer ">{answer}</p>}
    </div>
  );
};

export default QuestionPanel;