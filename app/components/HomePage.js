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
    		return  <div></div>;
    	  }
    }
}

export default HomePage;
