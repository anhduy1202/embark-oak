"use client"
import { MenuItemType } from '@/lib/interface'
import React, { useState } from 'react'
import Cart from '../ShoppingCart/Cart'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";
import { Separator } from '../ui/separator'
import { IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io";

interface MenuProps {
    links: MenuItemType[]
}

export const DesktopMenu: React.FC<MenuProps> = ({ links }) => {

    return (
        <>
            <ul className='col-start-1 flex items-center gap-6 md:text-[1.25rem]'>
                {links.map(((link: MenuItemType) => {
                    return (
                        <Link key={link.id} href={link.url} className=''>
                            {link.title}
                        </Link>
                    )
                }))}
            </ul>
            <Link href="/">
                <img src='/eao_logo.svg' alt='Logo' className='object-fit justify-self-center col-start-2 md:w-36' />
            </Link>
            <Cart />
        </>
    )
}

export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
    const [isOpened, setOpen] = useState<boolean>(false)
    return (
        <>
            <ul>
                {isOpened ? (
                    <div className="overlay">
                        <div className={`p-8 fixed overflow-hidden left-0 top-0 w-[80%] h-screen z-[10] flex flex-col text-[1.5rem] bg-white text-black`}>
                            {links.map(((link: MenuItemType) => {
                                return (
                                    <>
                                        <li key={link.id} className="flex items-center justify-between">
                                            <Link href={link.url} className=''>
                                                {link.title}
                                            </Link>
                                            <IoIosArrowForward />
                                        </li>
                                        <Separator className='my-2' />
                                    </>
                                )
                            }))}
                        </div>
                        <IoIosCloseCircleOutline onClick={() => setOpen(false)} size={48} color="white" className='cursor-pointer fixed top-4 right-4' />
                    </div>
                ) : (
                    <AiOutlineMenu onClick={() => setOpen(true)} className='cursor-pointer' size={24} />
                )}
            </ul>
            <Link href={"/"}>
                <img src='/eao_logo.svg' alt='Logo' className='object-fit justify-self-center col-start-2 w-24 md:w-36' />
            </Link>
            <Cart size={24} />
        </>
    )
}
