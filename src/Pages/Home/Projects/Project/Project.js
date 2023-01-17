import React from 'react';
import image1 from '../../../../Assets/projects/1.png'
import Button from '../../../../Components/Buttons/Button';
import SecButton from '../../../../Components/Buttons/SecButton';

const Project = () => {
    return (
        <div className='bg-gradient-to-r from-[#20ECD3] to-[#0D54BE] p-1 my-10 rounded w-[300px] md:w-[372px] mx-auto'>
            <div className=' bg-white rounded'>
                <img src={image1} className='w-full' alt="" />
                <p className='text-[#818080] text-[18px] p-2'>Made a social media manager template using HTML 5, CSS and JS only.</p>
                <div className='flex justify-center p-5'>
                    <SecButton content='Details'></SecButton>
                </div>
            </div>
        </div>
    );
};

export default Project;