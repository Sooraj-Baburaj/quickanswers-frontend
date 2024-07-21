import React from 'react'
import Link from '../Links'
import Links from '../Links'

const AuthSwitch = ({ activeTab = 'login'}) => {
  return (
    <div className='w-max bg-[#E6E6E6] rounded-full flex'>
        <Links href={'/login'} className={`whitespace-pre py-md px-xl rounded-full duration-300 transition-all ${activeTab === "login" ? 'bg-primary text-white' : ''}`}>Login</Links>
        <Links href={'/signup'} className={`whitespace-pre py-md px-xl rounded-full duration-300 transition-all ${activeTab === "signup" ? 'bg-primary text-white' : ''}`}>Sign up</Links>
    </div>
  )
}

export default AuthSwitch