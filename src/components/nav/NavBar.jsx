import { GiScrollQuill } from "react-icons/gi";
import { BsAlarmFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="w-full bg-white h-[70px] flex items-center justify-between px-5 border-b border-[ #F1F4F9]">
      <div>
        <p className="font-semibold text-2xl text-[#00acc1]">
          {" "}
          <span className="text-black">Legendary's</span>Quiz
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="rounded-full p-2 border-2 border-gray-400 cursor-pointer hover:border-[#00acc1]">
          <BsAlarmFill fontSize="20px" color="#00acc1" />
        </div>

        <div className="rounded-full p-2 border-2 border-gray-400 cursor-pointer hover:border-[#00acc1]">
          <GiScrollQuill fontSize="20px" color="#00acc1" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
