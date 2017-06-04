import axios from "axios"
import {startLoading, finishLoading} from "./loadingAction"
import config from "../config"

export const loginAction = (action) => {
	return { type: "LOGIN", action:action}
}

export const logoutAction = () => {
	return { type: "LOGOUT" }
}

export const loadUserDataAction = (action) => {
	return { type: "LOAD_USER_DATA", action:action}
}

//TODO: handle the backend data.
export const signinCall = (userInfo, rememberLogin) => {
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


export const userDataCall = (userId) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "userdata", userId)
		.then((res)=>{
			console.log("user data retrieved successfully");
			dispatch(finishLoading())}
			)
		.catch((error)=>{
			console.log("user data retrieved failed");
			dispatch(finishLoading())}
			)
	}
}
