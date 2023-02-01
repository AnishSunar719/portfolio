import React from 'react';
import { Logo } from '../../assets/index';

const Footer = () => {
    return (
        <section className='section flex'>
            <div className='w-full text-center flex gap-4 items-center justify-center'>
                <div>
                    <img src={Logo} alt="logo" className='w-[2rem] h-[3rem]' />
                </div>
                <div>
                    Copyright &copy; {new Date().getFullYear()}
                </div>

            </div>
        </section>
    )
}

export default Footer