"use client"
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { productType } from '@/lib/interface'
import Products from '@/lib/products.json';
import { Card, CardContent } from '../ui/card';
import AddToCartBtn from '../Button/AddToCartBtn';

interface ProductPageProps {
    productId: string
}
const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
    const productDetail: productType[] = Products.filter((product) => product.id == productId);
    const [selectedIdx, setIndex] = useState(0)
    return (
        <div className="mt-12 grid md:grid-cols-6 grid-col-1 text-center items-center">
            <div className="md:col-start-2 md:col-span-3 flex flex-col items-center">
                <ProductCarousel product={productDetail[0]} setIndex={setIndex} selectedIdx={selectedIdx} />
                <ProductPreview product={productDetail[0]} setIndex={setIndex} selectedIdx={selectedIdx} />
            </div>
            <div className='mt-12 text-[1.5rem] md:text-[2rem] md:col-start-6'>
                <p className='font-semibold'>{productDetail[0].title}</p>
                <p className='text-[1.25rem]'>${productDetail[0].price}</p>
                <AddToCartBtn />
            </div>
        </div >
    )
}

interface CarouselProps {
    product: productType
    setIndex: React.Dispatch<React.SetStateAction<number>>
    selectedIdx: number
}
const ProductCarousel: React.FC<CarouselProps> = ({ product, setIndex, selectedIdx }) => {
    const previousClick = () => {
        if (selectedIdx > 0) {
            setIndex((prev) => prev - 1)
        }
    }
    const nextClick = () => {
        if (selectedIdx < product.images.length - 1) {
            setIndex((prev) => prev + 1)
        }
    }
    return (
        <Carousel className="mt-6 w-[320px] md:w-[480px]">
            <CarouselContent>
                {product.images.map((imgUrl: string) => (
                    <CarouselItem key={`product-${imgUrl}`}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                    <img src={imgUrl} alt={"Product detail"} className='h-[320px] md:h-[480px] relative rounded-xl' />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="" onClick={previousClick}>
                <CarouselPrevious />
            </div>
            <div className="" onClick={nextClick}>
                <CarouselNext />
            </div>
        </Carousel>
    )
}

const ProductPreview: React.FC<CarouselProps> = ({ product, setIndex, selectedIdx }) => {
    return (
        <div className="mt-8 flex">
            {product.images.map((imgUrl: string, idx: number) => {
                return (
                    <div key={`preview-${imgUrl}`} className="">
                        <img src={imgUrl} alt={"Product preview"} className={`${idx == selectedIdx ? 'blur-none' : 'blur-sm'} object-contain w-[120px] h-[120px] md:w-[200px] md:h-[200px] relative rounded-xl`} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage