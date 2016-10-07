import React from "react"
import { Route } from "react-router"
import OutterWrapper from "./containers/OutterWrapper"
import Wrapper from "./containers/Wrapper"
import Home from "./containers/home/Home.js"
import Subscriptions from "./containers/subscriptions/Subscriptions"
import Map from "./containers/map/Map.js"
import Nearby from "./containers/nearby/Nearby.js"
import MyPage from "./containers/mypage/MyPage.js"
import Account from "./containers/account/Account.js"
import SlidingPage from "./containers/components/SlidingPage"
import Author from "./containers/author/Author"
import Signup from "./containers/signup/Signup"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
	  		<Route path="/" component={Home} />
	  		<Route path="/Signup" component={Signup} />
	  		<Route path="/subscriptions" component={Subscriptions} />
		  	<Route path="/nearby" component={Nearby} />
		  	<Route path="/map" component={Map} />
		  	<Route path="/mypage" component={MyPage} />
		  	<Route path="/account" component={Account} />
		</Route>
		<Route component={SlidingPage}>
		  	<Route path="/author" component={Author} />
		</Route>
	</Route>
)
