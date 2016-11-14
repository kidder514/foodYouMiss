import React from "react"
import {Route} from "react-router"
import OutterWrapper from "./components/Wrapper"
import SlidingPage from "./components/OutterWrapper"
import Wrapper from "./components/SlidingPage"
import Home from "./containers/Home"
import Nearby from "./containers/Nearby"
import Subscription from "./containers/Subscription"
import Map from "./containers/Map"
import MyPage from "./containers/MyPage"
import Chat from "./containers/Chat"
import Account from "./containers/Account"
import Author from "./containers/Author"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
	  		<Route path="/" component={Home} />
		  	<Route path="/nearby" component={Nearby} />
		  	<Route path="/map" component={Map} />
	  		<Route path="/subscriptions" component={Subscription} />
		  	<Route path="/mypage" component={MyPage} />
		  	<Route path="/chat" component={Chat} />
		  	<Route path="/account" component={Account} />
		</Route>
		<Route component={SlidingPage}>
		  	<Route path="/author" component={Author} />
		</Route>
	</Route>
)
