import React, {Component} from 'react';
import {connect} from "react-redux";
import NotificationPage from "../../components/dashboard/NotificationPage"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(NotificationPage);