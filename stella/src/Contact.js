import React from 'react'
import './App.css'

import l from './images/l.jpeg'
import th from './images/th.jpeg'
import sil from './images/sil.jpg'
import ring from './images/ring.webp'





export const Contact = () => {
  return (
    <div >
      <div className='contact'>

      <img src={th} alt=""></img><p>RS:100</p><br></br></div>
      <div className='c1'><img src={l} alt="" ></img><p>RS:200</p></div>
  </div>
        
  )
}
export default Contact;
