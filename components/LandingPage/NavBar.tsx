import Link from 'next/link'
import React from 'react'
import Cart from '../ShoppingCart/Cart'

const NavBar = () => {
    const navLinks = [
        {
            id: 'link1',
            title: 'Man',
            url: '/mens-clothing'
        },
        {
            id: 'link2',
            title: 'Woman',
            url: '/womens-clothing'
        },
        {
            id: 'link3',
            title: 'Featured',
            url: '/featured'
        },
        {
            id: 'link4',
            title: 'Blogs',
            url: '/blogs'
        }
    ]
    return (
        <nav className='grid grid-cols-3 gap-4 items-center'>
            <ul className='col-start-1 flex items-center gap-6 md:text-[1.25rem]'>
                {navLinks.map((link => {
                    return (
                        <Link key={link.id} href={link.url} className=''>
                            {link.title}
                        </Link>
                    )
                }))}
            </ul>
            <img src='/eao_logo.svg' alt='Logo' className='justify-self-center col-start-2 md:w-36i' />
            <Cart />
        </nav>
    )
}

export default NavBar;