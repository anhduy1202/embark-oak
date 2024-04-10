"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { productType } from '@/lib/interface'
import Products from '@/lib/products.json';
import { Card, CardContent } from '../ui/card';

interface ProductPageProps {
    productId: string
}
const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
    const productDetail: productType[] = Products.filter((product) => product.id == productId);
    return (
        <div className="grid md:grid-cols-4 grid-col-1 items-center">
            <ProductCarousel product={productDetail[0]} />
            <p className='md:text-[2rem] col-start-4'>{productDetail[0].title}</p>
        </div>
    )
}

interface CarouselProps {
    product: productType
}
const ProductCarousel: React.FC<CarouselProps> = ({ product }) => {
    console.log(product.images)
    return (
        <Carousel className="mt-6 w-[480px] col-start-1">
            <CarouselContent>
                {product.images.map((imgUrl: string) => (
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                    <img src={imgUrl} alt={"Product detail"} className='md:h-[480px] relative rounded-xl' />
                                </CardContent>

                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ProductPage