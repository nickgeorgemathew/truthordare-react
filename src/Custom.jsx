import React, { useRef } from 'react'
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

let dare=[]
let truth=[]


export default function Custom() {
  const input_truth=useRef()
  const input_dare=useRef()
  
  // dare push to list function
   function input_handle_dare(params) {
    if (dare.length<=5) {
      dare.push(input_dare.current.value)
      
    }
    else{
      alert("maximum dares entered")
    }
    
   }
  //  truth push to list function
   function input_handle_truth(params) {
    if (truth.length<=5) {
      truth.push(input_truth.current.value)
      
    }
    else{
      alert("maximum truths entered")
    }
    
   }
  
  // const [isFlipped, setIsFlipped] = useState(false);
 
  
  // card generation
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
          <button>
            


          </button>
        </motion.div>
      </motion.div>
    </motion.div>)
  })
 
      
        
 


return (
  
  <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:-10}} transition={{duration:1,stiffness:spring}}className='flex justify-center items-center h-screen w-screen flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
    <div className='grid grid-cols-1 gap-5'>
          {/* player dare input */}
        
          <div className='grid grid-cols-2 gap-2'>

          <motion.input
           ref={input_dare}
          
          
           type='text' placeholder='enter 5 dares'/>
          <button className=' border-spacing-1 border-4' 
          onClick={input_handle_dare}>
            sdf
          </button>
          </div>
          {/* player truth input */}
          <div className='grid grid-cols-2 gap-2'>
          <motion.input 
          ref={input_truth}
          
          type='text' placeholder='enter player names' />
          <button className=' border-spacing-1 border-4'
           onClick={input_handle_truth}>
            sdf
          </button>
            </div>
          
          
            

        </div>
  

  {custom_cards}  
  </motion.div>


)
}

