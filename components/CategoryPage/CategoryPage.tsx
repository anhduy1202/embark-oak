
import { BannerDataType, productType } from '@/lib/interface';
import React from 'react'
import { ProductList } from '../LandingPage/Featured';
import Filter from '../Filter/Filter';
interface CategoryPageProps {
    products: productType[]
    banner: BannerDataType
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products, banner }) => {
    return (
        <section className='flex flex-col items-center mt-12 font-Outfit'>
            <img src={banner.image} className='relative w-full h-[160px] md:h-[320px] object-cover' alt="Category banner" />
            <p className='text-[3rem] md:text-[6rem] top-[20%] md:top-[30%] font-normal absolute text-white'>{banner.title}</p>
            <div className="w-full grid grid-cols-4">
                <Filter />
                <ProductList products={products} />
            </div>
        </section>
    )
}

export default CategoryPage