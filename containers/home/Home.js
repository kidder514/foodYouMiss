import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class Home extends Component{

  	render(){
  		return (
  			<div className="home">
            <div className="home-inner">
              <h1>Cookroo</h1>
              <p>Join us, to find food or become a home chef.</p>
            </div>
            <RaisedButton
              label="Login with Google"
              labelPosition="after"
              primary={true}
              icon={<ActionAndroid />}
            />
            <RaisedButton
              label="Login with Facebook"
              labelPosition="after"
              primary={true}
              icon={<ActionAndroid />}
            />
  			</div>
  			)
  	}
}

export default Home
