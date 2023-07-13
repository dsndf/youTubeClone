import React, { Fragment, useContext, useState } from "react";
import LeftMenuItem from "./LeftMenuItem";
import { Context } from "../context/ApiContext";
import { categories } from "../utils/constant";

const LeftCategoryMenu = () => {
  const { selectCategories, setSelectCategories, menuToggle } =
    useContext(Context);

  const [cate, setCate] = useState(localStorage.category?JSON.parse(localStorage.category):1);
  return (
    <div
      className={` px-2  w-[240px] absolute z-30 transiton-all duration-150 dark:bg-black bg-white   h-[calc(100vh-57px)] overflow-y-auto ${
        !menuToggle ? "translate-x-[-100%]" : "translate-x-0" }  sm:w-[240px]  sm:translate-x-0  sm:relative `}
    >
      {categories &&
        categories.map((v, ind) => {
          return (
            <Fragment key={ind}>
              {" "}
              <LeftMenuItem
                key={ind}
                name={v.type === "home" ? "Home" : v.name}
                icon={v.icon}
                highLight={cate === ind + 1 ? true : false}
                action={() => {
                  setCate(ind + 1);
                  localStorage.category = `${ind+1}`;
                  setSelectCategories(v.name);
                }}
              ></LeftMenuItem>
              {v.divider && (
                <hr className="border-1 border-[#3c3c3c]  w-[80%] m-auto my-4" />
              )}
            </Fragment>
          );
        })}
    </div>
  );
};

export default LeftCategoryMenu;
