
"use client"
import React, { useState } from 'react'

const Travel = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : 10);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };
    return (
        <>
        <div className='w-full h-[80px]'>
        <h1 className='font-bold text-[40px] leading-[52px] text-center'>
            TRAVEL PACK
        </h1>
        </div>
            <div className='w-full h-[645px] flex justify-evenly items-center bg-black text-[#ffffff]'>

                <div className='space-y-4 h-[551px]'>
                    <h4 className='text-base font-normal underline'>
                        MINI TRAVELS PACK
                    </h4>
                    <h2 className='text-2xl font-bold'>
                        Ultimate Mini Hemp Combo - 30ML
                    </h2>
                    <div className='flex gap-x-5'>
                        <s>Rs. 168.00</s>
                        <p>
                            Rs.99.00
                        </p>
                        <button className='bg-[#C5F98F] w-[55.03px] h-[25px] rounded-[10px] text-xs'>
                            Sale
                        </button>
                    </div>
                    <p className='w-[593.06px] h-[79.6px] text-base leading-[28.8px]'>
                        Hemp trial packs! If you have never tried any hemp related products, then
                        try it now!! This combo has hemp face wash as well as hemp shampoo for
                        men. Buy now and let it make you feel high.
                    </p>
                    
                   
                    <div className='flex flex-col space-y-3'>
                        <button
                            className='w-[440px] h-[49px] rounded-[22px] border-[3px] border-[#62CC18] text-[#62CC18]'
                        >
                            Add to cart
                        </button>
                        <button
                            className='w-[440px] h-[49px] rounded-[22px] bg-[#62CC18] text-[#ffffff]'
                        >
                            Buy it now
                        </button>
                    </div>
                    <p className='text-sm py-10'>
                        View full details -&gt;
                    </p>
                </div>
                <div>
                    <img src="/images/travel.png" alt=""
                        className='w-[603px] h-[557.08px]'
                    />
                </div>
            </div>
        </>
    )
}

export default Travel