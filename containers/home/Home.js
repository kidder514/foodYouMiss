import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from "react-router";

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

      let style={
        signinButton:{
          width: 300,

        },
        signupButton:{
          width: 300,
        }
      }
      
  		return (
  			<div className="single-page-wrapper home">
            <div className="single-page-content home-inner">
              <h1>Cookroo</h1>
              <p>Join us, to find food or become a home chef.</p>
              <Link to="/signup" className="homepage-button">
                <RaisedButton label="Sign up" primary={true} style={ style.signupButton}/>
              </Link>
              <Link to="/signin" className="homepage-button">
                  <RaisedButton label="Sign in" secondary={true} style={ style.signinButton}/>
              </Link>
            </div>
  			</div>
  			)
  	}
}

export default Home
