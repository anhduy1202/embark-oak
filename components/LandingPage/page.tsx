import React from 'react'
import Hero from './Hero';
import Featured from './Featured';
import Categories from './Categories';
import BlogFeatured from './BlogFeatured';
import { BannerDataType, CategoriesBannerDataType } from '@/lib/interface';

interface LandingPageProps { 
    bannerData: BannerDataType
    categoriesData: CategoriesBannerDataType[]
}
const LandingPage: React.FC<LandingPageProps> = ({bannerData, categoriesData}) => {
    return (
        <section className='flex flex-col w-full'>
            <Hero bannerData={bannerData}/>
            <Featured />
            <Categories categoriesData={categoriesData} />
            {/* <BlogFeatured/> */}
        </section >
    )
}

export default LandingPage;