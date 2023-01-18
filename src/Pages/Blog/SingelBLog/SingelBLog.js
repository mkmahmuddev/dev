import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingelBLog = ({ classes }) => {
    return (
        <div style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)`, backgroundSize: 'cover', backgroundOrigin: 'center' }} className={`bg-[#E84949] text-white text-left min-h-[250px] relative rounded  ${classes}`}>
            <div className='flex py-4 items-center'>
                <img src="https://w7.pngwing.com/pngs/839/708/png-transparent-writing-paper-book-publishing-light-writer-photography-reading-author.png" className='mx-4 h-10 w-10 rounded-full' alt="" />
                <h2 className='text-xl'>Jhon </h2>
            </div>
            <Link to='/blogdetails'>
                <div className='bg-[#e849496b] mb-0 absolute bottom-0 w-full px-5 py-2 hover:py-10 ease-in-out duration-200'>
                    <h2 className='text-2xl font-bold'>Socil Media Hacking </h2>
                    <div className="date flex justify-between py-2">
                        <span>jan 19, 2023</span> <span><FontAwesomeIcon className='text-3xl' icon="fa-solid fa-arrow-right" /></span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingelBLog;