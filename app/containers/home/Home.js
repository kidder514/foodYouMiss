import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "../../components/home/HomePage"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus
	}
}

export default connect(mapStateToProps, null)(HomePage);
