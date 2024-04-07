import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    const categories = [
        {
            id: 'cat1',
            title: 'MAN',
            imgSrc: '/category-men.svg',
            url: '/mens-clothing'
        },
        {
            id: 'cat2',
            title: 'WOMAN',
            imgSrc: '/category-women.svg',
            url: '/womens-clothing'
        },
        {
            id: 'cat3',
            title: 'FEATURED',
            imgSrc: '/category-feat.svg',
            url: '/featured'
        },
    ]
    return (
        <section className='flex justify-center flex-col md:flex-row gap-4 items-center mt-6'>
            {categories.map((category) => {
                return (
                    <div key={category.id} className="relative">
                        <Link href={category.imgSrc}>
                            <Image src={category.imgSrc} width={200} height={240} alt="Category item" className='rounded-xl md:w-full' />
                            <div className="font-DMSans flex flex-col md:items-start items-center absolute bottom-12 left-[50%] md:left-12 md:translate-x-0 translate-x-[-50%] text-white">
                                <p className='text-[2rem] md:text-[3rem] font-semibold'>{category.title}</p>
                                <Button variant={'secondary'} className='w-24 md:w-36'>View details</Button>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}

export default Categories