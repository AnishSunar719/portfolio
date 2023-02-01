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
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[85%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>85%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>Gimp</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[80%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>shotcut</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[90%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>90%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>blender</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[70%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>70%</span>
                            </span>
                        </span>
                    </div>
                    <div className=''>
                        <p className={'uppercase text-sm font-medium'}>design</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[85%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>85%</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div >
                    <div className='pt-12 flex flex-col gap-3 pb-12'>
                        <h3 className='text-sm text-white tracking-widest font-bodyFont '>Features</h3>
                        <h2 className='text-xl text-bold text-amber-200'>Development Skills</h2>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>html</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[85%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>85%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>css</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[80%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>javascript</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[80%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>80%</span>
                            </span>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <p className={'uppercase text-sm font-medium'}>react</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[75%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>75%</span>
                            </span>
                        </span>
                    </div>
                    <div className=''>
                        <p className={'uppercase text-sm font-medium'}>python</p>
                        <span className={`w-full h-2 inline-flex bgOpacity rounded-xl`}>
                            <span className={`w-[90%] h-full bg-gradient-to-r from-blue-600 via-purple-400 to-red-600 rounded-xl relative`}>
                                <span className='absolute -top-8 right-0'>90%</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Skills