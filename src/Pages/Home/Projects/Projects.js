import React, { useEffect, useState } from 'react';
import projectIcon from '../../../Assets/icons/projectIcon.png'
import Button from '../../../Components/Buttons/Button';
import Project from '../../../Components/Project/Project';


const Projects = () => {


    const [projects, setProjects] = useState([]);
 

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects([data[0], data[1]])
            })

    }, [])

    console.log(projects)

    return (
        <div className='bg-[#F4FBFC] p-5'>
            <h2 className='text-[25px] text-[#E84949] font-bold flex justify-center'> <img className='px-2' src={projectIcon} alt="" /> Projects</h2>
            <p className='text-[#818080] text-[18px] py-5'>Some of my projects include:</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {
                    projects && projects?.map(project => <Project data={project}></Project>)
                }
            </div>
            <Button path='/projects' content='View All'></Button>
        </div>
    );
};

export default Projects;