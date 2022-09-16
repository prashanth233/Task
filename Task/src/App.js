import React from 'react';
import image from './image 1.png';
import { FaStar } from "react-icons/fa";
import { FooterContainer } from './containers/footer'
import Card from './Card';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
function App() {
let myPrices = [
  {
    plan: "Free Tier",
    price: "Up to 2000 checks/month",
    features: [
      {
      }
    ]
  },
  {
    plan: "Fixed Price Per Month",
    price: "Starts from $500",
    features: [
      {
      }
    ]
  },
  {
    plan: "Annual payment with 25% off",
    price: "Starts From $4500",
    features: [
      {
      }
    ]
  }
]
 return (
   <>
    <div classname="App">
      <Navbar />
    </div>
        <section className="pricing py-5">
        <h2 style={{textAlign: "center", height: "48px",
left: "297px",
top: "136px"}}>Utterly <span style={{color: '#1169F9'}}> transparent pricing,</span>{' '} for businesses of all sizes.</h2>
          <p style={{textAlign: "center", color: "#706F6F"}}>Usage-based pricing with monthly payments</p> <br></br><br></br>
          <div className="container">
            <div className="row">
              {
                myPrices.map( (obj) =>{return<Card data={obj}></Card>})   // store data in myPrices map to card 
              }
            </div>
          </div>
        </section><br></br><br></br><br></br>
        <div className="container">
        <img src={image} alt="image" />
          <p style={{textAlign: "center", paddingRight:"50%"}}> <FaStar/> Unlimited number of seats on console </p>
          <p style={{textAlign: "center", paddingRight:"50%"}}> <FaStar/> Unlimited number of seats on console </p>
          <p style={{textAlign: "center", paddingRight:"50%"}}> <FaStar/> Unlimited number of seats on console </p>
          <p style={{textAlign: "center", paddingRight:"50%"}}> <FaStar/> Unlimited number of seats on console </p>
          <p style={{textAlign: "center", paddingRight:"50%"}}> <FaStar/> Unlimited number of seats on console </p>  
        </div>
        <FooterContainer />
    </>
  );
}

export default App;
