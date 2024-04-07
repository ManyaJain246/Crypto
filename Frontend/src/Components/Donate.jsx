import React, { useState } from 'react'

const Donate = () => {
  const [name, setname]=useState("");
  const [email, setemail]=useState("");
  const [message, setmessage]=useState("");
  const [amount, setamount]=useState("");
  const [disablebtn, setdisablebtn]=useState(false);
  return (
    <section className='donate'>
      <form>
        <div>
          <img src="/logo (1).png" alt="logo"/>
        </div>
        
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your name"/>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email"/>
        <input type="text" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder="Enter your message"/>
        <div>
          <label>Show your love for poor</label>
          <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter Donation Amount (INR)"/>
        </div>
        <button type="submit" className='btn' disabled={disablebtn}>Donate {amount? ` INR ${amount}`:"INR(0)"} </button>
      </form>
    </section>
  )
}

export default Donate