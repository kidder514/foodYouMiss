import axios from "axios"
import errorPopup from "./errorActions"

export const searchPostsCall = (request) => {
	return dispatch => {
		axios.post("/searchResults?" + request)
		.then(function(res){
			dispatch(displayPostsResult(res))
		})
		.catch(function(error){
			dispatch(errorPopup("Unable to load search result"))
		})

	}
}


const displayPostsResult = (data) => {
	return {
		type: "POST_RESULT",
		data
	}
}