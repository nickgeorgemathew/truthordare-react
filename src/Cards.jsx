import {animate, motion} from 'framer-motion'

import React from 'react'
import Random from './Random.jsx'

import { transform } from 'framer-motion'
import { Link } from 'react-router-dom';

// const Navigation = () => (
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/Custom">About</Link></li>
//       <li><Link to="/Random">Contact</Link></li>
//     </ul>
//   </nav>
// );
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
     }
]
// const router = createBrowserRouter([
//   {
//   path: "/Custom",
//   element: <Custom />,
//   },
//   {
//   path: "/Random",
//   element: <Random/>,
//   },
  
// ],);

 function Cards() {
//    function card_value(value){
//     if(value=="custom"){
      


//    }
//    else{
    
    

//    }
  
//   }

    
     
    const cards = card_array.map((item, index) => {
      return (
        <motion.div
     
        initial={{visibility:0}}
        animate={{rotateY:360}}
        transition={{duration:5,ease:"easeOut"}}
        key={index} className='shadow-md p-4 bg-white rounded-lg text-black h-[450px] w-[350px] box-border border-black border-8 flex flex-col items-center justify-center ' >
          
            <h1>{item.title}</h1>
            <span>
              {item.description}
            </span>
            
            
              <button className='box-border border-black border-8 p-2' onClick={()=>{card_value(item.value)
             
            }}>
             {/* <Navigation/> */}
              </button>
                

            


        </motion.div>

      );
    });
        
    

  return (
   <div className=''>
    <div className='flex justify-center items-center h-screen w-screen flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
        {cards}
        </div>
   </div>
    
    
  )
}


export default Cards