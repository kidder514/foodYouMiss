import axios from "axios";
import {errorPopup} from "./errorActions";
import {startLoading, finishLoading} from "./loadingActions";

export const searchPostsCall = (request) => {
	return dispatch => {
		
		dispatch(startLoading())
		axios.post("/api/search", {"keyword" : request})
		.then(
			(response) => { dispatch(finishLoading()); }		
		)
		.catch((error)=>{
			dispatch(finishLoading());
			dispatch(errorPopup(error.response.data.errorMsg));
		})

	}
}

const displayPostsResult = (data) => {
	return {
		type: "SEARCH_RESULT",
		data
	}
}
