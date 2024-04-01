// import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full text-white py-20  h-[23rem]'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize p-20 font-medium '>{val.title}</h1>
            <div className='dets w-1/5'>
                <p className=' text-white mb-10'>{val.description}</p>
                <div className='flex items-center gap-2 '>
                {val.live && <Button />}
                {val.case && <Button title='Case Study' />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product