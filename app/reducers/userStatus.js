
const initialUserStatus = {
    isLoggedIn: false,
    token: "",
    hasLocation: false,
    currentLocation: "",
}

function userStatus(state = initialUserStatus, action) {
  switch(action.type){
    case "LOGIN":
    	return { ...state, isLoggedIn: true, token: action.token};
    case "LOGOUT":
        return { ...state, isLoggedIn: false, token: ""};
    case "LOCATE":
    	return { ...state, hasLocation: true, currentLocation: action.location};
    case "UNLOCATE":
        return { ...state, hasLocation: false, currentLocation: ""};
    default:
    	return state
    }
}

export default userStatus