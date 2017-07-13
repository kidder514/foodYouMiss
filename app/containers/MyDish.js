import React, {Component} from 'react';
import {connect} from "react-redux";
import MyDishPage from "../components/MyDishPage"
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDishPage);
