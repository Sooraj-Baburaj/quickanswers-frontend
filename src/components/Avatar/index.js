import React from 'react'

const Avatar = () => {
  return (
    <div className='w-full flex items-center'>
      <div className='w-2xl rounded-full aspect-square bg-[#c9c9c9]'></div>
      <div className='w-full flex flex-col pl-md'>
        <h4 className='text-md mb-sm leading-none'>MichaelChourdakis</h4>
        <p className='text-sm text-[#AAA8A8] leading-none'>Software developer</p>
      </div>
    </div>
  )
}

export default Avatar