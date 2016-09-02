import { combineReducers } from 'redux'
import pageSwitcher from './pageSwitcher'
import dataReducer from './dataReducer'


const mainReducer = combineReducers({
  pageSwitcher,
  dataReducer
})

export default mainReducer