import React from 'react'
import Hero from './Hero';
import Featured from './Featured';

const LandingPage: React.FC = () => {
    return (
        <section className='flex flex-col w-full'>
                <Hero />
                <Featured />
        </section >
    )
}

export default LandingPage;