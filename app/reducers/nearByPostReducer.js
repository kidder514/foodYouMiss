
function nearByPostReducer(state = [], action) {
  switch(action.type){
    case "INIT_POST":
    	return state.concat(action.newPost)
    case "APPEND_POST":
    	return state.concat(action.newPost)
    case "REFRESH_POST":
    	return action.newPost.concat(state)
    default:
    	return state
    }
}

export default nearByPostReducer