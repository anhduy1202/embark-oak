"use client"
import React, { useEffect, useState } from 'react'
import MenClothingPage from '@/components/CategoryPage/MenClothingPage';
import { productType } from '@/lib/interface';
import { getProductsByCategory } from '../action';
import Loading from '@/components/Button/Loading';

const MenClothing = () => {
    const [menProducts, setProducts] = useState<productType[]>([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const products = await getProductsByCategory("forman")
            setProducts(products)
            setLoading(false)
        }
        getProducts()
    }, [])
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <MenClothingPage products={menProducts} />
            )}
        </>
    )
}

export default MenClothing