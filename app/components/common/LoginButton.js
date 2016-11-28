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
          <div>
              <Link to="/signin" className={"login " + display}>
                	login
      			  </Link>	
              <Link to="/signupentrance" className={"signup" + display}>
                   Sign-up
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
