import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';
import GoogleLogin from 'react-google-login';

class MenuLayer extends Component{

    render() {
    	var userProfile = this.props.userStatus.isLoggedIn ? 
    		<img src={this.props.userStatus.avatarUrl} className="img-circle menu-avatar" /> : <IconButton icon={"menu"}/>;
    	var isShown = !this.props.ui.showUserMenu;

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
                <Link to="/map" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"location_on"} text="map" />
                </Link>
                <Link to="/nearby" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"my_location"} text="nearby"/>
                </Link>
            </div>
        )
    }
}

export default MenuLayer;