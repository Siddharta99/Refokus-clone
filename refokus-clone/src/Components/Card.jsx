// import React from 'react'
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding: "25px"}} className={` bg-zinc-600 p-5 rounded-xl ${width}  min-h-[30rem] flex flex-col justify-between`}>
        <div className="w-full">
        <div className="w-full flex justify-between items-center">
            <h3>one heading</h3>
            <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading.</h1>
        </div>
        <div className="down w-full mt-60">
        {
            start && (
            <>    
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">Start a project</h1>
            <button className="rounded-full py-2 px-5 mt-3 border-[1px] border-zinc-50">Contact Us</button>
            </>
            ) 
        }
            {para && (
            <p className="text-sm text-zinc-500 font-medium">Lorem6 ipsum dolor sit, consectetuer adipiscing 50 elit.</p>

            )}
        </div>
    </motion.div>
  )
}

export default Card