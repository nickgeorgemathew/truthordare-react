import { useState } from 'react'
import 'react-router-dom'

import './app.scss'

import Header from './Header'

import Random from './Random'
import Custom from './Custom'
import { BrowserRouter as Routers, Link, Route, Routes,createBrowserRouter } from 'react-router-dom';
import Mainbody, { players } from './Mainbody'



  



function App() {
  
 

  // function displayCard(item) {
  //   setDisplay("Card")
    
  // }
  // function displayCustom(item) {
  //   setDisplay("custom")
    
  // }
  // function displayRandom(item) {
  //   setDisplay("Random")
    
  // }
  
  <Routers>
  <Routes>
    
     
      <Route path="/"  element={<Mainbody/>}/>
      <Route path="/Custom" element={<Custom/>} />
      <Route path="/Random" element={<Random/>} />
    </Routes>
    </Routers>
  
  

  return (

   
    <>
  
    <Header/>
    <Mainbody/>
    
    </>
     // <Route>

    // </Route>
    
    // // <div className=" " >
    // //   <Header/>
    // //   <Mainbody />
    // //   <Custom players={players}/>
    //   // {/* <Custom/> */}
    //   // {/* <BrowserRouter>
  // </BrowserRouter>
  //     <Header/>
  //     <Link to='/'>
  //     Home
  //     </Link> */}
      
   
      
      
  //   </div>
  )
}

export default App
