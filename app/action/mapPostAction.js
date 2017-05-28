import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const mapInitPostAction = (post) => {
	return {
		type: "MAP_INIT_POST",
		mapNewPost: post
	}
}

export const mapPostListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(mapInitPostAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes' Post from server"));
	  	});
	}	
}
