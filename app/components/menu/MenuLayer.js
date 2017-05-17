import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';

class MenuLayer extends Component{

    render() {

    	var userAction;

    	if (this.props.userStatus.isLoggedIn){
    		userAction = <img src={userStatus.avatar} className="img-rounded" />;
    	}else{
    		userAction = <IconButton icon={"menu"}/>;
    	}

    	return (
            <div className="menu clearfix">
                <Link to="/" className="logo menu-item-button col-xs-2 col-sm-1 pull-left">
                    <IconButton icon={"home"} />
                </Link>

		    	<a className="menu-item-button col-xs-2 col-sm-1 pull-right ">
		            {userAction}
				</a>
                <Link to="/mypage" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
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