import React, {Component} from 'react';
import {connect} from "react-redux";
import RefreshIndicator from "material-ui/RefreshIndicator";
import LoadingPage from "../components/common/LoadingPage"

const mapStateToProps = (state) => {
	return {
		loading: state.ui.loading
	};
};

export default connect(mapStateToProps, null)(LoadingPage);
