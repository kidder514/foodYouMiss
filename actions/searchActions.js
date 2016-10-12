import axios from "axios"
import { errorPopup } from "./errorActions"
import { startLoading, finishLoading} from "./loadingActions"

export const searchPostsCall = (request) => {
	return dispatch => {
		
		dispatch(startLoading())
		axios.post("/api/search", {"keyword" : request})
		.then(
			() => { },
			(err) => { 
				dispatch(finishLoading());
				dispatch(errorPopup(err.response.data.errorMsg));}
		)
	}
}

const displayPostsResult = (data) => {
	return {
		type: "SEARCH_RESULT",
		data
	}
}