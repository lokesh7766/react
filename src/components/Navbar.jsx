import React from 'react'
import Home from './home'
import Dash from './Dash'
import { Link } from 'react-router-dom'
import About from './about'

const Navbar = () => {
  return (
    <div>
        
        <ul>
            <li> 
                <Link to={"/"}> home </Link>
                 </li>
            <li>
                
                <Link to={"/about"}>
                about</Link> </li>
            <li> Dash </li>
        </ul>
    </div>
  )
}

export default Navbar