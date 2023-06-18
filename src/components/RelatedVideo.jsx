import React from 'react'
import { Link } from "react-router-dom";
import VideoLength from "./VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import {MdVerified} from 'react-icons/md'
const RelatedVideo = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className="flex items-center justify-start gap-2 mb-4 w-full  px-3  ">
      <div className="lg:h-[100px]    lg:w-[200px] relative overflow-hidden md:h-[165px] md:w-[300px] h-[100px] w-[150px] rounded-lg group  ">
        <img
          src={video?.thumbnails?.[0]?.url}
          className=" w-full h-full group-hover:scale-110 transition-scale duration-500 object-cover "
          alt=""
        />
        {video?.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
      </div>
      {/* description */}
     <div className=" dark:text-white mt-5 flex justify-start items-start lg:w-[200px] md:w-[calc(100%-300px)] w-[calc(100%-150px)]  " >
   <div className="flex flex-col ml-4">
      <p className="dark:text-white lg:text-[13px] line  md:text-[15px] text-[13px] ">{video?.title}
      </p>
      <div className="flex flex-col text-[13px] mt-1 dark:text-[#9d9d9d] text-gray-500">
        <span className="mb-1" >{video?.author?.title} {video?.author?.badges?.[0]?.text==="Verified"?<MdVerified className="inline text-[17px]"/>:null} </span>
        <div className="flex">
          <span>{abbreviateNumber( video?.stats?.views,2)} views  </span>
          <span className="text-white text-[30px] leading-[4px] mx-1">.</span>
          <span>{video?.publishedTimeText}</span>
        </div>
      </div>
   </div>
     </div>

    </div>
  </Link>
  )
}

export default RelatedVideo
