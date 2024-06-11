"use client"
import React from 'react'
import MenClothingPage from '@/components/CategoryPage/MenClothingPage';
import Loading from '@/components/Button/Loading';
import useFetchData from '../hooks/useFetchData';

const MenClothing = () => {
    const { banner, categories, isLoading, products: menProducts } = useFetchData({ url: "mens-clothing", categoryUrl: "mens-clothing", fetchBanner: true, fetchCategories: false })
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