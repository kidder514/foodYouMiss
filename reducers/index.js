import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import subscriptionsPostsReducer from "./subscriptionsPostsReducer"
import nearByPostsReducer from "./nearByPostsReducer"
import uiReducer from "./uiReducer"
import userStatus from "./userStatus"

const rootReducer = combineReducers({
  subscriptionsPosts: subscriptionsPostsReducer,
  nearbyPosts: nearByPostsReducer,
  ui: uiReducer,
  userStatus,  
  routing
})

export default rootReducer
