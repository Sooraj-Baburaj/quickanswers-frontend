import React from 'react'

const layout = ({ children }) => {
    return (
        <section className='w-full'>
            <div className='container'>
                <div className='w-full flex flex-wrap relative'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default layout