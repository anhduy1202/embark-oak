"use client"
import CheckOutPage from '@/components/CheckOutPage/CheckOutPage';
import { useShoppingCart } from 'use-shopping-cart';
import React, { useCallback, useEffect, useState } from 'react'
import { getFormbyMarker, parseCartDetail } from '../action';
import { CartDetailsType } from '@/lib/interface';
import Loading from '@/components/Button/Loading';

const CheckoutPage = () => {
    const { cartDetails } = useShoppingCart();
    const [isLoading, setLoading] = useState(true)
    const [fields, setFormFields] = useState([])
    const [parsedCartDetail, setCartDetail] = useState<CartDetailsType[]>([])
    const [cartTotal, setTotal] = useState(0)
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const formFields = await getFormbyMarker("order")
            const { result, total } = await parseCartDetail(cartDetails)
            setFormFields(formFields)
            setCartDetail(result)
            setTotal(total)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        getData()
    }, [getData])

    useEffect(() => {
        const getOrderForm = async () => {
        }
        getOrderForm()
    }, [])
    return (
        <>
            {isLoading ? (
                <Loading />
            ) :
                (
                    <CheckOutPage cartDetails={parsedCartDetail} total={cartTotal} formFields={fields} />
                )
            }
        </>
    )
}

export default CheckoutPage 