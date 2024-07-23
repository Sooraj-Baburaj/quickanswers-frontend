import React from 'react'
import VersionHeading from '../../../components/VersionHeading'
import VersionList from '../../../components/VersionList'
import RelatedAnswers from '../../../components/RelatedAnswers'

const page = () => {
    return (
        <>
            <div className='w-8/12 pr-2xl flex flex-col'>
                <VersionHeading />
                <VersionList />
            </div>
            <RelatedAnswers />
        </>
    )
}

export default page