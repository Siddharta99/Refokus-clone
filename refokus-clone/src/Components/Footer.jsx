import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl py-10 mx-auto flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-9xl font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-5'>
                <div className='basis-1/3'>
                    <h1 className='mb-10 text-zinc-500 capitalize'>socials</h1>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item, index)=> <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h1 className='mb-10 text-zinc-500 capitalize'>socials</h1>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item, index)=> <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
                </div>
                <div className='basis-1/2'>
                    <p>Refokus is pioneering digital agency driven by design and empowered by technology</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer