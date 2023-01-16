import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png';
import projectIcon from '../../../Assets/icons/projectIcon.png';
import projectIconF from '../../../Assets/icons/projectIconF.png'

const Navbar = () => {

    // Mobile Menu Icon
    const [icon, setIcon] = useState(true)

    return (
        <div className='flex justify-between py-2 md:flex-row-reverse' >
            <div className='md:hidden'>
                {
                    icon ? <FontAwesomeIcon className='cursor-pointer' onClick={() => { setIcon(!icon) }} size='xl' icon="fa-bars" /> : ''
                }
                {
                    !icon ? <div className='mobile-menu absolute bg-[#e84949fa] z-10 h-screen w-full top-0 left-0'>
                        {
                            !icon ? <div className='absolute top-2 left-2'><FontAwesomeIcon className='cursor-pointer' onClick={() => { setIcon(!icon) }} size='xl' icon="fa-x" /></div> : ''
                        }
                        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                            <ul onClick={() => { setIcon(true) }}>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8]' ><Link to='/'>Skills</Link></li>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8]' >   <Link className='flex justify-center items-center]'><img className='px-2' src={projectIconF} alt="" /> Projects</Link></li>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8]' ><Link to='/'>Contact me</Link></li>
                            </ul>
                        </div>
                    </div> :
                        ''
                }

            </div>
            <div className='hidden menus md:flex justify-center items-center'>
                <Link>Skills</Link>
                <Link className='flex justify-center items-center px-10 text-[#E84949]'><img className='px-2' src={projectIcon} alt="" /> Projects</Link>
                <Link>Contact me</Link>
            </div>
            <div>
                <Link to='/'> <img src={logo} alt="" /></Link>
            </div>

        </div>
    );
};

export default Navbar;