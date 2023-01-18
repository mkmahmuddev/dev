import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Experience = () => {

    const [Education, setEducation] = useState(false);

    return (
        <div className='py-24 my-10'>

            <div>
                <button onClick={() => { setEducation(!Education) }} className={`h-[46px] bg-[#E84949] text-white py-2.5 px-6 rounded my-5 hover:bg-[#e84949e3]`}>Experience</button>
                <button onClick={() => { setEducation(!Education) }} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-6 rounded my-5 hover:bg-[#4f47c8e3] mx-5`}>Education</button>
            </div>

            {
                !Education ?
                    <div className="experience">
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-1/2 mx-auto">
                            <h3 className="title text-xl font-bold py-4 ">Senior Developer</h3>
                            <p className='overview'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quod sunt earum consectetur minus vero velit delectus omnis debitis alias, nihil sapiente recusandae modi reprehenderit maxime quia, voluptates pariatur! Aperiam tempora, eius saepe possimus, nemo officiis nihil, modi tenetur unde beatae facere quas ea at sapiente ad dolorem numquam.</p>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' /> 2021-2022</p>
                        </div>
                        <div className="singelExperience text-left shadow p-2 rounded my-4 md:w-1/2 mx-auto">
                            <h3 className="title text-xl font-bold py-4 ">Senior Developer</h3>
                            <p className='overview'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea assumenda quod sunt earum consectetur minus vero velit delectus omnis debitis alias, nihil sapiente recusandae modi reprehenderit maxime quia, voluptates pariatur! Aperiam tempora, eius saepe possimus, nemo officiis nihil, modi tenetur unde beatae facere quas ea at sapiente ad dolorem numquam.</p>
                            <p className='py-2'><FontAwesomeIcon icon="fa-briefcase" className='px-2' /> 2021-2022</p>
                        </div>
                    </div>
                    :

                    <div className="education text-left shadow p-2 rounded my-4 md:w-1/2 mx-auto">
                        <h3 className="title text-xl font-bold py-4 ">University</h3>
                        <p className='overview'>bachelor of Computer</p>
                        <p className='py-2'><FontAwesomeIcon icon="fa-school" className='px-2' /> 2021-2022</p>
                    </div>
            }




        </div>
    );
};

export default Experience;