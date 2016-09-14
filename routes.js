import React from "react"
import OutterWrapper from "./containers/OutterWrapper"
import MainWrapper from "./containers/MainWrapper"
import MenuLayer from "./containers/MenuLayer"
import ContentLayer from "./containers/ContentLayer"
import Home from "./containers/Home.js"
import Map from "./containers/Map.js"
import Subscriptions from "./containers/Subscriptions.js"
import MyPage from "./containers/MyPage.js"
import Account from "./containers/Account.js"
import SlidingPage from "./containers/SlidingPage.js"

import { Route } from "react-router"

export default (
	<Route component={OutterWrapper}>
		<Route component={MainWrapper}>	
		  	<Route compnent={MenuLayer}>
		  	</Route>
		  	<Route component={ContentLayer}>
		  		<Route path="/" component={Home}></Route>
			  	<Route path="/map" component={Map}></Route>
			  	<Route path="/subscriptions" component={Subscriptions}></Route>
			  	<Route path="mypage" component={MyPage}></Route>
			  	<Route path="Account" component={Account}></Route>
		  	</Route>
		</Route>
	  		<Route component={SlidingPage}>
		</Route>

	</Route>


)
