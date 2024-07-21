import React from 'react'
import Link from '../Links'
import Links from '../Links'

const AuthSwitch = () => {
  return (
    <div className='w-max bg-[#E6E6E6] rounded-full flex'>
        <Links href={'/'} className='whitespace-pre py-md px-xl rounded-full bg-primary text-white'>Login</Links>
        <Links href={'/'} className='whitespace-pre py-md px-xl rounded-full'>Sign up</Links>
    </div>
  )
}

export default AuthSwitch