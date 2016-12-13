import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";

class SignupEntrance extends Component{

	render(){
		return (
			<div className="full-width-wrapper">
				<div className="signupentrance-content-wrapper">
					<h1>Sign in with existing account</h1>
					<Link to="/signup">
						<RaisedButton
							className="raised-button" 
			    			label="Sign Up"
			    			secondary={true}
						/>
					</Link>
					<br />
					
	    			<RaisedButton 
						className="raised-button" 
		    			label="Sign up with google"
		    			secondary={true} 
		    			type="submit"
					/>
					<br />

	    			<RaisedButton 
						className="raised-button" 
		    			label="Sign up with facebook"
		    			secondary={true} 
					/>
					<br />
				</div>
			</div>
		)
	}
}

export default SignupEntrance;