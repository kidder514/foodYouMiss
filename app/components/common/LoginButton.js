import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class LoginButton extends Component{

  	render(){
  		return (
			<div className="login-button" style={this.props.userStatus.isLoggedIn ? {display:"none"} : {display:"block"}}>
			  	<Link to="/signin" className="login ">
		    		<button className="btn btn-default btn-sm btn-block">
		    			login
			    	</button>
				</Link>	
			  	<Link to="/signup-entrance">
			    	<button className="btn btn-sm btn-default btn-block">
					  	Sign-up
			    	</button>
			  	</Link>
			</div>
  		);
    }
}

const mapStateToProps = (state) => {
	  return {
		    userStatus: state.userStatus
	  }
}

export default connect(mapStateToProps, null)(LoginButton);
