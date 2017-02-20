import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';

class MenuLayer extends Component{

    render() {

    return (
        <div className="">
            <div className="menu clearfix">
                <Link to="/" className="logo menu-item-button col-xs-2 col-sm-1 pull-left">
                    <IconButton icon={"home"} />
                </Link>

                <Link to="/account" className="menu-item-button col-xs-2 col-sm-1 pull-right " activeClassName="current-menu-item">
                    <IconButton  icon={"menu"}/>
                </Link>
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
        </div>
        )
    }
}

export default MenuLayer;