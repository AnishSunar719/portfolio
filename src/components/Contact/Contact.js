import React from 'react'
import Layout from '../layouts/Layouts';
// import { IoMdChatbubbles } from "react-icons/io"
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
    return (
        <section id='contact' className='section flex-col'>
            <div className="w-full flex text-center justify-center ">
                <Layout title="Like to Talk?" desc="Contact Me" />
            </div>
            <div className='flex w-full flex-col lgl:flex-row gap-16 justify-between'>
                <ContactLeft />
                <ContactRight />
            </div>
        </section>
    )
}

export default Contact