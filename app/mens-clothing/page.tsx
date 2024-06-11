"use client"
import React from 'react'
import Loading from '@/components/Button/Loading';
import useFetchData from '../hooks/useFetchData';
import CategoryPage from '@/components/CategoryPage/CategoryPage';

const MenClothing = () => {
    const { banner, categories, isLoading, products: menProducts } = useFetchData({ url: "mens-clothing", categoryUrl: "mens-clothing", fetchBanner: true, fetchCategories: false })
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <CategoryPage products={menProducts} banner={banner} />
                </div>
            )}
        </>
    )
}

export default MenClothing