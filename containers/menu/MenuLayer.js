import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import PlacesKitchen from 'material-ui/svg-icons/places/kitchen';
import SocialLocationCity from 'material-ui/svg-icons/social/location-city';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionFace from 'material-ui/svg-icons/action/face';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Search from "./Search";

class MenuLayer extends Component{

    render() {
        let style = {
            icon : {
                height: 30,
                width: 30,
            },
            button : {
                height: 60,
                width: 60,
            }
        };

    return (
    	<div className="menu-layer">

            <Link to="/" className="logo">
                <IconButton style={style.button} iconStyle={style.icon} >
                    <ActionHome className="menu-icon" color={"#fff"}/>
                </IconButton>
            </Link>

    		<ul className="menu-list">
                <li className="menu-item">
                    <Link to="/subscriptions" className="menu-item-button" activeClassName="current-menu-item">
                        <IconButton style={style.button} iconStyle={style.icon}> 
                            <PlacesKitchen className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/nearby" className="menu-item-button" activeClassName="current-menu-item">
                        <IconButton style={style.button} iconStyle={style.icon}>
                            <SocialLocationCity className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/map" className="menu-item-button" activeClassName="current-menu-item">
                        <IconButton style={style.button} iconStyle={style.icon}>
                            <CommunicationLocationOn className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/mypage" className="menu-item-button" activeClassName="current-menu-item">
                        <IconButton style={style.button} iconStyle={style.icon}>
                            <ActionFace className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    			<li className="menu-item">
                    <Link to="/account" className="menu-item-button" activeClassName="current-menu-item">
                        <IconButton style={style.button} iconStyle={style.icon}>
                            <NavigationMenu className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </Link>
                </li>
    		</ul>
            
            <Search />
    	</div>
        )
    }
}

export default MenuLayer;