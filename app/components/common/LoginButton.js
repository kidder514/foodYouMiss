import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class LoginButton extends Component{

  	render(){
      var display;
      if(this.props.userStatus.isLoggedIn){
        display = "hidden";
      }else{
        display = "";
      }

  		return (
            <Link to="/signin" className={"login " + display}>
            	login/sign-in
  			</Link>	
  			);
    }
}

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus
	}
}

export default connect(mapStateToProps, null)(LoginButton);
