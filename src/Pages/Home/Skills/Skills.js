import React from 'react';
import skillsImage from '../../../Assets/skills/skills.png';
import skill1 from '../../../Assets/skills/Group 20.png'
import skill2 from '../../../Assets/skills/Group 22.png'
import skill3 from '../../../Assets/skills/Group 21.png'
import skill4 from '../../../Assets/skills/Group 23.png'

const Skills = () => {
    return (
        <div className='py-24'>
            <h2 className='text-[25px] text-[#E84949] font-bold'>Skills</h2>
            <div className="skills py-5 md:flex md:flex-row-reverse items-center md:py-24 justify-between">
                <div className="skillsImage" data-aos="fade-up-left">
                    <img className='block mx-auto' src={skillsImage} alt="" />
                </div>
                <div className="skillsContent py-5">
                    <p className='text-[#818080] text-[18px]'>I have a vast experience in the following web technologies:</p>
                    <div className="skill grid grid-cols-2 gap-2 md:grid-cols-4 py-5">
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill1} alt="" />
                            <h3>CSS3</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill2} alt="" />
                            <h3>HTML5</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill3} alt="" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill4} alt="" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill4} alt="" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="singelSkill">
                            <img className='block mx-auto py-2' src={skill4} alt="" />
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;