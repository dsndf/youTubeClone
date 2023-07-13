import React, { useContext, useState } from "react";
import ytube from "../images/yt-logo.png";
import y2tube from "../images/yt-logo-mobile.png";
import ytube2 from "../images/yt-light.png";

import { MdSearch } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { BiBell, BiUser } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Context } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";
import user from "../images/utub_user.jpg";

const Header = () => {
  const navigateTo = useNavigate();
  const { menuToggle, page, setMenuToggle, setMode, mode } =
    useContext(Context);
  const [keyword, setKeyword] = useState("");

  const searchFunc = () => {
    navigateTo(`/search/results/${keyword}`);
  };
  let condition1 = page === 1 && !menuToggle;
  let condition2 = page === 1 && menuToggle;

  console.log("page is", page);
  return (
    <div className="group flex items-center  bg-[#e8e8e8] dark:hover:bg-[#131313] transition-all duration-500  justify-between p-4 py-[30px] dark:bg-black h-[55px] ">
      <div className="flex justify-between items-center gap-2 ">
        {condition1 && (
          <AiOutlineMenu
            className="dark:text-white  text-[23px]  sm:hidden  "
            onClick={() => setMenuToggle(true)}
          />
        )}
        {condition2 && (
          <AiOutlineClose
            className="dark:text-white  text-[23px] sm:hidden"
            onClick={() => setMenuToggle(false)}
          />
        )}
        {mode === "Dark" ? (
          <img src={ytube} className="h-5 hidden sm:block   " alt="youtube" />
        ) : (
          <img src={ytube2} className="h-9 hidden sm:block   " alt="youtube" />
        )}

        <img src={y2tube} className="h-5  block sm:hidden   " alt="youtube" />
      </div>

      <div className="flex relative   ">
        <MdSearch className="dark:text-white text-black  absolute top-2 left-2.5 text-[20px]" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border-2 border-[#565656]  focus:border-blue-800  dark:bg-[black] dark:text-white  outline-none transition-all duration-150  rounded-l-full p-[5px] pl-10  w-[150px] sm:w-[250px]  md:w-[350px] lg:w-[500px]"
        />
        <span className=" bg-white  dark:bg-[#222222] dark:border-none  border-2 border-[#222222] border-l-0 flex justify-center items-center rounded-r-full w-12">
          <MdSearch
            className="dark:text-white      text-[20px]  "
            onClick={searchFunc}
          />
        </span>
      </div>
      <div className=" h-8 flex justify-center  items-center">
        <TbVideoPlus className="dark:text-white mr-6 text-[23px]  hidden sm:block "></TbVideoPlus>
        <BiBell className="dark:text-white mr-6 text-[23px]  hidden sm:block  " />
        <BsFillMoonFill
          className=" mr-3  dark:text-white text-[21px] sm:mr-6  "
          onClick={() => {
            if (mode === "Dark") {
              setMode("Light");
              document.documentElement.classList.remove("dark");
            } else {
              setMode("Dark");
              document.documentElement.classList.add("dark");
            }
          }}
        />
        <img src={user} className=" h-[100%] rounded-full" alt="" />
      </div>
    </div>
  );
};

export default Header;
