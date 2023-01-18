import React from 'react';
import useTitle from '../../Hooks/useTitle';
import planeIcon from '../../Assets/contact/plane.png'
import icon from '../././../Assets/heroImages/circles.png'

const Contact = () => {
    useTitle('Contact');

    const handelSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='text-left py-24'>
            <h2 className='text-4xl text-[#E84949]'>Contact Me</h2>
            <div className='flex justify-between'>
                <div className="contact-form w-full md:w-1/2">
                    <form>
                        <input type="text" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter Name' name="" id="" />
                        <input type="email" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter email address' name="" id="" />
                        <textarea name="message" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-2 focus:outline-none' placeholder='Message' id="" cols="20" rows="5"></textarea>
                        <button onClick={handelSubmit} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-10 rounded my-5 `}> <div className='flex justify-center'><span>Send</span> <img className='px-2' src={planeIcon} alt="" /></div></button>
                    </form>
                </div>
                <div className='hidden md:block'>
                    <img src={icon} className='h-[200px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;