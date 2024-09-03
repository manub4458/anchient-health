
"use client"
import React, { useState } from 'react'

const Limited = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prevCount => prevCount < 10 ? prevCount + 1 : 10);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };
    return (
        <>
            <div className='w-full h-[713px] flex justify-evenly items-center'>
                <div>
                    <img src="/images/limited-offers.webp" alt=""
                        className='w-[603px] h-[626.14px]'
                    />
                </div>
                <div className='space-y-4 h-[551px]'>
                    <h4 className='text-base font-normal underline'>
                        LIMITED OFFER
                    </h4>
                    <h2 className='text-2xl font-bold'>
                        Anti HairFall Biotin Hemp Shampoo - 200ml
                    </h2>
                    <div className='flex gap-x-5'>
                        <s>Rs. 449.00</s>
                        <p>
                            Rs.429.00
                        </p>
                        <button className='bg-[#C5F98F] w-[55.03px] h-[25px] rounded-[10px] text-xs'>
                            Sale
                        </button>
                    </div>
                    <p className='w-[591.06px] h-[137.19px] text-base leading-[28.8px]'>
                        Experience the ultimate hair transformation with our Sulphate-FREE
                        Hemp Biotin Shampoo! Specifically crafted to combat hair fall and
                        thinning, this mild yet powerful formula harnesses the wisdom of
                        Ayurveda to rejuvenate your locks. Elevate your hair care routine with the
                        best shampoo for thicker, fuller, and healthier hair!
                    </p>
                    <p className='text-[13px]'>
                        Quantity
                    </p>
                    <div className="flex items-center justify-center border border-black w-[142px] rounded-3xl">
                        <button
                            onClick={decrement}
                            className="px-4 py-2 cursor-pointer"
                        >
                            -
                        </button>
                        <div className="px-6 py-2 ">
                            {count}
                        </div>
                        <button
                            onClick={increment}
                            className="px-4 py-2 cursor-pointer "
                        >
                            +
                        </button>
                    </div>
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
                    <p className='text-sm'>
                        View full details -&gt;
                    </p>
                </div>
            </div>
        </>
    )
}

export default Limited