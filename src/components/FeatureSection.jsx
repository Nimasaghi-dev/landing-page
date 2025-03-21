import React from 'react'

const FeatureSection = () => {
    return (
        <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
            <div className='text-center'>
                <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                    Features
                </span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide'>
                    Build with 
                    <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                        {" "}confidence
                    </span>
                </h2>
            </div>
        </div>
    )
}

export default FeatureSection;