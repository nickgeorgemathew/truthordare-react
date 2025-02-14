import React from 'react'
import {motion} from 'framer-motion'

const variants={
  open:{
    transition:{
      staggeredChildren:0.1,
     },
  },
   
   closed:{
   transition:{
    staggerChildren:0.05,
    staggerDirection:-1,
   },
  },
};
const itemvariants={
  open:{
    y:0,
    opacity:1,
  },
   
   closed:{
   y:50,
   opacity:0,
  },
};

export const Links = () => {
  const items=[
    "homepage",
    "services",
    "portfolio",
    "contact",
    "about"
];
  return (
    <div className='links'>items.map{item=>{
      <motion.a href={`#${item}`} key={item} variants={itemvariants}
       whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}>
        {item}
      </motion.a>
    }}</div>
  )
}
