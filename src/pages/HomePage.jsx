import { useState } from "react";
import LeftSection from "../components/leftSection/LeftSection";
import NavBar from "../components/nav/NavBar";
import RightSection from "../components/rightSection/RightSection";
import clock from "../assets/system-regular-67-clock-hover-clock.gif";

// styles
import "./page-styles.scss";

const HomePage = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const totalQuestions = 20;
  const percentage = submitted
    ? 100
    : Math.floor((correctAnswers / totalQuestions) * 100);

  const handleQuit = () => {
    setCorrectAnswers(0);
    setSubmitted(false);
    setCurrentQuestionIndex(0);
    localStorage.removeItem("selectedAnswers"); 
    window.location.reload(); 
  };

  return (
    <div className="home-container">
      <NavBar />

      <div className="secondary-nav">
        <img
          width="34px"
          height="34px"
          className="rounded-full bg-transparent"
          src={clock}
          alt=""
        />
        <button
          onClick={handleQuit}
          className="text-white bg-red-500 h-[34px] hover:bg-red-700 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 focus:outline-none"
        >
          Quit
        </button>
      </div>

      <div className="content-container">
        <div className="grid-container">
          <LeftSection
            percentage={percentage}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            submitted={submitted}
          />
          <RightSection
            setCorrectAnswers={setCorrectAnswers}
            setSubmitted={setSubmitted}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            submitted={submitted}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
