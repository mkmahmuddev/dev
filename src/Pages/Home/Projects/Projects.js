import React from 'react';
import projectIcon from '../../../Assets/icons/projectIcon.png'
import Button from '../../../Components/Buttons/Button';
import Project from './Project/Project';

const Projects = () => {
    return (
        <div className='bg-[#F4FBFC] p-5'>
            <h2 className='text-[25px] text-[#E84949] font-bold flex justify-center'> <img className='px-2' src={projectIcon} alt="" /> Projects</h2>
            <p className='text-[#818080] text-[18px] py-5'>Some of my projects include:</p>
            <div className='md:flex justify-between'>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
            <Button content='View All'></Button>
        </div>
    );
};

export default Projects;