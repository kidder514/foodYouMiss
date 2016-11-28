import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";

class SignupEntrance extends Component{

	render(){
		return (
			<div className="full-width-wrapper">
				<Link to="/signup">
					<RaisedButton 
		    			label="Sign Up"
		    			secondary={true}
		    			href="/signup"
					/>
				</Link>
				
    			<RaisedButton 
	    			label="Sign up with google"
	    			secondary={true} 
	    			type="submit"
				/>
    			<RaisedButton 
	    			label="Sign up with facebook"
	    			secondary={true} 
				/>
			</div>
		)
	}
}

export default SignupEntrance;