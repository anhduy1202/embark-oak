import React, { useState } from 'react'
import { Input } from '../ui/input';
import { CartDetailsType } from '@/lib/interface';
import { Button } from '../ui/button';
import { postFormData } from '@/app/action';

interface FormProps {
  formFields: any[]
  cartDetails: CartDetailsType[]
  total: number
}
const CheckOutPage: React.FC<FormProps> = ({ formFields, cartDetails, total }) => {
  const [contactDetails, setContactDetails] = useState({
    Name: "",
    Address: "",
    Email: ""
  })
  const submitOrder = async (e) => {
    e.preventDefault()

    const data = {
      name: contactDetails.Name,
      address: contactDetails.Address,
      email: contactDetails.Email
    }
    const body = {
      formIdentifier: 'order',
      formData: {
        marker: 'name',
        value: 'test',
      },
    }
    postFormData(body)
  }
  return (
    <section className='flex flex-col'>
      <p className='mt-12 text-[2rem] font-bold text-center'>Your Cart</p>
      <form className='mt-12 text-[1.5rem] flex flex-col gap-12' onSubmit={(e) => submitOrder(e)}>
        {formFields?.map((field => {
          return (
            <div className="flex flex-col gap-4">
              <p className='font-semibold'>{field}</p>
              <Input className='text-[1.5rem]' placeholder={field} onChange={(e) => setContactDetails(prevDetails => ({
                ...prevDetails,
                [field]: e.target.value
              }))} />
            </div>
          )
        }))}
        <p className='font-semibold'>Products</p>
        <div className="flex gap-12">
          {cartDetails.map((product) => {
            return (
              <div key={product.id} className="flex flex-col items-center gap-4">
                <img className='w-[200px] object-cover' src={product.image} alt="" />
                <p className='text-[1.25rem]'>{product.name}</p>
                <p className='text-[1.25rem] font-semibold'>Quantity: {product.quantity}</p>
              </div>
            )

          })}
        </div>
        <div className="text-[2rem] flex items-center gap-12">
          <p className='font-semibold'>Total:</p>
          <p className='font-bold'>${total}</p>
        </div>
        <Button type='submit' className='text-[2rem] p-6 self-center'>Submit</Button>
      </form>
    </section>
  )
}

export default CheckOutPage