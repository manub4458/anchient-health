import React from 'react'

const Header = () => {
  return (
   <>
   <div className='w-full h-[73.5px] flex justify-between items-center px-[42.5px]'>
    <div className='flex'>
        <div className='w-[75px] h-[64.5px]'>
        <img src="/images/logo.webp" alt="" 
         className='w-[45px] h-[49.5px]'
        />
        </div>
        <div className='w-[229px] h-[42px] flex justify-around items-center pt-4'>
        <li className='hover:underline'>Shop</li>
        <li className='hover:underline'>Our Story</li>
        <li className='hover:underline'>Blogs</li>
        </div>
    </div>

    <div className='flex pt-4'>
      <div className='w-[44px] h-[44px]'>
         <img src="/images/search.png" alt="" 
         className='w-[20px] h-[20px]'
         />
      </div>
      <div className='w-[44px] h-[44px]'>
         <img src="/images/user.png" alt="" 
         className='w-[20px] h-[20px]'
         />
      </div>
      <div className='w-[44px] h-[44px]'>
         <img src="/images/bag.png" alt="" 
         className='w-[20px] h-[20px]'
         />
      </div>
    </div>
   </div>
   
   </>
  )
}

export default Header