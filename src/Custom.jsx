import React from 'react'
import { useState } from 'react'
import {animate, motion} from 'framer-motion'
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





function Custom() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  
  
  
  const custom_cards = card_array.map((item, index) => {

    const flipCard = {
      hidden: { rotateY: 0 },
      visible: { rotateY: 180 },
    };
    return (<motion.div
      className="flip-card"
      onClick={() => setIsFlipped(!isFlipped)}
      animate={isFlipped ? "visible" : "hidden"}
      transition={{ duration: 2 }}
      key={index}
    >
      <motion.div
        className="flip-card-inner"
        variants={flipCard}
        animate={isFlipped ? "visible" : "hidden"}
      >
        <motion.div className="flip-card-front">
          {/* front content */}
          <h2>Front</h2>
        </motion.div>
        <motion.div className="flip-card-back">
          {/* back content */}
          <h2>Back</h2>
          <p>This is the back content.</p>
        </motion.div>
      </motion.div>
    </motion.div>)
  })
 
      
        
 

const inputanimation={
  initial:{x:100,scale:5},
}
return (
  
  <div className='flex justify-center items-center h-screen w-screen flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
    <span><motion.input type='text'>
     </motion.input></span>

  {custom_cards}  
  </div>


)
}

export default Custom