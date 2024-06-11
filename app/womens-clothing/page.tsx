'use client'
import React from 'react'
import Loading from '@/components/Button/Loading'
import useFetchData from '../hooks/useFetchData'
import CategoryPage from '@/components/CategoryPage/CategoryPage'

const WomensClothingPage = () => {
    const { banner, categories, isLoading, products: womenProducts } = useFetchData({ url: "womens-clothing", categoryUrl: "womens-clothing", fetchBanner: true, fetchCategories: false })
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <CategoryPage products={womenProducts} banner={banner}/>
            )}
        </>
    )
}

export default WomensClothingPage