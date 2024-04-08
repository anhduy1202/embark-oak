import { LabelCardType, productType } from '@/lib/interface'
import React from 'react'
import AddToCartBtn from '../Button/AddToCartBtn'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

interface ProductProps {
    product: productType
    custom?: string
}

export const ProductCard: React.FC<ProductProps> = ({ product, custom }) => {
    return (
        <div key={product.id} className="flex flex-col cursor-pointer items-center">
            <img src={product.src} alt={product.title} className='w-48 md:w-full relative rounded-xl' />
            <p className='mt-6 font-medium text-[1.25rem] md:text-[1.75rem]'>{product.title}</p>
            <p className='text-[1.25rem]'>${product.price}</p>
            <AddToCartBtn />
        </div>
    )
}

interface LabelCardProps {
    category: LabelCardType
    custom?: string
    customImage?: string
    customText?: string
    customBtn?: string
    btnLabel: string
}

export const LabelCard: React.FC<LabelCardProps> = ({ category, customImage, customText, customBtn, custom, btnLabel }) => {
    return (
        <div key={category.id} className="relative">
            <Link href={category.url} target='_blank'>
                <Image src={category.imgSrc} width={200} height={240} alt="Category item" className={`rounded-xl md:w-full object-fit ${customImage}`} />
                <div className={`font-DMSans flex flex-col md:items-start items-center absolute bottom-12 left-[50%] md:left-12 md:translate-x-0 translate-x-[-50%] text-white ${custom}`}>
                    <p className={`text-[2rem] md:text-[3rem] font-semibold ${customText}`}>{category.title}</p>
                    <Button variant={'secondary'} className={`w-24 md:w-36 ${customBtn}`}>{btnLabel} </Button>
                </div>
            </Link>
        </div>
    )
}