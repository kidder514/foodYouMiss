import React, {Component} from 'react';
import {connect} from "react-redux";
import MapPage from "../components/MapPage"
import { mapPostListCall } from "../actions/mapPostActions"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		mapPostListData: state.mapNearByPosts
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        mapInitPosts: (query) => {
            dispatch(mapPostListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);