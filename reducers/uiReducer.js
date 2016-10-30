
const initialUIState = {
	errorMessage : "",
	loading:false
}

function uiReducer(state = initialUIState, action) {
  switch(action.type){
    case "ERROR_POPUP":
        return { ...state, errorMessage: action.message }
    case "START_LOADING":
    	return { ...state, loading: action.loading}
    case "FINISH_LOADING":
    	return { ...state, loading: action.loading}
    default:
    	return state
    }
}

export default uiReducer