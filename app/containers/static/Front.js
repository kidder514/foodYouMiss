import React, {Component} from 'react';
import {connect} from "react-redux";
import FrontPage from "../../components/static/FrontPage"
import { postListCall } from "../../action/postAction"

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
		postListData: state.homeFoodPost
	}
}

//replace the postListCall by front page call
// const mapDispatchToProps = (dispatch) => {
//     return {
//         initPost: (query) => {
//             dispatch(postListCall(query))
//         }
//     };
// };

export default connect(mapStateToProps, null)(FrontPage);
