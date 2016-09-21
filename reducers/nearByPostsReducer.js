import * as ActionTypes from '../actions'

// Updates an entity cache in response to any action with response.entities.
function nearByPostsReducer(state = [], action) {
  switch(action.type){
    case "INIT_POSTS":
    	return state.concat(action.newPosts)
    case "APPEND_POSTS":
    	return state.concat(action.newPosts)
    case "REFRESH_POSTS":
    	return action.newPosts.concat(state)
    default:
    	return state
    }
}

export default nearByPostsReducer