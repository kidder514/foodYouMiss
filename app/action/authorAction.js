import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initAuthorAction = (author) => {
    return {
    	type: "INIT_AUTHOR_PAGE",
    	author: author
    }
}

export const authorInfoCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initAuthorAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes from server"));
	  	});
	}	
}

