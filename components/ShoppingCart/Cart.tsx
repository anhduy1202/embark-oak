'use client'
import React, { useEffect } from 'react'
import { BsHandbag } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useShoppingCart } from 'use-shopping-cart';
import { Separator } from '../ui/separator';

interface CartProps {
    size?: number
}

const Cart: React.FC<CartProps> = ({ size = 36 }) => {
    const { handleCartClick } = useShoppingCart();
    return (
        <BsHandbag onClick={() => handleCartClick()} size={size} className='cursor-pointer col-start-3 justify-self-end' />
    )
}

export const CartModal = () => {
    const { cartCount, shouldDisplayCart, cartDetails, handleCartClick, removeItem } = useShoppingCart();
    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="mt-12">
                    {cartCount === 0 ? (
                        <div className="">
                            <p>Cart is empty!</p>
                        </div>
                    ) : (
                        <>
                            {Object.values(cartDetails ?? {}).map((item) => {
                                return (
                                    <>
                                        <div className="flex gap-4">
                                            <img src={item.image} alt="Product image" className='w-32 h-32 object-cover' />
                                            <div className="flex flex-col items-start gap-4">
                                                <p className='font-semibold text-[1.25rem]'>{item.name}</p>
                                                <p className='font-bold text-[1.25rem]'>${item.price}</p>
                                                <Button className='p-1' onClick={() => removeItem(item.id)}>Remove</Button>
                                            </div>
                                        </div>
                                        <Separator className='my-4' />
                                    </>
                                )
                            })}
                        </>
                    )}
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default Cart