import React, {Component} from 'react';
import {connect} from "react-redux";
import { mapPostListCall } from "../../actions/postActions"
import MapSearchBox from "../../components/common/MapSearchBox"

const mapDispatchToProps = (dispatch) => {
	return {
		doSearch: (query) =>{
			dispatch(mapPostListCall(query));
		}
	};
};

export default connect(null, mapDispatchToProps)(MapSearchBox);