"use client"
import React from 'react'
import useFetchData from '../hooks/useFetchData'
import CategoryPage from '@/components/CategoryPage/CategoryPage'
import Loading from '@/components/Button/Loading'

const FeaturedClothingPage = () => {
    const { banner, categories, isLoading, products: featuredProducts } = useFetchData({ url: "featured", categoryUrl: "featured", fetchBanner: true, fetchCategories: false })
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <CategoryPage products={featuredProducts} banner={banner} />
                </div>
            )}
        </>
    )
}

export default FeaturedClothingPage