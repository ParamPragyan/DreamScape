import React from "react";
import QuestionPanel from "./QuestionPannel";

const questionBank = [
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
];
const AskedQuestions = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black pt-[25rem] gap-16 items-center ">
      <h1 className="text-7xl text-[#e64a4a] font-bold text-primaryColor  xsm:text-6xl xmd:text-7xl xmd:text-center">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="grid grid-cols-1 px-48 mb:px-24 gap-8 items-center  text-[white] w-4/5">
        {questionBank.map((question, idx) => {
          return (
            <QuestionPanel
              key={idx}
              question={question.question}
              answer={question.answer}
            ></QuestionPanel>
          );
        })}
      </div>
    </div>
  );
};

export default AskedQuestions;