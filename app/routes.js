import React from "react"
import { Route } from "react-router"
// import OutterWrapper from "./containers/OutterWrapper"
// import Wrapper from "./containers/Wrapper"
// import Home from "./containers/home/Home.js"
// import Subscriptions from "./containers/subscriptions/Subscriptions"
// import Map from "./containers/map/Map.js"
// import Nearby from "./containers/nearby/Nearby.js"
// import MyPage from "./containers/mypage/MyPage.js"
// import Account from "./containers/account/Account.js"
// import SlidingPage from "./containers/components/SlidingPage"
// import Author from "./containers/author/Author"
// import Signup from "./containers/home/Signup"
// import Signin from "./containers/home/Signin"
// import Chat from "./containers/chat/Chat"

export default (
	<Route component={}>
		<Route component={}>
	  		<Route path="/" component={} />
	  		<Route path="/Signup" component={} />
	  		<Route path="/Signin" component={} />
	  		<Route path="/subscriptions" component={} />
		  	<Route path="/nearby" component={} />
		  	<Route path="/map" component={} />
		  	<Route path="/mypage" component={} />
		  	<Route path="/account" component={} />
		  	<Route path="/chat" component={} />
		</Route>
		<Route component={}>
		  	<Route path="/author" component={} />
		</Route>
	</Route>
)
