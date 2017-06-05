import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import subscribedPostReducer from "./subscribedPostReducer"
import nearByPostReducer from "./nearByPostReducer"
import mapNearByPostReducer from "./mapNearByPostReducer"
import myPostReducer from "./myPostReducer"
import uiReducer from "./uiReducer"
import userStatus from "./userStatus"
import userData from "./userData"
import singleDishData from "./singleDishData"

const rootReducer = combineReducers({
  nearByPost: nearByPostReducer,
  mapNearByPost: mapNearByPostReducer,
  subscribedPost:subscribedPostReducer,
  myPost:myPostReducer,
  ui: uiReducer,
  userStatus,  
  userData,
  singleDishData,
  routing
})

export default rootReducer
