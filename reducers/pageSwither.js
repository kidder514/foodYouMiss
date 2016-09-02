import "page" from "../actions/pages"
import "setPage" from "../actions/setPage"

const pageSwitcher = (state="HOME", setPage(page)) => {
	
	switch (setPage.type){
		case HOME:
			return Object.assign({}, state, {
				setPage.page
			})
		default
			return state;
	}
}

export default pageSwitcher
