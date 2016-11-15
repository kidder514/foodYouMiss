import React from "react"
import {Route} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import SlidingPage from "./components/common/SlidingPage"
import Home from "./containers/home/Home"
import Signin from "./components/user/Signin"
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
	  		<Route Path="/signin" component={Signin} />
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
