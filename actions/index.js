import axios from "axios"

export const initPostsAction = (posts) =>{
  return {
    type: "INIT_POSTS",
    newPosts: posts
  }
}

export const initPosts = () => {
	return dispatch => {

		axios.get('http://www.mocky.io/v2/57e900410f0000c0128439a1')
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