import axios from "axios"
import ReduxThunk from 'redux-thunk'

export const initPostsAction = (posts) =>{
  return {
    type: "INIT_POSTS",
    newPosts: posts
  }
}

export const initPosts = () => {
	return dispatch => {

		axios.get('http://www.mocky.io/v2/57e266f0110000ec1d56f632')
		.then(function (res) {
			dispatch(initPostsAction(res.data))
	  	})
	  	.catch(function (error) {
	    	console.log("Error occur, operation interrupted. ")
	  	});
	}	
}

export const appendPosts = () => {} 
export const refreshPosts = () => {} 

const getInitialPosts = () => {

}