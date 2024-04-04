import { productType } from '@/lib/interface'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Featured = () => {
    const featuredList: productType[] = [
        {
            id: 'feat1',
            src: 'featured-1.png',
            title: 'Black Blazer',
            price: '102.00'
        },
        {
            id: 'feat2',
            src: 'featured-2.png',
            title: 'Brown Jacket',
            price: '70.00'
        },
        {
            id: 'feat3',
            src: 'featured-3.png',
            title: 'White Pants',
            price: '45.00'
        },
        {
            id: 'feat4',
            src: 'featured-4.png',
            title: 'Striped Shirt',
            price: '80.00'
        },
        {
            id: 'feat5',
            src: 'featured-5.png',
            title: 'Leather Shoes',
            price: '60.00'
        },
        {
            id: 'feat6',
            src: 'featured-6.png',
            title: 'Silk Shirt',
            price: '100.00'
        },
    ]
    return (
        <section className='flex flex-col items-center mt-12 font-Outfit'>
            <p className='text-[1.5rem] md:text-[3rem] font-normal'>Featured</p>
            <div className="">
                <FeaturedList featList={featuredList} />
            </div>
            <Link href={'/featured'} className='my-16 font-light text-[1.5rem]'>
                View more
            </Link>
        </section>
    )
}

export default Featured

interface FeaturedListProps {
    featList: productType[]
}

const FeaturedList: React.FC<FeaturedListProps> = ({ featList }) => {
    // the data should be fetched from CMS
    return (
        <div className="product-carousel">
            {featList.map((product: productType) => {
                return (
                    <div key={product.id} className="flex flex-col cursor-pointer items-center">
                        <img src={product.src} alt={product.title} className='w-48 md:w-full relative rounded-xl' />
                        <p className='mt-6 font-medium text-[1.25rem] md:text-[1.75rem]'>{product.title}</p>
                        <p className='text-[1.25rem]'>${product.price}</p>
                        <Button className='font-normal mt-4 text-[1.25rem] md:text-[1.5rem]'>
                            Add to cart
                        </Button>
                    </div>
                )
            })}

        </div>
    )
}