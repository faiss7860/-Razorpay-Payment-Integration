import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_zW8LTEGZIj7Tye",
        key_secret:"mV239hwnXhUqjPmn6GXNmXaM",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Shaikh Fais",
          email:"faiss7860@gmail.com",
          contact:"7276272453"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <br/>
      <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
      <br/><br/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
