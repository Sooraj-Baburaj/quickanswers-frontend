import React from 'react'
import Links from '../Links'
import Avatar from '../Avatar'

const TopCreator = () => {
  return (
    <div className='w-full flex flex-col mt-[32px] ps-lg'>
        <h4 className='w-full text-lg font-medium mb-lg '>Top Creators</h4>
        <ul className='space-y-xl'>
            <li className='w-full'>
                <Links href={'/'}>
                    <Avatar/>
                </Links>
            </li>
            <li className='w-full'>
                <Links href={'/'}>
                    <Avatar/>
                </Links>
            </li>
            <li className='w-full'>
                <Links href={'/'}>
                    <Avatar/>
                </Links>
            </li>
            <li className='w-full'>
                <Links href={'/'}>
                    <Avatar/>
                </Links>
            </li>
            <li className='w-full'>
                <Links href={'/'}>
                    <Avatar/>
                </Links>
            </li>
        </ul>
    </div>
  )
}

export default TopCreator