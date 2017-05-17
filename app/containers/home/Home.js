import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "../../components/home/HomePage"
import { postListCall } from "../../Action/postAction"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		postListData: state.nearByPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPost: (query) => {
            dispatch(postListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
