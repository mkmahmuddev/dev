import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../../Assets/wave.svg';
import linkedin from '../../Assets/icons/linkedin.png';
import whattsapp from '../../Assets/icons/whatsapp.png';
import twitter from '../../Assets/icons/twitter.png';
import gmail from '../../Assets/icons/gmai.png';
import github from '../../Assets/icons/github.png';

const Footer = () => {
    return (
        <div className='pt-24 pb-10 w-full text-white text-left px-4 md:flex justify-center items-center md:px-24' style={{ backgroundImage: `url(${wave})` }}>
            <div className="left my-20 w-full">
                <p className='text-[20px] md:text-center py-4'>My social media links:</p>
                <div className='flex justify-between md:justify-evenly   py-2'>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={whattsapp} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={gmail} alt="" /></a>
                </div>
            </div>
            <div className="right w-full">
                <p className='text-[20px] text-center py-2'>More projects I’ve worked on</p>
                <p className='text-[20px] flex justify-center'><img src={github} alt="" /> <span className='px-2'><a href=''>@john-doe </a> on github</span></p>

            </div>
        </div>
    );
};

export default Footer;