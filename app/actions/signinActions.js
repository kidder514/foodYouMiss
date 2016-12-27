import axios from "axios";
import {startLoading, finishLoading} from "./loadingActions";
import config from "../config"

export const signinCall = (userInfo) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "auth/signin", userInfo)
		.then((res)=>{
			console.log("login successfully");
			dispatch(finishLoading())}
			)
		.catch((error)=>{
			console.log("login failed");
			dispatch(finishLoading())}
			)
	}
}
