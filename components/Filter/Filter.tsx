import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Filter = () => {
    const filterOptions = [
        {
            id: 'r1',
            value: 'all',
            title: 'All'
        },
        {
            id: 'r2',
            value: 'top',
            title: 'Top'
        },
        {
            id: 'r3',
            value: 'bottom',
            title: 'Bottom'
        }
    ]
    return (
        <div className='flex flex-col'>
            <RadioGroup className='ml-6 mt-12 h-[40px] text-[1.25rem]' defaultValue="all">
                <p className='text-[1.5rem] font-semibold'>Filter by:</p>
                {filterOptions.map((option) => {
                    return (
                        <div key={option.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={option.id} />
                            <p>{option.title}</p>
                        </div>
                    )
                })}
            </RadioGroup>
        </div>
    )
}

export default Filter