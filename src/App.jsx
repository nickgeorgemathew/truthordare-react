import { useState } from 'react'
import 'react-router-dom'

import './app.scss'
import Cards from './Cards'
import Header from './Header'

import Random from './Random'
import Custom from './Custom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Cards}/>
      <Route path="/Custom" component={Custom} />
      <Route path="/Random" component={Random} />
    </Switch>
  </BrowserRouter>
);


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='' >
      <Header/>
      <Routes/>
      
    </div>
  )
}

export default App
