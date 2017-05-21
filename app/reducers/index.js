import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import subscribedPostReducer from "./subscribedPostReducer"
import nearByPostReducer from "./nearByPostReducer"
import mapNearByPostReducer from "./mapNearByPostReducer"
import myPostReducer from "./myPostReducer"
import uiReducer from "./uiReducer"
import userStatus from "./userStatus"

const rootReducer = combineReducers({
  nearByPost: nearByPostReducer,
  mapNearByPost: mapNearByPostReducer,
  subscribedPost:subscribedPostReducer,
  myPost:myPostReducer,
  ui: uiReducer,
  userStatus,  
  routing
})

export default rootReducer
