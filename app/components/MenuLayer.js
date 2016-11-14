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
            },
            mobileIcon : {
                height: 20,
                width: 20,
            },
            mobileButton : {
                height: 45,
                width: 45,
            }
        };

    return (
    	<div className="menu-layer">

    	</div>
        )
    }
}

export default MenuLayer;