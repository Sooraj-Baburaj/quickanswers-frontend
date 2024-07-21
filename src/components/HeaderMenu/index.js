import Link from 'next/link'
import React from 'react'

const HeaderMenu = () => {
  return (
    <div className='w-full'>
        <ul className='w-full flex items-center space-x-2xl'>
            <li>
                <Link href={'/'} className='text-lg'>About Us</Link>
            </li>
            <li>
                <Link href={'/'} className='text-lg'>Categories</Link>
            </li>
            <li>
                <Link href={'/'} className='text-lg'>Un-solved</Link>
            </li>
        </ul>
    </div>
  )
}

export default HeaderMenu