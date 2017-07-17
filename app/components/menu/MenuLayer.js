import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';
import GoogleLogin from 'react-google-login';

class MenuLayer extends Component{

    render() {
    	var userProfile = this.props.userState.isLoggedIn ? 
    		<img src={this.props.userState.avatarUrl} className="img-circle menu-avatar" /> : <IconButton icon={"menu"}/>;
    	var isShown = !this.props.ui.showUserMenu;

		if (this.props.userState.isLoggedIn){
			return (
	            <div className="menu clearfix">
	                <Link to="/" className="logo menu-item-button col-xs-2 col-sm-1 pull-left" activeClassName="current-menu-item">
	            		<img src="https://www.gympal.ie/images/logo-placeholder-generic-200x200.png" className="logo" />
	                </Link>
			    	<a className={"menu-item-button col-xs-2 col-sm-1 pull-right " + (this.props.ui.showUserMenu ? "current-menu-item" : "")}  
			    		onClick={() => this.props.toggleUserMenu(isShown)}>
			            {userProfile}
					</a>
	                <Link to="/mydish" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    <IconButton icon={"face"} text="my page"/>
	                </Link>
	                <Link to="/chat" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    <IconButton icon={"textsms"} text="inbox"/>
	                </Link>
	                <Link to="/homefood" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    <IconButton icon={"my_location"} text="homefood"/>
	                </Link>
	            </div>
        	)
		}else{
			return (
	            <div className="menu clearfix">
	                <Link to="/" className="logo menu-item-button col-xs-2 col-sm-1 pull-left" activeClassName="current-menu-item">
	            		<img src="https://www.gympal.ie/images/logo-placeholder-generic-200x200.png" className="logo" />
	                </Link>
	                <Link to="/signup" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"Log In"}
	                </Link>
	                <Link to="/signup" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"Sign Up"}
	                </Link>
	                <Link to="/help" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"help"}
	                </Link>
	                <Link to="/becomeahomecook" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"Become a Home Cook"}
	                </Link>
	                <Link to="/homefood" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"Home Food"}
	                </Link>
	            </div>
        	)
		}
    	
    }
}

export default MenuLayer;