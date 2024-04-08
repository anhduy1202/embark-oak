import React from 'react'
import { LabelCard } from '../CustomCard/CustomCard'
import { LabelCardType } from '@/lib/interface'

const Categories = () => {
    const categories: LabelCardType[] = [
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
                    <LabelCard category={category} btnLabel='View Details' custom='' />
                )
            })}
        </section>
    )
}

export default Categories