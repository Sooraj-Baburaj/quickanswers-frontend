import React from 'react'

const StyleGuide = () => {
  return (
    <div className='w-full py-lg'>
        <div className="container">
            <h1 className='text-xl text-center mx-auto bg-primary-grey border border-secondary-border px-xl py-lg mb-xl'>This is an ambitious project by <span className='font-semibold font-secondary'>Soooraj & Aneesh &#128526;</span> </h1>
            <div className="w-full flex flex-col">
                <div className="w-auto flex flex-wrap">
                    <div className="w-3/12">
                        <ul className='w-full  border-r border-r-secondary-border'>
                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Colors</button>
                            </li>
                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Button</button>
                            </li>

                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Input</button>
                            </li>
                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Text size</button>
                            </li>
                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Font Family</button>
                            </li>
                            <li className='py-md border-b border-dashed border-b-secondary-border'>
                                <button className='text-lg py-sm'>Spacing</button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-9/12">
                        <div className="w-full flex flex-col pl-2xl">
                            <h4 className='text-2xl font-medium mb-xs'>
                                Colors
                            </h4>
                            <p className='text-md max-w-[800px] opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quos quam nulla accusamus ducimus voluptate facilis atque, tempore sint nemo tempora omnis beatae aut, dolore consequatur, nihil quo! Iure, nesciunt!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StyleGuide