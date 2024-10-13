import { useState } from 'react'
import 'react-router-dom'

import './app.scss'
import Cards from './Cards'
import Header from './Header'
import { createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Random from './Random'
import Custom from './Custom'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className=''>
      <Header/>
      <Cards/>
      
    </div>
  )
}

export default App
