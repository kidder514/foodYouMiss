import React, {Component} from 'react';
import {Link} from "react-router";
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class HomePage extends Component{

  	render(){
        let userStatus = this.props.userStatus;
        let style={
            signinButton:{
                width: 300,
            },
            signupButton:{
                width: 300,
            }
        };

    if(userStatus.isLoggedIn){
      this.props.dispatch(push('/some/path'));
    }else{
    		return (
      			<div className="full-width-wrapper home">
                <div className="home-content-wrapper">
                    <h1>Signature Dish</h1>
                    <p>Join us, to find food or become a home chef.</p>
                    <Link to="/signup" className="homepage-button">
                        <RaisedButton label="Sign up" primary={true} style={style.signupButton}/>
                    </Link>
                    <Link to="/signin" className="homepage-button">
                        <RaisedButton label="Sign in" secondary={true} style={style.signinButton}/>
                    </Link>
                </div>
      			</div>
      		);
    	  }
    }
}

export default HomePage;
