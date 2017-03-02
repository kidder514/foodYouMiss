import React, {Component} from 'react';
import {connect} from "react-redux";
import SignupPage from "../../components/user/SignupPage"
import {signupCall} from "../../actions/signupActions"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (userInfo) =>{
			dispatch(signupCall(userInfo));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
