import { BannerDataType, productType } from '@/lib/interface';
import React from 'react'
import { ProductList } from '../LandingPage/Featured';
interface MenClothingPageProps {
  products: productType[]
  banner: BannerDataType
}
const MenClothingPage: React.FC<MenClothingPageProps> = ({ products, banner }) => {
  return (
    <section className='flex flex-col items-center mt-12 font-Outfit'>
      <img src={banner.image} className='relative w-full h-[160px] md:h-[320px] object-cover' alt="Category banner" />
      <p className='text-[3rem] md:text-[6rem] top-[20%] md:top-[30%] font-normal absolute text-white'>{banner.title}</p>
      <div className="">
        <ProductList products={products} />
      </div>
    </section>
  )
}

export default MenClothingPage