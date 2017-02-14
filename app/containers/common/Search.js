import React, {Component} from 'react';
import {connect} from "react-redux";
import { postListCall } from "../../actions/postActions"
import SearchBox from "../../components/common/SearchBox"

const mapDispatchToProps = (dispatch) => {
	return {
		doSearch: (query) =>{
			dispatch(postListCall(query));
		}
	};
};

export default connect(null, mapDispatchToProps)(SearchBox);