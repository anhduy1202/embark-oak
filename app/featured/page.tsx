"use client"
import React from 'react'
import FeaturedPage from '@/components/CategoryPage/FeaturedPage'
import useFetchData from '../hooks/useFetchData'

const FeaturedClothingPage = () => {
    const { banner, categories, isLoading, products: featuredProducts } = useFetchData({ url: "featured", categoryUrl: "featured", fetchBanner: true, fetchCategories: false })
    return (
        <FeaturedPage products={featuredProducts} banner={banner} />
    )
}

export default FeaturedClothingPage