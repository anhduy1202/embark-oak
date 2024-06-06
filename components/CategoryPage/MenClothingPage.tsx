import { productType } from '@/lib/interface';
import React from 'react'
import Products from '@/lib/products.json';
import { ProductList } from '../LandingPage/Featured';
interface MenClothingPageProps {
  products: productType[]
}
const MenClothingPage: React.FC<MenClothingPageProps> = ({products}) => {
  return (
    <section className='flex flex-col items-center mt-12 font-Outfit'>
      <p className='text-[1.5rem] md:text-[3rem] font-normal'>Mens Clothing</p>
      <div className="">
        <ProductList products={products} />
      </div>
    </section>
  )
}

export default MenClothingPage