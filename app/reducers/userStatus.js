
var initialUserStatus = {
	userId: undefined,
	avatar: "https://t3.ftcdn.net/jpg/01/06/07/16/240_F_106071621_UwCztl7yyMbVNSMijfuYyZrzbtmoxJPH.jpg",
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
					userId: action.userId,
					userName: action.userName,
					password: action.password,
				    token: action.token,
				    currentLocation: action.location
				};

				localStorage.setItem("user", user);
			}

	    	return { ...state, 
				userId: action.userId,	
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