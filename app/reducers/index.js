import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import nearByPostReducer from "./nearByPostReducer"
import myPostReducer from "./myPostReducer"
import uiReducer from "./uiReducer"
import userState from "./userState"
import userData from "./userData"
import singleDishData from "./singleDishData"
import authorData from "./authorData"
import search from "./searchReducer"

const rootReducer = combineReducers({
  nearByPost: nearByPostReducer,
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
