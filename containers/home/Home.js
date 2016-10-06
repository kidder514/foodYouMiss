import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class Home extends Component{

    googleSignin(){

        return;
    }

    fbsignin(){
      FB.login(function(response){
      // Handle the response object, like in statusChangeCallback() in our demo
      // code.
      });
    }

  	render(){
  		return (
  			<div className="home">
            <div className="home-inner">
              <h1>Cookroo</h1>
              <p>Join us, to find food or become a home chef.</p>
              <div className="g-signin2" onClick={this.googleSignin()}></div> 
              <div id="status">
              </div>
            </div>
  			</div>
  			)
  	}
}

export default Home
