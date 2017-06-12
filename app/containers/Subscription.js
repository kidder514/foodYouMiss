import React, {Component} from 'react';
import {connect} from "react-redux";
import SubscribedPostPage from "../components/SubscribedPostPage"
import { subscribedListCall } from "../action/postAction"

const mapStateToProps = (state) => {
	return {
		userStatus: state.userStatus,
		subscribedPostListData: state.subscribedPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initSubscribedPost: (query) => {
            dispatch(subscribedListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribedPostPage);
