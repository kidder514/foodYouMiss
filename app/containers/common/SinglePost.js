import React, {Component} from 'react';
import {connect} from "react-redux";
import {openImgLayer} from "../../actions/SinglePostActions"
import SinglePostItem from "../../components/common/SinglePostItem"

const mapDispatchToProps = (dispatch) => {
	return {
		openImgLayer: (imgs,imgIndex) =>{
			dispatch(openImgLayer(imgs,imgIndex));
		}
	};
};
export default connect(null, mapDispatchToProps)(SinglePostItem);
