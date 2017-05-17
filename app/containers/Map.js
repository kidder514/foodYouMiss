import React, {Component} from 'react';
import {connect} from "react-redux";
import MapPage from "../components/MapPage"
import { mapPostListCall } from "../Action/mapPostAction"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		mapPostListData: state.mapNearByPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        mapInitPost: (query) => {
            dispatch(mapPostListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);