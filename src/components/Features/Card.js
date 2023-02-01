import React from 'react'

const Card = ({ title, desc, icon }) => {
    return (
            <div className=" w-full lgl:h-[350px] px-12 pt-6 lgl:pt-0 rounded-lg flex items-center bg-gray-900 mt-6 group">
                <div className='h-[300px] overflow-y-hidden py-7'>
                    <div className='h-full flex flex-col gap-4 translate-y-0 group-hover:-translate-y-[100px] transition-transform duration-700'>
                        <span className="text-5xl text-designColor">{icon}</span>
                        <div>
                            <h2 className='text-lg text-amber-200'>{title}</h2>
                        </div>
                        <div>
                            <p className='text-base'>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card