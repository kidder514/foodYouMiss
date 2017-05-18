import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuLayer from "../components/menu/MenuLayer"
import { ShowUserMenu } from "../Action/uiAction"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		ui: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleUserMenu: (isShown) => {
            dispatch(ShowUserMenu(isShown))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLayer);
