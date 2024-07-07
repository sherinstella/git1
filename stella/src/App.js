// Filename - App.js


// Filename - App.js

import React from "react";
import './App.css'
import Home from './Home'  

import About  from './About'        

import Contact from './Contact'
import Payment from "./Payment";

import {Routes,Route} from "react-router-dom"
import Navbar from './Navbar'

function App()
{
  return(
    
    <div>


<center>
  <div className="home">
    
    
    <Navbar/>
    <hr></hr>

      <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    
    <Route path="/payment/:total" element={<Payment/>} />



    

    </Routes>
    
  </div> 
  </center>
  
  </div>
  );
}
export default App



// import React from 'react'
// import fluorish from './fluorish'
// export const App = () => {
//   return (
//     <div><fluorish/></div>
//   )
// }
// export default fluorish