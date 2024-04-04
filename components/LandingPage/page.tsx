import React from 'react'
import NavBar from './NavBar';
import Hero from './Hero';
import Featured from './Featured';

const LandingPage: React.FC = () => {
    return (
        <section className='flex flex-col w-full'>
            <NavBar />
            <Hero />
            <Featured/>
        </section>
    )
}

export default LandingPage;