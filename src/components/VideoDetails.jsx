import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { MdVerified } from "react-icons/md";
import { fetchData } from "../utils/api";
import { Context } from "../context/ApiContext";
import Loader from "./Loader";
import ReactPlayer from "react-player";
// import SuggestionVideo from "./SuggestionVideo";
import RelatedVideo from "./RelatedVideo";
const VideoDetails = () => {
  const { id } = useParams();
  const { loader, setLoader ,setPage} = useContext(Context);
  const [videoDetails, setVideoDetails] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const fetchVideoDetails = () => {
    setLoader(true);
    console.log(loader);
    fetchData(`video/details/?id=${id}`).then((data) => {

      setVideoDetails(data);
      setLoader(false);
    });
  };
  const fetchRelatedVideos = () => {
    setLoader(true);
    console.log(loader);
    fetchData(`video/related-contents/?id=${id}`).then((data) => {

      setRelatedVideos(data.contents);
      setLoader(false);
    });
  };

  useEffect(() => {
    setPage(2);
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  return (
    <div
      className=" dark:bg-black   lg:h-[calc(100vh-55px)] h-auto   "
    >
      <div className="  flex flex-col gap-13  h-auto justify-between items-center py-2    lg:flex-row lg:justify-center">
        <div className=" flex flex-col w-[100%]  h-[200px] md:h-[400px] lg:h-[450px]  xl:h-[500px] lg:w-[550px] xl:w-[700px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height={"100%"}
            width={"100%"}
            controls
            style={{ backgroundColor: "black" }}
          />
          <div className="flex flex-col  lg:px-0 px-3 ">
            <p className="dark:text-white mt-2.5 ">{videoDetails?.title}</p>
            <div className=" dark:text-white mt-5 flex  flex-col gap-3 md:flex-row md:justify-between md:items-start    ">
              {/* Author */}
              <div className="flex justify-start items-start">
                {" "}
                <img
                  src={videoDetails?.author?.avatar?.[0]?.url}
                  alt=""
                  className="rounded-full w-10"
                />
                <div className="flex flex-col ml-4"></div>
                <div className="flex flex-col text-[13px] mt-1 dark:text-[white]">
                  <span className="mb-1">
                    {videoDetails?.author?.title}{" "}
                    {videoDetails?.author?.badges?.[0]?.text === "Verified" ? (
                      <MdVerified className="inline text-[17px]" />
                    ) : null}{" "}
                  </span>
                  <div className="flex dark:text-gray-400  text-gray-500">
                    <span>{videoDetails?.author?.stats?.subscribersText} </span>
                    <span className="dark:text-white text-[25px] leading-[4px] mx-1"></span>
                  </div>
                </div>
              </div>
              {/* Likes views */}
              <div className="flex md:justify-between  items-center text-[13px] md:gap-4 justify-start gap-2   text-white  ">
                <span className="flex itmes-center justify-center rounded-[20px] bg-[#0e0e0e] p-2.5 w-[150px] gap-1">
                  <AiOutlineLike className="text-[17px] " />{" "}
                  {abbreviateNumber(videoDetails?.stats?.likes)} likes
                </span>
                <span className="flex itmes-center justify-center rounded-[20px] bg-[#0e0e0e] p-2.5 w-[150px]">
                  {abbreviateNumber(videoDetails?.stats?.views)} views
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:h-[calc(100vh-90px)]  h-[100%]  overflow-y-auto  mt-6  lg:mt-0">
          {relatedVideos &&
            relatedVideos.map((v, ind) => {
              return <RelatedVideo video={v.video}></RelatedVideo>;
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
