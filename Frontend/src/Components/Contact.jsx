import React, { useState } from 'react'

const Contact = () => {
  const [name, setname]=useState();
  const [email, setemail]=useState();
  const [phone, setphone]=useState();
  const [message, setmessage]=useState();

  const handlesendmessage=(e)=>{
    e.preventDefault();
  }

  return (
    <section className='contact'>
      <div className='container'>
        <div className='banner'>
        <form onSubmit={handlesendmessage}>
        <h2>CONTACT US</h2>
        <div>
          <input type="text" value={name} placeholder='your name' onChange={(e)=>setname(e.target.value)}/>
          <input type="email" value={email} placeholder='your email' onChange={(e)=>setemail(e.target.value)}/>
          <input type="number" value={phone} placeholder='your phone' onChange={(e)=>setphone(e.target.value)}/>
        </div>
        <textarea rows="10" value={message} placeholder='your message' onChange={(e)=>setmessage(e.target.value)}/>
        <button className='btn' type="submit">SEND MESSAGE</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact