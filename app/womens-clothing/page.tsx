'use client'
import WomenClothingPage from '@/components/CategoryPage/WomenClothingPage'
import React from 'react'
import Loading from '@/components/Button/Loading'
import useFetchData from '../hooks/useFetchData'

const WomensClothingPage = () => {
    const { banner, categories, isLoading, products: womenProducts } = useFetchData({ url: "womens-clothing", categoryUrl: "womens-clothing", fetchBanner: true, fetchCategories: false })
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