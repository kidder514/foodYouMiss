import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import nearByPostsReducer from "./nearByPostsReducer"
import errorReducer from "./errorReducer"

const rootReducer = combineReducers({
  nearByPosts: nearByPostsReducer,
  errorPopup: errorReducer,
  routing
})

export default rootReducer
