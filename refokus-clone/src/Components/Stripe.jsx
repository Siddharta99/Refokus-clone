import React from 'react'

function Stripe({val, index}) {
  return (
    <div className='w-[16.66%] mt-20 flex justify-between items-center px-10 py-5 border-t-2 border-b-[1px] border-r-[1.2px] border-zinc-700'>
        <img key={index} src={val.url} alt=''/>
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe