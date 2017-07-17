import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import homeFoodPostReducer from "./homeFoodPostReducer"
import myPostReducer from "./myPostReducer"
import uiReducer from "./uiReducer"
import userState from "./userState"
import userData from "./userData"
import singleDishData from "./singleDishData"
import authorData from "./authorData"
import search from "./searchReducer"

const rootReducer = combineReducers({
  homeFoodPost: homeFoodPostReducer,
  myPost:myPostReducer,
  ui: uiReducer,
  userState,  
  userData,
  singleDishData,
  authorData,
  search,
  routing
})

export default rootReducer
