import Pagination from '@/src/components/Pagination'
import PerPage from '@/src/components/PerPage'
import QuestionThumbnail from '@/src/components/QuestionThumbnail'
import React from 'react'

const QuestionsList = () => {
  return (
    <div className='w-full relative flex flex-col'>
      <ul>
        <li className='w-full relative mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB]'>
          <QuestionThumbnail/>
        </li>
        <li className='w-full relative mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB]'>
          <QuestionThumbnail/>
        </li>
        <li className='w-full relative mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB]'>
          <QuestionThumbnail/>
        </li>
        <li className='w-full relative mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB]'>
          <QuestionThumbnail/>
        </li>
      </ul>
      <div className='w-full flex justify-between mt-[8px] sticky bottom-[0px] bg-[#fff] py-lg'>

        <Pagination/>
        <PerPage/>
      </div>
    </div>
  )
}

export default QuestionsList