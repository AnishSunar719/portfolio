import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaReact, FaPython } from "react-icons/fa"
import { SiLinux, SiWindows, SiTailwindcss } from "react-icons/si";


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Student.", "Full Stack Dev.", "Linux Enthusiastic.", "Chili Lover", "Otaku"],
        loop: true,
        typeSpeed: 40,
        delaySpeed: 2000,
        deleteSpeed: 20,
    })


    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-12'>
            <div className='w-full flex flex-col gap-3'>
                <h4 className='text-xl font-normal font-titleFont text-amber-200'>Welcome</h4>
                <h1 className="text-6xl text-white font-bold">
                    I'm {" "}
                    <span className="w-full text-designColor capitalize font-bodyFont">
                        Anish Sunar</span>
                </h1>
                <h3 className='text-3xl font-bold tracking-wide text-white'>
                    a {" "}
                    <span>{text}</span>
                    <Cursor cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h3>
                <p className='w-full font-titleFont text-base'>
                    I have a keen interest in learning the way computer programs work. I am always
                    amazed by seeing the differnt Hardware Components messing the electrical signals to produce the
                    desired output in human readable form.
                </p>
            </div>
            <div className="w-full flex flex-col lgl:flex-row justify-between gap-8">
                <div className='w-full'>
                    <h3 className='font-titleFont uppercase mb-5 text-lg text-amber-200'>
                        find me in
                    </h3>
                    <div className='flex gap-3'>
                        <span className='bannerIcon'>
                            <a href='https://www.facebook.com/uchiha.obito.me/' target={"_blank"} rel={"noreferrer noopener"}><FaFacebookF /></a>
                        </span>
                        <span className='bannerIcon'>
                            <a href={'https://www.linkedin.com/in/anish-sunar-7b1a7025a/'} target={"_blank"} rel={"noreferrer noopener"}><FaLinkedin /></a>
                        </span>
                    </div>
                </div>
                <div className='w-full'>
                    <h3 className='font-titleFont uppercase mb-5 text-lg text-amber-200'>
                        Skills on
                    </h3>
                    <div className='flex gap-3'>
                        <span className='bannerIcon'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon'>
                            <FaPython />
                        </span>
                        <span className='bannerIcon'>
                            <SiLinux />
                        </span>
                        <span className='bannerIcon'>
                            <SiWindows />
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner