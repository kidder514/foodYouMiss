import React, {Component} from 'react';
import {connect} from "react-redux";
import MapPage from "../components/MapPage"
import { mapPostListCall } from "../action/mapPostAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		mapPostListData: state.mapNearByPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMapPost: (query) => {dispatch(mapPostListCall(query))},
        updateSearchOptions: () => {dispatch(updateSearchOptionsCall())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);