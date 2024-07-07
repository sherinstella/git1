import React from "react";
import {Link} from "react-router-dom"
import logo from './images/logo.png'
function Navbar()
{
    return(
        <div classname="x">
        <div classame="t"> <img src={logo} className="logo" alt=""></img></div>
     <div><center>
    <h2 className="home">WELCOME TO JERENE'S ACCESSORIES</h2></center></div>

    <nav>
        <ul>
        
<div className="s" >
     <li><Link to="/">Home</Link></li>
      </div>
      <div className="navbar" ><li><Link to="/About">About</Link></li></div>
<div> <br></br>
    <li><Link to="/Contact">Accessories</Link></li></div>



    </ul>
    </nav>
    
        
    

</div>

    )
}
export default Navbar;