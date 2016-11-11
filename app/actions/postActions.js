import axios from "axios";
import {errorPopup} from "./errorActions";

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

export const initSubscriptionsPostsCall = () => {
	return dispatch => {
		axios.get('http://www.mocky.io/v2/57e900410f0000c0128439a1')
		.then(function (res) {
			dispatch(initSubscriptionsPostsAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(errorPopup("Unable to load Initial Post"));
	  	});
	}	
}


export const initNearbyPostsCall = () => {
	return dispatch => {
		axios.get('http://www.mocky.io/v2/57e900410f0000c0128439a1')
		.then(function (res) {
			dispatch(initNearbyPostsAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(errorPopup("Unable to load Initial Post"));
	  	});
	}	
}
