import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-evenly  font-semibold text-gray-500  p-2'>
            <div>
                <p className='text-xl'>
                    <a href="/">
                        shūshoku
                    </a>
                </p>
            </div>

            <div className='flex items-center space-x-10 text-lg'>
                <p>
                    <a href="/About">
                        About
                    </a>
                </p>
                <p>
                    <a href="/Job">
                        Job
                    </a>
                </p>
            </div>

        </div>
    )
}

export default Navbar
