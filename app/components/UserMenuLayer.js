import React, {Component} from 'react';

class UserMenuLayer extends Component{

    render(){

    	var menuClass = this.props.ui.showUserMenu ? "user-menu-show" : "user-menu-hide";

	    return (
	    	<div className={"user-menu " + menuClass}>

	    	</div>
	    )
  	}
}

export default UserMenuLayer;