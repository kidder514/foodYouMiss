import React from "react"
import { Route } from "react-router"
import OutterWrapper from "./containers/OutterWrapper"
import Home from "./containers/Home.js"
import Map from "./containers/Map.js"
import Subscriptions from "./containers/Subscriptions.js"
import MyPage from "./containers/MyPage.js"
import Account from "./containers/Account.js"

export default (
	<Route component={OutterWrapper}>
  		<Route path="/" component={Home} />
	  	<Route path="/map" component={Map} />
	  	<Route path="/subscriptions" component={Subscriptions} />
	  	<Route path="mypage" component={MyPage} />
	  	<Route path="Account" component={Account} />
	</Route>
)
