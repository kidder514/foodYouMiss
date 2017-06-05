import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import SlidingPage from "./components/common/SlidingPage"
import Front from "./containers/static/Front"
import Nearby from "./containers/Nearby"
import Signin from "./containers/user/Signin"
import Signup from "./containers/user/Signup"
import Signout from "./containers/user/Signout"
import Subscription from "./containers/Subscription"
import Map from "./containers/Map"
import MyDish from "./containers/MyDish"
import Chat from "./containers/Chat"
import Dashboard from "./containers/dashboard/Dashboard"
import Overview from "./containers/dashboard/Overview"
import OrderHistory from "./containers/dashboard/OrderHistory"
import Notification from "./containers/dashboard/Notification"
import Setting from "./containers/dashboard/Setting"
import Help from "./containers/dashboard/Help"
import Author from "./containers/Author"
import SingleDish from "./containers/SingleDish"

export default (
	<Route component={OutterWrapper}>
		<Route path="/" component={Wrapper}>
	  		<IndexRoute component={Front} />
	  		<Route path="nearby" component={Nearby} />
	  		<Route path="signin" component={Signin} />
	  		<Route path="signup" component={Signup} />
		  	<Route path="signout" component={Signout} />
		  	<Route path="map" component={Map} />
	  		<Route path="subscriptions" component={Subscription} />
		  	<Route path="mydish" component={MyDish} />
		  	<Route path="chat" component={Chat} />
		  	<Route path="dish/:dishid" component={SingleDish} />
		  	<Route path="dashboard" component={Dashboard} >
		  		<IndexRoute component={Overview}/>
		  		<Route path="order-history" component={OrderHistory} />
		  		<Route path="notification" component={Notification} />
		  		<Route path="settings" component={Setting} />
		  		<Route path="help" component={Help} />
		  	</Route>
		</Route>
		<Route component={SlidingPage}>
		  	<Route path="author" component={Author} />
		</Route>
	</Route>
)
