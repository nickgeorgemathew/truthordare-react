import { useState } from 'react'
import 'react-router-dom'

import './app.scss'

import Header from './Header'

import Random from './Random'
import Custom from './Custom'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Mainbody from './Mainbody'



  



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
  
  

  return (
    
    <div className='' >
      <Header/>
      <Mainbody/>
      <Custom/>
      {/* <Custom/> */}
      {/* <BrowserRouter>
    <Routes>
      <Route path="/"  component={<Cards/>}/>
      <Route path="/Custom" component={<Custom/>} />
      <Route path="/Random" component={<Random/>} />
    </Routes>
  </BrowserRouter>
      <Header/>
      <Link to='/'>
      Home
      </Link> */}
      
   
      
      
    </div>
  )
}

export default App
