import React, { Component } from 'react'
import { Link } from "react-router"
import Search from "../components/Search"

class MenuLayer extends Component {

  render() {
    return (
    	<div className="menu-layer">
            <Search />
    		<ul>
    			<li><Link to="/" activeClassName="current-menu-item">Home</Link></li>
    			<li><Link to="/map" activeClassName="current-menu-item">Map</Link></li>
    			<li><Link to="/subscriptions" activeClassName="current-menu-item">subscriptions</Link></li>
    			<li><Link to="/mypage" activeClassName="current-menu-item">MyPage</Link></li>
    			<li><Link to="/account" activeClassName="current-menu-item">Account</Link></li>
    		</ul>
    	</div>
    )
  }
}

export default MenuLayer