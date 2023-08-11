import { motion } from 'framer-motion'
import React from 'react';

const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <div className='grid grid-cols-1 lgl:grid-cols-2 w-full gap-0 lgl:gap-28'>
                <div>
                    <div className='pt-12 flex flex-col gap-3 pb-12'>
                        <h3 className='text-sm text-white tracking-widest font-bodyFont '>Features</h3>
                        <h2 className='text-xl text-bold text-amber-200'>Design Skills</h2>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>kdenlive</p>
                        
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>Gimp</p>
                        
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>shotcut</p>
                        
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>blender</p>
                       
                    </div>
                    <div className=''>
                        <p className={'uppercase text-sm font-medium'}>figma</p>
                        
                    </div>
                </div>
                <div >
                    <div className='pt-12 flex flex-col gap-3 pb-12'>
                        <h3 className='text-sm text-white tracking-widest font-bodyFont '>Features</h3>
                        <h2 className='text-xl text-bold text-amber-200'>Development Skills</h2>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>html</p>
                        
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>css</p>
                        
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>javascript</p>
                       
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>react</p>
                        
                    </div>
                    <div className=''>
                        <p className={'uppercase text-sm font-medium'}>python</p>
                        
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Skills