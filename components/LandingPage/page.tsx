import React from 'react'
import Hero from './Hero';
import Featured from './Featured';
import Categories from './Categories';
import { BannerDataType, CategoriesBannerDataType, productType } from '@/lib/interface';

interface LandingPageProps {
    bannerData: BannerDataType
    categoriesData: CategoriesBannerDataType[]
    featuredProducts: productType[]
}
const LandingPage: React.FC<LandingPageProps> = ({ bannerData, categoriesData, featuredProducts }) => {
    return (
        <section className='flex flex-col w-full'>
            <Hero bannerData={bannerData} />
            <Featured featuredProducts={featuredProducts} />
            <Categories categoriesData={categoriesData} />
            {/* <BlogFeatured/> */}
        </section >
    )
}

export default LandingPage;