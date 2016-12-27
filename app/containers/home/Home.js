import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "../../components/home/HomePage"
import { postListCall } from "../../actions/postActions"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		postListData: state.nearbyPosts
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPosts: (query) => {
            dispatch(postListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
