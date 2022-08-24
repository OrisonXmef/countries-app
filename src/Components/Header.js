import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <div>
            <h1> LOGO</h1>
        </div>
        <ul> 
            <li><Link to = {"/"}>Home</Link></li>
            <li><Link to = {"/contact"}>Contact</Link></li>
            <li><Link to = {"/about"}>About</Link></li>
            <li><Link to={"/products"} > Products</Link></li>
        </ul>
    </nav>
  )
}

export default Header