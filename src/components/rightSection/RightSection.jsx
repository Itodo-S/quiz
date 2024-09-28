import { useEffect, useState } from "react";
import Percentage from "./Percentage";
import { MdArrowBackIos } from "react-icons/md";
import { carQuestions } from "../../db/carQuestions ";

const RightSection = ({
  setCorrectAnswers,
  setSubmitted,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  submitted,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const totalQuestions = carQuestions.length;
  const currentQuestion = carQuestions[currentQuestionIndex];

  useEffect(() => {
    const savedAnswers = localStorage.getItem("selectedAnswers");
    const selectedAnswers = savedAnswers ? JSON.parse(savedAnswers) : [];
    setSelectedOption(selectedAnswers[currentQuestionIndex] || null);
  }, [currentQuestionIndex]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    const savedAnswers = localStorage.getItem("selectedAnswers");
    const selectedAnswers = savedAnswers ? JSON.parse(savedAnswers) : [];
    selectedAnswers[currentQuestionIndex] = index;
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  };

  const handleNextClick = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setAnsweredQuestions((prev) => prev + 1);
    setSelectedOption(null);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setAnsweredQuestions((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Mark last question as answered
    setAnsweredQuestions(totalQuestions);
    setSubmitted(true); 
  };

  const percentage = Math.floor((answeredQuestions / totalQuestions) * 100);

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Question Section */}
      <div className="flex items-center justify-center min-h-44 p-4 relative card-shadow rounded-lg bg-white">
        <div className="absolute -top-16">
          <Percentage percentage={percentage} />
        </div>
        <p className="font-medium text-lg">{currentQuestion.question}</p>
      </div>

      {/* Options Section */}
      <div className="flex flex-col gap-2 card-shadow min-h-44 p-4 bg-white rounded-lg">
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`p-1 rounded-[4px] flex items-center justify-between cursor-pointer ${
              selectedOption === index ? "bg-blue-300" : "hover:bg-blue-300"
            }`}
            onClick={() => handleOptionClick(index)}
          >
            <div className="flex items-center gap-2">
              <p>({String.fromCharCode(97 + index)}).</p>
              <p>{option}</p>
            </div>
            <input
              type="checkbox"
              checked={selectedOption === index}
              readOnly
            />
          </div>
        ))}
      </div>

      {/* Navigation Section */}
      <div className="flex items-center justify-between py-2.5">
        <div
          onClick={handleBackClick}
          className="w-8 h-8 border border-gray-300 hover:border-blue-300 rounded-full cursor-pointer flex items-center justify-center"
        >
          <MdArrowBackIos fontSize={12} />
        </div>

        {currentQuestionIndex === totalQuestions - 1 && !submitted ? (
          <button
            onClick={handleSubmit}
            className="text-white bg-blue-500 h-[34px] hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 focus:outline-none"
          >
            Submit
          </button>
        ) : submitted ? (
          <button
            onClick={() => {
              localStorage.clear();
              setCurrentQuestionIndex(0);
              setCorrectAnswers(0);
              setAnsweredQuestions(0);
              setSubmitted(false);
            }}
            className="text-white bg-red-500 h-[34px] hover:bg-red-700 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 focus:outline-none"
          >
            Clear
          </button>
        ) : (
          <button
            onClick={handleNextClick}
            className="text-white bg-blue-500 h-[34px] hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 focus:outline-none"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default RightSection;
