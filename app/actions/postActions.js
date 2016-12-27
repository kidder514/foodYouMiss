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
		axios.get('http://www.mocky.io/v2/57e900410f0000c0128439a1'+ query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initNearbyPostsAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(errorPopup("Unable to load Initial Post"));
	  	});
	}	
}

