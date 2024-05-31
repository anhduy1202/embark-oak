import React from 'react'
import { LabelCard } from '../CustomCard/CustomCard'
import { CategoriesBannerDataType, LabelCardType } from '@/lib/interface'

interface CategoriesProps {
    categoriesData: CategoriesBannerDataType[]
}

const Categories:React.FC<CategoriesProps> = ({categoriesData}) => {
    // fetch from CMS
    return (
        <section className='flex justify-center flex-col md:flex-row gap-4 items-center mt-6'>
            {categoriesData.map((category: any) => {
                return (
                    <LabelCard customText="text-[2rem]" category={category} btnLabel='View Details' custom='' />
                )
            })}
        </section>
    )
}

export default Categories