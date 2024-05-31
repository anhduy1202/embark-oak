"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { BannerDataType } from '@/lib/interface'

interface HeroProps {
    bannerData: BannerDataType
}
const Hero: React.FC<HeroProps> = ({ bannerData }) => {
    // Hero catalog: main picture, label, url
    return (
        <div className="font-DMSans relative items-center flex flex-col mt-12">
            {/* this should fetch from CMS */}
            <img width={920} height={920} src={bannerData.image} alt="Hero banner" className='w-full rounded-xl' />
            <div className="absolute top-[40%] text-white flex flex-col items-center">
                <p className='md:text-[6rem] text-[1.75rem] font-light text-center'>{bannerData.title}</p>
                <Link href={"/mens-clothing"}>
                    <Button variant={'secondary'} className='h-6 mt-2 md:h-10 md:text-[1.5rem] md:mt-4  md:p-4 font-light'>
                        Buy Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero