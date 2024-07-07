
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';


  

//   function Payment() {
//     const { total } = useParams();
//     const [name, setName] = useState('');
  
//     const [cardNumber, setCardNumber] = useState('');
//     const [cvv, setCvv] = useState('');
//     const [error, setError] = useState('');
  
  
//     const handleNameChange = (e) => {
//       const name = e.target.value;
//         setName(name);
//     };
//       const handleNameBlur=()=>
//       {
//         if (!name.match(/^[a-zA-Z ]+$/)) {
//           setError('Name on card must contain only alphabets and spaces');
//         } else {
//           setError('');
//         }
//       };
    
//       const handleCardNumberChange = (e) => {
//         const cardNumber = e.target.value;
//         setCardNumber(cardNumber);
//       };
    
//       const handleCardNumberBlur = () => {
//         if (!cardNumber.match(/^[0-9]{16}$/)) {
//           setError('Card number must contain 16 digits');
//         } else {
//           setError('');
//         }
//       };
    
//       const handleCvvChange = (e) => {
//         const cvv = e.target.value;
//         setCvv(cvv);
//       };
    
//       const handleCvvBlur = () => {
//         if (!cvv.match(/^[0-9]{4}$/)) {
//           setError('CVV must contain 4 digits');
//         } else {
//           setError('');
//         }
//       };
    


//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <p>Total Amount: {total}</p>
//       {/* Payment form and payment gateway integration goes here */}
//       <form>
//         <label for="mode">MODE OF PAYMENT</label>
//         <select id="mode"name="modes">
//           <option>CASH ON DELIVERY</option>
//           <option>DEBIT CARD</option>
//           <option>CREDIT CARD</option>
//         </select><br></br><br></br>
//         <label for="name">NAME ON THE CARD:</label><input type="text" id="name"value={name} onChange={handleNameChange}onBlur={handleNameBlur}></input>{error && <p style={{ color: 'red' }}>{error}</p>}<br></br><br></br>
//         <label for="num">CVV NUMBER:</label><input type="text" id="nam"name="name" onChange={handleCardNumberChange}onBlur={handleCardNumberBlur}></input>{error && <p style={{ color: 'red' }}>{error}</p>}<br></br><br></br>
//         <label for="num">CARD NUMBER:</label><input type="text" id="nam"name="name"onChange={handleCvvChange}onBlur={handleCvvBlur}></input>{error && <p style={{ color: 'red' }}>{error}</p>}<br></br><br></br>
//         <button type="button">CONFIRM PAYMENT</button>

//       </form>
//     </div>
//   );
// }

// export default Payment;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
  const { total } = useParams();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameError, setNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [phone, setPhone] = useState('');
  const [phones, setPhones] = useState('');
  
const[orderplaced,setorderplaced]=useState(false);
  //
const handleConfirmPayment = () => {
  if(name===''||cardNumber===''||cvv===''||phone==='' )
  {
    alert("fill the required feilds to place ur order")
  }else{

  
    
    setorderplaced(true);}
    
  };
//
  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleNameBlur = () => {
    if (!name.match(/^[a-zA-Z ]+$/)) {
      setNameError('Name on card must contain only alphabets and spaces');
    } else {
      setNameError('');
    }
  };
//
  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value;
    setCardNumber(cardNumber);
  };

  const handleCardNumberBlur = () => {
    if (!cardNumber.match(/^[0-9]{16}$/)) {
      setCardNumberError('Card number must contain 16 digits');
    } else {
      setCardNumberError('');
    }
  };
//
  const handleCvvChange = (e) => {
    const cvv = e.target.value;
    setCvv(cvv);
  };

  const handleCvvBlur = () => {
    if (!cvv.match(/^[0-9]{4}$/)) {
      setCvvError('CVV must contain 4 digits');
    } else {
      setCvvError('');
    }
  };
//

const handlePhoneChange = (e) => {
  const phone = e.target.value;
  setPhone(phone);
};



const handlePhoneBlur = (event) => {
  const phone = event.target.value;
  if (!phone.match(/^[0-9]{10}$/)) {
   setPhones('phone number contains 10 digits')
    
  } else {
    setPhones('')
  }
};
  return (
    <div>
      <h2>Payment Page</h2>
      <p><b>Total Amount: {total}</b></p><br></br><br></br>
      {/* Payment form and payment gateway integration goes here */}
      <form>
        <label for="p">PHONE NUMBER:</label><input type="text"id="p" name="p" maxLength="10"pattern="[0-9]{10}"onChange={handlePhoneChange}onBlur={handlePhoneBlur}></input>{phones && <p style={{ color: 'red' }}>{phones}</p>}
        <br></br><br></br>
        <label for="add">ADDRESS</label><input type="text" id="a" name="a"></input><br>
        </br><br></br><label for="mode">MODE OF PAYMENT</label>
        <select id="mode" name="modes">
          <option>CASH ON DELIVERY</option>
          <option>DEBIT CARD</option>
          <option>CREDIT CARD</option>
        </select>
        <br></br>
        <br></br>
        <label for="name">NAME ON THE CARD:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur} required
        ></input>
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        <br></br>
        <br></br>
        <label for="num">CARD NUMBER:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          onBlur={handleCardNumberBlur}
          pattern="[0-9]{16}" required
        ></input>
        {cardNumberError && <p style={{ color: 'red' }}>{cardNumberError}</p>}
        <br></br>
        <br></br>
        <label for="num">CVV NUMBER:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCvvChange}
          onBlur={handleCvvBlur}
          pattern="[0-9]{4}"required
        ></input>
        {cvvError && <p style={{ color: 'red' }}>{cvvError}</p>}
        <br></br>
        <br></br>
        <button type="button" onClick={handleConfirmPayment}>CONFIRM PAYMENT</button>{orderplaced && <p>placed</p>}
      </form>
    </div>
  );
}

export default Payment;

