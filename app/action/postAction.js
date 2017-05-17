import axios from "axios";
import {errorPopup} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initSubscribedPostAction = (post) => {
    return {
    	type: "INIT_SUB_POST",
    	newPost: post
    }
}

export const initNearbyPostAction = (post) => {
    return {
    	type: "INIT_POST",
    	newPost: post
    }
}

export const postListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initNearbyPostAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(errorPopup("Unable to load dishes' Post from server"));
	  	});
	}	
}

export const subscribedListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initSubscribedPostAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(errorPopup("Unable to load dishes' Post from server"));
	  	});
	}	
}
