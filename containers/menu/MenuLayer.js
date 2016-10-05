import React, { Component } from 'react'
import { Link } from "react-router"
import Search from "../components/Search"
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import PlacesKitchen from 'material-ui/svg-icons/places/kitchen';
import SocialLocationCity from 'material-ui/svg-icons/social/location-city';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionFace from 'material-ui/svg-icons/action/face';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';


class MenuLayer extends Component {

  render() {
    return (
    	<div className="menu-layer">
            <Link to="/" className="logo" activeClassName="current-menu-item">
                <IconButton>
                    <ActionHome className="menu-icon" color={"#fff"}/>
                </IconButton>
            </Link>
            <Search />
    		<ul className="menu-list">
                <li className="menu-item">
                    <Link to="/subscriptions" activeClassName="current-menu-item">
                        <IconButton>
                            <PlacesKitchen className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/nearby" activeClassName="current-menu-item">
                        <IconButton>
                            <SocialLocationCity className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/map" activeClassName="current-menu-item">
                        <IconButton>
                            <CommunicationLocationOn className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/mypage" activeClassName="current-menu-item">
                        <IconButton>
                            <ActionFace className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/account" activeClassName="current-menu-item">
                        <IconButton>
                            <NavigationMenu className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    		</ul>
    	</div>
    )
  }
}

export default MenuLayer