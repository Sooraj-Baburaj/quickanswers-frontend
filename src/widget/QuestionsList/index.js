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
    </div>
  )
}

export default QuestionsList