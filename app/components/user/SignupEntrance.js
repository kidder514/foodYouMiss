import React, {Component} from "react";
import {Link} from "react-router";

class SignupEntrance extends Component{

	render(){
		return (
			<div className="full-width-wrapper">
				<div className="signupentrance-content-wrapper">
					<h1>Sign in with existing account</h1>
					<Link to="/signup">
						<button
							className="raised-button btn default-btn" 
			    			label="Sign Up"
						>Sign Up</button>
					</Link>
					<br />
					
	    			<button 
						className="raised-button btn btn-default"
		    			label="Sign up with google"
		    			type="submit"
					>Sign up with google</button>
					<br />

	    			<button 
						className="raised-button btn btn-default" 
		    			label="Sign up with facebook"
					>Sign up with facebook</button>
					<br />
				</div>
			</div>
		)
	}
}

export default SignupEntrance;