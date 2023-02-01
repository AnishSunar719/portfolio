import React from 'react';
import { FaGithub } from "react-icons/fa"

const Card = ({ img, title, desc, proj }) => {
    return (
            <div className='mt-6 overflow-hidden w-full h-[316px] md:h-[320px] lgl:h-[370px] bg-gray-900 rounded-lg group hover:bg-gradient-to-r from-bodyColor to-colorFooter shadow-shadowOne'>
                <div className='w-full h-full flex flex-col gap-12'>
                    <img className='w-full h-[63%] md:h-[50%] lgl:h-[90%] group-hover:scale-110 duration-300' src={img} alt={title} />
                    <div className='flex flex-col gap-3 pl-6'>
                        <div className='flex h-[10%] items-center justify-between pr-4'>
                            <h2 className='text-lg text-amber-200 uppercase font-bodyFont tracking-wider'>{title}</h2>
                            <span className="text-2xl text-white cursor-pointer hover:text-designColor">
                                <a href={`https://github.com/AnishSunar719/${proj}`} target={"_blank"} rel={"noreferrer noopener"}><FaGithub /></a>
                            </span>
                        </div>
                        <p className='text-base'>{desc}</p>
                    </div>
                </div>
            </div>
    )
}

export default Card