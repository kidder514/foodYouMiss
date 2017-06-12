import React, {Component} from 'react';
import {connect} from "react-redux";
import OverviewPage from "../../components/dashboard/OverviewPage"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		userData: state.userData
	}
}

export default connect(mapStateToProps, null)(OverviewPage);