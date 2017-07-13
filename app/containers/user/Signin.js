import React, {Component} from 'react';
import {connect} from "react-redux";
import SigninPage from "../../components/user/SigninPage"
import {signinCall} from "../../action/userAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signin: (userInfo,rememberLogin) =>{
			dispatch(signinCall(userInfo,rememberLogin));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
