import React from 'react'

const ProductCard = ({ image, product_info, original_price, discounted_price }) => {
    return (
        <>
            <div className='w-[316px] h-[553.41px] flex flex-col justify-center items-center space-y-3'>
                <img src={image} alt=""
                    className='w-[296.5px] h-[375.62px]'
                />
                <p className='w-[307.68px] h-[33.89px] font-bold text-[13px] leading-4 text-center'>
                    {product_info}
                </p>
                <div className='gap-x-4 flex text-center'>
                    <s>{original_price}</s>
                    <p>
                        {discounted_price}
                    </p>
                </div>
                <button
                    className='w-[316.5px] h-[49px] rounded-[22px] border-[3px] border-[#62CC18] text-[#62CC18]'
                >
                    Add to cart
                </button>

            </div>

        </>
    )
}

export default ProductCard