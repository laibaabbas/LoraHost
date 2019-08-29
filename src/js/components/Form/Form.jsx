import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        <section class=" section-padding">
        <div class="container">
        <div class="section-intro pb-5 mb-xl-2 text-center">
        <h2 class="mb-4">{this.props.sub[0].title} </h2>
        <p>{this.props.sub[0].para} </p>
        </div>
        <form class="form-subscribe" action="#">
        <div class="input-group align-items-center">
        <input type="text" class="form-control" placeholder={this.props.sub[0].input} required=""/>
        <div class="input-group-append">
        <button class="button button-shadow2" type="submit">{this.props.sub[0].btn}</button>
        </div>
        </div>
        </form>
        </div>
        </section>
    );
  }
}

export default Form;
