import React, {Component} from 'react';
import {connect} from "react-redux";
import SettingPage from "../../components/dashboard/SettingPage"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(SettingPage);