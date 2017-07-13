import React, {Component} from 'react';
import {connect} from "react-redux";
import AuthorPage from "../components/AuthorPage"
import { authorInfoCall } from "../action/authorAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		authorData: state.authorData
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        initAuthorCall: (query) => {
            dispatch(authorInfoCall(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);