import React from 'react';
import { Contacts } from '../../assets';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

const ContactLeft = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gray-900 flex flex-col items-center gap-16 pb-4 lgl:pb-24 pt-4 lgl:pt-24'>
            <div className='flex justify-center'>
                <img src={Contacts} alt="contact" className='w-full h-full px-2 lgl:px-6' />
            </div>
            <div className='w-full pl-6 flex flex-col items-center gap-3'>
                <div>
                    <h2 className='text-2xl font-bold text-designColor'>Anish Sunar</h2>
                </div>
                <div>
                    <h3 className='text-base font-medium text-amber-200' >Computer Engineer</h3>
                </div>
                <div className='flex items-center text-md gap-3 cursor-pointer text-white'>
                    <span className='text-lightText'><FaPhoneAlt /></span>
                    +977-9843625724
                </div>
                <div className='flex items-center text-md gap-3 text-white cursor-pointer'>
                    <div className='text-xl text-lightText'><MdOutlineEmail /></div>
                    anishsunar719@gmail.com
                </div>
            </div>
        </div>
    )
}

export default ContactLeft