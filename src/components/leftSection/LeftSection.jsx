import sayae from "../../assets/itl.cat_watch-dogs-2-hd_437932.png"

const LeftSection = ({ correctAnswers, totalQuestions, submitted }) => {
    const getScoreEmoji = (percentage) => {
      if (percentage === 100) {
        return "🎉"; 
      } else if (percentage >= 80) {
        return "😊"; 
      } else if (percentage >= 50) {
        return "😐"; 
      } else {
        return "😢"; 
      }
    };

    const defaultEmoji = "🤔"; 

    const totalPercentage = submitted && totalQuestions > 0 
      ? Math.floor((correctAnswers / totalQuestions) * 100) 
      : 0; 
    return (
      <div className="w-full flex flex-col gap-5">
        {/* User Info Section */}
        <div className="h-[76px] bg-white card-shadow rounded-lg flex items-center gap-4 px-4">
          <div className="border rounded-full h-12 w-12">
            <img src={sayae} alt="SAYAE" className="w-full h-full rounded-full"/>
          </div>
  
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Itodo Simon</p>
            <p className="text-sm text-gray-400">Lagos Nigeria</p>
          </div>
        </div>
  
        {/* Score Section */}
        <div className="bg-white card-shadow rounded-lg flex items-center justify-center flex-col gap-3 p-4 h-44">
          <div className="border-4 border-[#00acc1] rounded-full h-20 w-20 flex items-center justify-center font-semibold ">
            <p>{totalPercentage}%</p> 
          </div>
  
          <p className="font-semibold">Total Score: {submitted ? getScoreEmoji(totalPercentage) : defaultEmoji}</p> 
          {submitted && ( 
            <p className="text-sm text-gray-500">{correctAnswers} out of {totalQuestions}</p> 
          )}
        </div>
      </div>
    );
};

export default LeftSection;
