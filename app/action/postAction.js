import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initNearbyPostAction = (post) => {
    return {
    	type: "INIT_POST",
    	newPost: post
    }
}

export const initMyPostAction = (post) => {
    return {
    	type: "INIT_MY_POST",
    	newPost: post
    }
}

export const postListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/5954a2840f0000ef00fc0d5b',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initNearbyPostAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes' Post from server"));
	  	});
	}	
}

export const myPostListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/5954a2840f0000ef00fc0d5b',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initMyPostAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes' Post from server"));
	  	});
	}	
}
