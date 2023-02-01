import React from 'react'

const Layouts = ({title, desc}) => {
    return (
        <div>
            <div className='flex flex-col gap-4 mt-16 mb-16'>
                <p className='font-titleFont text-amber-200 text-lg'>{title}</p>
                <h1 className='text-3xl text-white font-bold font-bodyFont'>{desc}</h1>
            </div>
        </div>
    )
}

export default Layouts