import "./rightSectionStyle.scss";

const Percentage = ({ percentage }) => {
  return (
    <div className="progress-circle bg-white rounded-full">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </div>
  );
};

export default Percentage;
