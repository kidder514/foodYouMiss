import React, {Component} from 'react';
import {connect} from "react-redux";
import SigninPage from "../../components/user/SigninPage"
import signinCall from "../../actions/signinActions"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signin: (userInfo) =>{
			dispatch(signinCall(userInfo));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
