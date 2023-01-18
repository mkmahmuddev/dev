import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ContactMe from './ContactMe/ContactMe';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;