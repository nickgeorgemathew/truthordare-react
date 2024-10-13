import React, { useState } from 'react'
import'./sidebar.scss'
import {motion} from 'framer-motion'
import { clipPath } from 'framer-motion/client'
const Sidebar=()=> {
    const[open,Setopen]=useState(false)
    const variants={
        open:{
          clipPath:"circle(30px at 50px 50px)"
        },
        closed:{
          clipPath:"circle(30px at 50px 50px)",
          transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
          }

        }
    }
  return (
    <motion.div className='sidebar' animate={open ? "open":"closed"}>
    <motion.div className="bg" variants=
    {variants}>
        Links
    </motion.div>
    <Togglebutton open={open} Setopen={Setopen}/>
    <Links/>


    </motion.div>
  )
}

export default sidebar