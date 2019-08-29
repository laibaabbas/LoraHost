import React, { Component } from 'react';

class Pricing extends Component {
  render() {
    let card=this.props.pricing[0].cards.map((v,i)=>{
      let card=v.given.map((val,ind)=>{
    return(
      <li key={ind}>{val.list}</li>

    )
      })
      return(
        <div key={i} class="col-lg-4 col-md-6 col-sm-6" >
        <div class="pricing-block " >
            <h2>{v.title}</h2>

            <h3 class="price my-3 ">
               {v.price} <small>$</small>
            </h3>

            <ul class="list-unstyled">
             {card}
               
            </ul>

            <a href="#" class="btn btn-outline-dark">Purchase now</a>
        </div>
    </div>
      )
    })
  
   
    return (
      <section class="section pb-5" id="pricing" style={{"background":`linear-gradient(to right, #2826ac8e 0%, #521da781  100%),url(${this.props.pricing[0].img})`}}>
        <div className="container">
        <div class="section-intro-white pb-85px text-center">
        <h2>Popular Pricing Package</h2>
        <div class="section-style"></div>
        </div>
        </div>
        <div className="priceTable-relative">
        <div class="container" >
          
          <div class="row mb-4">
             
          {card}
              
          </div>
         
      </div>
        </div>
      
    </section>
    );
  }
}

export default Pricing;
