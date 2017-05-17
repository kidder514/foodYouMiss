
function mapNearByPostReducer(state = [], action) {
  switch(action.type){
    case "MAP_INIT_POST":
    	return state.concat(action.mapNewPost)
    case "MAP_APPEND_POST":
    	return state.concat(action.mapNewPost)
    case "MAP_REFRESH_POST":
    	return action.newPost.concat(mapNewPost)
    default:
    	return state
    }
}

export default mapNearByPostReducer