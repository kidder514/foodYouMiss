
var initialUserStatus = {
	userId: undefined,
	avatar: "",
	userName: undefined,
    isLoggedIn: false,
    token: "",
    hasLocation: false,
    currentLocation: "",
    currentPage:""
}

//initialise user data from localstorage 
if (typeof(Storage) !== "undefined") {
	if(localStorage.user !== undefined){
		initialUserStatus = localStorage.user;
	}
}

function userStatus(state = initialUserStatus, action) {
  	switch (action.type){
	    case "LOGIN":
	    	//store user data into localstorage if user choose to remember login
			if (typeof(Storage) !== "undefined" && action.rememberLogin) {

				if (localStorage.user !== undefined){
					localStorage.removeItem("user");
				}

				var user = {
					userId: action.userId,
					userName: action.userName,
				    token: action.token,
				    currentLocation: action.location,
				    avatar:action.avatar
				};
				localStorage.setItem("user", user);
			}

	    	return { ...state, 
				userId: action.userId,	
	    		userName: action.userName,
	    		isLoggedIn: true,
			    avatar:action.avatar,
	    		token: action.token,
	    		hasLocation: true,
	    		currentLocation:action.location 
	    	};
	    case "LOGOUT":
			if (typeof(Storage) !== "undefined") {
				if(localStorage.user !== undefined){
					localStorage.removeItem("user");
				}
			}
	        return initialUserStatus;
	    case "LOCATE":
	    	return { ...state, hasLocation: true, currentLocation: action.location};
	    case "UNLOCATE":
	        return { ...state, hasLocation: false, currentLocation: ""};
	    default:
	    	return state
    }
}

export default userStatus