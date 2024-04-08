import React from 'react'
import { LabelCard } from '../CustomCard/CustomCard'
import { LabelCardType } from '@/lib/interface'

const Categories = () => {
    const categories: LabelCardType[] = [
        {
            id: 'cat1',
            title: 'MAN',
            imgSrc: '/category-men.png',
            url: '/mens-clothing'
        },
        {
            id: 'cat2',
            title: 'WOMAN',
            imgSrc: '/category-women.png',
            url: '/womens-clothing'
        },
        {
            id: 'cat3',
            title: 'FEATURED',
            imgSrc: '/category-feat.png',
            url: '/featured'
        },
    ]
    return (
        <section className='flex justify-center flex-col md:flex-row gap-4 items-center mt-6'>
            {categories.map((category) => {
                return (
                    <LabelCard customText="text-[2rem]" category={category} btnLabel='View Details' custom='' />
                )
            })}
        </section>
    )
}

export default Categories