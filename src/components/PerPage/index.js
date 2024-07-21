import React from 'react'
import Links from '../Links'

const PerPage = () => {
  return (
    <ul className='w-max flex items-center border border-[#D8D0DD] rounded-full px-[2px] py-[2px]'>
        <li>
            <Links href="/" className="px-lg py-sm bg-[#D8D0DD] rounded-full">20</Links>
        </li>
        <li>
            <Links href="/" className="px-lg py-sm opacity-50">50</Links>
        </li>
        <li>
            <Links href="/" className="px-lg py-sm opacity-50">100</Links>
        </li>
    </ul>
  )
}

export default PerPage