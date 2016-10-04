import React, { Component } from 'react'
import { Link } from "react-router"
import Search from "../components/Search"

class MenuLayer extends Component {

  render() {
    return (
    	<div className="menu-layer">
            <Link to="/" className="logo" activeClassName="current-menu-item">Logo</Link>
            <Search />
    		<ul className="menu-list">
                <li><Link to="/subscriptions" className="menu-item" activeClassName="current-menu-item">subscriptions</Link></li>
    			<li><Link to="/map" className="menu-item" activeClassName="current-menu-item">Map</Link></li>
    			<li><Link to="/mypage" className="menu-item" activeClassName="current-menu-item">MyPage</Link></li>
    			<li><Link to="/account" className="menu-item" activeClassName="current-menu-item">Account</Link></li>
    		</ul>
    	</div>
    )
  }
}

export default MenuLayer