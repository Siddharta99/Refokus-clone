import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion";

function Products() {
    var products = [
        {title: "arqitel", 
        description:
         "Arqu Executive and its employees continue to receive orders for customers that get orders for customers that", 
        live: true, 
        case: false,},
        {title: "TTR", description: "Arqu Executive and its employees continue to receive orders for customers that get orders for customers that", live: true, case: false,},
        {title: "YIR 2022", description: "Arqu Executive and its employees continue to receive orders for customers that get orders for customers that", live: true, case: true,},
        {title: "Yahoo!", description: "Arqu Executive and its employees continue to receive orders for customers that get orders for customers that", live: true, case: true,},
    ];

    const [pos, setPos] = useState(0);
    const mover = (val) => {
      setPos(val*23);
    }
    
  return (
    <div className='mt-32 relative'>
        {products.map((val, index)=> <Product key={index} val={val} mover={mover} count={index}/>)}
        <div className='w-full h-full  absolute top-0 pointer-events-none'>
          <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .6}} className='window w-[32rem] h-[23rem] overflow-hidden  absolute  bg-white left-[46%] -translate-x-[50%]'>
          <motion.div animate = {{y: -pos +`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className=' w-full h-full  bg-sky-100'></motion.div>
          <motion.div animate = {{y: -pos +`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className=' w-full h-full  bg-sky-300'></motion.div>
          <motion.div animate = {{y: -pos +`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className=' w-full h-full  bg-sky-400'></motion.div>
          <motion.div animate = {{y: -pos +`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className=' w-full h-full  bg-sky-500'></motion.div>
          </motion.div>
        </div>
        
    </div>
  );
}

export default Products
