import React from "react";
import { useNavigate } from "react-router-dom";
const LeftMenuItem = ({ name, icon, action,highLight }) => {

  const navigateTo = useNavigate();

  return (
    <div  onClick={()=>{
action();
navigateTo("/")

    }

    }  className={`  cursor-pointer hover:bg-[#323232] hover:text-white   rounded transition-all duration-200  dark:text-white text-[13px] p-1.5 m-1 ${highLight&&"bg-[#323232] text-white rounded" }  `}>
      <p className="flex items-center gap-5">
        <span className="text-[20px]" >{icon}</span>
        {name}{" "}
      </p>
    </div>
  );
};

export default LeftMenuItem;
