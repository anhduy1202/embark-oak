'use client'
import { getProductbyID } from '@/app/action'
import ProductPage from '@/components/ProductPage/page'
import { productType } from '@/lib/interface'
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: { id: string } }) => {
    const [product, setProduct] = useState<productType>()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getProduct = async (id: string) => {
            setLoading(true)
            const data = await getProductbyID(parseInt(id))
            setProduct(data[0])
            setLoading(false)
        }
        getProduct(params.id)
    }, [params.id])
    return (
        <>
            {!loading && product && (
                <ProductPage product={product} productId={params.id} />
            )}
        </>
    )
}

export default page