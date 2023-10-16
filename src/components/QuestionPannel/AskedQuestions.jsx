import React from "react";
import QuestionPanel from "./QuestionPannel";

const questionBank = [
  {
    question: "What is DreamScape Studio, and how does it benefit content creators?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "What equipment and facilities do you provide in your studios?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "Can I book studio time for specific hours, or do I have to book a full day?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "What is the cancellation policy for bookings? Can I get a refund if I need to cancel?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "Do you offer any special discounts or membership programs for regular users?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt perferendis itaque quibusdam beatae fugit dicta officia ipsamnecessitatibus quis",
  },
  {
    question: "Is there a limit to the number of people I can bring into the studio with me?",
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