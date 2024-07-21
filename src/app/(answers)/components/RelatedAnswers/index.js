import RelatedItemsCard from '@/src/components/RelatedItemsCard'
import React from 'react'

const RelatedAnswers = () => {
    return (
        <div className="w-4/12 pt-[35px] space-y-lg">
            <RelatedItemsCard />
            <RelatedItemsCard />
            <RelatedItemsCard />
        </div>
    )
}

export default RelatedAnswers