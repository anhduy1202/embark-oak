import { LabelCardType } from '@/lib/interface'
import React from 'react'
import { LabelCard } from '../CustomCard/CustomCard'

const BlogFeatured = () => {
    const blogs: LabelCardType[] = [
        {
            id: 'blog1',
            title: 'Latest fashion trend in 2024',
            url: '/blog1',
            imgSrc: '/blog1.png'
        },
        {
            id: 'blog2',
            title: '2023 Archived Collection',
            url: '/blog2',
            imgSrc: '/blog2.png'
        },
    ]
    return (
        <section className='flex flex-col justify-center items-center mt-12 font-Outfit'>
            <p className='text-[1.5rem] md:text-[3rem] font-normal'>Blogs</p>
            <p className='text-[0.75rem] md:text-[1.5rem] font-extralight'>Check out latest fashion blogs from us</p>
            <div className="mt-12 flex flex-col md:flex-row gap-12 justify-center">
                {blogs.map((blog: LabelCardType) => {
                    return (
                        <LabelCard custom='bottom-8' category={blog} customImage='md:w-[420px]' customText="text-center md:text-start text-[1.25rem] md:text-[1.5rem] mb-4" customBtn='w-16' btnLabel='Read it' />
                    )
                })}
            </div>
        </section>

    )
}

export default BlogFeatured