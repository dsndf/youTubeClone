import React from 'react'
import { Link } from "react-router-dom";
import VideoLength from "./VideoLength";
import { abbreviateNumber } from "js-abbreviation-number";
import {MdVerified} from 'react-icons/md'
const SearchResult = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col items-start lg:flex-row lg:items-center dark:text-white  lg:justify-start gap-4 mb-8 px-4 ">
        <div className="h-full  relative overflow-hidden  rounded-lg group w-full lg:w-[350px]">
          <img
            src={video?.thumbnails?.[0]?.url}
            className=" group-hover:scale-110 transition-scale duration-500 object-cover h-full w-full "
            alt=""
          />
          {video?.lengthSeconds && <VideoLength time={video.lengthSeconds} />}
        </div>
    
       <div className=" lg:w-[calc(100%-150px)] w-full dark:text-white mt-5 flex justify-start items-start " >
        <img src={video?.author?.avatar?.[0]?.url} alt="" className="rounded-full w-10" /> 
     <div className="flex flex-col ml-4   ">
        <p className="dark:text-white text-[13px] md:text-[17px] text-left line">{video?.title}
        </p>
        <div className="flex flex-col text-[13px] mt-1 dark:text-[#9d9d9d] text-gray-500">
       <p  className='text-[14px] mb-2 hidden ' >{video?.descriptionSnippet}</p>    <span className="mb-1" >{video?.author?.title} {video?.author?.badges?.[0]?.text==="Verified"?<MdVerified className="inline text-[17px]"/>:null} </span>
         
          <div className="flex">
            <span>{abbreviateNumber( video?.stats?.views,2)} views  </span>
            <span className="text-white text-[25px] leading-[4px] mx-1">.</span>
            <span>{video?.publishedTimeText}</span>
          </div>
        </div>
     </div>
       </div>

      </div>
    </Link>
  )
}

export default SearchResult
