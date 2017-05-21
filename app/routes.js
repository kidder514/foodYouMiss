import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import SlidingPage from "./components/common/SlidingPage"
import Home from "./containers/home/Home"
import Signin from "./containers/user/Signin"
import Signup from "./containers/user/Signup"
import SignupEntrance from "./components/user/SignupEntrance"
import Signout from "./containers/user/Signout"
import Subscription from "./containers/Subscription"
import Map from "./containers/Map"
import MyDish from "./containers/MyDish"
import Chat from "./containers/Chat"
import Dashboard from "./containers/Dashboard"
import Author from "./containers/Author"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
			<IndexRoute component={Home} />
	  		<Route path="/" component={Home} />
	  		<Route path="/signin" component={Signin} />
	  		<Route path="/signup-entrance" component={SignupEntrance} />
	  		<Route path="/signup" component={Signup} />
		  	<Route path="/signout" component={Signout} />
		  	<Route path="/map" component={Map} />
	  		<Route path="/subscriptions" component={Subscription} />
		  	<Route path="/mydish" component={MyDish} />
		  	<Route path="/chat" component={Chat} />
		  	<Route path="/dashboard" component={Dashboard} >

		  	</Route>
		</Route>
		<Route component={SlidingPage}>
		  	<Route path="/author" component={Author} />
		</Route>
	</Route>
)
