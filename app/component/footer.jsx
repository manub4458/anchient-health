import React from 'react'

const Footer = () => {
    return (
        <>

          <div className='w-full h-[451.72px] flex flex-col justify-center items-center'>
          <div className='w-full flex justify-evenly items-center'>
                <div>
                    <img src="/images/logo.webp" alt=""
                        className='w-[100px] h-[110px]'
                    />
                </div>
                <div className='space-y-4'>
                    <h4 className='w-[247.15px] h-[46.39px] text-lg font-bold'>
                        Join the revolution with
                        hemp
                    </h4>
                    <p className='w-[264px] text-[16px] leading-[28.8px] '>
                        We are India's first hemp based
                        mens grooming company. Shop
                        hemp face wash, hemp shampoo
                        and other products to join the
                        revolution!
                    </p>
                </div>
                <div className='w-[299px] h-[216.33px] space-y-4'>
                    <div>
                        <h2 className='font-bold text-lg'>
                            Quick links
                        </h2>
                    </div>

                    <div className='space-y-2 text-sm'>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Return Policy</li>
                        <li>Track shipment</li>
                        <li>Sitemap</li>
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='w-[288.26px] h-[108.39px]'>
                        <p className='font-normal text-base leading-[28.8px]'>
                            NATUREEXPERT AYURVEDIC PVT.
                            LTD. IP 2, Industrial Area, Salempur,
                            Mehdood-2,
                            Haridwar-249402, (UK) INDIA.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <p>
                            +91-9XXXXXXX
                        </p>
                        <p>
                            contact@ancienthealth.in
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[81.39px] flex justify-center items-end gap-x-4'>
             
                <li>© 2024, Ancient Health </li>
              
         
            </div>
          </div>
        </>
    )
}

export default Footer