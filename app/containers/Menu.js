import React, {Component} from 'react';
import {connect} from "react-redux";
import MenuLayer from "../components/menu/MenuLayer"
import { postListCall } from "../Action/postAction"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
	}
}

export default connect(mapStateToProps)(MenuLayer);
