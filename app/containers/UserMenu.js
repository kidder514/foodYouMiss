import React, {Component} from 'react';
import {connect} from "react-redux";
import UserMenuLayer from "../components/UserMenuLayer"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		ui: state.ui
	}
}

export default connect(mapStateToProps)(UserMenuLayer);
