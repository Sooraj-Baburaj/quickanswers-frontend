import React from 'react'

const ColabAvatars = ({ single, sm }) => {
    return (
        <div className='w-auto flex relative space-x-[-12px]'>
            <div className={`${sm ? 'w-xl' : 'w-2xl'} rounded-full aspect-square bg-[#c9c9c9] border border-[#F2F2F2] relative`}></div>
            {!single && <div className='w-2xl rounded-full aspect-square bg-[#c9c9c9] border border-[#F2F2F2] relative'></div>}
        </div>
    )
}

export default ColabAvatars