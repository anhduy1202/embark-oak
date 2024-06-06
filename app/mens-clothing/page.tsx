"use client"
import React, { useEffect, useState } from 'react'
import MenClothingPage from '@/components/CategoryPage/MenClothingPage';
import { productType } from '@/lib/interface';
import { getProductsByCategory } from '../action';

const MenClothing = () => {
    const [menProducts, setProducts] = useState<productType[]>([])
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true)
            const products = await getProductsByCategory("man")
            setProducts(products)
            setLoading(false)
        }
        getProducts()
    },[])
    return (
        <MenClothingPage products={menProducts}/>
    )
}

export default MenClothing