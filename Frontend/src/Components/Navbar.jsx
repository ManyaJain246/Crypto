import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
const [show, setshow]=useState(false);
  return (
    <>
<nav className={show ? "navbar navbar_show": "navbar"}>
    <div className='logo'>
        <img src="/logo (1).png" alt="logo"/>
    </div>
    <div className='links'>
        <ul>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/donate"}>DONATE</Link></li>
            <li><Link to={"/about"}>ABOUT</Link></li>
            <li><Link to={"/contact"}>CONTACT</Link></li>
        </ul>

        <ul>
            <li><Link to={"/"}><FaBitcoin/></Link></li>
            <li><Link to={"/"}><FaYoutube/></Link></li>
            <li><Link to={"/"}><FaGithubSquare/></Link></li>
            <li><Link to={"/"}><BsInstagram/></Link></li>
        </ul>
    </div>
    <GiHamburgerMenu className='hamburger' onClick={()=>setshow(!show)}/>
</nav>
    </>
  )
}

export default Navbar