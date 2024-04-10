import ProductPage from '@/components/ProductPage/page'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    return (
        <ProductPage productId={params.id} />
    )
}

export default page