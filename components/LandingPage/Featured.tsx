import { productType } from '@/lib/interface'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import AddToCartBtn from '../Button/AddToCartBtn'
import { Card, CardContent } from '../ui/card'
import { ProductCard } from '../CustomCard/CustomCard'
import Products from '@/lib/products.json';

const Featured = () => {
    const featuredList: productType[] = Products.filter((product) => product.categories.includes("featured"));
    return (
        <section className='flex flex-col items-center mt-12 font-Outfit'>
            <p className='text-[1.5rem] md:text-[3rem] font-normal'>Featured</p>
            <div className="">
                <FeaturedList featList={featuredList} />
            </div>
            <Link href={'/featured'} className='my-16 font-light text-[1.5rem]'>
                Shop more
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
        <>
            <div className="product-carousel">
                {featList.map((product: productType) => {
                    return (
                        <ProductCard product={product} />
                    )
                })}
            </div>
            <Carousel className="md:hidden mt-6 max-w-[16rem]">
                <CarouselContent>
                    {Array.from(featList).map((product: productType, index) => (
                        <CarouselItem key={product.id}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                        <Link target="_blank" href={`/product/${product.id}`}>
                                            <img src={product.src} alt={product.title} className='w-full relative rounded-xl' />
                                            <p className='mt-6 font-medium text-[1.25rem] md:text-[1.75rem]'>{product.title}</p>
                                            <p className='text-[1.25rem]'>${product.price}</p>
                                            <AddToCartBtn />
                                        </Link>
                                    </CardContent>

                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}