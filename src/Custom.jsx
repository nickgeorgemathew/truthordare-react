import React from 'react'
import { useState } from 'react'
import {animate, motion, spring} from 'framer-motion'
import { transform } from 'framer-motion'
import './Custom.css'
import { textPath } from 'framer-motion/client'
const card_array=[
  {
   title:"Custom",
   description:" custom truth and dare questions can be entered and one will be randomly selected ",
   value:"Custom"
  },
  {
      title:"random",
      description:" random pre built questions will be asked for truth and dare",
      value:"Random"
     },
     {
      title:"random",
      description:" random pre built questions will be asked for truth and dare",
      value:"Random"
     }
     ,{
      title:"random",
      description:" random pre built questions will be asked for truth and dare",
      value:"Random"
     }
]





export default function Custom() {
  let flipping =0
  let flip
  
  // const [isFlipped, setIsFlipped] = useState(false);
  const animate_open=()=>({
    animate:{rotateY:180}

  })
  const animate_close=()=>({
    animate:{rotateY:0}

  })
  const getAnimationProps = () => {
    
    return(
      {...animate_open}
    )
    
      };
      const getAnimationProps2 = () => {
    
        return(
          {...animate_close}
        )
        
          };
  
  
  
  
  const custom_cards = card_array.map((item, index) => {

    const flipCard = {
      hidden: { rotateY: 0 },
      visible: { rotateY: 180 },
    };
    return (<motion.div
      className="flip-card"
      whileTap="visible"
      
      
      transition={{ duration: 1 }}
      key={index}
    >
      <motion.div
        className="flip-card-inner"
        variants={flipCard}
        whileTap="visible"
        
        
      >
        <motion.div className="flip-card-front">
          {/* front content */}
          <h2>Front</h2>
          
        </motion.div>
        <motion.div className="flip-card-back">
          {/* back content */}
          <h2>Back</h2>
          <p>{item.description}</p>
        </motion.div>
      </motion.div>
    </motion.div>)
  })
 
      
        
 

const inputanimation={
  initial:{x:100,scale:5},
}
return (
  
  <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:-10}} transition={{duration:1,stiffness:spring}}className='flex justify-center items-center h-screen w-screen flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
    <span><motion.input type='text'>
     </motion.input></span>

  {custom_cards}  
  </motion.div>


)
}

