import React, {Component} from 'react';
import {connect} from "react-redux";
import OrderHistoryPage from "../../components/dashboard/OrderHistoryPage"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		userData: state.userData
	}
}

export default connect(mapStateToProps)(OrderHistoryPage);