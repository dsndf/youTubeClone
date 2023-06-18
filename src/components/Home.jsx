import React, { useContext } from "react";
import { Context } from "../context/ApiContext";
import VideoCard from "./VideoCard";

const Home = () => {
  const { apiData, loader } = useContext(Context);

  return (
    <div className=" grow  w-[calc(100%-240px)] dark:bg-black h-full overflow-y-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-4 p-5">
        {apiData &&
          apiData.map((v, ind) => {
            return <VideoCard key={ind} video={v.video} />;
          })}
      </div>
    </div>
  );
};

export default Home;
