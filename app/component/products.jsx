import React from 'react'
import ProductCard from './productCard'


const Products = () => {
    return (
        <>
            <div>
                <div className='w-full h-[92px] flex justify-center items-center'>
                    <h1 className='font-bold text-[40px]'>
                        MADE FROM 
                        <span
                         className='text-[#62CC18] px-3'
                        >AYURVEDA</span>
                    </h1>
                </div>
              <div className='w-full h-[692.41px]'>
              <div className='flex justify-around '>
                    <ProductCard
                        image='/images/limited-offers.webp'
                        product_info="Hemp Face Wash With Activated Bamboo Charcoal"
                        original_price="Rs.429.00"
                        discounted_price="Rs. 399.00"
                    />
                    <ProductCard
                        image='/images/limited-offers.webp'
                        product_info="Hemp Face Wash With Activated Bamboo Charcoal"
                        original_price="Rs.429.00"
                        discounted_price="Rs. 399.00"
                    />
                    <ProductCard
                        image='/images/limited-offers.webp'
                        product_info="Hemp Face Wash With Activated Bamboo Charcoal"
                        original_price="Rs.429.00"
                        discounted_price="Rs. 399.00"
                    />
                    <ProductCard
                        image='/images/limited-offers.webp'
                        product_info="Hemp Face Wash With Activated Bamboo Charcoal"
                        original_price="Rs.429.00"
                        discounted_price="Rs. 399.00"
                    />
                </div>
                <div className='flex justify-center my-2'>
                    <button className='w-[120px] h-[45px] bg-[#62CC18] text-[#ffffff] rounded-[20px]'>
                        View all
                    </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default Products