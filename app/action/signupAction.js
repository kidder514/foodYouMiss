import axios from "axios";
import {startLoading, finishLoading} from "./loadingAction";
import config from "../config"

export const signupCall = (userInfo) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "auth/signup", userInfo)
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