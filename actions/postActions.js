import axios from "axios";
import {errorPopup} from "./errorActions";

export const initPostsAction = (posts) => {
    return {
    	type: "INIT_POSTS",
    	newPosts: posts
    }
}

export const initPostsCall = () => {
	return dispatch => {
		axios.get('http://www.mocky.io/v2/57e900410f0000c0128439a1')
		.then(function (res) {
			dispatch(initPostsAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(errorPopup("Unable to load Initial Post"));
	  	});
	}	
}
