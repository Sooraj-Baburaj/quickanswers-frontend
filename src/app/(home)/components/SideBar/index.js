import FeaturedList from '@/src/components/FeaturedList'
import TopCreator from '@/src/components/TopCreator'
import React from 'react'

const SideBar = () => {
  return (
    <div className='w-full relative'>
        <FeaturedList/>
        <TopCreator/>
    </div>
  )
}

export default SideBar