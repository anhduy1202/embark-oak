"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    // Hero catalog: main picture, label, url
    return (
        <div className="font-DMSans relative items-center flex flex-col mt-12">
            {/* this should fetch from CMS */}
            <Image width={920} height={920} src="/banner.svg" alt="Hero banner" className='w-full' />
            <div className="absolute top-[40%] text-white flex flex-col items-center">
                <p className='md:text-[6rem] text-[1.75rem] font-light'>SP24 COLLECTION</p>
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