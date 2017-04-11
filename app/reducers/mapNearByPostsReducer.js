
function mapNearByPostsReducer(state = [], action) {
  switch(action.type){
    case "MAP_INIT_POSTS":
    	return state.concat(action.mapNewPosts)
    case "MAP_APPEND_POSTS":
    	return state.concat(action.mapNewPosts)
    case "MAP_REFRESH_POSTS":
    	return action.newPosts.concat(mapNewPosts)
    default:
    	return state
    }
}

export default mapNearByPostsReducer