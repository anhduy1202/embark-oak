import React from 'react'
import { BsHandbag } from "react-icons/bs";

interface CartProps {
    size?: number
}

const Cart: React.FC<CartProps> = ({size = 36}) => {
    return (
        <BsHandbag size={size} className='col-start-3 justify-self-end' />
    )
}

export default Cart