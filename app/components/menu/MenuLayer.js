import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';

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
                    <IconButton style={style.button} iconStyle={style.icon} icon={"ActionHome"} />
                </Link>

                <ul className="menu-list">
                    <li className="menu-item menu-item-map">
                        <Link to="/map" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"CommunicationLocationOn"} />
                        </Link>
                    </li>
                    <li className="menu-item  menu-item-subscription">
                        <Link to="/subscriptions" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"AvRecentActors"} />
                        </Link>
                    </li>
                    <li className="menu-item menu-item-chat">
                        <Link to="/chat" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"CommunicationTextsms"} />
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/mypage" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"ActionFace"} />
                        </Link>
                    </li>
                    <li className="menu-item menu-item-account">
                        <Link to="/account" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"NavigationMenu"}/>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-menu clearfix">
                <ul className="menu-list">
                    <li className="menu-item menu-item-home">
                        <Link to="/" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"ActionHome"}/>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-map">
                        <Link to="/map" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"CommunicationLocationOn"}/>
                        </Link>
                    </li>
                    <li className="menu-item  menu-item-subscription">
                        <Link to="/subscriptions" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"AvRecentActors"}/> 
                        </Link>
                    </li>
                    <li className="menu-item menu-item-chat">
                        <Link to="/chat" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"CommunicationTextsms"}/>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/mypage" className="menu-item-button" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"ActionFace"}/>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-mypage">
                        <Link to="/account" className="menu-item-button menu-item-account-mobile" activeClassName="current-menu-item">
                            <IconButton style={style.button} iconStyle={style.icon} icon={"NavigationMenu"}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default MenuLayer;