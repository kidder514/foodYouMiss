import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import subscribedPostReducer from "./subscribedPostReducer"
import nearByPostReducer from "./nearByPostReducer"
import mapNearByPostReducer from "./mapNearByPostReducer"
import uiReducer from "./uiReducer"
import userStatus from "./userStatus"

const rootReducer = combineReducers({
  nearByPost: nearByPostReducer,
  mapNearByPost: mapNearByPostReducer,
  subscribedPost:subscribedPostReducer,
  ui: uiReducer,
  userStatus,  
  routing
})

export default rootReducer
