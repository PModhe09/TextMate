import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Link to='/about'>
         About
      </Link>
    </div>
  )
}

export default Links
