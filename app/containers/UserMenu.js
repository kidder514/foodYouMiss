import React, {Component} from 'react';
import {connect} from "react-redux";
import UserMenuLayer from "../components/UserMenuLayer"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		ui: state.ui
	}
}

export default connect(mapStateToProps)(UserMenuLayer);
