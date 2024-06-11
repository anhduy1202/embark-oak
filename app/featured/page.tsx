"use client"
import React from 'react'
import useFetchData from '../hooks/useFetchData'
import CategoryPage from '@/components/CategoryPage/CategoryPage'

const FeaturedClothingPage = () => {
    const { banner, categories, isLoading, products: featuredProducts } = useFetchData({ url: "featured", categoryUrl: "featured", fetchBanner: true, fetchCategories: false })
    return (
        <CategoryPage products={featuredProducts} banner={banner} />
    )
}

export default FeaturedClothingPage