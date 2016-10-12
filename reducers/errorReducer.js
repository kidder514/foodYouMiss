
function errorReducer(state = "", action) {
  switch(action.type){
    case "ERROR_POPUP":
        return action.message ? (state + action.message) : "" 
    default:
    	return state
    }
}

export default errorReducer