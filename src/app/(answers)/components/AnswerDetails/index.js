import React from 'react'
import AnswerHeading from '../AnswerHeading'
import GeneratedText from '../GeneratedText'
import AnswerAction from '../AnswerAction'
import VersionsThumbnails from '../VersionsThumbnails'
import Comments from '../Comments'

const AnswerDetails = () => {
    return (
        <div className="w-8/12 pr-2xl">
            <AnswerHeading />
            <GeneratedText />
            <AnswerAction />
            <VersionsThumbnails />
            <Comments />
        </div>
    )
}

export default AnswerDetails