import React from 'react'
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
   <section className='notfound'>
    <div className='content'>
      <h1>404 not found</h1>
      <Link to={"/"} className='btn'>Back to home page</Link>
    </div>
   </section>
  )
}

export default NotFound