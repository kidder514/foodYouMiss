import React, {Component} from 'react';
import {Link} from "react-router";

class UserMenuLayer extends Component{

    render(){

    	var menuClass = this.props.ui.showUserMenu ? "user-menu-show" : "user-menu-hide";

    	if (!this.props.userStatus.isLoggedIn)
    	{
    		return (
		    	<div className={"user-menu " + menuClass}>
		    		<ul className="list-unstyled">
		    			<li>
			                <Link to="/dashboard" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Dashboard
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/edit-dishes" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Edit Dishes
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/dashboard/post-new-dish" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Post a Dish
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/dashboard/order-history" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Order History
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/dashboard/notification" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Notifications
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/dashboard/settings" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Settings
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/dashboard/help" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Help
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/how-it-works" className="user-menu-item" activeClassName="current-menu-item"> 
			                	How it works
			                </Link>
		    			</li>
		    			<li>
			                <Link to="/signout" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Logout
			                </Link>
		    			</li>
		    		</ul>
		    	</div>
    			);
    	}else{
    		return (
		    	<div className={"user-menu " + menuClass}>
		    		<ul className="list-unstyled">
		    			<li>
			                <Link to="/signin" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Sign in
			                </Link>
		                </li>
		                <li>
			                <Link to="/signup-entrance" className="user-menu-item" activeClassName="current-menu-item"> 
			                	Sign up
			                </Link>
		                </li>
		                <li>
			                <Link to="/how-it-works" className="user-menu-item" activeClassName="current-menu-item"> 
			                	How it works
			                </Link>
		    			</li>
					</ul>
		    	</div>
    			);
    	}
  	}
}

export default UserMenuLayer;