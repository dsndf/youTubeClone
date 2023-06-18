import React from 'react'
import moment from 'moment'
const VideoLength = ({time}) => {
    const videoLength = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className='  text-[13px] absolute right-[5px] p-1 bottom-[10px] w rounded-lg bg-black text-white'>
      {videoLength}
    </div>
  )
}

export default VideoLength
