import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ContactMe from './ContactMe/ContactMe';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    useTitle(' ')

    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;