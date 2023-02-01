import Card from './Card';
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
            <div className='pt-12 flex flex-col gap-3 pb-12'>
                <h3 className='text-sm text-white tracking-widest font-bodyFont '>2004 - 2023</h3>
                <h2 className='text-xl text-bold text-amber-200'>Education Qualification</h2>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='border-l-[6px] border-l-gray-400 border-opacity-40 w-full flex flex-col justify-center gap-10'>
                    <Card level="BE in Computer Engineering"
                        board="Institute of Engineering, TU"
                        score="3.5/4"
                        institute="IOE Thapthali Campus"
                    />
                    <Card level="+2"
                        board="National Examination Board (NEB)"
                        score="3.3/4"
                        institute="Kathmandu Model College, Bagbazar"
                    />
                    <Card level="SLC"
                        board="National Examination Board (NEB)"
                        score="3.5/4"
                        institute="Padma Chakra School"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education

