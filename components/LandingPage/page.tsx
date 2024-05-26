import React from 'react'
import Hero from './Hero';
import Featured from './Featured';
import Categories from './Categories';
import BlogFeatured from './BlogFeatured';

const LandingPage: React.FC = () => {
    return (
        <section className='flex flex-col w-full'>
            <Hero />
            <Featured />
            <Categories />
            {/* <BlogFeatured/> */}
        </section >
    )
}

export default LandingPage;