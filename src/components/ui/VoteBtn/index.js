import React from 'react'
import Icon from '../Icon'

const VoteBtn = () => {
    return (
        <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
            <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm">
                <Icon icon="like" size={18} color="#000" />
            </span>
            <span>53</span>
        </div>
    )
}

export default VoteBtn