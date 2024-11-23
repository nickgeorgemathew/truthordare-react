import React from 'react'
import { useState,useRef } from 'react'
import {animate, motion, spring} from 'framer-motion'
import { transform } from 'framer-motion'

import { textPath } from 'framer-motion/client'




const choice_card_array=[
  
  {
   title:"Custom",
   description:" custom truth and dare questions can be entered and one will be randomly selected ",
   value:"Custom"
  },
  {
      title:"random",
      description:" random pre built questions will be asked for truth and dare",
      value:"Random"
     }
    
]

let players=[]


function Mainbody() {
  const input_ref=useRef('')
  function input_handle_player_name(params) {
    players.push(input_ref.current.value)
    alert(players);
    // players.pop();
  
    
  }
  function input_handle_number(params) {
    
  }
  

  const choicecards = choice_card_array.map((item, index) => {

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
                          // main body
  return (
    // main duv
    <div className='items-center justify-center gap-2 flex flex-col text-black'>
        
        {/* player count and name input */}
        
        <div className='grid grid-cols-1 gap-5'>
          {/* player number input */}
        
          <div className='grid grid-cols-2 gap-2'>

          <motion.input type='number'  max={5} min={1}  placeholder='enter number of players'/>
          <button className=' border-spacing-1 border-4' onClick={input_handle_number()}>
            sdf
          </button>
          </div>
          {/* player name input */}
          <div className='grid grid-cols-2 gap-2'>
          <motion.input 
          ref={input_ref}
          
          type='text' placeholder='enter player names' />
          <button className=' border-spacing-1 border-4' onClick={input_handle_player_name}>
            sdf
          </button>
            </div>
          
          
            

        </div>
        
        Mainbody
        {/* cards displayed */}
        
        <div className='items-center justify-center gap-2 flex flex-row'>

        
      {choicecards}

        </div>
        
        </div>
        
  )
}

export default Mainbody