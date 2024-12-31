import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  return (
    <div>Header
      <button onClick={()=>navigate('/')} >ghfhgfhgf</button>
      </div>
  )
}

export default Header