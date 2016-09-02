const pageSwitcher = (state="HOME",action) => {
	
	switch (action.type){
		case "HOME":
			return action.page
		default:
			return state
	}
}

export default pageSwitcher
