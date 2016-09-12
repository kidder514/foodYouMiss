import { combineReducers } from 'redux'
import pageSwitcher from './pageSwitcher'
import dataReducer from './dataReducer'


const mainReducer = combineReducers({
	...reducers,
	routing: outerReducer
})

export default mainReducer