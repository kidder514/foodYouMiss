import React, {Component} from 'react';
import {connect} from "react-redux";
import { postListCall } from "../../action/postAction"
import { updateSearchOptionsCall } from "../../action/searchAction"
import SearchBox from "../../components/common/SearchBox"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		search:state.search
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		doSearch: (query) =>{dispatch(postListCall(query))},
		initSearchOptions: (query) =>{dispatch(updateSearchOptionsCall(query))}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);