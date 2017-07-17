import React, {Component} from 'react';
import {connect} from "react-redux";
import MyPagePage from "../components/MyPagePage"
import { myPostListCall } from "../action/postAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		myPostListData: state.myPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initMyPost: (query) => {
            dispatch(myPostListCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPagePage);
