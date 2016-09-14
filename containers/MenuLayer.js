import React, { Component } from 'react'
import { Link } from "react-router"
import Search from "./Search.js"

class MenuLayer extends Component {

  render() {
    return (
    	<div className="menu-layer">
    		<Search />
    		<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/map">Map</Link></li>
    			<li><Link to="/subscriptions">subscriptions</Link></li>
    			<li><Link to="/mypage">MyPage</Link></li>
    			<li><Link to="/">Account</Link></li>
    		</ul>
    	</div>
    )
  }
}

export default MenuLayer