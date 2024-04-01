import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-xl py-6 items-center border-b-[1px] border-zinc-700 justify-between flex mx-auto '>
        <div className='nleft flex items-center'><img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg' alt=''/>
        <div className='links flex gap-14 ml-20'>
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>(
                elem.length === 0 ? <span key={index} className='w-[2px] h-7 bg-zinc-800'></span> : (<a key={index} className='font-regular text-sm flex items-center gap-1' href='#'>
            {index === 1 ? (<span key={index} style={{boxShadow: "0 0 0.45em #00ff19"}} className='inline-block w-1 rounded-full h-1 bg-green-500'></span>): null}{elem}</a>)
             ))}
        </div></div>
        <Button/>
    </div>
  )
}

export default Navbar