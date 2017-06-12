
function myPostReducer(state = [], action) {
  switch(action.type){
    case "INIT_MY_POST":
    	return state.concat(action.newPost)
    case "APPEND_MY_POST":
    	return state.concat(action.newPost)
    case "REFRESH_MY_POST":
    	return action.newPost.concat(state)
    default:
    	return state
    }
}

export default myPostReducer