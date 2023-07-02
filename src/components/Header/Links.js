import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className="text-xl flex justify-center" >
      <Link to='/about'>
         About
      </Link>
    </div>
  )
}

export default Links
