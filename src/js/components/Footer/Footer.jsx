import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let page=this.props.footer[0].pages.map((v,i)=>{
      return(
        <li key={i}>
            <a href="#" class="text-white">
               {v.link}
            </a>
        </li>
      )
    })
    let address=this.props.footer[0].address.map((v,i)=>{
      return(
        <li>
            <i class={`fa ${v.icon}`}></i> {v.link}
        </li>
      )
    })
   
    return (
      <footer class="top-padding  footer-area">
    
      <div class="container">
          <div class="row align-self-center">
              <div class="col-lg-4 col-md-6">
                  <div class="footer-widget">
                     
                      <a href="#" class="footer-brand text-white">
                         
                         <img src= {this.props.footer[0].img} alt=""/>
                      </a>
                      <p>{this.props.footer[0].para}</p>
                  </div>
              </div>

              <div class="col-lg-2 ml-lg-auto col-md-2">

                  
                  <ul class="footer-link list-unstyled ml-0 justify-content-end">
                    {page}
                  </ul>
              </div>
              <div class="col-lg-3 col-md-4">

              
                  <ul class="footer-link list-unstyled ml-0 justify-content-end">
                    {address}
                  </ul>
              </div>
          </div>
      

          <div class="row justify-content-md-center footer-copy">
              <div class="col-lg-8 col-md-6 col-sm-6 text-center">
                  <p class="lead text-white-50">Copyright ©2019 All rights reserved | This template is made with  by Colorlib </p>
              </div>
          </div>
      </div>
    
  </footer>
    )
  }
}

export default Footer;
