import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchAction from "../../actions/SearchActions"
import SearchBox from "../../components/common/SearchBox"

const mapDispatchToProps = (dispatch) => {
	return {
		doSearch: (keyword) =>{
			dispatch(searchPostsCall(keyword));
		}
	};
};
export default connect(null, mapDispatchToProps)(SearchBox);
