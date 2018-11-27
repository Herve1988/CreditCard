//import React, { Component } from 'react';
import React from 'react';
import Sim from '../img/Sim.JPEG';
import visamastercard from '../img/visamastercard.JPEG';
class Creditcard extends React.Component
{
    render()
        {
          return (<div className ="container">

            
    <div className ="title">
      <h1>CREDIT CARD</h1>
    </div>

    <div className ="sim">
      <img src={Sim} alt="sim"/>
    </div>

    <div className ="card-number">
      <h1>7253 3256 7895 1245</h1>
    </div>

    <div className ="text-info">
      <div className ="code">
        <h1>5422</h1>
      </div>

      <div className ="validity">
        <h1>VALID<br/>
          THRU
          </h1>
        
      </div>

      <div className ="direction">
        <h1>
          ▶
        </h1>
      </div>

      <div className ="date">
        <h1>MONTH/YEAR<br/>
          <span>11/50</span></h1>
        
      </div>

      <div className ="visa-mastercard">
        <img src={visamastercard} alt="visa-mastercard"/>
      </div>
    </div>

    
    <div className ="foot">
      <h1>CARDHOLDER</h1>
    </div>

  </div>
  )
}
}
export default Creditcard;