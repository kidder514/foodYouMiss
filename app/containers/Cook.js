import React, {Component} from 'react';
import {connect} from "react-redux";
import CookPage from "../components/CookPage"
import { cookInfoCall } from "../action/cookAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		cookData: state.cookData
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initCookCall: (query) => {
            dispatch(cookInfoCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookPage);