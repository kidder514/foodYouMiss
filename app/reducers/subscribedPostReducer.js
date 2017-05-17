
function subscribedPostReducer(state = [], action) {
  switch(action.type){
    case "INIT_SUB_POST":
    	return state.concat(action.newPost)
    case "APPEND_SUB_POST":
    	return state.concat(action.newPost)
    case "REFRESH_SUB_POST":
    	return action.newPost.concat(state)
    default:
    	return state
    }
}

export default subscribedPostReducer