
const initialUserStatus = {
    isLoggedIn: false,
    hasLocation:false,
    currentLocation: "",
}

function userStatus(state = initialUserStatus, action) {
  switch(action.type){
    case "LOGIN":
    	return ;
    case "LOCATE":
    	return ;
    default:
    	return state
    }
}

export default userStatus