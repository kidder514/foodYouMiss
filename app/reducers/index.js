import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import subscriptionsPostsReducer from "./subscriptionsPostsReducer"
import nearByPostsReducer from "./nearByPostsReducer"

const rootReducer = combineReducers({
  nearbyPosts: nearByPostsReducer,
})

export default rootReducer
