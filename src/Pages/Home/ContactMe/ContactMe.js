import React from 'react';
import contactImage from '../../../Assets/contact/man.png';
import planeIcon from '../../../Assets/contact/plane.png'

const ContactMe = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='py-24 my-10'>
            <h2 className='text-[25px] text-[#E84949] font-bold py-10'>Contact Me</h2>
            <div className='md:flex items-center'>
                <div className="contact-image py-10 w-full" data-aos="zoom-in">
                    <img className='block mx-auto ' src={contactImage} alt="" />
                </div>
                <div className="contact-form w-full">
                    <form>
                        <input type="text" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter Name' name="" id="" />
                        <input type="email" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter email address' name="" id="" />
                        <textarea name="message" className='border-2 p-2 w-full rounded-lg shadow-lg text-[16px] my-2 focus:outline-none' placeholder='Message' id="" cols="20" rows="5"></textarea>
                        <button onClick={handelSubmit} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-10 rounded my-5 `}> <div className='flex justify-center'><span>Send</span> <img className='px-2' src={planeIcon} alt="" /></div></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;