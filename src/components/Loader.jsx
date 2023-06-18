import React from 'react'

const Loader = () => {
  return (
    <div className="bg-yellow-300  flex justify-center items-center absolute w-full top-0 z-11 " >
        {/* loader */}
      <div className='h-0.5 bg-red-600 loading'></div>
    </div>
  )
}

export default Loader
