import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import nearByPostsReducer from "./nearByPostsReducer"

const rootReducer = combineReducers({
  nearByPosts: nearByPostsReducer,
  routing
})

export default rootReducer
