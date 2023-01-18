import React from 'react';
import useTitle from '../../Hooks/useTitle';
import heroImage from '../../Assets/heroImages/user.png'
import subHeroImage from '../../Assets/heroImages/zigzags.png'
import subHeroImage1 from '../../Assets/heroImages/plus.png'
import subHeroImage2 from '../../Assets/heroImages/cube.png'
import subHeroImage3 from '../../Assets/heroImages/Ellipse 11.png'
import subHeroImage4 from '../../Assets/heroImages/circles.png'
import Button from '../../Components/Buttons/Button'

const Aboutme = () => {
    useTitle('About Me')

    return (

        <div>
            <h2 className='text-4xl text-[#E84949] text-left py-24'>About Me</h2>
            <div className=' py-10 md:flex md:flex-row-reverse items-center  justify-between'>
                <div className="hero-text md:text-left w-full">
                    <h2 className='text-[32px] font-bold text-[#343D68]'>I am senior software engineer specialized in Java</h2>
                    <p className='text-[18px] py-5'>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                    <p className='text-[18px] py-5'>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                    <Button content='Hire me'></Button>
                </div>
                <div className="hero-image w-full">
                    <div className="image w-[300px] my-4 mx-auto p-4 relative md:mr-0 md:h-[497px] md:w-[411px] ">
                        <img src={subHeroImage} className="absolute top-2 left-2" alt="" />
                        <img src={subHeroImage1} className="absolute top-0 left-2/4" alt="" />
                        <img src={subHeroImage2} className="absolute top-0 right-0" alt="" />
                        <img src={subHeroImage3} className="absolute bottom-0 left-6" alt="" />
                        <img src={subHeroImage4} className="absolute bottom-0 right-0" alt="" />
                        <img className='block m-auto md:h-[390px]' src={heroImage} alt="" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Aboutme;