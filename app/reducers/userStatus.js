
var initialUserStatus = {
	userName: undefined,
	password: undefined,
    isLoggedIn: false,
    token: "",
    hasLocation: false,
    currentLocation: "",
    currentPage:""
}

if (typeof(Storage) !== "undefined") {
	if(localStorage.user !== undefined){
		initialUserStatus = localStorage.user;
	}
}

function userStatus(state = initialUserStatus, action) {
  	switch(action.type){
	    case "LOGIN":
			if (typeof(Storage) !== "undefined") {

				if(localStorage.user !== undefined){
					localStorage.removeItem("user");
				}

				var user = {
					userName: action.userName,
					password: action.password,
				    token: action.token,
				    currentLocation: action.location
				};

				localStorage.setItem("user", user);
			}

	    	return { ...state, 
	    		userName: action.userName,
	    		password: action.password,
	    		isLoggedIn: true,
	    		token: action.token,
	    		hasLocation: true
	    	};
	    case "LOGOUT":
			if (typeof(Storage) !== "undefined") {
				if(localStorage.user !== undefined){
					localStorage.removeItem("user");
				}
			}
	        return { ...state, userName: undefined, password: undefined, isLoggedIn: false, token: ""};
	    case "LOCATE":
	    	return { ...state, hasLocation: true, currentLocation: action.location};
	    case "UNLOCATE":
	        return { ...state, hasLocation: false, currentLocation: ""};
	    default:
	    	return state
    }
}

export default userStatus