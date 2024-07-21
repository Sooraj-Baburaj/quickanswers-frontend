
import React from 'react'
import Logo from '../Logo'
import Button from '../Button'
import HeaderMenu from '../HeaderMenu'

const Header = () => {
  return (
    <header className='min-h-[80px] flex items-center border-b border-b-secondary-border'>
        <div className="container">
            <div className="w-full flex flex-wrap items-center">

                {/* logo */}
                <div className="w-auto">
                    <Logo>Header</Logo>
                </div>


                {/* menu links */}
                <div className='w-auto ml-[55px]'>
                    <HeaderMenu/>
                </div>


                {/* action buttons */}
                <div className="w-auto flex space-x-lg ml-auto">
                    <Button title={'login'} type='secondary'/>
                    <Button title={'Sign Up'}/>
                </div>

                
            </div>
        </div>
    </header>
  )
}

export default Header