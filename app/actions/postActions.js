import axios from "axios";
import {errorPopup} from "./errorActions";
import {startLoading, finishLoading} from "./loadingActions"

export const initSubscriptionsPostsAction = (posts) => {
    return {
    	type: "INIT_POSTS",
    	newPosts: posts
    }
}

export const initNearbyPostsAction = (posts) => {
    return {
    	type: "INIT_POSTS",
    	newPosts: posts
    }
}

export const postListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initNearbyPostsAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(errorPopup("Unable to load dishes' Post from server"));
	  	});
	}	
}

