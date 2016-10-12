import axios from "axios"
import { errorPopup } from "./errorActions"

export const searchPostsCall = (request) => {
	return dispatch => {
		axios.post("/api/search", {"keyword" : request})
		.then(
			() => { },
			(err) => { dispatch(errorPopup(err.response.data.errorMsg)) }
		)
	}
}

const displayPostsResult = (data) => {
	return {
		type: "SEARCH_RESULT",
		data
	}
}