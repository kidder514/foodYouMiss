import axios from "axios";
import {startLoading, finishLoading} from "./loadingActions";

export const signinCall = (userInfo) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post("/api/signin", userInfo)
		.then((res)=>{dispatch(finishLoading())})
		.catch((error)=>{dispatch(finishLoading())})
	}
}
