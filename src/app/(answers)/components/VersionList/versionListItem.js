import ColabAvatars from '@/src/components/ColabAvatars'
import DateAndTime from '@/src/components/DateAndTime'
import VoteBtn from '@/src/components/ui/VoteBtn'
import React from 'react'

const VersionListItem = () => {
    return (
        <div className='w-full flex items-start'>
            <ColabAvatars single />
            <div className="w-full relative flex-1 px-md text-lg flex flex-col items-start">
                <div className="w-full flex mb-xs space-x-lg">
                    <h4 className="font-medium">Contrary to popular</h4>
                    <span className="text-md">
                        <DateAndTime time={null} />
                    </span>
                </div>
                <p className="mb-md w-full max-w-[700px]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                </p>
                <div className="w-auto">
                    <VoteBtn />
                </div>
            </div>
        </div>
    )
}

export default VersionListItem