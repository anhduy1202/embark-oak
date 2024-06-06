'use client'
import WomenClothingPage from '@/components/CategoryPage/WomenClothingPage'
import { productType } from '@/lib/interface'
import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../action'
import Loading from '@/components/Button/Loading'

const WomensClothingPage = () => {
    const [womenProducts, setProducts] = useState<productType[]>([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const products = await getProductsByCategory("woman")
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
                <WomenClothingPage products={womenProducts} />
            )}
        </>
    )
}

export default WomensClothingPage