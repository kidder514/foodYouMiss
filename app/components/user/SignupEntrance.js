import React, {Component} from "react";
import {Link} from "react-router";

class SignupEntrance extends Component{

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="text-center">
						<h1>Sign in with existing account</h1>
						<hr/>
						<Link to="/signup">
							<button className="btn btn-default center-block signup-button">
								Sign Up
							</button>	
						</Link>
		    			<button className="btn btn-default center-block signup-button">
							Sign up with google
						</button>
		    			<button className="btn btn-default center-block signup-button" >
		    				Sign up with facebook
		    			</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SignupEntrance;