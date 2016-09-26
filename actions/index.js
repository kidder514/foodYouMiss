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

		axios.get('http://www.mocky.io/v2/57e7aef90f0000201c262336')
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