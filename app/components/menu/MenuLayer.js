import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import AvRecentActors from 'material-ui/svg-icons/av/recent-actors';
import ImageViewComfy from 'material-ui/svg-icons/image/view-comfy';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import CommunicationTextsms from 'material-ui/svg-icons/communication/textsms';
import ActionFace from 'material-ui/svg-icons/action/face';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

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
            <div className="desktop-menu">
                <Link to="/" className="logo">
                    <IconButton style={style.button} iconStyle={style.icon} >
                        <ActionHome className="menu-icon" color={"#fff"}/>
                    </IconButton>
                </Link>

                <ul className="menu-list">
                    <li className="menu-item menu-item-map">
                        <Link to="/map" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <CommunicationLocationOn className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item  menu-item-subscription">
                        <Link to="/subscriptions" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}> 
                                <AvRecentActors className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-chat">
                        <Link to="/chat" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <CommunicationTextsms className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/mypage" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <ActionFace className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-account">
                        <Link to="/account" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <NavigationMenu className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-menu clearfix">
                <ul className="menu-list">
                    <li className="menu-item menu-item-home">
                        <Link to="/" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <ActionHome className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-map">
                        <Link to="/map" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <CommunicationLocationOn className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item  menu-item-subscription">
                        <Link to="/subscriptions" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}> 
                                <AvRecentActors className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-chat">
                        <Link to="/chat" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <CommunicationTextsms className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/mypage" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <ActionFace className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/account" className="menu-item-button menu-item-account-mobile" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon}>
                                <NavigationMenu className="menu-icon" color={"#fff"}/>
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default MenuLayer;