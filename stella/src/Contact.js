
import React,{useState }from 'react'
import {Link} from 'react-router-dom'

import './App.css'
import two from './images/two.jpg'
import hand from './images/hand.png'
import butter from './images/butter.jpeg'
import bang from './images/bang.jpeg'
import black from './images/black.jpeg'





function Contact() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);




  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    setCount1(count1 - 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    setCount2(count2 - 1);
  };

  const increment3 = () => {
    setCount3(count3 + 1);
  };

  const decrement3= () => {
    setCount3(count3 - 1);
  };

  const increment4 = () => {
    setCount4(count4 + 1);
  };

  const decrement4= () => {
    setCount4(count4 - 1);
  };

  const increment5 = () => {
    setCount5(count5 + 1);
  };

  const decrement5= () => {
    setCount5(count5 - 1);
  };


  const increment6 = () => {
    setCount6(count6 + 1);
  };

  const decrement6= () => {
    setCount6(count6 - 1);
  };
  const price1=100;
  const price2=300;
  const price3=600;
  const price4=60;
  const price5=90;
  const price6=70;

const total=(price1*count1)+(price2*count2)+(price3*count3)+(price4*count4)+(price5*count5)+(price6*count6);

  return (
    <div class="container">
    <div className='c2'><div classname="p1">
<img src={two} alt=""></img></div>
  <p><b> Product details:</b><br></br>product name:EARING <br></br>color:gold<br></br>
                     pairs of:2
  
</p>
<p><b>total amount:{price1}</b></p>
      <p>Count: {count1}</p>
      <center><button onClick={increment1}>+</button><p>CART</p><button onClick={decrement1}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    </center>
    </div>


    <div className='c3'>
      <div className="p2">
<img src={butter} alt=""></img></div><b>Product details:</b><p>product name:Clips<br></br> pairs of:3</p>
<p><b>total amount:{price2}</b></p>
      <p>Count: {count2}</p>
      <center><button onClick={increment2}>+</button><p>CART</p><button onClick={decrement2}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    
    </center></div>

    <div className='c2'><div classname="p3">
<img src={black} alt=""></img></div><b>Product details:</b><br>
</br><p>Product name: long earings</p>
<p><b>total amount:{price3}</b></p>
      <p>Count: {count3}</p>
      <center><button onClick={increment3}>+</button><p>CART</p><button onClick={decrement3}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    </center></div>

    

    <div className='c2'><div classname="p3">
<img src={hand} alt=""></img></div><b>Product details:</b><br></br><p>Product name: collection of bangles,handbands</p>
<p><b>total amount:{price4}</b></p>
      <p>Count: {count4}</p>
      <center><button onClick={increment4}>+</button><p>CART</p><button onClick={decrement4}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    </center></div>



    <div className='c2'><div classname="p3">
<img src={bang} alt=""></img></div><b>Product details:</b><br></br><p>product name:
  Bangles<br></br></p>
<p><b>total amount:{price5}</b></p>
      <p>Count: {count5}</p>
      <center><button onClick={increment5}>+</button><p>CART</p><button onClick={decrement5}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    </center></div>




    <div className='c2'><div classname="p3">
<img src={black} alt=""></img></div><b>Product details:</b><br></br><p>Product name: hand Bands</p>
<p><b>total amount:{price6}</b></p>
      <p>Count: {count6}</p>
      <center><button onClick={increment6}>+</button><p>CART</p><button onClick={decrement6}>-</button>
      <Link to={`/Payment/${total}`}>
      <button>buy now</button></Link>
    </center></div>

    </div>
  );
}

export default Contact;
