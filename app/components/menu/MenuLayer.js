import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';

class MenuLayer extends Component{

    render() {
    	var userAction = this.props.userStatus.isLoggedIn ? 
    		<img src={userStatus.avatar} className="img-rounded" /> : <IconButton icon={"menu"}/>;
    	var isShown = !this.props.ui.showUserMenu;

    	return (
            <div className="menu clearfix">
                <Link to="/" className="logo menu-item-button col-xs-2 col-sm-1 pull-left" activeClassName="current-menu-item">
                    <IconButton icon={"home"} />
                </Link>

		    	<a className={"menu-item-button col-xs-2 col-sm-1 pull-right " + (this.props.ui.showUserMenu ? "current-menu-item" : "")}  
		    		onClick={() => this.props.toggleUserMenu(isShown)}>
		            {userAction}
				</a>
                <Link to="/mydish" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"face"} />
                </Link>
                <Link to="/chat" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"textsms"} />
                </Link>
                <Link to="/subscriptions" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"recent_actors"} />
                </Link>
                <Link to="/map" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
                    <IconButton icon={"location_on"} />
                </Link>
            </div>
        )
    }
}

export default MenuLayer;