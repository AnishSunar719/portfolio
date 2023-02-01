import React, { useState } from 'react';
import  SendMsg  from '../../api/postContact';

const ContactRight = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const handleForm = async (event) => {
        event.preventDefault();
        if (username === "") {
            setErrMessage("Username is required");
        }
        else if (phone === "") {
            setErrMessage("Phone number is required");
        }
        else if (email === "") {
            setErrMessage("Email is required");
        }
        else if (subject === "") {
            setErrMessage("Subject is required");
        }
        else if (message === "") {
            setErrMessage("Message is required")
        }
        else {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            console.log(formData);
            const msg = await new SendMsg(formData);
            console.log(msg)

            setSuccessMessage("Message sent");
            setUsername("");
            setPhone("");
            setEmail("");
            setSubject("");
            setMessage("");
            setErrMessage("");
            // event.target.reset()
        }
    }

    return (
        <div className='w-full lgl:w-[60%] h-full bg-gray-900'>
            <form onSubmit={handleForm} className='w-full text-amber-200 flex flex-col gap-4 uppercase'>
                <div className=' w-full flex flex-col lgl:flex-row pl-4 pt-8 gap-20 mb-3'>
                    <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                        <p className='tracking-wide'>Your Name</p>
                        <input onChange={(event) => setUsername(event.target.value)} name="username"
                            className={`${errMessage === "Username is required" && 'outline-designColor'}
                            contactInput`}
                            type={"text"} placeholder={"e.g. John Doe"} />
                    </div>
                    <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                        <p className=' tracking-wide'>Phone Number</p>
                        <input onChange={(event) => setPhone(event.target.value)} name="phone" type={"text"} placeholder={"98xxxxxxxx"} className={`${errMessage === "Phone number is required" && 'outline-designColor'}
                            contactInput`} />
                    </div>
                </div>
                <div className=' w-full flex flex-col pl-6 gap-6'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className=' tracking-wide'>Email</p>
                        <input onChange={(event) => setEmail(event.target.value)} name="email" type={"email"} placeholder={"john@example.com"} className={`${errMessage === "Email is required" && 'outline-designColor'}
                            contactInput`} />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <p className=' tracking-wide'>Subject</p>
                        <input onChange={(event) => setSubject(event.target.value)} name="subject" type={"text"} placeholder={""} className={`${errMessage === "Subject is required" && 'outline-designColor'}
                            contactInput`} />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <p className=' tracking-wide'>Message</p>
                        <textarea onChange={(event) => setMessage(event.target.value)} name="message" className={`${errMessage === "Message is required" && 'outline-designColor'}
                            contactTextArea`} cols={"30"} rows={"5"} />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col pl-6 py-6 gap-6'>
                    <button type='Submit' className='w-full h-12 bg-designColor bg-opacity-60 text-white uppercase'>
                        Send Message
                    </button>
                    {
                        errMessage
                            ? <p className='w-full h-12 text-designColor animate-bounce duration-100 pl-4'>{errMessage}</p>
                            : successMessage && <p className='w-full h-12 text-lime-400 animate-bounce pl-4'>{successMessage}</p>
                    }
                </div>
            </form>
        </div>
    )
}

export default ContactRight