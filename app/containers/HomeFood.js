import React, {Component} from 'react';
import {connect} from "react-redux";
import HomeFoodPage from "../components/HomeFoodPage"
import { postListCall } from "../action/postAction"
import { updateSearchOptionsCall } from "../action/searchAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		postListData: state.homeFoodPost
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (query) => {dispatch(postListCall(query))},
        updateSearchOptions: (query) => {dispatch(updateSearchOptionsCall(query))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFoodPage);
