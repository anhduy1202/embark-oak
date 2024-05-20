
import { productType } from '@/lib/interface';
import React from 'react'
import Products from '@/lib/products.json';
import { ProductList } from '../LandingPage/Featured';

const WomenClothingPage = () => {
    const womenProductList: productType[] = Products.filter((product) => product.categories.includes("woman"));
    return (
        <section className='flex flex-col items-center mt-12 font-Outfit'>
            <p className='text-[1.5rem] md:text-[3rem] font-normal'>Womens Clothing</p>
            <div className="">
                <ProductList products={womenProductList} />
            </div>
        </section>
    )
}

export default WomenClothingPage