import { productType } from '@/lib/interface';
import React from 'react'
import Products from '@/lib/products.json';
import { ProductList } from '../LandingPage/Featured';

const FeaturedPage = () => {
    const featProductList: productType[] = Products.filter((product) => product.categories.includes("featured"));
    return (
        <section className='flex flex-col items-center mt-12 font-Outfit'>
            <p className='text-[1.5rem] md:text-[3rem] font-normal'>Featured</p>
            <div className="">
                <ProductList products={featProductList} />
            </div>
        </section>
    )
}

export default FeaturedPage