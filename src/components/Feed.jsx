import React, { useContext, useEffect } from 'react'
import LeftCategoryMenu from './LeftCategoryMenu'
import { Context } from '../context/ApiContext'
import VideoCard from './VideoCard';
import { Outlet } from 'react-router-dom';

const Feed = () => {
const {setPage,page} = useContext(Context);
  useEffect(()=>{
 setPage(1);
 console.log("page ",page)
  },[])
  const {apiData,loader} = useContext(Context);
  return (
    <div  className='  flex h-[calc(100vh-57px)]'>
      <LeftCategoryMenu/>
      
      {/* <div className=' grow  w-[calc(100%-240px)] bg-black h-full overflow-y-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols4 gap-4 p-5'>
             {
                apiData&&apiData.map((v,ind)=>{
                  return <VideoCard  key={ind} video={v.video} />
                })

             }


          </div>
      </div> */}

      <Outlet/>
    </div>
  )
}

export default Feed
