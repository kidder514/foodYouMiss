import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import nearByPostsReducer from "./nearByPostsReducer"
import uiReducer from "./uiReducer"

const rootReducer = combineReducers({
  nearByPosts: nearByPostsReducer,
  ui: uiReducer,
  routing
})

export default rootReducer
