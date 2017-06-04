import axios from "axios"
import {popupError} from "./errorAction";
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
			dispatch(finishLoading())
			})
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("Unable to signin"));
		})
	}
}

export const signupCall = (userInfo) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "auth/signup", userInfo)
		.then((res)=>{
			//TODO: assemble and push the data into store.
			console.log("login successfully");
			dispatch(finishLoading())}
			//TODO: go to the page that you can add user's password and address
			// use userId as parameter of the page and then send to the backend togather.
			)
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("Unable to signup"))
			})
	}
}

export const userDataCall = (userId) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "userdata", userId)
		.then((res)=>{
			console.log("user data retrieved successfully");
			dispatch(finishLoading())
			})
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("user data retrieved failed"))
			})
	}
}
